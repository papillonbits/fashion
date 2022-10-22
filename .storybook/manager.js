import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'
import { version } from '../lerna.json'

addons.setConfig({
  panelPosition: 'right',
  theme: create({
    base: 'light',
    brandTitle: `Fashion v${version}`,
    brandUrl: 'https://github.com/papillonbits/fashion',
    brandImage: 'https://avatars2.githubusercontent.com/u/81188645',
  }),
})
