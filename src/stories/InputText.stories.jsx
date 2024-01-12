// 스토리북 기본양식
import InputText from "../components/form/InputText"; // 컴포넌트 경로

export default {
  component : InputText, // 임포트한 컴포넌트 이름
  title : 'InputText', // 스토리북에서 보일 이름
  argTypes : { // 각 스토리 args의 행동방식을 설정
  } // 타입지정
}

let arr = []
const Template = () => 
<div style={{display : 'flex',gap : '8px',flexDirection : 'column'}}>
  <InputText {...arr[0]} />
  <InputText {...arr[1]} />
</div> // 템플릿 기본셋팅

export const Default = Template.bind({}) 
arr[0] = {
  tit : '타이틀이 있을때',
  width : '50%',
  padding : '18px 16px',
  border : '1px solid #DEE8EE',
  placeholder : '타이틀이 있을때',
  unit : 'cm',
  color : '#9EAEB6',
  fontSize : '16px'
}

arr[1] = {
  width : '50%',
  padding : '18px 16px',
  border : '1px solid #DEE8EE',
  placeholder : '타이틀이 없을때',
  unit : 'cm',
  color : '#9EAEB6',
  fontSize : '16px'
}

