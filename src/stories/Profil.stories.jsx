// 스토리북 기본양식
import Profil from "../components/Profil.jsx"; // 컴포넌트 경로

export default {
  component : Profil, // 임포트한 컴포넌트 이름
  title : 'Profil', // 스토리북에서 보일 이름
  argTypes : { // 각 스토리 args의 행동방식을 설정
    // width : { control : "text"},
    // id : {control : "number"},
    // disabled : {control : "boolean"},
    // onChange : {action : "onChange"}

  } // 타입지정
}

const Template = args => <Profil {...args} /> // 템플릿 기본셋팅

export const Default = Template.bind({}) 
Default.args = {
  src : ["images/profil1.png","images/profil1.png","images/profil1.png","images/profil1.png","images/profil1.png"],
  nickname : ["쏘쏘","하하","호호","껄껄","밍밍"],
  age : ['33',"21","18","62","42"],
  mbti : ['ISTP',"asdf","qwer","fefw","agwgw"],
  addr : ['서울특별시 용산구','서울특별시 용산구','서울특별시 용산구','서울특별시 용산구','서울특별시 용산구'],
  job : ['디자이너','디자이너','디자이너','디자이너','디자이너'],
  money : ['5천 중반','5천 중반','5천 중반','5천 중반','5천 중반']
}

