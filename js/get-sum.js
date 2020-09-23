/**
 * @description 求范围内（开区间） 3 的倍数的数字之和
 * @param {number[]} arr 排序或乱序的数组
 * @param {number} start 开始范围
 * @param {number} end 结束范围
 * @returns {number} 返回和
 */
const getSumOfTriple = (arr, start, end) => {
        let sum = 0;
	if (!arr) {
		return sum;
	}
	if (start == undefined) {
		start = Math.min.apply(null, arr)+1;
	}
	if (end == undefined) {
		end = Math.max.apply(null, arr)+1;
	}
	for (let i = 0; i <= arr.length-1; ++i) {
		if (arr[i] > start && arr[i] < end && Math.abs(arr[i]) % 3 == 0 ) {
			sum += arr[i];
		}
	}
	return sum;
};

// * ---------------- 实现的效果：

{
  const arr = [5, 8, 3, 9, 4, 7, 1, 2, 6];

  //          [      3  9              6]

  console.log(getSumOfTriple(arr)); // => 18
}

{
  // * arr = [0, 7, 14, 21, ... , 987, 994]
  const arr = Array.from({ length: 143 }, (e, i) => i * 7);

  // 203, 210, 217, 224, 231, 238, ..., 455, 462, 469, 476, 483, 490, 497
  //      210            231       ...       462            483

  console.log(getSumOfTriple(arr, 200, 500)); // => 4851
}
