const { fizzbuzz, sum } = require("./fizzbuzz")
// const sum = require("./fizzbuzz")

describe("Pruebas de Fizzbuzz", () => {
  test("should be print is not a number", () => {
    expect(fizzbuzz([1, 2, 3])).toBe("Error: the value is not a number")
  })

  test("should be print fizzbuzz if receive multiple 3 and 5", () => {
    expect(fizzbuzz(30)).toBe("fizzbuzz")
  })

  test("should be print 1 if they receive 1", () => {
    expect(fizzbuzz(1)).toBe(1)
  })
  test("should be print fizz if receive 3 or multiple 3", () => {
    expect(fizzbuzz(12)).toBe("fizz")
  })
  test("should be print buzz if receive 5 or multiple 5", () => {
    expect(fizzbuzz(10)).toBe("buzz")
  })
})

describe("Sumas", () => {
  test("should be print 4 if a = 2 and b = 2", () => {
    expect(sum(2, 2)).toBe(4)
  })
  test("should be print 5 if a = 7 and b = -2", () => {
    expect(sum(7, -2)).toBe(5)
  })
})
