import { withTests } from '@storybook/addon-jest'
import { Thumbnail } from '../index'
import {
  newspaperThumbnail,
  likeThumbnail,
  shareThumbnail,
  checkThumbnail,
  crossThumbnail,
  printerThumbnail,
} from '../../../../data/thumbnail'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Fashion/Atom/Image/Thumbnail',
  component: Thumbnail,
  decorators: [withTests({ results })],
  parameters: { jest: ['Thumbnail.int.test.js'] },
  excludeStories: ['custom'],
}

export function newspaper() {
  return <Thumbnail {...newspaperThumbnail} />
}

export function like() {
  return <Thumbnail {...likeThumbnail} />
}

export function share() {
  return <Thumbnail {...shareThumbnail} />
}

export function check() {
  return <Thumbnail {...checkThumbnail} />
}

export function cross() {
  return <Thumbnail {...crossThumbnail} />
}

export function printer() {
  return <Thumbnail {...printerThumbnail} />
}
