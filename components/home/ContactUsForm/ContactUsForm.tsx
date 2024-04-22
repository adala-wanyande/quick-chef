"use client";
import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";

const ContactUsForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState("typing");

  const fullName = firstName + " " + lastName;

  async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    await sendMessage(fullName);
    setStatus("sent");
  }

  // Pretend to send a message.
  function sendMessage(text: string) {
    return new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
  }

  const isSending = status === "sending";
  const isSent = status === "sent";

  if (isSent) {
    console.log(fullName);
  }

  return (
    <Box sx={{ margin: 5 }}>
      <Typography variant="h2">Contact Us</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{margin: 2}}
          disabled={isSending}
          value={firstName}
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          sx={{margin: 2}}
          disabled={isSending}
          value={lastName}
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          onChange={(e) => setLastName(e.target.value)}
        />
        <Box sx={{display:"flex", justifyContent: "center"}}>
          <Button disabled={isSending} variant="contained" type="submit">Send</Button>
        </Box>
        {isSending && <p>Sending...</p>}
      </form>
    </Box>
  );
};

export default ContactUsForm;
