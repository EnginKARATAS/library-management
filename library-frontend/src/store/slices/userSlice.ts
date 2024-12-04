import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

type UserBook = {
  id: number;
  name: string;
  books?: {
    past: any[];
    present: any[];
  };
}

type User = Omit<UserBook, 'books'>;

interface UserState {
  users: User[] | null;
  currentUser: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  currentUser: null,
  loading: false,
  error: null,
};


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
});

//export const {   } = userSlice.actions;
export default userSlice.reducer;
