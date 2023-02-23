import React, { useEffect, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { addTodos, getTodos } from '../axios/todos'
import { getUser } from '../util/localstorage'
import { Button, ButtonWrap, CenterWrapper, Input, Label } from './Login'

function CreateForm({ authenticated }: any) {
  const navigate = useNavigate()
  const [isTitle, setTitle] = useState('')
  const [isContent, setContent] = useState('')
  const queryClient = useQueryClient()
  const { isLoading, isError, data } = useQuery('todos', getTodos)
  console.log(data)
  // useEffect(() => {
  //   if (getUser() === null) {
  //     navigate('/login')
  //   }
  // }, [])

  const mutation = useMutation(addTodos, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos') //refetcing  => db갱신 useQuery의 키값 'todos' 다시 불러옴 (키는유니크해야)
      console.log('성공하였습니다.')
    },
  })

  const onhandleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (isTitle === '' || isContent === '') {
      return
    }
    const newUser = {
      id: data.length === 0 ? 1 : data?.pop().id + 1,
      title: isTitle,
      content: isContent,
      done: false,
    }

    // dispatch(todoCreate(newUser as any)) //redux - 리턴되면서 메모리가 바뀜
    // console.log(data.length)
    mutation.mutate(newUser) //react-query
    setTitle('')
    setContent('')
  }
  return (
    <>
      <CenterWrapper>
        <Label>제목</Label>
        <Input
          type="text"
          value={isTitle}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력해주세요"
        />
        <Label>내용</Label>
        <Input
          type="text"
          value={isContent}
          onChange={(e) => setContent(e.target.value)}
          placeholder="내용을 입력해주세요"
        />
        <ButtonWrap>
          <Button
            width="150px"
            fontWeight="600"
            bgColor="#000"
            border="3px solid #fff"
            color="white"
            height="50px"
            onClick={onhandleSubmit}
          >
            작성하기
          </Button>
          <Button
            width="150px"
            fontWeight="600"
            bgColor="#fff"
            border="3px solid black"
            height="50px"
            onClick={() => {
              navigate('/')
            }}
          >
            취소
          </Button>
        </ButtonWrap>
      </CenterWrapper>
    </>
  )
}

export default CreateForm
