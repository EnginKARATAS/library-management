import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type UserBook = {
  id: number;
  name: string;
  books?: {
    past: any[];
    present: any[];
  };
};

type User = Omit<UserBook, "books">;

type SnackbarSeverity = 'success' | 'error' | 'warning' | 'info';

interface SnackbarState {
  open: boolean;
  message: string;
  severity: SnackbarSeverity;
}

interface UserState {
  users: User[] | null;
  currentUser: UserBook | null;
  loading: boolean;
  error: string | null;
  snackbar: SnackbarState;
}

const initialState: UserState = {
  users: [],
  currentUser: null,
  loading: false,
  error: null,
  snackbar: {
    open: false,
    message: '',
    severity: 'info'
  }
};

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

export const borrowBookToUser = createAsyncThunk(
  "users/borrowBookToUser",
  async ({ bookId, userId }: { bookId: number; userId: number }) => {
    const response = await axios.post(
      `http://localhost:3000/users/${userId}/borrow/${bookId}`
    );
    return response;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    showSnackbar: (state, action: { 
      payload: { 
        message: string; 
        severity: SnackbarSeverity;
      }
    }) => {
      state.snackbar = {
        open: true,
        message: action.payload.message,
        severity: action.payload.severity
      };
    },
    closeSnackbar: (state) => {
      state.snackbar.open = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch users";
      })
      .addCase(fetchUserDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchUserDetails.fulfilled,
        (state, action: PayloadAction<UserBook>) => {
          state.loading = false;
          state.currentUser = action.payload;
        }
      )
      .addCase(fetchUserDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch user details";
      });
  },
});

export const { showSnackbar, closeSnackbar } = userSlice.actions;
export default userSlice.reducer;
