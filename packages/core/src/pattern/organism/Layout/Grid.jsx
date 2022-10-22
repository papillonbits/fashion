/* eslint-disable react/destructuring-assignment, react/no-array-index-key, react/require-default-props */
import { Component } from 'react'
import { func } from 'prop-types'
import { Card } from '../../molecule/Container/Card'
import { card } from '../../../data/card'
import styles from './Gris.scss'

export class Grid extends Component {
  constructor(props) {
    super(props)
    this.state = { newsArticles: [] }
  }

  async componentDidMount() {
    const variables = {
      keywords: ['hunkemoller'],
    }

    const result = await this.props.getNewsArticles(variables)

    this.setState({
      newsArticles: result.fashionunitedNlNewsArticles,
    })
  }

  render() {
    const { newsArticles } = this.state

    return (
      <div>
        <div className={styles.grid}>
          {newsArticles.map((newsArticle, index) => {
            const { title, url } = newsArticle

            card.title = title
            card.url = url

            return (
              <div className={styles.gridCard} key={index}>
                <Card {...card} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

Grid.propTypes = {
  getNewsArticles: func,
}

/*
`Grid` is a
    stateful class component
    receiving `getNewsArticles()` props
`rendering`
  a `Card` component for each news article
`handling`
  `componentDidMount()` lifecycle hook
Sample usage is as follows:
```javascript
  <Grid getNewsArticles={() => {})} />
```
*/
