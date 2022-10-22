import { large, medium, small, tiny } from './Image.int.story'

describe('<Image />', () => {
  describe('Render', () => {
    test('must match large', () => {
      expect(global.renderToJSON(large())).toMatchSnapshot()
    })

    test('must match medium', () => {
      expect(global.renderToJSON(medium())).toMatchSnapshot()
    })

    test('must match small', () => {
      expect(global.renderToJSON(small())).toMatchSnapshot()
    })

    test('must match tiny', () => {
      expect(global.renderToJSON(tiny())).toMatchSnapshot()
    })
  })
})
