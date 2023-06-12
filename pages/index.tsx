import * as React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { Header } from "@/shared/components/navigation/Header/Header";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Header />
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          うおまーと
        </Typography>
      </Box>
    </Container>
  );
}
