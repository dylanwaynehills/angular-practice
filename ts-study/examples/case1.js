/*

  Defining Types

  변수 선언 뒤에 ' : TypeName'을 선언해주면(해당 코드에서는 User) Javascript 객체가 Intercae User의 형태를 따르고있음을 선언해주는것임
  사실상 interface를 변수 타입으로 바인딩해준다는것이 해당 변수의 타입뿐만아니라 오브젝트의 구조까지 결정해주는것이다. 한마디로 정리하자면 '타입 추론'

  Tip) 한번에 여러 ts파일이 열린 탭을 켜두면 다른 파일이더라도 같은 스코프로 인식되서 sentence error가 발생한다

*/
var user = {
    name: 'Dylan',
    id: 0,
    password: 'qwer'
};
console.log(user);
