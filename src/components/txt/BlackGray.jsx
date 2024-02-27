export default function BlackGray ({
  type, idx
}) {

  let tit = 
  type === 'normal' ?
  [
    <><strong>닉네임</strong><span>을 입력해주세요</span></>,
    <><strong>활발한 매칭</strong><span>을 위해</span><br/><strong>입장 나이</strong><span>를</span><strong>제한</strong></>,
    <><span>잠시 이용을 <strong>제한</strong><span>하고 있어요</span></span></>,
  ] : 
  type === "small" ? 
  [
    <><span>각 나이대 매칭을 위해</span><br/><strong>만 25세 ~ 만 45세 </strong><span>입장 가능해요</span></>,
    <><span>곧 서비스 이용을 할 수 있게</span><br/><strong>빠르게 확인</strong><span>해 볼게요</span></>
  ] : null

  
  let style = {
    textAlign : 'center'
  }

  let fontStyle = {
    fontSize : type == "normal" ? '24px' : type == "small" ? "16px" : null,


  }
  

  return (
    <div style={style}>
      <span style={fontStyle}>{tit[idx]}</span>
    </div>
  )
}