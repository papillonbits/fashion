import { newspaper, like, share, check, cross, printer } from './Thumbnail.int.story'

describe('<Thumbnail />', () => {
  describe('Render', () => {
    test('must match newspaper', () => {
      expect(global.renderToJSON(newspaper())).toMatchSnapshot()
    })

    test('must match like', () => {
      expect(global.renderToJSON(like())).toMatchSnapshot()
    })

    test('must match share', () => {
      expect(global.renderToJSON(share())).toMatchSnapshot()
    })

    test('must match check', () => {
      expect(global.renderToJSON(check())).toMatchSnapshot()
    })

    test('must match cross', () => {
      expect(global.renderToJSON(cross())).toMatchSnapshot()
    })

    test('must match printer', () => {
      expect(global.renderToJSON(printer())).toMatchSnapshot()
    })
  })
})
