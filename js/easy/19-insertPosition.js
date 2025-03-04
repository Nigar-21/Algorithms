const nums = [1,3,5,6], target = 2
const insertPosition = (nums, target) => {

  if (nums.includes(target)) {
    return nums.indexOf(target);
  } else {for (let index = 0; index < nums.length; index++) {
    if (nums[index] > target) {
        return index;
    }
    else {
        return nums.length;
    }
    
}
}
}

console.log(insertPosition(nums, target));
