function smaller(nums) {
    let resultNums = []
    for (let i = 0; i < nums.length - 1; i++) {
        let count = 0
        for(let j = i +1; j < nums.length; j++)
            if(nums[i] > nums[j]) count++
        resultNums.push(count)
    }
    resultNums.push(0)
    return resultNums
}
console.log(smaller([5, 4, 3, 2, 1]))

//const smaller = nums => nums.map((x, i) => nums.slice(i).filter(y => x > y).length)