import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

function Join() {
  const [isId, setId] = useState('')
  const [isPassword, setPassword] = useState('')
  const navigate = useNavigate()
  const JoinHandler = async () => {
    console.log(isId, isPassword)
    const body = {
      id: isId,
      password: isPassword,
    }
    axios
      .post(`/register`, body, {
        withCredentials: true,
      })
      .then((res) => {
        alert('회원가입완료')
        navigate('/login')
      })
      .catch((error) => {
        alert(error.response.data.message)
      })
  }
  return (
    <>
      <H1>회원가입</H1>
      <div>아이디</div>
      <input type="text" value={isId} onChange={(e) => setId(e.target.value)} />
      <div>비밀번호</div>
      <input
        type="password"
        value={isPassword}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
        <Button
          width="200px"
          fontWeight="600"
          bgColor="#fff"
          border="3px solid #55EFC4"
          height="50px"
          onClick={JoinHandler}
        >
          화원가입하기
        </Button>
        <Button
          width="200px"
          fontWeight="600"
          bgColor="#fff"
          border="3px solid orange"
          height="50px"
          onClick={() => {
            navigate('/login')
          }}
        >
          로그인
        </Button>
      </div>
    </>
  )
}
const H1 = styled.div`
  font-weight: bold;
  font-size: 25px;
`
export const Button = styled.button<{
  width?: string
  bgColor?: string
  color?: string
  border?: string
  fontWeight?: string
  height?: string
}>`
  border: ${(props) => (props.border ? props.border : null)};
  cursor: pointer;
  border-radius: 8px;
  background-color: ${(props) => (props.bgColor ? props.bgColor : null)};
  color: ${({ color }) => (color ? color : '#000')};
  height: ${(props) => (props.height ? props.height : '45px')};
  padding: 1px 6px;

  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : null)};
  width: ${(props) => (props.width ? props.width : '110px')};
  &:active {
    filter: brightness(50%);
  }
`
export default Join
