import { Rating, Stack, Typography } from "@mui/material";

import { TextField } from "@mui/material";

import { MenuItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useEffect, useState } from "react";
import { borrowBookToUser, fetchUserDetails, fetchUsers } from "../../store/slices/userSlice";
import { fetchBookDetails } from "../../store/slices/bookSlice";
import { showSnackbar } from "../../store/slices/userSlice";

export default function BookDetail({ bookId }: { bookId: number }) {
  const bookDetails = useSelector((state: RootState) => state.book.oneBook);
  const users = useSelector((state: RootState) => state.user.users);
  const dispatch = useDispatch<AppDispatch>();
  const [selectedUserId, setSelectedUserId] = useState(0);
  const [username, setUsername] = useState("");
  const [bookBelongingUserId, setBookBelongingUserId] = useState<number | ''>('');

  useEffect(() => {
    dispatch(fetchUsers());
    
    dispatch(fetchUserDetails(bookId)).unwrap().then((data) => {
      console.log(data.id)
        setBookBelongingUserId(data.id);
    });
  }, [dispatch]);

  useEffect(() => {
    if (bookId >= 0) {
      dispatch(fetchBookDetails(bookId));
    }
  }, [dispatch, bookId]);

  const assignBookToUser = (userId: number) => {
    const selectedUser = users?.find((user) => user.id === userId);
    if (selectedUser) {
      setUsername(selectedUser.name);
      setSelectedUserId(userId);
      dispatch(borrowBookToUser({ bookId, userId }))
        .unwrap()
        .then((data) => {
          if (data.status === 204) {
            dispatch(
              showSnackbar({
                message:
                  "Book borrowed successfully, new possesser: " +
                  selectedUser.name,
                severity: "success",
              })
            );
          }
        })
        .catch((err) => {
          dispatch(
            showSnackbar({
              message: "Book already borrowed: " + err.message,
              severity: "error",
            })
          );
        });
    }
  };
  return (
    <Stack spacing={2} padding={1}>
      <span>
        <b>Book Name</b>
      </span>
      <TextField
        required
        id="outlined-required-name"
        value={bookDetails?.name || ''}
        slotProps={{
          input: {
            readOnly: true,
          },
        }}
      />
      <span>
        <b>Author</b>
      </span>
      <TextField
        required
        id="outlined-required-author"
        value={bookDetails?.author || ''}
        slotProps={{
          input: {
            readOnly: true,
          },
        }}
      />
      <span>
        <b>Year</b>
      </span>
      <TextField
        required
        id="outlined-required-year"
        value={bookDetails?.year || ''}
        slotProps={{
          input: {
            readOnly: true,
          },
        }}
      />
      <span>
        <b>Publisher</b>
      </span>
      <TextField
        required
        id="outlined-required-publisher"
        value={bookDetails?.publisher || ''}
        slotProps={{
          input: {
            readOnly: true,
          },
        }}
      />
      {bookDetails?.score && bookDetails?.score >= 0 && (
        <>
          <span>
            <b>Score</b>
          </span>
          <Rating value={Number(bookDetails?.score)} readOnly />
        </>
      )}

      <TextField
        variant="standard"
        select
        value={bookBelongingUserId || ''}
        label="Current Possessor"
        onChange={(event) => {
          assignBookToUser(parseInt(event.target.value));
          setBookBelongingUserId(parseInt(event.target.value));
        }}
      >
        {users?.map((user) => {
          return (
            <MenuItem
              key={user.id}
 
              value={user.id}
            >
              {user.name}
            </MenuItem>
          );
        })}
      </TextField>
    </Stack>
  );
}
