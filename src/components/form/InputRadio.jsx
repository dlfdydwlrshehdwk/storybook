import { useEffect, useState } from "react"

export default function InputRadio ({
  // 받아야 할 프롭값
  // 데이터, 타입
  type,data
}) {

  let wrap
  let style
  let desc
  let tatooStyle
  let labelWrap
  let checkT
  let check

  check = {
    width : '100%',
    borderRadius : '58px',
    border : '1px solid #DEE8EE',
    backgroundColor : '#FFF',
    textAlign : 'center',
  }
  wrap = {
    display : 'flex',
    flexDirection : 'column',
    gap : '8px'
  }
  checkT = {
    width : '100%',
    borderRadius : '58px',
    border : '1px solid black',
    backgroundColor : '#FFF',
    textAlign : 'center',
  }
  style = {
    color : "#222",
    fontSize : '16px',
    lineHeight : '137%',
    fontWeight : '700',
    letterSpacing : '-0.5px',
    padding : '18px 16px',
    cursor : 'pointer',
    display : 'block'
  }
  labelWrap = {
    padding : '18px 16px',
    cursor : 'pointer',
    display : 'block'
  }
  tatooStyle = {
    color : "#222",
    fontSize : '16px',
    lineHeight : '137%',
    fontWeight : '700',
    letterSpacing : '-0.5px',
  }
  desc = {
    color : "#9EAB6",
    fontSize : '11px',
    lineHeight : '137%',
    fontWeight : '500',
    letterSpacing : '-0.5px',
    marginTop : '2px'
  }


  let [arr,setArr] = useState([])
  
  useEffect(()=>{
    let b = document.querySelectorAll('.ui-radio-set')
    let blankArr = []
    for(let i = 0;i < data.length; i++){
      blankArr.push(0)
    }
    setArr(blankArr)
    
    b.forEach((ele,idx)=>{
      ele.addEventListener('change',(e)=>{
        let copy = [...arr]
        copy[idx] = true
        setArr(copy)
      })
    })
  },[])

  return (
    
    type === 'size' ?
    <div style={wrap}>
      {
        data.map((x,i)=>{
          return <div key={i} style={arr[i] == true ? checkT : check} className="ui-radio-set">
                  <input name={x.name} id={i} style={{display : 'none'}} type="radio" />
                  <label htmlFor={i} style={style}>{x.val}</label>
                </div>  
        })
      }
    </div> 
    : type === 'tatoo' ?     
    <div style={wrap}>
      {
        data.map((x,i)=>{
          return <div key={i} style={arr[i] == true ? checkT : check} className="ui-radio-set">
                  <input name={x.name} id={i} style={{display : 'none'}} type="radio" />
                  <label htmlFor={i} style={labelWrap} >
                    <div style={tatooStyle}>{x.val}</div>
                    {
                      x.desc ? <div style={desc}>{x.desc}</div> : null
                    }
                    
                  </label>
                </div>  
        })
      }
    </div> 
    : null
    

  )
}

InputRadio.propTypes = {
  // prop1 : PropTypes.string // 프롭타입.타입
}

 