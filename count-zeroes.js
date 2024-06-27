function countZeroes(arr) {
    let firstZero = findFirst(arr)
    if (firstZero === -1) return 0;

    return arr.length - firstZero
}


function findFirst(arr, leftIdx = 0, rightIdx = arr.length - 1) {
    if (rightIdx >= leftIdx) {
        let mid = leftIdx + Math.floor((rightIdx - leftIdx) / 2)
        if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
            return mid;
        } else if (arr[mid] === 1) {
            return findFirst(arr, mid + 1, rightIdx)
        }
        return findFirst(arr, leftIdx, mid - 1)
    }
    return -1
}

module.exports = countZeroes