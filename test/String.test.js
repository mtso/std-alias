require('../')

describe('String', () => {
  test('String.split', () => {
    const string = 'abc 123'
    expect(string.splt(' ')).toEqual(['abc', '123'])
  })

  test('Str is bound to global', () => {
    const { Str } = global

    expect(Str).toBeInstanceOf(Object)
    expect(Str).toBe(String)
  })
})
