import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { TestComponent } from './test.component';




export default {
  title: 'Test',
  component: TestComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        BrowserAnimationsModule,
      ],
    })
  ],
} as Meta;

const Component: Story<TestComponent> = (props: TestComponent) => ({
  component: TestComponent,
  props
})

export const Default = Component.bind({})
