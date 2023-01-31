function condenseArrayToNumber(nums) {
    while (nums.length > 1){
        let condensed = []
        for (let i = 0; i < nums.length; i++) {
            if (i === nums.length - 1) {
                break;
            }
            condensed[i] = nums[i] + nums[i + 1];
        }
        nums = condensed;
    }
    console.log(nums[0])
}
    condenseArrayToNumber([5, 0, 4, 1, 2])