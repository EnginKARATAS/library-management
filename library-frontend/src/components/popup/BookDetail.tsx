import { Stack } from "@mui/material";

import { TextField } from "@mui/material";

import { MenuItem } from "@mui/material";
import { useState } from "react";
export default function BookDetail() {
  const [userData, setUserData] = useState([
    {
      id: "12",
      name: "Engin Karataş",
    },
    {
      id: "21",
      name: "Test User",
    },
  ]);
  const [userId, setUserId] = useState<number | null>(null);

  return (
    <Stack spacing={2} padding={1}>
      <TextField
        label="Borrow book to"
        select
        defaultValue={userData[0].id}
        placeholder="Select User"
        onChange={(event) => {
          console.log("changing", event.target.value);
          setUserId(parseInt(event.target.value));
        }}
      >
        {userData.map((user) => {
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
