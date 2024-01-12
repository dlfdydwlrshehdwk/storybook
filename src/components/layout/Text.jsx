import PropTypes from "prop-types"

function Text ({
  label = "",
  fontSize = '14px',
  fontWeight = 700,
  color = "#222",
  textAlign = "left",
  lineHeight,
  marginTop
}) {


  let align;
  if(textAlign === "left") align = "left"
  if(textAlign === "center") align = "center"
  if(textAlign === "right") align = "right"

  const style = {
    whiteSpace : 'pre-line',
    fontSize,
    fontWeight,
    color,
    textAlign : align,
    lineHeight,
    marginTop
  }
  return (
    <>
      <div style={style}>{label}</div>
    </>
  )
}

Text.propTypes = {
  label : PropTypes.string,
  fontSize : PropTypes.string,
  fontWeight : PropTypes.number,
  color : PropTypes.string,
  textAlign : PropTypes.oneOf(['left','center','right']),
  lineHeight : PropTypes.string,
  marginTop : PropTypes.string
}

export default Text 