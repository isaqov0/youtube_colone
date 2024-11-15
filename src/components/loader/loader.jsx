import { Box, CircularProgress, Stack } from "@mui/material";

const Loader = () => {
  return (
    <Box minWidth={"90vh"}>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"50vh"}
      >
        <CircularProgress />
      </Stack>
    </Box>
  );
};

export default Loader;
