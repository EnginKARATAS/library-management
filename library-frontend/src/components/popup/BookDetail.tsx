import { Stack } from "@mui/material";

import { TextField } from "@mui/material";

import { MenuItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useEffect, useState } from "react";
import { borrowBookToUser, fetchUsers } from "../../store/slices/userSlice";
import { fetchBookDetails } from "../../store/slices/bookSlice";
import { showSnackbar } from "../../store/slices/userSlice";

export default function BookDetail({ bookId }: { bookId: number }) {
  const bookDetails = useSelector((state: RootState) => state.book.oneBook);
  const users = useSelector((state: RootState) => state.user.users);
  const dispatch = useDispatch<AppDispatch>();
  const [selectedUserId, setSelectedUserId] = useState(0);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    console.log("Current bookId:", bookId);
    if (bookId >= 0) {
      dispatch(fetchBookDetails(bookId));
    }
  }, [dispatch, bookId]);

  const setUserId = (userId: number) => {
    setSelectedUserId(userId);
    dispatch(borrowBookToUser({ bookId, userId })).then((result) => {
      dispatch(
        showSnackbar({
          message:
            "Book borrowed successfully, new possesser: " + selectedUserId,
          severity: "success",
        })
      );
    });
  };
  return (
    <Stack spacing={2} padding={1}>
      <TextField
        placeholder={bookDetails?.name}
        slotProps={{
          input: {
            readOnly: true,
          },
        }}
        id="filled-disabled"
        value={bookDetails?.name}
      />
      <TextField
        placeholder="Author"
        slotProps={{
          input: {
            readOnly: true,
          },
        }}
        id="filled-disabled2"
        value={bookDetails?.author}
      />
      <TextField
        placeholder="Book Year"
        slotProps={{
          input: {
            readOnly: true,
          },
        }}
        id="filled-disabled3"
        value={bookDetails?.year}
      />
      <TextField
        placeholder="Publisher"
        slotProps={{
          input: {
            readOnly: true,
          },
        }}
        id="filled-disabled4"
        value={bookDetails?.publisher}
      />
      {bookDetails?.score && bookDetails?.score >= 0 && (
        <TextField
          placeholder={bookDetails?.score.toString()}
          slotProps={{
            input: {
              readOnly: true,
            },
          }}
          id="filled-disabled5"
          value={bookDetails?.score}
        />
      )}

      <TextField
        select
        defaultValue={1}
        placeholder="Currently Owned By"
        onChange={(event) => {
          console.log("changing", event.target.value);
          setUserId(parseInt(event.target.value));
        }}
      >
        {users?.map((user) => {
          return (
            <MenuItem key={user.id} value={user.id}>
              {user.name}
            </MenuItem>
          );
        })}
      </TextField>
    </Stack>
  );
}
