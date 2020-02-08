import { convert } from './call-history-converter'

test('each contact is included only once', async () => {
  expect(convert(onePersonCallingTwice())).toEqual(expect.arrayContaining([
    expect.objectContaining({ firstName: 'firstName1', lastName: 'lastName1', phoneNumber: 'phoneNumber1' })
  ]))
})

test('return number of calls for each caller', async () => {
  expect(convert(onePersonCallingTwice())).toEqual(expect.arrayContaining([
    expect.objectContaining({ firstName: 'firstName1', lastName: 'lastName1', timesCalled: 2 })
  ]))
})

test('return latest call for caller', async () => {
  expect(convert(onePersonCallingTwice())).toEqual(expect.arrayContaining([
    expect.objectContaining({ firstName: 'firstName1', lastName: 'lastName1', lastCalled: 3 })
  ]))
})

test('contacts returned in order of last called', async () => {
  expect(convert(onePersonCallingTwice())).toEqual([
    expect.objectContaining({ firstName: 'firstName2', lastName: 'lastName2' }),
    expect.objectContaining({ firstName: 'firstName1', lastName: 'lastName1' })
  ])
})

function onePersonCallingTwice () {
  return [
    CallHistoryEntry({ person: 1, called: 2 }),
    CallHistoryEntry({ person: 2, called: 4 }),
    CallHistoryEntry({ person: 1, called: 3 })
  ]
}

function CallHistoryEntry ({ person, called } = {}) {
  return {
    firstName: 'firstName' + person,
    lastName: 'lastName' + person,
    phoneNumber: 'phoneNumber' + person,
    called
  }
}
