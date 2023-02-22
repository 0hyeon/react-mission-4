import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRoute from '../components/PrivateRoute'
import CreateForm from '../page/CreateForm'
import Home from '../page/Home'
import Join from '../page/Join'
import Login from '../page/Login'
import Product from '../page/Product'
import ProductList from '../page/ProductList'
import TopNav from '../page/TopNav'
import Update from '../page/Update'
import { getUser } from '../util/localstorage'
const Router = () => {
  const userInfo = getUser()
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<TopNav />}>
          <Route path="/" element={<Home authenticated={userInfo} />} />
          <Route
            path="/product"
            element={
              <PrivateRoute authenticated={userInfo} component={<Product />} />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/createform" element={<CreateForm />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/update/:id" element={<Update />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default Router
