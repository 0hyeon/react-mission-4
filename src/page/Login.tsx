import axios from 'axios'
import React, { useState } from 'react'
import styled from 'styled-components'

function Login() {
  const [isId, setId] = useState('')
  const [isPassword, setPassword] = useState('')
  const LoginHandler = async () => {
    const response = await axios.post(
      `${process.env.MOCK_SERVER_URL}/login`,
      {
        id: isId,
        password: isPassword,
      },
      { withCredentials: true }
    )
    console.log(response)
    alert('로그인 요청보냄')
  }
  return (
    <>
      <H1>로그인하기</H1>
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
          color="red"
          border="3px solid #55EFC4"
          height="50px"
          onClick={LoginHandler}
        >
          로그인
        </Button>
        <Button
          width="200px"
          fontWeight="600"
          bgColor="#fff"
          color="red"
          border="3px solid orange"
          height="50px"
          onClick={() => {
            alert('버튼을 만들어보세요')
          }}
        >
          회원가입
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
export default Login
