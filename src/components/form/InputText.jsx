import '../../assets/css/style.scss'

export default function InputText ({
  // 받아올 prop값들 객체형식으로 적기, 이곳에 값을 지정하면 스토리북에서 default값으로 지정이된다.
  width = "100%",
  backgroundColor = "#FFF",
  placeholder,
  unit,
  tit,
  color,
  border,
  padding,
  fontSize
}) {

  let style;
  if(tit) {
    style = {
      width,
      padding,
      border,
      backgroundColor,
      display : 'flex',
      alignItems : 'center',
      borderRadius : '8px',
      display : 'flex',
      gap : '16px',
      justifyContent : 'space-between',
      marginTop : '8px'
    }
  } else {
    style = {
      width,
      padding,
      border,
      backgroundColor,
      display : 'flex',
      alignItems : 'center',
      borderRadius : '8px',
      display : 'flex',
      gap : '16px',
      justifyContent : 'space-between'
    }
  }



  const style2 = {
    border : 'none',
    width : '100%'
  }
  return (
    <>
      <div className="tit">{tit}</div>
      <div style={style} className="ui-input-set">
        <input style={style2} type="text" placeholder={placeholder} /><span>{unit}</span> 
      </div>
    </>
  )
}

InputText.propTypes = {
  // prop1 : PropTypes.string // 프롭타입.타입
}