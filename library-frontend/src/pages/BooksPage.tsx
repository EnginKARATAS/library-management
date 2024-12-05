import { Button } from "@mui/material";
import { Grid2 as Grid } from "@mui/material";
import "../styles/components/booksPage.scss";
//import { useNavigate } from "react-router-dom";
import { useDialogs } from "@toolpad/core/useDialogs";
import BasePopup from "../components/popup/BasePopup";
import BookDetail from "../components/popup/BookDetail";
import { AppDispatch, RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBooks } from "../store/slices/bookSlice";
export default function BooksPage() {
  //const navigate = useNavigate();
  const books = useSelector((state: RootState) => state.book.books);
  const dispatch = useDispatch<AppDispatch>();
  const dialogs = useDialogs();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const onBookDetailsClick = async (id: number) => {
    const bookId = await dialogs.open(BasePopup, {
      component: <BookDetail bookId={id} />,
      title: "Book Details",
      bookId: id,
    });

    if (bookId) {
      dialogs.alert(`The book was sended to user with ID: ${bookId}`, {
        title: "Success",
      });
    }
  };
  return (
    <Grid
      className="main-container"
      container
      justifyContent="center"
    >
      <div className="operaions-container">
        <h1>Book List</h1>
        <Grid
          container
          className="books-page-row books-page-header"
          justifyContent="space-between"
        >
          <Grid>#</Grid>
          <Grid>Book Name</Grid>
          <Grid>Author</Grid>
          <Grid>Publisher</Grid>
          <Grid>Year</Grid>
          <Grid>Score</Grid>
          <Grid>Book Detail</Grid>
        </Grid>
        {books?.map((book, index) => (
          <Grid
            container
            key={book.id}
            justifyContent="space-between"
            className="books-page-row"
          >
            <Grid>{index + 1}</Grid>
            <Grid>{book.name}</Grid>
            <Grid>{book.author}</Grid>
            <Grid>{book.publisher}</Grid>
            <Grid>{book.year}</Grid>
            <Grid>{book.score}</Grid>
            <Grid>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  onBookDetailsClick(book.id);
                }}
              >
                Details
              </Button>
            </Grid>
          </Grid>
        ))}
      </div>
    </Grid>
  );
}
