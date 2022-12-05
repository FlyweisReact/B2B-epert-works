import React,{useState,useEffect, MutableRefObject} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import MaterialTable,{Column, MTableAction} from 'material-table'

import {RestClient} from "../../../../util/RestClient"
import { RootState } from "../../../../redux/reducers/index";
import "../../../UserEntitlement/Users/UserEntitlement.css"
import { ProdConfiguration } from "../../../../util/restConstants";
import * as actions from "../../../../redux/actions"
import "./TeamTable.css"
import { withRouter } from 'react-router-dom';
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
 function TeamTable(props:any) {
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
              
              dispatch(actions.storeSelectedTeam(rowData))
              props.history.push("/super-admin/add-admin")
              //addActionRef.current?.click()
            }}
          >
            Add Admin
          </button>
        )
    }
  
  ]
    const [columns, setColumns] = useState(cols);
    const [loading, setloading] = useState(false)
      const [data, setData] = useState(data1);
  let authState: any = useSelector((state: RootState) => state.authToken);
  let userData: any = useSelector((state: RootState) => state.userEntitlementReducer);
  let selectedgroup: any = useSelector((state: RootState) => state.superAdminreducer.selectedgroup);
  let TeamData: any = useSelector((state: RootState) => state.superAdminreducer.TeamData);

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
  
        dispatch(actions.fetchTeams(authState,selectedgroup.groupId))

      },[])

      const updateData =async(newData:any, oldData:any)=>{
        const payload={
          name:newData.name
        }
        
        try{
          setloading(true)
        let response: any = await restClient.putCall(
          ProdConfiguration.PROD_COURSE_URL + `/partner/${oldData.userId}`,
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
            <MaterialTable title="Added Users" data={TeamData||[]} columns={columns}
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

export default withRouter(TeamTable)