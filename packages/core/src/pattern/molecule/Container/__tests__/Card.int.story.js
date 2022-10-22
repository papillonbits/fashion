import { withTests } from '@storybook/addon-jest'
import { Card } from '../index'
import results from '../../../../../../../.jest-test-results.json'
import { card } from '../../../../data/card'

export default {
  title: 'Fashion/Molecule/Container/Card',
  component: Card,
  decorators: [withTests({ results })],
  parameters: { jest: ['Card.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <Card {...card} />
}
