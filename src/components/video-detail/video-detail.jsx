import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ApiService } from "../../service/api.service"
import ReactPlayer from 'react-player'
import { Box, Chip, Stack, Typography } from "@mui/material"
import { FavoriteOutlined, MarkChatRead, Tag, Visibility } from "@mui/icons-material"
import renderHTML from 'react-render-html'

const VideoDetail = () => {
    const [videoDeatil, setVideoDetail] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await ApiService.fetching(`videos?part=snippet, statistics&id=${id}`)
                setVideoDetail(data.items[0])
                console.log(data.items[0])
            } catch (error) {
                console.log(error)
            }
        }

        getData()
    }, [id])

    // const {
    //     snippet: { title, channelId, channelTitle, description, tags, thumnails },
    //     statistics: { viewCount, likeCount, commentCount }
    // } = videoDeatil

    return (
        <Box minHeight={'90vh'} mb={10}>
            <Box display={'flex'}>
                <Box width={'75%'}>
                    <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${id}`}
                        className='react-player'
                        controls
                    />
                    {
                        videoDeatil.snippet.tags.map((item, idx) => (
                            <Chip
                                label={item}
                                key={idx}
                                sx={{ marginTop: '10px', cursor: 'pointer', ml: '10px' }}
                                deleteIcon={<Tag />}
                                onDelete={() => { }}
                                variant="outlined"
                            />
                        ))
                    }
                    <Typography variant="h5" fontWeight='bold' p={2}>
                        {videoDeatil.snippet.title}
                    </Typography>
                    <Typography variant="subtitle2" p={2} sx={{ opacity: '.7' }}>
                        {renderHTML(videoDeatil.snippet.description)}
                    </Typography>
                    <Stack direction='row' gap='20px' alignItems='center' py={1} px={2}>
                        <Stack sx={{ opacity: 0.7 }} direction='row' alignItems='center' gap='3px'>
                            <Visibility />
                            {parseInt(videoDeatil.statistics.viewCount).toLocaleString()} views
                        </Stack>
                        <Stack sx={{ opacity: 0.7 }} direction='row' alignItems='center' gap='3px'>
                            <FavoriteOutlined />
                            {parseInt(videoDeatil.statistics.viewCount).toLocaleString()} views
                        </Stack>
                        <Stack sx={{ opacity: 0.7 }} direction='row' alignItems='center' gap='3px'>
                            <MarkChatRead />
                            {parseInt(videoDeatil.statistics.viewCount).toLocaleString()} views
                        </Stack>
                    </Stack>
                </Box>
                <Box width={'25%'}>Suggested video</Box>
            </Box>
        </Box>
    )
}

export default VideoDetail