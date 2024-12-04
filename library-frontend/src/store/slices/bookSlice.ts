import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { borrowBookToUser } from "./userSlice";

type Book = {
  id: number;
  name: string;
  score: string;
};

type OneBook = Omit<Book, "score"> & {
  id: number;
  name: string;
  score?: number;
  author?: string;
  year?: string;
  publisher?: string;
};

interface BookState {
  books: Book[] | null;
  oneBook: OneBook | null;
  loading: boolean;
  error: string | null;
}

const initialState: BookState = {
  books: [],
  oneBook: null,
  loading: false,
  error: null,
};

export const fetchBooks = createAsyncThunk<Book[]>(
  "books/fetchBooks",
  async () => {
    const response = await axios.get("http://localhost:3000/books");
    return response.data;
  }
);

export const fetchBookDetails = createAsyncThunk(
  "books/fetchBookDetails",
  async (bookId: number) => {
    if (!bookId && bookId !== 0) {
      throw new Error("Book ID is required");
    }
    const response = await axios.get(`http://localhost:3000/books/${bookId}`);
    console.log(response.data);
    return response.data;
  }
);

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(borrowBookToUser.fulfilled, (state, action) => {
        const bookId = action.meta.arg.bookId;
        if (state.books) {
          state.books = state.books.filter(book => book.id !== bookId);
        }
      })
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action: PayloadAction<Book[]>) => {
        state.loading = false;
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch users";
      })
      .addCase(fetchBookDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchBookDetails.fulfilled,
        (state, action: PayloadAction<OneBook>) => {
          state.loading = false;
          state.oneBook = action.payload;
        }
      )
      .addCase(fetchBookDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch book details";
      });
  },
});

//export const {  } = bookSlice.actions;
export default bookSlice.reducer;
