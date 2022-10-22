/* eslint-disable react/no-access-state-in-setstate, react/destructuring-assignment, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions, react/require-default-props */
import { Component } from 'react'
import { shape, string } from 'prop-types'
import { Thumbnail } from '../../atom/Image/Thumbnail'
import { Label } from '../../atom/Text/Label'
import { Image } from '../../atom/Image/Image'
import { Icon } from '../../atom/Image/Icon'
import { Button } from '../../atom/Action/Button'
import { Modal } from './Modal'
import { thumbnailShape, imageShape, buttonsShape, iconsShape } from '../../../data/shape'
import styles from './Card.scss'

export class Card extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isDialogOpen: false,
      isModalVisible: false,
    }
  }

  onToggleDialog = () => {
    this.setState({ isDialogOpen: !this.state.isDialogOpen })
  }

  onToggleModal = () => {
    window.navigator.clipboard.writeText(this.props.url)
    this.setState({ isModalVisible: !this.state.isModalVisible })
  }

  render() {
    const {
      thumbnail,
      title,
      secondaryText,
      image,
      supportingText,
      buttons: { first, second },
      icons: { like, share },
      url,
    } = this.props

    if (this.state.isDialogOpen) {
      return (
        <div className={styles.card}>
          <div onClick={this.onToggleDialog} className={styles.cardDialogImage}>
            <Image {...image} />
          </div>
          <div onClick={this.onToggleDialog} className={styles.cardDialogTitle}>
            <Label color="black" size="large" text={title} />
          </div>
        </div>
      )
    }

    return (
      <div className={styles.card}>
        <Modal isVisible={this.state.isModalVisible} onToggleModal={this.onToggleModal} text={url} />
        <div className={styles.cardHeader}>
          <div onClick={this.onToggleDialog} className={styles.cardHeaderLeft}>
            <Thumbnail {...thumbnail} />
          </div>
          <div className={styles.cardHeaderRight}>
            <div onClick={this.onToggleDialog} className={styles.cardHeaderRightTitle}>
              <Label color="black" size="medium" text={title} />
            </div>
            <div onClick={this.onToggleDialog} className={styles.cardHeaderRightSecondaryText}>
              <Label color="grey" size="small" text={secondaryText} />
            </div>
          </div>
        </div>
        <div className={styles.cardBody}>
          <div onClick={this.onToggleDialog} className={styles.cardBodyImage}>
            <Image {...image} />
          </div>
        </div>
        <div className={styles.cardFooter}>
          <div className={styles.cardFooterTop}>
            <div onClick={this.onToggleDialog} className={styles.cardFooterTopSupportingText}>
              <Label color="grey" size="small" text={supportingText} />
            </div>
          </div>
          <div className={styles.cardFooterBottom}>
            <div className={styles.cardFooterBottomButtons}>
              <Button text={first.text} className={styles.cardFooterBottomButtonsButton} />
              <Button text={second.text} className={styles.cardFooterBottomButtonsButton} />
            </div>
            <div className={styles.cardFooterBottomIcons}>
              <div onClick={this.onToggleModal}>
                <Icon {...like} fill="#6e6d6d" className={styles.cardFooterBottomIconsIcon} />
              </div>
              <div onClick={this.onToggleModal}>
                <Icon fill="#6e6d6d" {...share} className={styles.cardFooterBottomIconsIcon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Card.defaultProps = {
  url: '',
}

Card.propTypes = {
  thumbnail: shape(thumbnailShape).isRequired,
  title: string.isRequired,
  secondaryText: string.isRequired,
  image: shape(imageShape).isRequired,
  supportingText: string.isRequired,
  buttons: shape(buttonsShape),
  icons: shape(iconsShape).isRequired,
  url: string,
}

/*
`Card` is a
  stateful class component
  receiving `thumbnail, title, secondaryText, image, supportingText, buttons, icons, url` props
`rendering`
  `Modal, Thumbnail, Label, Image, Button, Icon` components
`handling`
  `onToggleDialog()` and `onToggleModal()` events
`with an internal state which consists of`
  `isDialogOpen` and `isModalVisible`

Sample usage is as follows:
```javascript

  const card = {
    thumbnail: {
      type: 'newspaper',
      width: 30,
      height: 30
    },
    title: '[Title goes here]',
    secondaryText: '[Secondary text]',
    image: {
      "src": 'https://fashionunited.info/global-assets/img/default/fu-default_1200x630_black-favicon.jpg',
      "alt": 'news',
      "height": 200,
      "width": 300,
    },
    supportingText: '[Greyhound divisively hello coldly wonderfully marginally far upon excluding.]',
    buttons: {
      first: {
        text: '[ACTION 1]'
      },
      second: {
        text: '[ACTION 2]'
      }
    },
    icons: {
      like: {
        name: 'like',
        width: 20,
        height: 20
      },
      share: {
        name: 'share',
        width: 20,
        height: 20
      }
    },
    url: 'http://some.url'
  }

  <Card {...card} />
```
*/
