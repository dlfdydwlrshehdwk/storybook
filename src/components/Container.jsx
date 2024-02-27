import { useEffect, useState } from "react";
import { Button , ConfigProvider, Flex } from 'antd'
import CheckBox from "./CheckBox";
import BlackGray from "./txt/BlackGray";

export default function Container ({}) {

  let [res,setRes] = useState([])

  useEffect(()=>{
    
  },[res])

  return (
    <div className="ui-container">
      <BlackGray type={'normal'} idx={0}/>

    </div>
  );
}