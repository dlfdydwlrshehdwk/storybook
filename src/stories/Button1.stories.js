import Button from '../components/Button'

export default {
  component : Button, // 스토리북에 보이는 title
  title : "Button", // 사용될 컴포넌트 ( import된 그거 )
  argTypes : {}, // props로 사용될 타입 정의 (Controls에서 사용 가능)
}
let btns = []
const Template = args => <Button {...args} />
// 여러가지 컴포넌트를 한곳에 보이게끔 할 수도 있음
const Zip = () => 
<div style={{'display' : 'flex', 'flexWrap' : 'wrap', 'gap' : '8px'}}> 
<Button {...btns[0]} /> 
<Button {...btns[1]} /> 
<Button {...btns[6]} /> 
<Button {...btns[2]} /> 
<Button {...btns[3]} /> 
<div style={{'display' : 'flex', 'gap' : '8px', "width" : '100%'}}><Button {...btns[4]} /> <Button {...btns[5]} /></div> 
<div style={{'display' : 'flex', 'gap' : '8px', "width" : '100%'}}><Button {...btns[7]} /> <Button {...btns[8]} /></div> 
</div> 

export const ButtonZip = Zip.bind()
btns[0] = {
  backgroundColor : "#FFF",
  width : '150px',
  height : '54px',
  label : "Default",
  color : "#1E1E1E",
  fontWeight : 700,
  border : true,
  borderRadius : '999px'
}
btns[1] = {
  backgroundColor : "#1E1E1E",
  width : '150px',
  height : '54px',
  label : "BlackBtn",
  color : "#FFF",
  fontWeight : 700 ,
  border : false,
  borderRadius : '999px'
}
btns[2] = {
  backgroundColor : "#1E1E1E",
  width : '100%',
  label : "BlackLong",
  color : "#FFF",
  height : "56px",
  fontWeight : 700, 
  border : false,
  borderRadius : '8px'
}
btns[3] = {
  backgroundColor : "#5C5D62",
  label : "GrayLong",
  color : "#FFF",
  height : "56px",
  fontWeight : 700,
  border : false,
  width : '100%',
  borderRadius : '8px',
}
btns[4] = {
  backgroundColor : "#1E1E1E",
  width : '30%',
  label : "FlexBtnLeft",
  color : "#FFF",
  height : "56px",
  fontWeight : 700, 
  border : false,
  borderRadius : '8px'
}
btns[5] = {
  backgroundColor : "#5C5D62",
  label : "FlexBtnRight",
  color : "#FFF",
  height : "56px",
  fontWeight : 700,
  border : false,
  width : '100%',
  borderRadius : '8px',
}
btns[6] = {
  backgroundColor : "#C6C6C6",
  label : "GrayBtn",
  color : "#B0B0B0",
  height : "54px",
  fontWeight : 700,
  border : false,
  width : '150px',
  borderRadius : '999px',
}
btns[7] = {
  backgroundColor : "#F3F3F3",
  width : '100%',
  label : "FlexBtnLeft",
  color : "#9B9B9B",
  height : "56px",
  fontWeight : 700, 
  border : false,
  borderRadius : '999px',
  cls : 'close'
}
btns[8] = {
  backgroundColor : "#FFBABA",
  label : "FlexBtnRight",
  color : "#FFF",
  height : "56px",
  fontWeight : 700,
  border : false,
  width : '100%',
  borderRadius : '999px',
  cls : 'heart'
}

export const Default = Template.bind({})
Default.args = {
  backgroundColor : "#FFF",
  width : '150px',
  height : '54px',
  label : "버튼입니다.",
  color : "#1E1E1E",
  fontWeight : 700,
  border : true,
  borderRadius : '48px'
}

export const Black = Template.bind({})
Black.args = {
  backgroundColor : "#1E1E1E",
  width : '150px',
  height : '54px',
  label : "버튼입니다.",
  color : "#FFF",
  fontWeight : 700,
  border : false,
  borderRadius : '48px'
}

export const BlackLong = Template.bind({})
BlackLong.args = {
  backgroundColor : "#1E1E1E",
  width : '100%',
  height : '56px',
  label : "버튼입니다",
  color : "#FFF",
  fontWeight : 700,
  border : false,
  borderRadius : '8px'
}

export const GrayLong = Template.bind({})
GrayLong.args = {
  backgroundColor : "#5C5D62",
  width : '100%',
  height : '56px',
  label : "버튼입니다",
  color : "#FFF",
  fontWeight : 700,
  border : false,
  borderRadius : '8px'
}

export const GrayHarf = Template.bind({})
GrayHarf.args = {
  backgroundColor : "#F3F3F3",
  width : '50%',
  height : '56px',
  label : "버튼입니다",
  color : "#9B9B9B",
  fontWeight : 700,
  border : false,
  borderRadius : '999px'
}
export const RedHarf = Template.bind({})
RedHarf.args = {
  backgroundColor : "#FFBABA",
  width : '50%',
  height : '56px',
  label : "버튼입니다",
  color : "#FFF",
  fontWeight : 700,
  border : false,
  borderRadius : '999px'
}


