// 节流
export default function throttle(fn: { apply: (arg0: any, arg1: any[]) => void }, wait: number = 500) {
  let flag = true;
  return function (this: any, ...args: any) {
    if (flag) {
      fn.apply(this, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, wait);
    }
  }
}