export default function Temp ({
  // 받아올 prop값들 객체형식으로 적기, 이곳에 값을 지정하면 스토리북에서 default값으로 지정이된다.
  // ex ) width = "100%" 하면 기본값은 100%로 설정 프롭값이 따로 들어오기전까진 100%로 사용됨. 
  // 프롭값을 받아 style객체에 넣고 return에서 스타일값을 인라인으로 넣어주면 적용됨
}) {

  const style = {
    // 스타일 컴포넌트처럼 받아온 프롭들을 값 셋팅을 해준다.
    // width,
    // fontSize
  }

  return (
    // 예시코드
    // <button onClick={onClick} style={style} className={cls}>{label} </button>
    <></>
  )
}

Temp.propTypes = {
  // prop1 : PropTypes.string // 프롭타입.타입
}