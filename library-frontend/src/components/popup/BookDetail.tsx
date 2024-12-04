import { Stack } from "@mui/material";

import { TextField } from "@mui/material";

import { MenuItem } from "@mui/material";
import { useState } from "react";
export default function BookDetail() {
  const [bookDetails, setBookDetails] = useState({
    bookName: "Book Name",
    author: "Author",
    bookYear: "Book Year",
    publisher: "Publisher",
    userScore: "User Score",
    userData: [
      {
        id: "12",
        name: "Engin Karataş",
      },
      {
        id: "21",
        name: "Test User",
      },
    ],
  });
  const [userId, setUserId] = useState<number | null>(null);

  return (
    <Stack spacing={2} padding={1} >
      <TextField
        label="Book Name"
        placeholder="Book Name"
        slotProps={{
          input: {
            readOnly: true,
          },
        }}
        id="filled-disabled"
        value={bookDetails.bookName}
      />
      <TextField
        label="Author"
        placeholder="Author"
        slotProps={{
          input: {
            readOnly: true,
          },
        }}
        id="filled-disabled2"
        value={bookDetails.author}
      />
      <TextField
        label="Book Year"
        placeholder="Book Year"
        slotProps={{
          input: {
            readOnly: true,
          },
        }}
        id="filled-disabled3"
        value={bookDetails.bookYear}
      />
      <TextField
        label="Publisher"
        placeholder="Publisher"
        slotProps={{
          input: {
            readOnly: true,
          },
        }}
        id="filled-disabled4"
        value={bookDetails.publisher}
      />
      <TextField
        label="User Score"
        placeholder="User Score"
        slotProps={{
          input: {
            readOnly: true,
          },
        }}
        id="filled-disabled5"
        value={bookDetails.userScore}
      />

      <TextField
        label="Current Owned By"
        select
        defaultValue={bookDetails.userData[0].id}
        placeholder="Current Owned By"
        onChange={(event) => {
          console.log("changing", event.target.value);
          setUserId(parseInt(event.target.value));
        }}
      >
        {bookDetails.userData.map((user) => {
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
