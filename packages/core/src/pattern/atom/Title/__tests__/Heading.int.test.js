import { h1, h2, h3, h4 } from './Heading.int.story'

describe('<Heading />', () => {
  describe('Render', () => {
    test('must match h1', () => {
      expect(global.renderToJSON(h1())).toMatchSnapshot()
    })

    test('must match h2', () => {
      expect(global.renderToJSON(h2())).toMatchSnapshot()
    })

    test('must match h3', () => {
      expect(global.renderToJSON(h3())).toMatchSnapshot()
    })

    test('must match h4', () => {
      expect(global.renderToJSON(h4())).toMatchSnapshot()
    })
  })
})
