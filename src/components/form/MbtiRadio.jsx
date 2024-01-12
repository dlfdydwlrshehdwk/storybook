import { useEffect, useState } from "react"

export default function MbtiRadio ({
  // 받아야 할 프롭값
  // 각  mbti(i,e) , 내향인지외향인지 , 라벨배경색
  labelColor, mbti, txt,id,name
}) {

  const mbtiWrapStyle = {
    display : 'flex',
    gap : '36px',
    padding : '4px',
    borderRadius : '278px',
    backgroundColor : '#F1F3F4',
    boxShadow : '0px 2px 2px 0px rgba(0,0,0,0.08) inset',
    justifyContent : 'space-between',
    alignItems : 'center',
  }

  const labelStyle = {
    color : '#9EAEB6',
    fontSize : '24px',
    fontWeight : '700',
    lineHeight : '130%',
    letterSpacing : '-0.5px',
    cursor:'pointer',
    display : 'flex',
    width : '40px',
    height : '40px',
    alignItems : 'center',
    justifyContent : 'center',
  }

  const chkLabelStyle = {
    color : '#FFF',
    backgroundColor : labelColor,
    fontSize : '24px',
    fontWeight : '700',
    lineHeight : '130%',
    letterSpacing : '-0.5px',
    cursor:'pointer',
    display : 'flex',
    width : '40px',
    height : '40px',
    alignItems : 'center',
    justifyContent : 'center',
    borderRadius : '28px',
    boxShadow : '0px 2px 2px 0px rgba(0,0,0,0.2),-1px -1px 0px 0px rgba(0,0,0,0.1) inset, 1px 1px 0px 0px rgba(255,255,255,0.5) inset'
  }
  const titsetWrap = {
    display : 'flex',
    gap : '24px',
    justifyContent : 'center',
    alignItems : 'center',
    marginTop : '12px'
  }

  const centerLine = {
    width : '60px',
    height : '2px',
    background : 'rgba(34,34,34,0.2)'
  }

  const dotWrap = {
    display : 'flex',
    gap : '4px'
  }

  const dot = {
    width : '2px',
    height : '2px',
    background : '#CDD0E1',
    borderRadius : '8px'
  }

  const txtDefault = {
    color : '#9EAEB6',
    fontSize : '16px',
    fontWeight : '500',
    lineHeight : '137.5%',
    letterSpacing : '-0.5px',
  }

  const chkTxt = {
    color : '#505866',
    fontSize : '16px',
    fontWeight : '500',
    lineHeight : '137.5%',
    letterSpacing : '-0.5px',
  }


  let [arr,setArr] = useState([])
  
  useEffect(()=>{
    let item = document.querySelectorAll(`input[name="${name}"]`)
    let blankArr = []
    console.log(item)
    for(let i = 0;i < mbti.length; i++){
      blankArr.push(0)
    }
    setArr(blankArr)
    
    item.forEach((ele,idx)=>{
      ele.addEventListener('change',(e)=>{
        let copy = [...arr]
        copy[idx] = true
        setArr(copy)
      })
    })
  },[])

  return (
    <>
      <div className="ui-mbti">
        <div className="ui-mbti-wrap" style={mbtiWrapStyle}>
          <div className="input-set">
            <input style={{display : 'none'}} type="radio" id={mbti[0]} name={name} value={mbti[0]}/>
            <label htmlFor={mbti[0]} style={ arr[0] == true ? chkLabelStyle : labelStyle}>{mbti[0]}</label>
          </div>
          <div className="line" style={centerLine}></div>
          <div className="input-set">
            <input style={{display : 'none'}} type="radio" id={mbti[1]} name={name} value={mbti[1]}/>
            <label htmlFor={mbti[1]} style={arr[1] == true ? chkLabelStyle : labelStyle}>{mbti[1]}</label>
          </div>
        </div>
        <div className="tit-set" style={titsetWrap}>
          <div className="txt" style={arr[0] == true ? chkTxt : txtDefault}>{txt[0]}</div>
          <div className="dot" style={dotWrap}>
            <div style={dot}></div>
            <div style={dot}></div>
            <div style={dot}></div>
          </div>
          <div className="txt" style={arr[1] == true ? chkTxt : txtDefault}>{txt[1]}</div>
        </div>
      </div>
    </>
  )
}

MbtiRadio.propTypes = {
  // prop1 : PropTypes.string // 프롭타입.타입

}