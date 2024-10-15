export const uuid = () => {
  return 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const findNearNum = (arr: number[], num: number) => {
  let index = 0; // 保存最接近数值在数组中的索引
  let d_value = Number.MAX_VALUE; // 保存差值绝对值，默认为最大数值
  for (let i = 0; i < arr.length; i++) {
    const new_d_value = Math.abs(arr[i] - num); // 新差值
    if (new_d_value <= d_value) {
      // 如果新差值绝对值小于等于旧差值绝对值，保存新差值绝对值和索引
      if (new_d_value === d_value && arr[i] < arr[index]) {
        // 如果数组中两个数值跟目标数值差值一样，取大
        continue;
      }
      index = i;
      d_value = new_d_value;
    }
  }
  return arr[index]; // 返回最接近的数值
};
