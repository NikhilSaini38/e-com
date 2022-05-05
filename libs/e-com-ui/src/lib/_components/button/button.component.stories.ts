import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { ButtonComponent } from './button.component';



export default {
  title: 'Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<ButtonComponent>;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}
