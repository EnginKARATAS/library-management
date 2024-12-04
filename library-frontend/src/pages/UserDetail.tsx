import { Button, Rating } from "@mui/material";
import { Grid2 as Grid } from "@mui/material";
import "../styles/components/booksPage.scss";
import { useParams } from "react-router-dom";
import { useDialogs } from "@toolpad/core/useDialogs";
import { BasePopup2 } from "../components/popup/BasePopup";
import { useEffect } from "react";
import {
  fetchUserDetails,
  returnBookFromUser,
} from "../store/slices/userSlice";
import { AppDispatch, RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";

export default function UserDetail() {
  const { id } = useParams<{ id: string }>();
  const dialogs = useDialogs();
  const dispatch = useDispatch<AppDispatch>();
  const userDetails = useSelector((state: RootState) => state.user.currentUser);

  useEffect(() => {
    if (id) {
      dispatch(fetchUserDetails(parseInt(id)));
    }
  }, [id, dispatch]);

  const onReturnBookClick = async (bookId: number) => {
    if (id) {
      const result = await dialogs.open(BasePopup2);

      if (result && parseInt(result) <= 5 && parseInt(result) >= 0) {
        await dispatch(
          returnBookFromUser({
            bookId,
            userId: parseInt(id),
            score: parseInt(result || "0"),
          })
        );
        await dialogs.alert(
          `Your have successfully returned, and rated the book with ${Number(
            result
          )}. You're always welcome to Rainbow Library`
        );
      }
    }
  };

  return (
    <Grid
      className="main-container"
      container
      justifyContent="center"
      alignItems="center"
    >
      <div className="operaions-container">
        <h1>{userDetails?.name} Profile</h1>
        <div className="present">
          <h2>Current Books</h2>
          <Grid
            container
            className="books-page-row books-page-header"
            justifyContent="space-between"
          >
            <Grid>#</Grid>
            <Grid>Book Name</Grid>
            <Grid>Actions</Grid>
          </Grid>
          {userDetails?.books?.present.map((presentBook, index) => (
            <Grid
              container
              key={`present-${presentBook.id}-${index}`}
              justifyContent="space-between"
              className="books-page-row"
            >
              <Grid textAlign="center">{index + 1}</Grid>
              <Grid textAlign="left">{presentBook.name}</Grid>
              <Grid textAlign="center">
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => onReturnBookClick(presentBook.id)}
                >
                  Return
                </Button>
              </Grid>
            </Grid>
          ))}
        </div>
        <div className="past">
          <h2>Past Books</h2>
          <Grid
            container
            className="books-page-row books-page-header"
            justifyContent="space-between"
          >
            <Grid>#</Grid>
            <Grid>Book Name</Grid>
            <Grid>Rating</Grid>
          </Grid>
          {userDetails?.books?.past.map((pastBook, index) => (
            <Grid
              container
              key={`past-${pastBook.id}-${index}`}
              justifyContent="space-between"
              className="books-page-row"
            >
              <Grid textAlign="center">{index + 1}</Grid>
              <Grid textAlign="left">{pastBook.name}</Grid>
              <Grid textAlign="left">
                {pastBook.score === -1 ? (
                  "Not Rated"
                ) : (
                  <Rating name="read-only" value={pastBook.score} readOnly />
                )}
              </Grid>
            </Grid>
          ))}
        </div>
      </div>
    </Grid>
  );
}
