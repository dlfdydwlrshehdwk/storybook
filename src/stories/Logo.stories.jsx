import Logo from "../components/layout/logo/Logo.jsx";

export default {
  component : Logo,
  title : 'Logo',
  argTypes : {}
}

const Template = args => <Logo {...args} />

export const Default = Template.bind({})
Default.args = {
  
}

