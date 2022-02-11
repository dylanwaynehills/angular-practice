export interface TodoList {
  active: boolean;
  content: string;
  time: {
    hour: number;
    minutes: number | string;
  };
}

export const todoList = [
  {
    active: false,
    content: '강아지랑 산책가기',
    time: {
      hour: 9,
      minutes: 30,
    },
  },
  {
    active: false,
    content: '쇼미더머니 생방송 챙겨보기',
    time: {
      hour: 12,
      minutes: '00',
    },
  },
  {
    active: false,
    content: '친구들 만나기',
    time: {
      hour: 18,
      minutes: 15,
    },
  },
];
