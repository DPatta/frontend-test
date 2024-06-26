import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: number;
  title : string
  name: string;
  lastname: string;
  birthDate : string
  nationality : string
  nationalId : number
}

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: JSON.parse(localStorage.getItem('users') || '[]'),
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state : UserState, action: PayloadAction<User>) => {
      state.users.push(action.payload);
      localStorage.setItem('users', JSON.stringify(state.users));
    },
    updateUser: (state : UserState, action: PayloadAction<{ id: number; data: User }>) => {
      const { id, data } = action.payload;
      const index = state.users.findIndex((user : User) => user.id === id);
      if (index !== -1) {
        state.users[index] = data;
        localStorage.setItem('users', JSON.stringify(state.users));
      }
    },
    deleteUser: (state : UserState, action: PayloadAction<number>) => {
      state.users = state.users.filter((user : User) => user.id !== action.payload);
      localStorage.setItem('users', JSON.stringify(state.users));
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
