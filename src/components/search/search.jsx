import { Box, Container, Typography } from "@mui/material";
import { colors } from "../../constants/colors";
import Videos from "../videos/videos";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ApiService } from "../../service/api.service";
import Loader from "../loader/loader";

const Search = () => {
  const [videos, setVideos] = useState([]); // Always an array
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      // setError(null); // Reset error state
      try {
        const data = await ApiService.fetching(`search?part=snippet&q=${id}`);
        setVideos(data.items || []); // Ensure videos is an array
      } catch (err) {
        console.error(err);
        // setError("Failed to fetch search results. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [id]);

  return (
    <Box p={2} sx={{ height: "90vh" }}>
      <Container maxWidth={"90%"}>
          <Typography variant="h4" fontWeight="bold" mb={2}>
            Search results for{" "}
            <span style={{ color: colors.secondary }}>{id}</span> videos
          </Typography>
          <Videos videos={videos} />
      </Container>
    </Box>
  );
};

export default Search;
