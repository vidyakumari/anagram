function is_Anagram (string1, string2) {
  if (string1.valueOf() === string2.valueOf()) {
    return true
  } else {
    return false
  }
}
function split (str) {
  var splitArray = []
  for (var i = 0; i < str.length; i++) {
    splitArray[i] = str[i]
  }
  return splitArray
}

function join (str) {
  var joinArray = ''
  for (var i = 0; i < str.length; i++) {
    joinArray += str[i]
  }
  return joinArray
}

function sort (str) {
  var arr = str
  var temp
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      /* if ASCII code greater then swap the elements position */
      if (arr[i] > arr[j]) {
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}
var string1 = window.prompt('Enter a string')
var string2 = window.prompt('Enter a string')
var splitArray1 = split(string1.toLowerCase())
var splitArray2 = split(string2.toLowerCase())
var string1Sorted = sort(splitArray1)
var string2Sorted = sort(splitArray2)
var joinArray1 = join(string1Sorted)
var joinArray2 = join(string2Sorted)
is_Anagram(joinArray1, joinArray2)
