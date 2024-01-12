// 스토리북 기본양식
import Temp from "../components/Temp.jsx"; // 컴포넌트 경로

export default {
  component : Temp, // 임포트한 컴포넌트 이름
  title : 'Temp', // 스토리북에서 보일 이름
  argTypes : { // 각 스토리 args의 행동방식을 설정
    width : { control : "text"},
    id : {control : "number"},
    placeholder : {control : "text"},
    disabled : {control : "boolean"},
    value : {control : "text"},
    onChange : {action : "onChange"}
  } // 타입지정
}

const Template = args => <Temp {...args} /> // 템플릿 기본셋팅

export const Default = Template.bind({}) 
Default.args = {
  
}

