import React from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useNavigation } from 'react-router-dom'
import { deleteTodos, getTodos } from '../axios/todos'
import { CenterWrapper } from './Login'

function ProductList() {
  const navigation = useNavigation()
  const { isLoading, isError, data } = useQuery('todos', getTodos)
  console.log(data)

  const queryClient = useQueryClient()
  const mutationDel = useMutation(deleteTodos, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos')
      console.log('성공하였습니다.')
    },
  })
  const RemoveClick = (id: number) => {
    if (window.confirm('정말 삭제하시겠습니까 ?')) {
      mutationDel.mutate(id)
    }
  }
  const UpdateClick = (id: number) => {}
  return (
    <>
      <CenterWrapper>
        {data?.map((el: any) => {
          return (
            <div key={el.id}>
              id : {el.id} title : {el.title} content : {el.content}
              &nbsp;
              <button onClick={() => RemoveClick(el.id)}>삭제</button>
              <button onClick={() => UpdateClick(el.id)}>수정</button>
            </div>
          )
        })}
      </CenterWrapper>
    </>
  )
}

export default ProductList
