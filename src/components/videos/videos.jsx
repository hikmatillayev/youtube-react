import { Box } from "@mui/material"
import VideoCard from "../video-card/video-card"
import ChannelCard from "../channel-card/channel-card"
import Loader from "../loader/loader"

const Videos = ({ videos }) => {
    console.log(videos)
    if (!videos.length) return <Loader />
    
    return (
        <Box
            width={'100%'}
            gap={2}
            display='grid'
            gridTemplateColumns='repeat(4, 1fr)'
        >
            {videos.map((item, idx) => (

                <Box key={idx} gridColumn='span '>
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard video={item} />}
                </Box>
            ))}
        </Box>
    )
}

export default Videos