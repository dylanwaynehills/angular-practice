/**
 * Generics
 * 
 * 제네릭은 타입에 변수(가변성)를 제공하는 방법이다.
 * 배열이 일반적인 예시이며, 제네릭이 없는 배열은 어떤 것이든 포함할 수 있다.
 * 제네릭이 있는 배열은 배열 안의 값을 설명할 수 있다.
 */
 export {};

// 왼쪽에서부터 순서대로 인자타입은 any, 반환하는 타입도 any
function identity(arg: any): any {
  return arg;
}

const res = identity(1);

console.log(res)
// 반환하는 타입이 any이기때문에 문자열에만 사용가능한 split()을 사용 가능(any->number이면 오류발생)
console.log(res.split(''))





// 함수명 뒤에 <T>를 붙이면 이 함수는 generics함수라는것을 의미힌다. 또한 <T> 말고도 다른 이름이 들어올 수도 있다
function identity2<T>(arg: T): T {
  return arg;
}

const res2 = identity2(1);
// res2에 바인딩된 '1'는 number이므로 split()을 사용할 수 없음
console.log(res2.split(''))

const res3 = identity2('gExample');
// 이번에는 res3에 바인딩 된 'gExample'인 문자열이므로 자동으로 타입을 감지해 split()을 사용할 수 있음
console.log(res3.split(''))

/**
 * 제너릭 타입 정보가 동적으로 결정된다는 것은 이런 뜻이다.
 * 위와 같이 함수가 호출될 때 타입이 유연하게 결정된다.
 * 
 * any를 쓰는 것은 함수의 arg가 어떤 타입이든 받을 수 있다는 점에서 포괄적이지만, 대신에 함수가 반환될 때 타입을 잃게된다.
 * 따라서 generics는 "실제로 무엇이 반환되는지 표시하기 위해" 인수의 타입을 캡처하여 반환 후에도 해당 값의 타입을 유지시킨다.
 * 변수이던, 함수의 인자값이던, 함수의 반환값이던, 방식에 구애받지않고 타입을 확정시켜 코드의 안정성을 높이기위한 타입스크립트에 목적에 걸맞는 선언방식이다.
 * 
 * 더 정확히는 함수를 실제로 실행시키기도 전에 코드의 유효성을 보장받을 수 있는 방식이라고 할 수 있다.
 */




const checkStringLength = <T> (string: T) => {
  // 아직 <T>의 타입이 확정되지 않았기때문에 length를 사용할 수 없음
  if(string.length>300) {
    return '300자 이하로 작성해주세요.';
  } 
  else {
    return true;
  }
}




interface LengthType {
  length: number;
}

const checkStringLength2 = <T extends LengthType> (string: T) => {
  // 아직 <T>의 타입이 확정되지 않았기때문에 length를 사용할 수 없음
  if(string.length>300) {
    return '300자 이하로 작성해주세요.';
  } 
  else {
    return true;
  }
}




// 제너릭 함수의 제약조건으로 number | string을 걸어준다. interface와 같은맥락
const checkStringLength3 = <T extends number | string> (size: T) => {
  let arr = []; 
  for (let i=0; i<size; i++) {
    arr.push(i);
  }
  return arr;
}

// 아래처럼 object나 boolean을 인자값으로 넣을시 오류가 발생
console.log(checkStringLength3([name: 'arr']))
console.log(checkStringLength3(true))



// 제너릭의 K는 T의 키값으로만 제한하였다
const checkObjectKey = <T extends object, K extends keyof T>(obj: T, key: K) => {
  return obj[key]
}