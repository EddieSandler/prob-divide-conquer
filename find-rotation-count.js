function findRotationCount(arr) {
    let count = 0

    for (let i = 0; i < arr.length; i++){
        if(arr[i]<= arr[arr.length-1]) {
           return count
        } else {
            count ++
        }
   }
return count
}


findRotationCount([15, 18, 2, 3, 6, 12]) // 2
findRotationCount([7, 9, 11, 12, 5]) // 4
findRotationCount([7, 9, 11, 12, 15]) // 0
module.exports = findRotationCount