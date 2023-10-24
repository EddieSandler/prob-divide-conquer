function findFloor(arr, target) {

const result =0
    if( arr[0]>target) return -1
    if(arr[arr.length-1] < target) return arr[arr.length-1]

    for (let i = 0 ; i < arr.length; i++){
        if(arr[i]< target){
            result=arr[i]
        }
    }
return result

}

module.exports = findFloor


findFloor([1,2,8,10,10,12,19], 9) // 8
findFloor([1,2,8,10,10,12,19], 20) // 19
findFloor([1,2,8,10,10,12,19], 0) // -1