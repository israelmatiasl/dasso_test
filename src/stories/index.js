import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import Navigation from '../components/Navigation';

storiesOf('Welcome', module)
  .add('to Storybook', () => <Welcome showApp={ linkTo('Button') } />);

storiesOf('Main', module)
  .add('App', () => <Navigation /> )
