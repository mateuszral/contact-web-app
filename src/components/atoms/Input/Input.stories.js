import Input from './Input';

export default {
  title: 'Components/Atoms/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter Your Email',
};

export const Textarea = Template.bind({});
Textarea.args = {
  placeholder: 'Write your comment...',
  as: 'textarea',
  rows: '10',
};
