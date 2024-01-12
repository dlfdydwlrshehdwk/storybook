import { useEffect, useState } from "react";
import { Button , ConfigProvider, Flex } from 'antd'
import CheckBox from "./CheckBox";

export default function Container ({}) {

  let [res,setRes] = useState([])

  useEffect(()=>{
    
  },[res])

  return (
    <div className="ui-container">
      <ConfigProvider
      theme={{
        token : {
          colorPrimary : 'red',
          colorBorder : 'purple',
          colorBgContainer: '#f6ffed',
          colorPrimaryBorderHover : 'white',
          bd : '3px'
        }
      }}>
        <Flex>
          <Button type="primary">a</Button>
          <Button>a</Button>
        </Flex>
      </ConfigProvider>
      <div style={{display : 'flex',gap : '8px'}}>

      <CheckBox val="목소리" id="1" name="point" />
      <CheckBox val="머리숱" id="2" name="point" />
      <CheckBox val="패션감각" id="3" name="point" />
      <CheckBox val="머릿결" id="4" name="point" />
      </div>
      <div>{res}</div>
      <button onClick={()=>{
        let qq = []
        let list = document.querySelectorAll('.ui-input-set')
        list.forEach((ele)=>{
          if(ele.querySelector('input').checked) {
            qq.push(ele.querySelector('input').value)
          }
        })
        setRes(qq)
      }}>눌러</button>
    </div>
  );
}