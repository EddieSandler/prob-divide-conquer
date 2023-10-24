function countZeroes(arr) {

    let numZeros = arr.length
 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            numZeros -- ;}
        }                 
        console.log(numZeros)
        return numZeros
        }

        




countZeroes([1, 1, 1, 1, 0, 0]) // 2
countZeroes([1,0,0,0,0]) // 4
countZeroes([0,0,0]) // 3
countZeroes([1,1,1,1]) // 0

module.exports = countZeroes