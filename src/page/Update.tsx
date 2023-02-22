import React, { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { getTodos, updateTodos } from '../axios/todos'
import { Button, ButtonWrap, CenterWrapper, H1, Input, Label } from './Login'
function Update() {
  let params = useParams()
  const navigate = useNavigate()
  const { isLoading, isError, data } = useQuery('todos', getTodos)
  const [isTitle, setTitle] = useState('')
  const [isContents, setCotents] = useState('')
  const queryClient = useQueryClient()

  const mutationUpdate = useMutation(updateTodos, {
    onSuccess: () => {
      navigate('/productlist')
    },
  })
  const ModifyClick = (el: any) => {
    let sendData = {
      id: el.id,
      title: isTitle,
      content: isContents,
    }
    mutationUpdate.mutate(sendData)
  }
  let setData = data
    ?.filter((todo: any) => todo.id === Number(params.id))
    .map((el: any) => el)
  console.log(isTitle)
  console.log(isContents)
  return (
    <>
      <CenterWrapper>
        <H1>수정하기</H1>
        {setData?.map((el: any) => {
          return (
            <div key={el.id}>
              <Label>제목</Label>
              <Input
                type="text"
                defaultValue={el.title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Label>내용</Label>
              <Input
                type="text"
                defaultValue={el.content}
                onChange={(e) => setCotents(e.target.value)}
              />
              <ButtonWrap>
                <Button
                  width="150px"
                  fontWeight="600"
                  bgColor="#000"
                  border="3px solid #fff"
                  color="white"
                  height="50px"
                  onClick={() => ModifyClick(el)}
                >
                  저장
                </Button>
                <Button
                  width="150px"
                  fontWeight="600"
                  bgColor="#fff"
                  border="3px solid #000"
                  color="#000"
                  height="50px"
                  onClick={() => navigate(-1)}
                >
                  취소
                </Button>
              </ButtonWrap>
            </div>
          )
        })}
      </CenterWrapper>
    </>
  )
}

export default Update
