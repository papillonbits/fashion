import { withTests } from '@storybook/addon-jest'
import { Button } from '../index'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Fashion/Atom/Action/Button',
  component: Button,
  decorators: [withTests({ results })],
  parameters: { jest: ['Button.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <Button text="click me" />
}
