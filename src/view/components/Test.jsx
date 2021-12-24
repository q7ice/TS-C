function findMinMax(numbers) {
  let min = 0;
  let max = 0;
  for (let i = 1; i < numbers.length; i += 1) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return { min, max };
}

function solution(numbers) {
  let { min, max } = findMinMax(numbers);
  while (min !== max) {
    let i = 0;
    while (i < numbers.length) {
      if (numbers[i] > min) {
        numbers[i] -= min;
        i += 1;
      } else {
        numbers[i] = max - numbers[i];
      }
    }
    const { min: newMin, max: newMax } = findMinMax(numbers);
    min = newMin;
    max = newMax;
  }
}
