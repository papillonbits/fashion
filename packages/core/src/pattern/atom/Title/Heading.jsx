import { string } from 'prop-types'
import cx from 'classnames'
import styles from './Heading.scss'

export function Heading({ size, text }) {
  const { heading, headingH1, headingH2, headingH3, headingH4 } = styles

  return (
    <span
      className={cx(heading, {
        [headingH1]: size === 'h1',
        [headingH2]: size === 'h2',
        [headingH3]: size === 'h3',
        [headingH4]: size === 'h4',
      })}
    >
      {text}
    </span>
  )
}

Heading.propTypes = {
  size: string.isRequired,
  text: string.isRequired,
}

/*
Heading is a
  stateless function component
  receiving size, text props
rendering a conditionally styled span
  indicating various sizes

Sample usages are as follows:
  <Heading size={'h1'} text={"4 producten vergelijken"} />
  <Heading size={'h2'} text={"4 producten vergelijken"} />
  <Heading size={'h3'} text={"4 producten vergelijken"} />
  <Heading size={'h4'} text={"4 producten vergelijken"} />
*/
