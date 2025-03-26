"use client"

import { useEffect, useState } from "react"

interface CountdownTimerProps {
  targetDate: string
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const target = new Date(targetDate).getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = target - now

      if (difference <= 0) {
        clearInterval(interval)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <div className="flex items-center justify-center gap-4">
      <div className="text-center">
        <div className="text-xl font-bold">{timeLeft.days}</div>
        <div className="text-xs">Days</div>
      </div>
      <div className="text-center">
        <div className="text-xl font-bold">{timeLeft.hours}</div>
        <div className="text-xs">Hours</div>
      </div>
      <div className="text-center">
        <div className="text-xl font-bold">{timeLeft.minutes}</div>
        <div className="text-xs">Minutes</div>
      </div>
      <div className="text-center">
        <div className="text-xl font-bold">{timeLeft.seconds}</div>
        <div className="text-xs">Seconds</div>
      </div>
    </div>
  )
}

