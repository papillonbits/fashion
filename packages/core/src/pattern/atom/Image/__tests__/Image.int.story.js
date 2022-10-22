import { withTests } from '@storybook/addon-jest'
import { Image } from '../index'
import { largeImage, mediumImage, smallImage, tinyImage } from '../../../../data/image'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Fashion/Atom/Image/Image',
  component: Image,
  decorators: [withTests({ results })],
  parameters: { jest: ['Image.int.test.js'] },
  excludeStories: ['custom'],
}

export function large() {
  return <Image {...largeImage} />
}

export function medium() {
  return <Image {...mediumImage} />
}

export function small() {
  return <Image {...smallImage} />
}

export function tiny() {
  return <Image {...tinyImage} />
}
