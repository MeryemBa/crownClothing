import React from 'react'
import {Select ,Option} from "./size-selector.styles"

function Size({defaultMessage,options,selected="", handelChange,otherProps}) {
    console.log("select has rendre "+selected);
    
    const handelSelectChange=(e)=>{
        handelChange(e)
    }
    return (
        <>
             <Select  value={selected} onChange={handelSelectChange} {...otherProps} >
    {defaultMessage&&<Option value="" default>{defaultMessage}</Option>}
     {options.map((option,index)=><Option key={index}value={option}>{option}</Option>)}
             </Select>
        </>
    )
}

export default Size;
