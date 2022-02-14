/*

  Defining Types

  변수 선언 뒤에 ' : TypeName'을 선언해주면(해당 코드에서는 User) Javascript 객체가 Intercae User의 형태를 따르고있음을 선언해주는것임
  사실상 interface를 변수 타입으로 바인딩해준다는것이 해당 변수의 타입뿐만아니라 오브젝트의 구조까지 결정해주는것이다. 한마디로 정리하자면 '타입 추론'

  Tip) 한번에 여러 ts파일이 열린 탭을 켜두면 다른 파일이더라도 같은 스코프로 인식되서 sentence error가 발생한다

*/

// interface란 타입스크립트에서 Type(유형)를 설정하는 부분이다
interface User {
  name: string;
  id: number;
  // interface값으로 문자열, 숫자를 넣을 경우 해당 값이 객체를 통해 받은 값과 일치해야함.
  password: "qwer";
}

// typescript const 오류 해결하기 위해서 빈 객체 export
export {};

const user: User = {
  name: "Dylan",
  id: 0,
  password: "qwer",
};

console.log(user);

// Interface 2

interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user2: User = new UserAccount("Murphy", 1);
console.log(user2);
