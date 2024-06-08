/**
 * Функция получения слова с нужным окончанием в зависимости от числа.
 * @param {number} n - Число от которого склоняется слово.
 * @param {{ one: string; two: string; five: string }} words - Слово в разных окончаниях.
 * Параметр one - слово в единственном числе, например одна "печенька".
 * Параметр two - слово в множественном числе, например две  "печеньки".
 * Параметр five - слово в другом множественном числе, например пять "печенек".
 */
export function declOfNum(
  n: number,
  words: { one: string; two: string; five: string },
): string {
  n = Math.abs(n) % 100
  const n1 = n % 10
  if (n > 10 && n < 20) {
    return words.five
  }
  if (n1 > 1 && n1 < 5) {
    return words.two
  }
  if (n1 == 1) {
    return words.one
  }
  return words.five
}
