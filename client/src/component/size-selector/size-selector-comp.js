import React from 'react'
import {Select ,Option} from "./size-selector.styles"

function Size({defaultMessage,options,selected, handelChange,otherProps}) {
    const handelSelectChange=(e)=>{
        handelChange(e)
    }
    return (
        <>
             <Select defaultValue={""} onChange={handelSelectChange} {...otherProps} >
    {defaultMessage&&<Option value="" default>{defaultMessage}</Option>}
    {options.map((option,index)=> option===selected? <Option selected key={index}value={option}>{option}</Option>:<Option key={index}value={option}>{option}</Option>)}
           

               

                </Select>
        </>
    )
}

export default Size;
