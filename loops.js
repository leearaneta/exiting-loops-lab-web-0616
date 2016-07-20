function breakOut(array, changeValue, stopValue) {
  for (let x = 0; x < array.length; x++ ) {
    if (array[x] === stopValue) {
      break
    }
    array[x] = changeValue
  }
  return array
}

function keepGoing(array, changeValue, skipValue) {
  for (let x = 0; x < array.length; x++ ) {
    if (array[x] === skipValue) {
      continue
      x++
    }
    array[x] = changeValue
  }
  return array
}

function findBy(array, findFn) {
  for (let x = 0; x < array.length; x++ ) {
    if (findFn(array[x])) {
      return array[x]
    }
  }
  return null
}
