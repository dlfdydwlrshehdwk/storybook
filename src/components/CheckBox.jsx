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

// 갖다쓰기.
{/* <CheckBox val="목소리" id="1" name="point" /> */}



// 쓰던코드 일단 복붙
      {/* <div style={{display : 'flex',gap : '8px'}}>

      <CheckBox val="목소리" id="1" name="point" />
      <CheckBox val="머리숱" id="2" name="point" />
      <CheckBox val="패션감각" id="3" name="point" />
      <CheckBox val="머릿결" id="4" name="point" />
      </div> */}
      {/* <button onClick={()=>{
        let qq = []
        let list = document.querySelectorAll('.ui-input-set')
        list.forEach((ele)=>{
          if(ele.querySelector('input').checked) {
            qq.push(ele.querySelector('input').value)
          }
        })
        setRes(qq)
      }}>눌러</button> */}