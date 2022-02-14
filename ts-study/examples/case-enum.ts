/**
 * 숫자 열거형(numberic)
 */

// Up이 1로 초기화된 숫자 열거형을 선언했고 그 지점부터 뒤따르는 멤버들은 자동으로 1씩 증가한 값을 갖는다
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

// 열겨형에 접근하려면 해당 열거형 자체에서 프로퍼티로 접근하면 된다
enum Response2 {
  No = 0,
  Yes = 1,
}

// 이걸 왜 써야하는지 모르겠음. union, interface가 있는데 굳이?
function respond(recipient: string, message: Response): void {}
respond("Princess Caroline", Response2.Yes);

/**
 * 문자열 열거형(string)
 * 이 경우 숫자 열거형처럼 자동 증가하는 기능은 없지만 직렬화에 유리하다
 */

enum Direction2 {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

/**
 * 인터페이스에 접목해서 활용
 */

enum ShapeKind {
  Circle,
  Square,
}

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}

let c: Circle = {
  kind: ShapeKind.Square, // 오류! 'ShapeKind.Circle' 타입에 'ShapeKind.Square' 타입을 할당할 수 없습니다.
  radius: 100,
};
