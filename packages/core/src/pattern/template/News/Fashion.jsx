/* eslint-disable react/require-default-props */
import { shape, func } from 'prop-types'
import { buttonShape } from '../../../data/shape'
import { Grid } from '../../organism/Layout/Grid'
import { Button } from '../../atom/Action/Button'
import { Heading } from '../../atom/Title/Heading'
import styles from './Fashion.scss'

export function Fashion({ getNewsArticles, button }) {
  return (
    <div className={styles.fashion}>
      <div className={styles.fashionHeading}>
        <Heading size="h1" text="Fashion News" />
      </div>
      <Grid getNewsArticles={getNewsArticles} />
      <Button text={button.text} className={styles.fashionButton} />
    </div>
  )
}

Fashion.propTypes = {
  getNewsArticles: func,
  button: shape(buttonShape).isRequired,
}

/*
`Fashion` is a
    stateless function component
    receiving `getNewsArticles(), button` props
`rendering`
    `Grid` and `Button` components
Sample usage is as follows:
```javascript
  const fashion = {
    getNewsArticles,
    button: {
      text: 'LOAD MORE'
    }
  };

  <Fashion {...fashion} />
```
*/
