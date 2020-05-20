import toInteger from '../_lib/toInteger/index.js'
import addDays from '../addDays/index.js'

/**
 * @name addWeeks
 * @category Week Helpers
 * @summary Add the specified number of weeks to the given date.
 *
 * @description
 * Add the specified number of week to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param date - The date to be changed
 * @param amount - The amount of weeks to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns The new date with the weeks added
 *
 * @example
 * // Add 4 weeks to 1 September 2014:
 * var result = addWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Sep 29 2014 00:00:00
 */
export default function addWeeks(
  dirtyDate: Date | number,
  dirtyAmount: number
): Date {
  var amount = toInteger(dirtyAmount)
  var days = amount * 7
  return addDays(dirtyDate, days)
}