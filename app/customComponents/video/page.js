import { videoSrc } from "@/public/data/projectData"
import VideoPlayer from "@/app/components/videoPlayer"

export default function VideoComponent(){
    return(
    <div className="w-[80vw] ml-[10vw]">
        <VideoPlayer src={videoSrc}/>
    </div>
    )
}