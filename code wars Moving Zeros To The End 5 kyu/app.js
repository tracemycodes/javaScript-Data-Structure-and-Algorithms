// Moving Zeros To The end

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
    let filterArr = []
    let zeroArr = []
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element !== 0) {
            filterArr.push(element)
        } else {
            zeroArr.push(element)
        }
    }
  return filterArr.concat(zeroArr);
}


console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));