/*
  Union

  유니언은 타입이 여러 타입 중 하나일 수 있음을 선언하는 방법임
*/

interface Window {
  windowName: number | string | undefined;
  windowStates: WindowStates
}

const window: Window = {
  windowName: 'full-glass',
  windowStates: 'closed'
};

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

// function getLength(obj: string | string[]) {
//   return obj.length;
// }

console.log(window)