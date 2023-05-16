import { useParams } from "react-router-dom"

const Channel = () => {
    const params=useParams()
    console.log(params)
    return (
        <div>Channel</div>
    )
}

export default Channel