// reusable shapes for component prop types

import { string, number, shape } from 'prop-types'

export const thumbnailShape = {
  type: string.isRequired,
  width: number.isRequired,
  height: number.isRequired,
}

export const imageShape = {
  src: string.isRequired,
  alt: string.isRequired,
  height: number.isRequired,
  width: number.isRequired,
}

export const buttonShape = {
  text: string.isRequired,
  className: string,
}

export const buttonsShape = {
  first: shape(buttonShape),
  second: shape(buttonShape),
}

export const iconShape = {
  name: string.isRequired,
  width: number.isRequired,
  height: number.isRequired,
  fill: string,
  className: string,
}

export const iconsShape = {
  like: shape(iconShape),
  share: shape(iconShape),
}
