import React from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { deleteTodos, getTodos } from '../axios/todos'
import { Button, ButtonWrap, CenterWrapper } from './Login'
import { getUser } from '../util/localstorage'
function ProductList() {
  const { isLoading, isError, data } = useQuery('todos', getTodos)
  const userInfo = getUser()
  const navigation = useNavigate()
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
  const UpdateClick = (id: number) => {
    navigation(`/update/${id}`)
  }
  const onClickBack = () => {
    navigation(-1)
  }
  return (
    <>
      <CenterWrapper>
        {data &&
          data?.map((el: any) => {
            return (
              <EleWrapper key={el.id}>
                <EleInner>
                  <EleInnerEl>ID : {el.id} </EleInnerEl>
                  <EleInnerEl>Title : {el.title}</EleInnerEl>
                  <EleInnerEl>Content : {el.content}</EleInnerEl>
                </EleInner>
                &nbsp;
                {}
                {/* {userInfo !== null && ( */}
                <ButtonWrap>
                  <Button
                    width="50px"
                    bgColor="#000"
                    color="#fff"
                    onClick={() => RemoveClick(el.id)}
                  >
                    삭제
                  </Button>
                  <Button
                    width="50px"
                    bgColor="#fff"
                    color="#000"
                    border="2px solid #000"
                    onClick={() => UpdateClick(el.id)}
                  >
                    수정
                  </Button>
                </ButtonWrap>
                {/* )} */}
              </EleWrapper>
            )
          })}
        <Button bgColor="black" color="#fff" onClick={onClickBack}>
          뒤로가기
        </Button>
      </CenterWrapper>
    </>
  )
}
const EleWrapper = styled.div`
  border: 3px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 15px;
`
const EleInner = styled.div`
  margin-right: 15px;
  padding: 5px;
`
const EleInnerEl = styled.div`
  margin-bottom: 7px;
`
export default ProductList
