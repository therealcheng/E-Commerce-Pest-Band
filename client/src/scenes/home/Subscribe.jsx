import { useState } from "react";
import { Box, InputBase, Divider, Typography, IconButton } from "@mui/material";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  return (
    <Box width="80%" margin="80px auto" textAlign="center">
      <MarkEmailReadOutlinedIcon fontSize="large" />
    </Box>
  );
};

export default Subscribe;
