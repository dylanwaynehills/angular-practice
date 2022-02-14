/**
 * Union
 * 
 * 유니언은 타입이 여러 타입중 하나일 수 있음을 선언하는 방법이다.
 */

interface Window {
  name: number | string | undefined;
  state: WindowStates
}

export {};
const window: Window = {
  name: 'full-size-glass',
  state: 'closed'
};

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

console.log(window)



// string[]은 배열안에 있는 원소의 타입이 문자열임을 뜻함
function getLength(obj: string | string[]) {
  return obj.length;
}