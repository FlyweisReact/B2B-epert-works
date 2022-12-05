import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import MaterialTable,{Column} from 'material-table'
import {RestClient} from "../../../../util/RestClient"
import { RootState } from "../../../../redux/reducers/index";
import "../UserEntitlement.css"
import { ProdConfiguration } from "../../../../util/restConstants";
import * as actions from "../../../../redux/actions"
interface Data1{
    name:string,
    email:string,
    birthYear?:number,
    birthCity?:number


}
const cols:Column<Data1>[]=[
    { title: 'Name', field: 'name' },
    { title: 'Email', field: 'email', initialEditValue: 'initial edit value' },
    // { title: 'Password', field: 'birthYear', type: 'numeric' },
    // {
    //   title: 'Birth Place',
    //   field: 'birthCity',
    //   lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
    // },
  ]
//   const data1:Data1[]=[
//     { name: 'Mehmet', surname: 'Baran', birthYear: 1987,
//     birthCity: 63 },
//     { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
//   ]


  const data1:Data1[]=[
    { name: 'Mehmet', email: 'Baran'
   },
    { name: 'Zerya Betül', email: 'Baran' },
  ]
export default function UserTable() {
    const [columns, setColumns] = useState(cols);
    const [loading, setloading] = useState(false)

      const [data, setData] = useState(data1);
  let authState: any = useSelector((state: RootState) => state.authToken);
  let userData: any = useSelector((state: RootState) => state.userEntitlementReducer);
  let selectedTeam: any = useSelector((state: RootState) => state.superAdminreducer.selectedTeam);

      let restClient: RestClient = new RestClient();
      const dispatch=useDispatch()
      const apicall=async()=>{

        let response: any = await restClient.getCall(
            ProdConfiguration.PROD_COURSE_URL + "/user",
            authState.access_token

          );
          if(response){
            setData(response.result)
          }
      }
      useEffect(()=>{

        //apicall()
        dispatch(actions.fetchUsersInAdmin(authState,selectedTeam.teamId))

      },[])
const DeleteRowData=async(rowData:any)=>{
  const payload={
    userId:rowData.userId
  }
  let response: any = await restClient.postCall(
    ProdConfiguration.PROD_COURSE_URL + `/user/delete`,
    JSON.stringify(payload),
    authState.access_token,

  );
  if(response.message==="success")
  {
    dispatch(actions.fetchUsersInAdmin(authState,selectedTeam.teamId))
    alert('User has been deleted')}
  else{
    alert('something went wrong')
  }
}
      const updateData =async(newData:any, oldData:any)=>{
        const payload={
          name:newData.name
        }

        try{
          setloading(true)
        let response: any = await restClient.putCall(
          ProdConfiguration.PROD_COURSE_URL + `/user/${oldData.userId}`,
          JSON.stringify(payload),
          authState.access_token

        );

       return response}

       catch(e){
        setloading(false)
       }
      }
    return (
        <div >
            <MaterialTable title="Users" data={userData.userData||[]} columns={columns}
            isLoading={loading}
            options={
                {
                    search:false
                }
            }
            editable={{
              //  onRowUpdate: async(newData:any, oldData:any) =>
              //  new Promise(async(resolve, reject) => {

              //         //  const dataUpdate = [...data];
              //         //  const index = oldData.tableData.id;
              //         //  dataUpdate[index] = newData;
              //         //  setData([...dataUpdate]);

              //         let response= await updateData(newData, oldData)
              //         // if(response)
              //            resolve('');
              //            //reject('')


              //  }),
               onRowDelete: async(oldData:any) =>
               new Promise(async(resolve, reject) => {

                      //  const dataUpdate = [...data];
                      //  const index = oldData.tableData.id;
                      //  dataUpdate[index] = newData;
                      //  setData([...dataUpdate]);

                      let response= await DeleteRowData( oldData)
                      // if(response)
                         resolve('');
                         //reject('')


               }),
            }}/>
        </div>
    )
}
