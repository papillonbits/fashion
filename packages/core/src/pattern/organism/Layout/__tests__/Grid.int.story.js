import { withTests } from '@storybook/addon-jest'
import { Grid } from '../index'
import results from '../../../../../../../.jest-test-results.json'
import { getNewsArticles } from '../../../../data/grid'

export default {
  title: 'Fashion/Organism/Layout/Grid',
  component: Grid,
  decorators: [withTests({ results })],
  parameters: { jest: ['Grid.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <Grid getNewsArticles={getNewsArticles} />
}
