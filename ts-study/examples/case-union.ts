/*
  Union

  유니언은 타입이 여러 타입 중 하나일 수 있음을 선언하는 방법임
*/

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

interface Window {
  name: number | string | undefined;
  state: WindowStates
}

export {};
const window: Window = {
  name: 'full-glass',
  state: 'closed'
};

console.log(window)



// obj는 stinrg이거나 array일 수 있다
function getLength(obj: string | string[]) {
  return obj.length;
}