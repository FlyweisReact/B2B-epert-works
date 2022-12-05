import React,{useState} from "react";
import Select from 'react-select';

 const MultiSelect=(props:any)=>{
   const {selectedCourses}=props


   const temp=selectedCourses?.map((data:any)=>{
     return {value:data.name,label:data.courseId}

   })
    const [selectedOption, setselectedOption] = useState( temp || [])
    const options:any = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];
      const  handleChange = (selectedOption:any) => {
        setselectedOption(selectedOption)
        console.log(`Option selected:`, selectedOption);
      };

      return (
        <Select
          value={selectedOption}
          onChange={handleChange}
          options={options}
          isMulti={true}
        />
      );
  
}

export default MultiSelect