import { Button } from "@mui/material";
import { Grid2 as Grid } from "@mui/material";
import "../styles/components/booksPage.scss";
import { useParams } from "react-router-dom";
import {
  useDialogs,
} from "@toolpad/core/useDialogs";
import BasePopup from "../components/popup/BasePopup";
import BookDetail from "../components/popup/BookDetail";
export default function UserDetail() {
  const { id } = useParams<{ id: string }>();
  const dialogs = useDialogs();

  const onBookDetailsClick = async (id: number) => {
    const bookId = await dialogs.open(BasePopup, {
      component: <BookDetail />,
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
        <p>User ID: {id}</p>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onBookDetailsClick(Number(id))}
        >
          Show Book Details
        </Button>
      </div>
    </Grid>
  );
}
