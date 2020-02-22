import callHistory from '../callHistory'
import { pick, uniq, pipe, map, max, prop, whereEq, descend, sortWith } from 'ramda'

export const transformedCallHistory = convert(callHistory)

export function convert (callHistory = []) {
  return pipe(
    uniqueCallerNames,
    map(caller => {
      const everyCallForPerson = callHistory.filter(whereEq(caller))
      return {
        ...caller,
        phoneNumber: everyCallForPerson.find(() => true).phoneNumber,
        callCount: everyCallForPerson.length,
        lastCalled: getLastCalled(everyCallForPerson)
      }
    }),
    sortWith([
      descend(prop('callCount')),
      descend(prop('lastCalled'))
    ])
  )(callHistory)
}

function getLastCalled (everyCallForPerson) {
  return everyCallForPerson
    .map(({ called }) => called)
    .reduce(max, 0)
}

function uniqueCallerNames (users) {
  return pipe(
    map(pick(['lastName', 'firstName'])),
    uniq
  )(users)
}
