function Chip ({
  // 받아올 prop값들 객체형식으로 적기
  imgsrc, label, bgc, imgbgc, textColor
}) {
  const style = {
    // 스타일 컴포넌트처럼 받아온 프롭들을 값 셋팅을 해준다.
    backgroundColor : bgc,
    display : 'flex',
    padding : '4px 20px 4px 4px',
    gap : '8px',
    width : 'fit-content',
    borderRadius : '999px',
    alignItems : 'center',
    color : textColor,
    height : 'fit-content'
  }

  const style2 = {
    position : 'relative',
    backgroundColor : imgbgc,
    width : '32px',
    height : '32px',
    borderRadius : '24px'
  }

  const style3 = {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '100% 100%',
    backgroundSize: 'contain',
    width: '20px',
    height: '20px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }
  const style5 = {
    position : 'relative',
    backgroundColor : imgbgc,
    width : '40px',
    height : '40px',
    borderRadius : '24px'
  }

  // let img = src
  return (
    <>
    {
      label.length > 0 ?
      <div style={style}>
        <div style={style2} className="img-set">
          <img style={style3} src={imgsrc} alt="칩" />
        </div>
        <div className="txt">
          {label}
        </div>
      </div>
      : 
      <div style={style5} className="img-set">
        <img style={style3} src={imgsrc} alt="칩" />
      </div>
    }
    
    </>
  )
}

export default Chip