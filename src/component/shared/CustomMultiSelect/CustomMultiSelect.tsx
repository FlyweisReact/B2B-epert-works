import React,{useEffect} from "react";
import {useSelector,} from 'react-redux'
import { RootState } from "../../../redux/reducers/index";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const names = [
  { name: "Automation Anywhere Expert", courseId: "8200" },
  { name: "Automation Anywhere Expert1", courseId: "8201" },
  { name: "Automation Anywhere Expert2", courseId: "8202" },
  { name: "Automation Anywhere Expert3", courseId: "8203" }
];

export default function MultipleSelectCheckmarks(props:any) {
    const {allCourses,existingCourses,setSelectedCourses}=props
    
  const [personName, setPersonName] = React.useState(existingCourses);
  let allCourses1: any = useSelector((state: RootState) => state.userEntitlementReducer.formatedCourses);

  const checkValueAvailable = (arr:any, obj:any) => {
    return arr.some((x:any) => x.courseId === obj.courseId);
  };
useEffect(() => {
    setSelectedCourses(existingCourses)
    
}, [])
  const handleChange = (event:any) => {
    const {
      target: { value }
    } = event;
    console.log("value", value);
    const mappedObj:any = {};
    value.forEach((v:any) => {
      
      if (!mappedObj[v.courseId]) mappedObj[v.courseId] = true;
      else mappedObj[v.courseId] = false;
    });
    const newVal = value.filter((v:any) => mappedObj[v.courseId]);
    console.log('newVal',newVal)
    setSelectedCourses(newVal)
    setPersonName(newVal);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Courses</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          style={{padding:'10px 12px',width:'500px',height:'auto'}}

          multiple
          value={personName||[]}
          onChange={handleChange}
          input={<OutlinedInput label="Courses" />}
          renderValue={(selected) => {
            const sel = selected.map((x:any) => x.name);
            return sel.join(", ");
          }}
          MenuProps={MenuProps}
        >
          {allCourses1?.map((name:any) => (
            <MenuItem key={name.courseId} value={name}>
              <Checkbox
                checked={personName.some((x:any) => x.courseId === name.courseId)}
              />
              <ListItemText primary={name.name} /><br/>
            </MenuItem>
           
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
