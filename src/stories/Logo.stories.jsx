import Logo from "../components/layout/logo/Logo.jsx";
import { Meta } from "@storybook/react";
export default {
  component : Logo,
  title : 'Logo/logo/logde',
  argTypes : {}
}

const Template = args => <Logo {...args} />

export const Default = Template.bind({})
Default.args = {
  
}

