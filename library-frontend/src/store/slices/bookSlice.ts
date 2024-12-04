import { createSlice } from '@reduxjs/toolkit';

interface BookState {
  id: number | null;
  name: string | null;
}

const initialState: BookState = {
  id: null,
  name: null,
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
 
  },
});

//export const {  } = bookSlice.actions;
export default bookSlice.reducer;
