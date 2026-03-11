// 防抖
export default function debounce(fn: { apply: (arg0: any, arg1: any) => void }, wait: number) {
  let timeId: any = null;
  const delay = wait || 500;
  return function (this: any, ...args: any) {
    if (timeId) {
      clearTimeout(timeId);
    }
    timeId = setTimeout(() => {
      timeId = null;
      fn.apply(this, args);
    }, delay);
  }
}