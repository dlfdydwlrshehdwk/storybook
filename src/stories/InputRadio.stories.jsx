// 스토리북 기본양식
import InputRadio from "../components/form/InputRadio"; // 컴포넌트 경로

export default {
  component : InputRadio, // 임포트한 컴포넌트 이름
  title : 'InputRadio', // 스토리북에서 보일 이름
  argTypes : { // 각 스토리 args의 행동방식을 설정

  } // 타입지정
}

const Template = (args) => <InputRadio {...args} />

export const Default = Template.bind({}) 
Default.args = {
  data : [
    {
      val : '마른',
      name : 'size'
    },
    {
      val : '슬림탄탄',
      name : 'size'
    },
    {
      val : '보통',
      name : 'size'
    },
    {
      val : '통통한',
      name : 'size'
    },
    {
      val : '살짝볼륨',
      name : 'size'
    },
    {
      val : '글래머',
      name : 'size'
    },
  ],
  type : 'size'
}

export const tatoo = Template.bind({}) 
tatoo.args = {
  data : [
    {
      val : '없어요',
      name : 'tatoo'
    },
    {
      val : '지우고 있어요',
      name : 'tatoo'
    },
    {
      val : '작은 문신이 있어요',
      name : 'tatoo',
      desc : '손바닥 크기보다 작아요'
    },
    {
      val : '큰 문신이 있어요',
      name : 'tatoo',
      desc : '손바닥 크기보다 커요'
    }
  ],
  type : 'tatoo'
}
