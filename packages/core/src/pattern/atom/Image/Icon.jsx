import { shape } from 'prop-types'
import { iconShape } from '../../../data/shape'
import { getPath } from '../../../library/font'

export function Icon({ name, width, height, fill, className }) {
  return (
    <svg fill={fill} fontSize="1px" width={width} height={height} viewBox="0 0 1024 1024" className={className}>
      <path d={getPath(name)} />
    </svg>
  )
}

Icon.defaultProps = {
  className: '',
  fill: '',
}

Icon.propTypes = shape(iconShape).isRequired

/*
`Icon` is a
  stateless function component
  receiving `name, width, height, fill, className` props
`rendering`
  an svg element passing on a path
  matching different icons with name.

Sample usages are as follows:
```javascript
  <Icon name={'newspaper'} width={22} height={22} />
  <Icon name={'like'} width={22} height={22} />
  <Icon name={'share'} width={22} height={22} />
  <Icon name={'check'} width={22} height={22} />
  <Icon name={'cross'} width={22} height={22} />
  <Icon name={'printer'} width={22} height={22} />
```
*/
