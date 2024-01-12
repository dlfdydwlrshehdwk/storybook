import Text from "../components/layout/Text.jsx";

export default {
  component : Text,
  title : 'Text',
  argTypes : {}
}

const Template = args => <Text {...args} />

export const Default = Template.bind({})
Default.args = {
  label : `안녕하세요\n안녕하세요2\n안녕하세요3\n줄바꿈은 /n입니다.`
}

export const TitleLeft = Template.bind({})
TitleLeft.args = {
  label : '만나서 반가워요!\n이제 프로필을\n작성해 볼까요?',
  fontSize : '30px',
  textAlign : 'left'
}
export const TitleCenter = Template.bind({})
TitleCenter.args = {
  label : '만나서 반가워요!\n이제 프로필을\n작성해 볼까요?',
  fontSize : '30px',
  textAlign : 'center'
}
export const TitleRight = Template.bind({})
TitleRight.args = {
  label : '만나서 반가워요!\n이제 프로필을\n작성해 볼까요?',
  fontSize : '30px',
  textAlign : 'right'
}
export const Desc = Template.bind({})
Desc.args = {
  label : '프로필이 자세할수록\n나와 취향이 같은 사람들을 만날 확류이 높아져요', 
  fontSize : '14px',
  textAlign : 'left',
  color : '#727272'
}

