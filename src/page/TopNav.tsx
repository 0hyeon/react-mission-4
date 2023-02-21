import { Outlet, useNavigate } from 'react-router-dom'
import { getUser, removeUser } from '../util/localstorage'

const TopNav = ({ children }: any) => {
  const userInfo = getUser()

  const navigate = useNavigate()
  const logoutHandler = () => {
    alert('로그아웃 하시겠습니까?')
    removeUser()
    navigate('/')
  }

  return (
    <div>
      <div>
        {userInfo ? (
          <div>
            <h4>반갑습니다 😃</h4>
            <button onClick={logoutHandler}>로그아웃</button>
          </div>
        ) : (
          <div>
            <button onClick={() => navigate('/login')}>로그인</button>
            <button onClick={() => navigate('/join')}>회원가입</button>
          </div>
        )}
      </div>
      {children || <Outlet />}
    </div>
  )
}

export default TopNav
