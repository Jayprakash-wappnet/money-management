import React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const Copyrights = (props) => {
  return (
    <>
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}s{"."}
      </Typography>
    </>
  );
};

export default Copyrights;
