// /my-addon/src/register.js

import React from 'react';

import { addons, types } from '@storybook/addons';

import { AddonPanel } from '@storybook/components';

import { useParameter } from '@storybook/api';

import './atomic-addon.css'

const PARAM_KEY = 'atomic';
const ADDON_ID = 'atomic';
const PANEL_ID = `${ADDON_ID}/panel`;

const MyPanel = () => {
  const value = useParameter(PARAM_KEY, null);
  const item = value ? value.data : 'No story parameter defined';
  return (
    <div className="atomic-addon__panel" >
      Cool stuffs about Atomic 🎨 🦄
    </div>
  );
};

addons.register(ADDON_ID, (api) => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'Atomic Addon',
    render: ({ active, key }) => (
      <AddonPanel active={active} key={key}>
        <MyPanel />
      </AddonPanel>
    ),
  });
  addons.add(PANEL_ID, {
    type: types.TOOL,
    title: 'Atomic Unicorn',
    render: ({ active, key }) => (
      <div className="atomic-addon__tool">
        🦄
      </div>
    ),
  });
});