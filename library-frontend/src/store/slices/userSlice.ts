
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get("http://localhost:3000/users");
  return response.data;
});

export const fetchUserDetails = createAsyncThunk(
  "users/fetchUserDetails",
  async (userId: number) => {
    const response = await axios.get(`http://localhost:3000/users/${userId}`);
    return response.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
 
  },
});

//export const {   } = userSlice.actions;
export default userSlice.reducer;
