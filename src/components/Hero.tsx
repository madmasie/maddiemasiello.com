import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import Description from "@mui/icons-material/Description";

export default function Hero() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: 4,
        pb: 2,
        width: "100%",
        maxWidth: "100%",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "darken",
        backgroundColor: "#0005",
        backgroundImage:
          "url(https://www.lawsonphotography.me/wp-content/uploads/2022/10/IMG_6305.jpg)",
      }}
    >
      <Stack
        spacing={2}
        useFlexGap
        sx={{ alignItems: "center", width: { xs: "100%", sm: "70%" } }}
      >
        <Avatar
          alt="Maddie Masiello"
          src="/img/me-big.jpg"
          sx={{
            width: "20vw",
            height: "20vw",
            minWidth: 128,
            minHeight: 128,
            margin: "auto",
          }}
        />
        <Typography variant="h1" color="white">
          Maddie Masiello
        </Typography>
        <Typography variant="h5" color="white">
          Electrical Engineer @ Cal Poly SLO
        </Typography>
        <Button
          variant="contained"
          href="/docs/resume.pdf"
          startIcon={<Description />}
        >
          Resume
        </Button>
      </Stack>
    </Box>
  );
}
