import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../page/Home'
import Join from '../page/Join'
import Login from '../page/Login'
import TopNav from '../page/TopNav'
import { getUser } from '../util/localstorage'
const Router = () => {
  const userInfo = getUser()
  console.log(userInfo)
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<TopNav />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default Router
