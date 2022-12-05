import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CheckboxesTags(props:any) {
    const {storeSelectedCourses,coursesData}=props
  
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={coursesData}
      disableCloseOnSelect
      getOptionLabel={(option:any) => option.name}
      onChange={storeSelectedCourses}
      renderOption={(props, option:any, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.name}
        </li>
      )}
      style={{ width: 500,maxHeight:300 }}
      renderInput={(params) => (
        <TextField {...params} label="Select Courses" placeholder="Select Courses" />
      )}
    />
  );
}
