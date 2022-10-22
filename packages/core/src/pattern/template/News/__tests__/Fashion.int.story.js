import { withTests } from '@storybook/addon-jest'
import { Fashion } from '../index'
import results from '../../../../../../../.jest-test-results.json'
import { fashion } from '../../../../data/fashion'

export default {
  title: 'Fashion/Template/News/Fashion',
  component: Fashion,
  decorators: [withTests({ results })],
  parameters: { jest: ['Fashion.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <Fashion {...fashion} />
}
