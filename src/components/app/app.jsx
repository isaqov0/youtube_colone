import React from "react";
import { Route, Routes } from "react-router-dom";
import { Channel, Main, Navbar, Search, VideoDetail } from "../";
import { Box } from "@mui/material";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/channel/:id" element={<Channel />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/search/:id" element={<Search />} />
        <Route path="/search/game/video/:id" element={<VideoDetail />} />
      </Routes>
    </Box>
  );
};

export default App;
