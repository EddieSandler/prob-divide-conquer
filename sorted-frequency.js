function sortedFrequency(arr, target) {
    let frequency = 0

    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === target || arr[-1-i] === target){
            frequency ++
        }
}
if(frequency === 0) return -1
return frequency
}

sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2) // 4
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3) // 1
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1) // 2
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4) // -1

module.exports = sortedFrequency