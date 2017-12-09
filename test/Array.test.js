require('../')

describe('Array', () => {
  test('Array.join', () => {
    const strings = ['abc', '123']
    expect(strings.jn(' ')).toEqual('abc 123')
  })

  test('Arr is bound to global', () => {
    const { Arr } = global

    expect(Arr).toBeInstanceOf(Object)
    expect(Arr).toBe(Array)
  })
})
