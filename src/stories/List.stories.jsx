import List from "../components/List";

export default {
  component : List,
  title : 'List',
  argTypes : {}
}

const Template = args => <List {...args} />

export const Default = Template.bind({})
Default.args = {
  data : [1,2,3]
}


export const List1 = Template.bind({})
List1.args = {
  data : ['한줄처리']
}

export const noData = Template.bind({})
noData.args = {
  data : null
}