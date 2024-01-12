// 스토리북 기본양식
import Chip from "../components/Chip.jsx"; 

export default {
  component : Chip, 
  title : 'Chip',
  argTypes : {}
}
let arr = []
const Template = () => <div style={{padding : '10px',height : '100vh',display : 'flex',gap : '16px',backgroundColor : 'gray'}}> 
<Chip {...arr[0]} /> 
<Chip {...arr[1]} />
<Chip {...arr[2]} />
<Chip {...arr[3]} />
</div>

export const Default = Template.bind({}) 
// Default.args = {
//   label : '반려동물',
//   bgc : '#7F63EB',
//   imgbgc : '#FFF',
//   imgsrc : "images/dog.svg",
//   textColor : '#FFF'
//  }
arr[0] = {
  label : '반려동물',
  bgc : '#7F63EB',
  imgbgc : '#FFF',
  imgsrc : "images/dog.svg",
  textColor : '#FFF'
}
arr[1] = {
  label : '',
  imgbgc : '#FFF',
  imgsrc : "images/dog.svg",
}
arr[2] = {
  label : '테니스',
  bgc : '#FFF',
  imgbgc : '#AFEEA1',
  imgsrc : "images/tennis.svg",
  textColor : '#222'
}
arr[3] = {
  label : '절약하는 사람',
  bgc : '#FFF',
  imgbgc : 'yellow',
  imgsrc : "images/money.svg",
  textColor : '#222'
}