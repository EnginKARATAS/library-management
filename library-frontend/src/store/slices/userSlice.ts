import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  id: number | null;
  name: string | null;
}

const initialState: UserState = {
  id: null,
  name: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
 
  },
});

//export const {  } = userSlice.actions;
export default userSlice.reducer;
