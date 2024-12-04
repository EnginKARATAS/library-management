import { Button, Rating } from "@mui/material";
import { Grid2 as Grid } from "@mui/material";
import "../styles/components/booksPage.scss";
import { useParams } from "react-router-dom";
import { useDialogs } from "@toolpad/core/useDialogs";
import BasePopup from "../components/popup/BasePopup";
import BookDetail from "../components/popup/BookDetail";
import { useEffect } from "react";
import { fetchUserDetails } from "../store/slices/userSlice";
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
      console.log(userDetails)
      
    }
  }, [id, dispatch]);

  const onBookDetailsClick = async (id: number) => {
    const bookId = await dialogs.open(BasePopup, {
      component: <BookDetail bookId={id} />,
      title: "Book Details",
    });

    if (bookId) {
      dialogs.alert(`The book was sent to user with ID: ${bookId}`, {
        title: "Success",
      });
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
        <h1>User Detail</h1>
        <div className="present">
          <Grid
            container
            className="books-page-row books-page-header"
            justifyContent="space-between"
          >
            <Grid>#</Grid>
            <Grid>User Name</Grid>
            <Grid>Details</Grid>
          </Grid>
          {userDetails?.books?.present.map((user, index) => (
            <Grid
              container
              key={user.id}
              justifyContent="space-between"
              className="books-page-row"
            >
              <Grid textAlign="center">{index + 1}</Grid>
              <Grid textAlign="left">{user.name}</Grid>
              <Grid textAlign="center">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    navigate(`/userDetails/${user.id}`);
                  }}
                >
                  Go to Profile
                </Button>
              </Grid>
            </Grid>
          ))}
        </div>
        <div className="past">
          <Grid
            container
            className="books-page-row books-page-header"
            justifyContent="space-between"
          >
            <Grid>#</Grid>
            <Grid>User Name</Grid>
            <Grid>User Score</Grid>
            <Grid>Details</Grid>
          </Grid>
          {userDetails?.books?.present.map((user, index) => (
            <Grid
              container
              key={user.id}
              justifyContent="space-between"
              className="books-page-row"
            >
              <Grid textAlign="center">{index + 1}</Grid>
              <Grid textAlign="left">{user.name}</Grid>
              <Grid textAlign="left">{user.score == -1 ? "Not Rated" : <Rating name="read-only" value={user.score} readOnly />}</Grid>
              <Grid textAlign="center">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    navigate(`/userDetails/${user.id}`);
                  }}
                >
                  Details
                </Button>
              </Grid>
            </Grid>
          ))}
        </div>
      </div>
    </Grid>
  );
}
