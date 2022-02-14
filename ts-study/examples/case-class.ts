/**
 * 클래스는 기본적으로 프로퍼티(greeting), 생성자(constrctor), 메서드(greet)으로 이루어져 있다
 */

class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return `Hello, ${this.greeting}`;
  }
}

let greeter = new Greeter("world");
console.log(greeter);
console.log(greeter.greet());

/**
 * 상속(Inheritance)
 */

class Animal {
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof! Woof!");
  }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();

/**
 * 상속 Extends
 */

class Animal2 {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal2 {
  constructor(name: string) {
    // Animal2의 name프로퍼티에 Snake클래스로 전달된 값을 바인딩
    // super은 반드시 상속받은 클래스(extends Animal2)의 constructer의 인자로만 사용된다.
    super(name);
  }
  move(distanceInMeters = 5) {
    // 이미 super(name)으로 변경된 값이 있으므로 super(name), distanceInMeters가 변경된 값으로 지정된 채 반환됨
    super.move(distanceInMeters);
  }
}

class Horse extends Animal2 {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 45) {
    super.move(distanceInMeters);
  }
}

let sam = new Snake("Sam");
let tom: Animal2 = new Horse("Tomas");
sam.move();
tom.move(34);

/**
 * Private
 */

class AnimalPrivate {
  private name: string = "dog";
  constructor(animalName: string) {
    this.name = animalName;
  }
}
let animalName = new AnimalPrivate("Cat");
// name프로퍼티는 private이기때문에 외부에서 접근이 불가능함
console.log(animalName.name);

/**
 * Protected
 * public과는 다르게 선언한 클래스 안에서만 접근 가능하다
 */

class Person {
  // protected 변수의 경우 자식 클래스에서 this로 호출할 수 있음
  protected name: string;
  // constructor()에 protected가 붙으면 인스턴스화 할 수 없다 ex) new Person('dylan')이러면 오류 발생
  protected constructor(name: string) {
    this.name = name;
  }
}

class Employee extends Person {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name); // 오류

/**
 *  Readonly
 */

class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor(theName: string) {
    this.name = theName;
  }
}
let dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit"; // 오류! name은 읽기전용 입니다.

/**
 * 접근자(Accessors)
 *
 * TypeScript는 객체의 멤버에 대한 접근을 가로채는 방식으로 getters/setters를 지원합니다. 이를 통해 각 객체의 멤버에 접근하는 방법을 세밀하게 제어할 수 있습니다.
 */

const fullNameMaxLength = 10;

class Employee2 {
  private _fullName: string;

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (newName && newName.length > fullNameMaxLength) {
      throw new Error("fullName has a max length of " + fullNameMaxLength);
    }

    this._fullName = newName;
  }
}

let employee = new Employee2();
employee.fullName = "Bob Smith";
if (employee.fullName) {
  console.log(employee.fullName);
}

/**
 * 전역 프로퍼티(static)
 *
 * 인스턴스(constructor)가 아닌 클래스 전체에서 접근 가능한 전역변수
 */

class Grid {
  static origin = { x: 0, y: 0 };
  calculateDistanceFromOrigin(point: { x: number; y: number }) {
    let xDist = point.x - Grid.origin.x;
    let yDist = point.y - Grid.origin.y;
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
  constructor(public scale: number) {}
}

let grid1 = new Grid(1.0); // 1x scale
let grid2 = new Grid(5.0); // 5x scale

console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));

/**
 * 추상 클래스
 * 직접 인스턴스화 할 수 없으며 멤버에 대한 구현 세부정보를 포함할 수 있다
 */

abstract class Animal3 {
  abstract makeSound(): void;
  move(): void {
    console.log("roaming the earth...");
  }
}
