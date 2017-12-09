require('../')

describe('Math', () => {
  test('Math.floor', () => {
    expect(M.f(3.5)).toEqual(3)
  })

  test('M is bound to global', () => {
    const { M } = global

    expect(M).toBeInstanceOf(Object)
    expect(M).toBe(Math)
  })
})
