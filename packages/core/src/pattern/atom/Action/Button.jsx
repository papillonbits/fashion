import cx from 'classnames'
import { shape } from 'prop-types'
import { buttonShape } from '../../../data/shape'
import styles from './Button.scss'

export function Button({ text, className }) {
  return (
    <button type="button" className={cx(className, styles.button)}>
      {text}
    </button>
  )
}

Button.defaultProps = {
  className: '',
}

Button.propTypes = shape(buttonShape).isRequired

/*
`Button` is a
  stateless function component
  receiving `text, className` props
`rendering`
  a button with custom styling passed on by its parent

Sample usages are as follows:
```javascript
  <Button text="click me" />
```
*/
