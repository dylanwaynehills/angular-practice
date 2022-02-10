export interface TodoList {
  active: boolean,
  content: string,
  time: number
}

export const todoList = [
  { active: false, content: '강아지랑 산책가기', time: 9 },
  { active: false, content: '쇼미더머니 생방송 챙겨보기', time: 12 },
  { active: false, content: '친구들 만나기', time: 18 },
]