export function floor(num: number, decimal?: number) {
  if (!decimal) {
    return Math.floor(num);
  }
  const tenTimes = Math.pow(10, decimal);
  return Math.floor(num * tenTimes) / tenTimes;
}
