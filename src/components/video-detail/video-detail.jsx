import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ApiService } from "../../service/api.service"
import ReactPlayer from 'react-player'
import { Box, Chip, Stack, Typography } from "@mui/material"
import { FavoriteOutlined, MarkChatRead, Tag, Visibility } from "@mui/icons-material"
import renderHTML from 'react-render-html'
import Loader from "../loader/loader"
import { Videos } from '../'

const VideoDetail = () => {
    const [videoDeatil, setVideoDetail] = useState(null)
    const [relatedVideo, setRelatedVideo] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await ApiService.fetching(`videos?part=snippet, statistics&id=${id}`)
                setVideoDetail(data.items[0])
                const relatedData = await ApiService.fetching(
                    `search?part=snippet&relatedToVideoId=${id}&type=video`
                )
                setRelatedVideo(relatedData.items)
            } catch (error) {
                console.log(error)
            }
        }

        getData()
    }, [id])

    if (!videoDeatil?.snippet) return <Loader />

    // const {
    //     snippet: { title, channelId, channelTitle, description, tags, thumnails },
    //     statistics: { viewCount, likeCount, commentCount }
    // } = videoDeatil

    return (
        <Box minHeight={'90vh'} mb={10}>
            <Box display={'flex'} sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
                <Box width={{ xs: '100%', md: '75%' }}>
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
                            {parseInt(videoDeatil.statistics.likeCount).toLocaleString()} likes
                        </Stack>
                        <Stack sx={{ opacity: 0.7 }} direction='row' alignItems='center' gap='3px'>
                            <MarkChatRead />
                            {parseInt(videoDeatil.statistics.commentCount).toLocaleString()} comment
                        </Stack>
                    </Stack>
                </Box>
                <Box
                    width={{ xs: '100%', md: '25%' }}
                    px={2}
                    py={{ md: 1, xs: 5 }}
                    justifyContent='center'
                    alignItems='center'
                    overflow={'scroll'}
                    maxHeight={'100vh'}
                >
                    <Videos videos={relatedVideo} />
                </Box>
            </Box>
        </Box>
    )
}

export default VideoDetail