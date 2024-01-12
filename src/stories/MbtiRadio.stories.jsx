// 스토리북 기본양식
import MbtiRadio from "../components/form/MbtiRadio"; // 컴포넌트 경로

export default {
  component : MbtiRadio, // 임포트한 컴포넌트 이름
  title : 'MbtiRadio', // 스토리북에서 보일 이름
  argTypes : { // 각 스토리 args의 행동방식을 설정
  } // 타입지정
}

let arr = []
const Zip = () => 
<div style={{display : "flex",flexDirection : 'column',gap : '28px'}}>
  <MbtiRadio {...arr[0]} />
  <MbtiRadio {...arr[1]} />
  <MbtiRadio {...arr[2]} />
  <MbtiRadio {...arr[3]} />
</div>
const Template = args => <MbtiRadio {...args} /> // 템플릿 기본셋팅

export const Default = Template.bind({}) 
Default.args = {
  labelColor : '#FB9E40',
  mbti : ['I','E'],
  txt : ['내향','외향']
}

export const MBTI = Zip.bind({})
arr[0] = {
  labelColor : '#FB9E40',
  mbti : ['I','E'],
  txt : ['내향','외향'],
  id : 'ie',
  name : 'ie'
}
arr[1] = {
  labelColor : '#FBCC43',
  mbti : ['N','S'],
  txt : ['직관','감각'],
  id : 'ns',
  name : 'ns'
}
arr[2] = {
  labelColor : '#3472B6',
  mbti : ['F','T'],
  txt : ['감정','사고'],
  id : 'ft',
  name : 'ft'
}
arr[3] = {
  labelColor : '#903EA7',
  mbti : ['P','J'],
  txt : ['인식','판단'],
  id : 'pj',
  name : 'pj'
}

// let a = ['#FB9E40','#FBCC43','#3472B6','#903EA7']