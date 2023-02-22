import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState: any = {
  user: [],
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userCreate: (state, action) => {
      //return [...state, action.payload]
      return { user: [...state.user, action.payload] }
      //return [...state.crud, action.payload]
    },
    // todoUpdate: (state, action) => {
    //   return {
    //     crud: [
    //       ...state.crud.map((todo: any) =>
    //         todo.id === action.payload ? { ...todo, done: !todo.done } : todo
    //       ),
    //     ],
    //   }
    // },
    // todoDelete: (state, action) => {
    //   return {
    //     crud: [...state.crud.filter((todo: any) => todo.id !== action.payload)],
    //   }
    // },
  },
  // extraReducers: (builder) => {
  //   //진행중일때
  //   builder.addCase(__getTodos.pending, (state: any, action: any) => {
  //     state.isLoading = true
  //     state.isError = true
  //   })
  //   //완료됐을때
  //   builder.addCase(__getTodos.fulfilled, (state: any, action: any) => {
  //     state.isLoading = false
  //     state.isError = false
  //     state.todos = action.payload
  //   })
  //   //에러시
  //   builder.addCase(__getTodos.fulfilled, (state: any, action: any) => {
  //     state.isLoading = false
  //     state.isError = console.error('error')
  //     state.error = action.payload
  //   })
  // },
})
export default userSlice.reducer //리듀서
export const { userCreate } = userSlice.actions //액션크리에이터
