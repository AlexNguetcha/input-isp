
import React from 'react';

import InputIsp from '../InputIsp';

export default {
  component: InputIsp,
  title: 'InputIsp',
};

const Template = args => <InputIsp {...args} />;

export const Orange_CM = Template.bind({});
Orange_CM.args = {
  initialPhoneNumber: '+237695904403'
};

export const Mtn_CM = Template.bind({});
Mtn_CM.args = {
  initialPhoneNumber: '+237677856231'
};

export const Camtel_CM = Template.bind({});
Camtel_CM.args = {
  initialPhoneNumber: '+237620532645'
};
