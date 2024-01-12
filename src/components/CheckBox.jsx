import { useState } from "react"

export default function CheckBox ({
  id,name,val
}) {

  let [chk,setChk] = useState(false)

  const defaultStyle = {
    display : 'inline-block',
    width : 'fit-content',
    color : '#9EAEB6',
    textAlign : 'center',
    fontSize : '14px',
    fontWeight : '500',
    lineHeight : '142%',
    letterSpacing : '-0.5px',
    padding : '7px 16px',
    borderRadius : '34px',
    border : '1px solid #DEE8EE'
  }

  const chkStyle = {
    display : 'inline-block',
    width : 'fit-content',
    color : '#222',
    textAlign : 'center',
    fontSize : '14px',
    fontWeight : '500',
    lineHeight : '142%',
    letterSpacing : '-0.5px',
    padding : '7px 16px',
    borderRadius : '34px',
    border : '1px solid #222'
  }

  return (
    <>
      <div className="ui-input-set">
        <input type="checkbox" value={val} id={id} name={name} onChange={(e)=>{
          e.target.checked == true ? setChk(true) : setChk(false);
        }}/>
        <label htmlFor={id} style={chk == true ? chkStyle : defaultStyle}>{val}</label>
      </div>
    </>
  )
}