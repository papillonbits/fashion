import { shape } from 'prop-types'
import { Icon } from './Icon'
import { thumbnailShape } from '../../../data/shape'
import styles from './Thumbnail.scss'

export function Thumbnail({ type, width, height }) {
  return (
    <div>
      <Icon className={styles.thumbnail} name={type} width={width} height={height} />
    </div>
  )
}

Thumbnail.defaultProps = {
  className: '',
}

Thumbnail.propTypes = shape(thumbnailShape).isRequired

/*
`Thumbnail` is a
  stateless function component
  receiving `type, width, height` props
`rendering`
    a custom styled Icon component
    passing on `name, width and height`.

Sample usages are as follows:
```javascript

  const newspaper = {
    type: 'newspaper',
    width: 30,
    height: 30,
  };

  const like = {
    type: 'like',
    width: 30,
    height: 30,
  };

  const share = {
    type: 'share',
    width: 30,
    height: 30,
  };

  const check = {
    type: 'check',
    width: 30,
    height: 30,
  };

  const cross = {
    type: 'cross',
    width: 30,
    height: 30,
  };

  const printer = {
    type: 'printer',
    width: 30,
    height: 30,
  };

  <Thumbnail {...newspaper} />
  <Thumbnail {...like} />
  <Thumbnail {...share} />
  <Thumbnail {...check} />
  <Thumbnail {...cross} />
  <Thumbnail {...printer} />
```
*/
