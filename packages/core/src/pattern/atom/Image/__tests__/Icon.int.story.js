import { withTests } from '@storybook/addon-jest'
import { Icon } from '../index'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Fashion/Atom/Image/Icon',
  component: Icon,
  decorators: [withTests({ results })],
  parameters: { jest: ['Icon.int.test.js'] },
  excludeStories: ['custom'],
}

export function newspaper() {
  return <Icon name="newspaper" width={22} height={22} />
}

export function like() {
  return <Icon name="like" width={22} height={22} />
}

export function share() {
  return <Icon name="share" width={22} height={22} />
}

export function check() {
  return <Icon name="check" width={22} height={22} />
}

export function cross() {
  return <Icon name="cross" width={22} height={22} />
}

export function printer() {
  return <Icon name="printer" width={22} height={22} />
}
