import { withTests } from '@storybook/addon-jest'
import { Heading } from '../index'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Fashion/Atom/Title/Heading',
  component: Heading,
  decorators: [withTests({ results })],
  parameters: { jest: ['Heading.int.test.js'] },
  excludeStories: ['custom'],
}

const text = 'fashion news'

export function h1() {
  return <Heading size="h1" text={text} />
}

export function h2() {
  return <Heading size="h2" text={text} />
}

export function h3() {
  return <Heading size="h3" text={text} />
}

export function h4() {
  return <Heading size="h4" text={text} />
}
