/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import cx from 'classnames'
import { bool, func, string } from 'prop-types'
import styles from './Modal.scss'

export function Modal({ isVisible, onToggleModal, text }) {
  return (
    <div className={cx(styles.modal, { [styles.modalVisible]: isVisible === true })}>
      <div className={styles.modalContent}>
        <div onClick={onToggleModal} className={styles.modalContentCloseButton}>
          ×
        </div>
        <h1>Copied to Clipboard!</h1>
        <a href={text}>{text}</a>
      </div>
    </div>
  )
}

Modal.propTypes = {
  isVisible: bool.isRequired,
  onToggleModal: func.isRequired,
  text: string.isRequired,
}

/*
`Modal` is a
    stateless function component
    receiving `isVisible(), onToggleModal(), text` props
`rendering`
    styled divs, a h1 and an anchor element

Sample usage is as follows:
```javascript
  <Modal
    isVisible={true}
    onToggleModal={() => {})}
    text="http://some.url"
  />
```
*/
