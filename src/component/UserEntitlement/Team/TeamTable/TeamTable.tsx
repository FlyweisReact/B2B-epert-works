import React, { useState, useEffect, MutableRefObject } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MaterialTable, { Column, MTableAction } from 'material-table'

import { RestClient } from "../../../../util/RestClient"
import { RootState } from "../../../../redux/reducers/index";
import "../../../UserEntitlement/Users/UserEntitlement.css"
import { ProdConfiguration } from "../../../../util/restConstants";
import * as actions from "../../../../redux/actions"
import "./TeamTable.css"
import { withRouter } from 'react-router-dom';
import CustomMultiSelect from "../../../shared/CustomMultiSelect/CustomMultiSelect"
interface Data1 {
  name: string,
  email: string,
  birthYear?: number,
  birthCity?: number


}


const data1: Data1[] = [
  {
    name: 'Mehmet', email: 'Baran'
  },
  { name: 'Zerya Betül', email: 'Baran' },
]

const style = {
  headerStyle: {
    width: 50,
    minwidth:50
  },
  cellStyle:
  {
    width: 50,
    minwidth:50


  }
}
function TeamTable(props: any) {
  const [selectedCourses, setselectedCourses] = useState([]);
  const cols: Column<Data1>[] = [
    { title: 'Team Name', field: 'name', headerStyle: style.headerStyle,cellStyle:style.cellStyle },

    // { title: 'Email', field: 'email', initialEditValue: 'initial edit value',        headerStyle:{...style.headerStyle,width:150},
    // cellStyle:{...style.cellStyle,width:150}, },


    {
      title: 'Courses', field: 'selectedCourses',
      // headerStyle:{...style.headerStyle,width:1000},
      // cellStyle:{...style.cellStyle,width:1000},
      headerStyle:{...style.headerStyle,width:240},cellStyle:{...style.cellStyle,width:240},


      render: (rowData: any) => {
        return rowData?.selectedCourses?.map((data: any) => data.name).join(',')
      },

      editComponent: ({ value, onChange, onRowDataChange, rowData }: any) => {

        return <CustomMultiSelect existingCourses={rowData.selectedCourses ||[]} setSelectedCourses={setselectedCourses} />
      }

    },
    {
      title: "Users",
      field: "internal_action",
      editable: 'never'
      , headerStyle: style.headerStyle,cellStyle:style.cellStyle,
      render: (rowData) =>
        rowData && (
          <button
            className="secondary"
            onClick={(e: any) => {
              console.log(rowData)

              dispatch(actions.storeSelectedTeam(rowData))
              props.history.push("/admin/add-user")
              //addActionRef.current?.click()
            }}
          >
            View/Add User
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
  const dispatch = useDispatch()
  const apicall = async () => {

    let response: any = await restClient.getCall(
      ProdConfiguration.PROD_COURSE_URL + "/user",
      authState.access_token

    );
    if (response) {
      setData(response.result)
    }
  }
  useEffect(() => {

    //apicall()

    dispatch(actions.fetchTeams(authState, authState.groupId))

  }, [])

  const updateData = async (newData: any, oldData: any) => {
    const payload = {
      teamId: newData.teamId,
      name: newData.name,
      selectedCourses: selectedCourses,
      email: newData.email
    }

    try {
      setloading(true)
      let response: any = await restClient.postCall(
        ProdConfiguration.PROD_COURSE_URL + `/team/update`,
        JSON.stringify(payload),
        authState.access_token

      );

      return response
    }

    catch (e) {
      setloading(false)
    }
  }
  const DeleteRowData = async (rowData: any) => {
    const payload = {
      teamId: rowData.teamId
    }
    let response: any = await restClient.postCall(
      ProdConfiguration.PROD_COURSE_URL + `/team/delete`,
      JSON.stringify(payload),
      authState.access_token,

    );
    if (response.message === "success") {
      dispatch(actions.fetchTeams(authState, authState.groupId))
      alert('Team has been deleted')
    }
    else {
      alert('something went wrong')
    }
  }
  return (
    <div className = "user-teams" >
      <MaterialTable title="Teams" data={TeamData || []} columns={columns}
        isLoading={loading}
        options={
          {
            search: false
          }
        }
        editable={{
          onRowUpdate: async (newData: any, oldData: any) =>
            new Promise(async (resolve, reject) => {

              //  const dataUpdate = [...data];
              //  const index = oldData.tableData.id;
              //  dataUpdate[index] = newData;
              //  setData([...dataUpdate]);

              let response = await updateData(newData, oldData)

              if (response.status == 200) {
                setloading(false);
                dispatch(actions.fetchTeams(authState, authState.groupId))


                resolve('');
              }
              else {
                reject('');
                setloading(false)
              }


            }),
          onRowDelete: async (oldData: any) =>
            new Promise(async (resolve, reject) => {

              //  const dataUpdate = [...data];
              //  const index = oldData.tableData.id;
              //  dataUpdate[index] = newData;
              //  setData([...dataUpdate]);

              let response = await DeleteRowData(oldData)
              // if(response)
              resolve('');
              //reject('')


            }),
        }}
      />

    </div>
  )
}

export default withRouter(TeamTable)
