import { Box, Stack } from "@mui/material"
import VideoCard from "../video-card/video-card"
import ChannelCard from "../channel-card/channel-card"
import Loader from "../loader/loader"

const Videos = ({ videos }) => {
    if (!videos.length) {
        return <Loader />
    }
    return (
        <Box
            width={'100%'}
            direction={'row'}
            flexWrap={'wrap'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={2}
        >
            {videos.map(item => (

                <Box key={item.id.videoId}>
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard video={item} />}
                </Box>
            ))}
        </Box>
    )
}

export default Videos