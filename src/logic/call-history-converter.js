import callHistory from '../callHistory'
import { pick, uniq, pipe, map, max, reduce, prop, dissoc, whereEq, descend, sortWith } from 'ramda'

export const transformedCallHistory = convert(callHistory)

export function convert (callHistory) {
  return pipe(
    map(pick(['lastName', 'firstName'])),
    uniq,
    map(callEntry => ({
      ...callEntry,
      everyCallForPerson: callHistory.filter(whereEq(callEntry))
    })),
    map(callEntry => ({
      ...callEntry,
      phoneNumber: callEntry.everyCallForPerson.length ? callEntry.everyCallForPerson[0].phoneNumber : 0
    })),
    map(callEntry => ({
      ...callEntry,
      callCount: callEntry.everyCallForPerson.length,
      lastCalled: pipe(
        map(prop('called')),
        reduce(max, 0)
      )(callEntry.everyCallForPerson)
    })),
    sortWith([descend(prop('callCount')), descend(prop('lastCalled'))]),
    map(dissoc('everyCallForPerson'))
  )(callHistory)
}
