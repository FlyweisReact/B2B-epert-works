import React,{useState,useEffect, MutableRefObject} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import MaterialTable,{Column, MTableAction} from 'material-table'
import {withRouter} from 'react-router-dom'
import {RestClient} from "../../../../util/RestClient"
import { RootState } from "../../../../redux/reducers/index";
import "../../../UserEntitlement/Users/UserEntitlement.css"
import { ProdConfiguration } from "../../../../util/restConstants";
import * as actions from "../../../../redux/actions"
import "./GroupTable.css"
interface Data1{
    name:string,
    email:string,
    birthYear?:number,
    birthCity?:number


}


  const data1:Data1[]=[
    { name: 'Mehmet', email: 'Baran'
   },
    { name: 'Zerya Betül', email: 'Baran' },
  ]
function GroupTable(props:any) {
  const addActionRef = React.useRef<HTMLDivElement>(null);

  const cols:Column<Data1>[]=[
    { title: 'Name', field: 'name' },
    { title: 'Email', field: 'email', initialEditValue: 'initial edit value' },
    {
      title: "Custom Add",
      field: "internal_action",
      editable: 'never',
      render: (rowData) =>
        rowData && (
          <button
            className="secondary"
            onClick={(e:any) =>{
              console.log(rowData)

              dispatch(actions.storeSelectedGroup(rowData))
              props.history.push("/super-admin/add-admin")

              //addActionRef.current?.click()
            }}
          >
            Add Admin
          </button>
        )
    },
    {
      title: "Custom Add",
      field: "internal_action",
      editable: 'never',
      render: (rowData) =>
        rowData && (
          <button
            className="secondary"
            onClick={(e:any) =>{
              console.log(rowData)

              dispatch(actions.storeSelectedGroup(rowData))
              props.history.push("/super-admin/add-package")

              //addActionRef.current?.click()
            }}
          >
            Add Package
          </button>
        )
    }

  ]
    const [columns, setColumns] = useState(cols);
    const [loading, setloading] = useState(false)
      const [data, setData] = useState(data1);
  let authState: any = useSelector((state: RootState) => state.authToken);
  let GroupData: any = useSelector((state: RootState) => state.superAdminreducer.GroupData);
  let selectedpartner: any = useSelector((state: RootState) => state.superAdminreducer.selectedParter);


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
        dispatch(actions.fetchGroups(authState,selectedpartner.partnerId))

      },[])

      const updateData =async(newData:any, oldData:any)=>{
        const payload={
          name:newData.name
        }

        try{
          setloading(true)
        let response: any = await restClient.putCall(
          ProdConfiguration.PROD_COURSE_URL + `/group/${oldData.userId}`,
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
            <MaterialTable title="Team---s" data={GroupData||[]} columns={columns}
            isLoading={loading}
            options={
                {
                    search:false
                }
            }
            // editable={{
            //    onRowUpdate: async(newData:any, oldData:any) =>
            //    new Promise(async(resolve, reject) => {

            //           //  const dataUpdate = [...data];
            //           //  const index = oldData.tableData.id;
            //           //  dataUpdate[index] = newData;
            //           //  setData([...dataUpdate]);

            //           let response= await updateData(newData, oldData)
            //           // if(response)
            //              resolve('');
            //              //reject('')


            //    }),
            // }}

            />

        </div>
    )
}

export default  withRouter(GroupTable)
