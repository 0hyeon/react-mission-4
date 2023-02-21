import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../page/Home'
import Join from '../page/Join'
import Login from '../page/Login'
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Router
