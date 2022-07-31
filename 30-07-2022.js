
  snail = function(array) {
    let result = []//create a variable for the final array
    while(array.length){//loop through the parent array - while array still has items in it
         result.push(...array.shift())//get the first row (first array in the array)
        for(let i = 0; i < array.length; i++){//get the items at the end of each array (right side) 
            result.push(array[i].pop())
        }
        result.push(...(array.pop() || []).reverse()) //get the bottom row from end to front (bottom row reversed)
        for (let i = array.length - 1 ; i >= 0; i-- ){//get the items at the beginning of the arrays (left side)
            result.push(array[i].shift())
        }
    }
    return result
}

snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]])