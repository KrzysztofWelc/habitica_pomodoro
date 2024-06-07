import { useEffect, useState, useRef } from "react"
// import { useStorage } from "@plasmohq/storage/hook"

function IndexPopup() {
  const [secondsLeft, setSecondsLeft] = useState<number>(2)
  const secondsLeftRef = useRef<number>(secondsLeft)
  const [isPaused, setIsPaused] = useState<boolean>(false)

  const tick = ()=>{
    secondsLeftRef.current--
    setSecondsLeft(secondsLeftRef.current)

    if(secondsLeftRef.current === 0) setIsPaused(true)
  }

  useEffect(()=>{
    if(isPaused) return
    
    const interval = setInterval(()=>{
      tick()
    }, 1000)

    return ()=>clearInterval(interval)
  },[isPaused])

  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  // if(seconds < 10) seconds = '0'+seconds;

  return (
    <div>
      <h1>{minutes}:{seconds}</h1>
    </div>
  )
}

export default IndexPopup
