import { Box, Button, Container, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ApiService } from "../../service/api.service";
import ChannelCard from "../channel-card/channel-card";
import Videos from "../videos/videos";

const Channel = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [video, setVideo] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getData = async () => {
      try {
        const detaChannel = await ApiService.fetching(
          `channels?part=snippet&id=${id}`
        );
        setChannelDetail(detaChannel.items[0]);
        const channelVideo = await ApiService.fetching(
          `search?part=snippet&channelId=${id}`
        );
        setVideo(channelVideo?.items);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);
  return (
    <Box maxHeight={"95vh"} mt={"1vh"}>
      <Box>
        <Box 
        width={'100%'}
        height={'200px'}
        zIndex={10}
        sx={{
            backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        }}
        />
        <ChannelCard video={channelDetail} marginTop={"-100px"}/>
        <Container>
            <Videos videos={video}/>
        </Container>
      </Box>
    </Box>
  );
};
export default Channel;
