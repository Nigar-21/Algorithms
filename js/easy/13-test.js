
const nums = [3,2,4], target = 6
function test(nums, target) {
    const arr=[]
    for (let i = 0; i < nums.length;i++){
for (let j = i+1; j < nums.length;j++){
    if(nums[i]+nums[j]==target){
        arr.push(i,j)
        console.log(arr)
    }
}
}
}
test(nums, target)