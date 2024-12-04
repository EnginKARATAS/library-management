import { Button } from "@mui/material";
import { Grid2 as Grid } from "@mui/material";
import "../styles/components/booksPage.scss";
//import { useNavigate } from "react-router-dom";
import { useDialogs } from "@toolpad/core/useDialogs";
import BasePopup from "../components/popup/BasePopup";
import BookDetail from "../components/popup/BookDetail";
import { useNavigate } from "react-router-dom";
export default function UsersPage() {
  const navigate = useNavigate();
  const users = [
    { id: 1, name: "Engin Karataş" },
    { id: 2, name: "Test User" },
  ];

  const dialogs = useDialogs();

  const onBookDetailsClick = async (id: number) => {
    const bookId = await dialogs.open(BasePopup, {
      component: <BookDetail />,
      title: "Book Details",
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
      alignItems="center"
    >
      <div className="operaions-container">
        <h1>Users List</h1>
        <Grid
          container
          className="books-page-row books-page-header"
          justifyContent="space-between"
        >
          <Grid>#</Grid>
          <Grid>User Name</Grid>
          <Grid>Details</Grid>
        </Grid>
        {users.map((user, index) => (
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
                  navigate(`/users/${user.id}`);
                }}
              >
                Go to Profile 
              </Button>
            </Grid>
          </Grid>
        ))}
      </div>
    </Grid>
  );
}
