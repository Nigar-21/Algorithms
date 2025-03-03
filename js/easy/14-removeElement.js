const nums = [3, 2, 2, 3],
  val = 3;
var removeElement = function (nums, val) {
 let newNums = nums.filter((nums) => nums !== val);
 
  const k = newNums.length
  const  difference = nums.length -newNums.length
  for(let i=0;i<difference;i++){
    newNums.push('_')
  }
  console.log(k, newNums)
};
removeElement(nums, val);
