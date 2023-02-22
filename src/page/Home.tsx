import React, { useCallback, useEffect, useState } from 'react'
import { getUser, removeUser } from '../util/localstorage'
import { Button, ButtonWrap } from './Login'
import { CenterWrapper } from './Login'
function Home({ authenticated }: any) {
  console.log('authenticated : ', authenticated)
  const [login, setLogin] = useState(false)
  const fetchUser = useCallback(() => getUser(), [])

  const onListClick = () => {
    alert('List')
  }
  const onCreateClick = () => {
    alert('Click')
  }
  return (
    <CenterWrapper>
      <ButtonWrap>
        {fetchUser() ? (
          <Button
            border="3px solid #000"
            width="150px"
            height="60px"
            onClick={onCreateClick}
          >
            Create +
          </Button>
        ) : null}
        <Button
          bgColor="#000"
          color="#fff"
          width="150px"
          height="60px"
          onClick={onListClick}
        >
          List ☰
        </Button>
      </ButtonWrap>
    </CenterWrapper>
  )
}

export default Home
