'use client'

import Image from 'next/image'
import Sound from '../../public/images/sound.svg'
import Play from '../../public/images/play1.svg'
import Pause from '../../public/images/pause.svg'
import Rewind from '../../public/images/rewind.svg'
import Forward from '../../public/images/forward.svg'
import thumbnail from "../../public/thumb7.jpg"
import { useRef, useState } from 'react'

export default function AudioPlayer ({ src }) {
    // const thumbnail = "https://youtubethumbnaildownloaderonline.com/wp-content/uploads/2024/05/man-red-shadow-youtube-thumbnail.webp"
    let audioRef = useRef(null)
    let intervalRef = useRef(null)
    const [state, setState] = useState({ progress: 0, sound: 100, play: false, size: '' })
    let { progress, sound, play, size } = state

    function action(task, value){
        if(audioRef.current && audioRef.current.readyState != 0){
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
            console.error(`cannot ${task}, video source error`)        
        }
    }
    
    function start() {
        if (audioRef) {    
            audioRef.current.play()
            intervalRef.current = setInterval(() => setState({ ...state, play: !play, sound: audioRef?.current?.volume * 100, progress: (Math.floor((100 / audioRef?.current?.duration) * audioRef?.current?.currentTime)) }), 10)
        }
    }

    function pause() {
        if (audioRef) {
            setState({ ...state, play: !play })
            audioRef.current.pause()
            clearInterval(intervalRef.current)
        }
    }

    function rewind(){ 
        audioRef.current.currentTime -= 15; 
        setState({ ...state, progress: (Math.floor((100 / audioRef.current.duration) * audioRef.current.currentTime)) }) 
    }

    function forward(){ 
        audioRef.current.currentTime += 15; 
        setState({ ...state, progress: (Math.floor((100 / audioRef.current.duration) * audioRef.current.currentTime)) }) 
    }

    function move(value){
        setState({ ...state, progress: value }); 
        audioRef.current.currentTime = value * audioRef.current.duration / 100
    }

    function volume(value){ 
        audioRef.current.volume = value / 100; 
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
            <audio src={src} className={' relative w-full h-screen ' + size} ref={audioRef} onClick={() => play ? action("pause") : action("start")} />
            {src && <div className="flex flex-col justify-center items-center max-md:w-full w-full max-md:-bottom-10 bottom-10">
                <Image src={thumbnail} alt='thumb' className='w-[73%] object-cover'/>
                <div className="max-md:w-[100vw] flex bg-blue-800 gap-2 h-16 p-4 self-center w-full rounded-lg items-center text-white opacity-100 max-md:scale-[0.6] scale-1 transition delay-[500ms] hover:delay-0 duration-500">
                    <Image src={Sound} alt={'Sound'} width={30} onClick={() => { audioRef.current.muted = !audioRef.current.muted }} />
                    {audioRef.current && !audioRef.current.muted && <input className='min-w-0 accent-white opacity-100' type="range" value={sound} onChange={(e) => action("volume", e.target.value)} />}
                    <Image src={Rewind} alt={'rewind'} width={20} onClick={() => action("rewind")} />
                    <Image src={play ? Pause : Play} alt={'play / pause'} onClick={() => play ? action("pause") : action("start")} />
                    <Image src={Forward} alt={'forward'} width={20} onClick={() => action("forward")} />
                    {audioRef.current && time(audioRef.current.currentTime)}
                    <input className='max-md:w-full w-screen max-md:w-full accent-white opacity-100 ' type="range" value={progress} onChange={(e) => action("move", e.target.value)} />
                    {audioRef.current && time(audioRef.current.duration)}
                    {/* <Image src={Max} alt={'screen'} width={30} onClick={() => size ? setState({ ...state, size: "" }) : setState({ ...state, size: " object-cover " })} /> */}
                    {/* <Image src={List} alt={'list'} width={30} /> */}
                </div>
            </div>}
        </div>
        </>
    )
}