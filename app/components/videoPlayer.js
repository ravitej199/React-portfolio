'use client'
// import '../../../../../global'
import Image from 'next/image'
import Sound from '../../public/images/sound.svg'
import Play from '../../public/images/play1.svg'
import Pause from '../../public/images/pause.svg'
import Rewind from '../../public/images/rewind.svg'
import Forward from '../../public/images/forward.svg'
import Mute from '../../public/images/muted.svg'
import { useRef, useState} from 'react'

export default function VideoPlayer({ src }) {
    const videoRef = useRef(null)
    const intervalRef = useRef(null)
    const [state, setState] = useState({ progress: 0, sound: 100, play: false })
    const { progress, sound, play } = state

    function action(task, value){
        if(videoRef.current && videoRef.current.readyState != 0){
            switch(task){
                case "start" : 
                    start();
                    break;
                case "pause" : 
                    pause();
                    break; 
                case "forward" :
                    forward();
                    break;
                case "rewind":
                    rewind();
                    break;
                case "move" :
                    move(value);
                    break;
                case "volume" :
                    volume(value);
                    break;
            }
        }else{
            console.error(`cannot ${task}, audio source error`)
        }
    }

    function start() {
        if (videoRef) {    
            videoRef.current.play()
            intervalRef.current = setInterval(() => setState({ ...state, play: !play, sound: videoRef?.current?.volume * 100, progress: (Math.floor((100 / videoRef?.current?.duration) * videoRef?.current?.currentTime)) }), 10)
        }
    }

    function pause() {
        if (videoRef) {
            setState({ ...state, play: !play })
            videoRef.current.pause()
            clearInterval(intervalRef.current)
        }
    }

    function rewind(){ 
        videoRef.current.currentTime -= 15; 
        setState({ ...state, progress: (Math.floor((100 / videoRef.current.duration) * videoRef.current.currentTime)) }) 
    }

    function forward(){ 
        videoRef.current.currentTime += 15; 
        setState({ ...state, progress: (Math.floor((100 / videoRef.current.duration) * videoRef.current.currentTime)) }) 
    }

    function move(value){
        setState({ ...state, progress: value }); 
        videoRef.current.currentTime = value * videoRef.current.duration / 100
    }

    function volume(value){ 
        videoRef.current.volume = value / 100; 
        setState({ ...state, sound: value }) 
    }
    
    function time(secs) {
        let hour = Math.floor(secs / 3600)
        let min = Math.floor((secs / 3600 - hour) * 60)
        let sec = Math.round(((secs / 3600 - hour) * 60 - min) * 60)
        return `${hour}:${min}:${sec}`
    }

    return (
        <>
        <div className='relative'>
            <video src={src} className='relative w-full h-auto'  ref={videoRef} onClick={() => play ? action("pause") : action("start")}>video</video>
            {src && <div className="max-md:!block flex justify-center max-md:w-full w-full absolute max-md:-bottom-10 bottom-10">
                <div className="max-md:w-[85vw] flex bg-blue-800 gap-2 h-16 p-4 self-center w-[70vw] rounded-lg items-center text-white opacity-10 max-md:scale-[0.6] scale-1 max-md:opacity-70 hover:opacity-70 transition delay-[500ms] hover:delay-0 duration-500">
                    <Image src={sound < 1 || videoRef?.current?.muted ? Mute : Sound} alt={'Sound'} width={30} onClick={() => { videoRef.current.muted = !videoRef.current.muted }} />
                    {videoRef.current && !videoRef.current.muted && <input className='min-w-0 accent-white opacity-60 hover:opacity-70' type="range" value={sound} onChange={(e) => action("volume", e.target.value)} />}
                    <Image src={Rewind} alt={'rewind'} width={20} onClick={() => action("rewind")} />
                    <Image src={play ? Pause : Play} alt={'play / pause'} onClick={() => play ? action("pause") : action("start")} />
                    <Image src={Forward} alt={'forward'} width={20} onClick={() => action("forward")} />
                    {videoRef.current && time(videoRef.current.currentTime)}
                    <input className='max-md:w-full w-screen max-md:w-full accent-white opacity-60 hover:opacity-70 ' type="range" value={progress} onChange={(e) =>action("move", e.target.value)} />
                    {videoRef.current && time(videoRef.current.duration)}
                    {/* <Image src={Max} alt={'screen'} width={30} onClick={() => videoRef.current.classList.toggle("object-cover")} /> */}
                    {/* <Image src={List} alt={'list'} width={30}  onClick={()=>{listRef.current.classList.toggle('!block');fetchAsset(collegeCode)}} /> */}
                </div>
            </div>}
        </div>
        </>
    )
}