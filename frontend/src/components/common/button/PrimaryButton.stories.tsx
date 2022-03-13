import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';


import { PrimaryButton as PrimaryBtn } from './PrimaryButton';

export default {
  title: 'Button',
  component: PrimaryBtn,
} as ComponentMeta<typeof PrimaryBtn>;

const Template: ComponentStory<typeof PrimaryBtn> = () => {
  return (
    <>
    <PrimaryBtn>PrimaryButton</PrimaryBtn>
    </>
  ) 
}

export const Primary = Template.bind({})
Primary.args = {}