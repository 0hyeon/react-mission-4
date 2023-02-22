// axios요청들어가는 모든 모듈
import axios from 'axios'

export interface Iusers {
  title?: string
  content?: string
  done?: boolean
  [prop: string]: any
}
const getTodos = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/todos`)
  return response.data
}
const addTodos = async (newTodo: Iusers) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/todos`, newTodo)
}
const deleteTodos = async (id: number) => {
  await axios.delete(`${process.env.REACT_APP_SERVER_URL}/todos/${id}`)
}
const updateTodos = async (el: Iusers) => {
  let doneData = {
    title: el.title,
    content: el.content,
  }
  await axios.patch(
    `${process.env.REACT_APP_SERVER_URL}/todos/${el.id}`,
    doneData
  )
}
export { getTodos, addTodos, deleteTodos, updateTodos }
