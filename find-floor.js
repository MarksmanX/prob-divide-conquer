function findFloor(array, number) {
    if (number < array[0]) {
        return -1;
    } else if (number > array[array.length - 1]) {
        return array[array.length - 1]
    } else {

    }
    let leftIdx = 0;
    let rightIdx = array.length - 1
    while (leftIdx <= rightIdx) {
        middleIdx = Math.floor((leftIdx + rightIdx) / 2)
        middleVal = array[middleIdx]
        nextVal = array[middleIdx + 1]
        if ((number > middleVal) && number < nextVal) {
            return middleVal
        } else if ((number > middleVal) && (number > nextVal)) {
            rightIdx = middleIdx + 1
        }
        else if (number < middleVal) {
            rightIdx = middleIdx - 1
        } else {
            return middleIdx
        }
    }
}

module.exports = findFloor