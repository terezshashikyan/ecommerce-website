import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import CopyrightIcon from "@mui/icons-material/Copyright";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Box, IconButton, Typography } from "@mui/material";

function Footer() {
  return (
    <Box sx={{ display: "flex" }}>
      <BottomNavigation
        style={{
          backgroundColor: "#0D0A25",
          color: "white",
          top: "100",
          width: "100%",
        }}
      >
        <IconButton color="inherit" style={{ marginRight: "5%" }}>
          <CopyrightIcon style={{ color: "white" }} />{" "}
          <Typography>2023 ToyLand. All Rights Reserved </Typography>
        </IconButton>
        <IconButton
          onClick={() => window.open("https://www.facebook.com")}
          color="inherit"
        >
          <FacebookIcon style={{ color: "white" }} />
        </IconButton>
        <IconButton
          onClick={() => window.open("https://www.instagram.com")}
          color="inherit"
        >
          <InstagramIcon style={{ color: "white" }} />
        </IconButton>
        <IconButton
          onClick={() => window.open("https://www.whatsapp.com")}
          color="inherit"
        >
          <WhatsAppIcon style={{ color: "white" }} />
        </IconButton>
      </BottomNavigation>
    </Box>
  );
}

export default Footer;
