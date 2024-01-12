import PropTypes from "prop-types"
import '../assets/css/reset.scss'
import '../assets/css/style.scss'

function Button({
  label = "", // 내용
  width = 'fit-content', // 가로 값
  height = "auto", // 세로 값
  backgroundColor = "#FFF", // 배경색
  color = "#1E1E1E", // 글씨 색
  fontWeight = 400, // 폰트 두께
  onClick, // 이벤트
  border = false, // 테두리
  borderRadius = "none", // 테두리 둥글기
  cls // 클래스네임
}) {

  let bd;
  border === true ? bd = "0 0 0 1px #1E1E1E" : border === false ? bd = "none" : bd = null;

  const style = {
    width,
    height,
    backgroundColor,
    boxShadow : bd,
    color,
    fontWeight,
    borderRadius,
  }
  return (
    <button onClick={onClick} style={style} className={cls}>
      {label}
    </button>
  )
}

Button.propTypes = {
  width : PropTypes.string,
  height : PropTypes.string,
  label : PropTypes.string,
  backgroundColor : PropTypes.string,
  color : PropTypes.string,
  fontWeight : PropTypes.oneOf([400,500,700]),
  onClick : PropTypes.func,
  border : PropTypes.bool,
  borderRadius : PropTypes.string,
}

export default Button