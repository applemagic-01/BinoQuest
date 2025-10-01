'use client'

import { useState, useRef, useEffect } from 'react'
import ProgressBar from '../../components/ProgressBar'
import ChatBubble from '../../components/ChatBubble'
import Controls from '../../components/Controls'
import {steps as allSteps} from '../../lib/steps'


export default function BinoQuest() {
  const [index, setIndex] = useState(0)
  const [history, setHistory] = useState([allSteps[0]])
  const containerRef = useRef(null)
  const inputRef = useRef(null)

  const total = allSteps.length
  
  // Auto-scroll to the bottom when new messages are added
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history])

  function handleQuickAsk() {
    const cur = allSteps[index]
    setHistory((h) => [...h, { ...cur, user: cur.user + ' (asked instantly)' }])
    setTimeout(() => {
      // Optionally add a Bino response here
    }, 300)
  }

  function handleNext() {
    if (index < total - 1) {
      const next = index + 1
      setIndex(next)
      setHistory((h) => [...h, allSteps[next]])
    }
  }

  function handlePrev() {
    if (index > 0) {
      const prev = index - 1
      setIndex(prev)
      setHistory((h) => h.slice(0, -1))
    }
  }

  function toggleAuto() {
    let i = index
    const interval = setInterval(() => {
      if (i >= total - 1) {
        clearInterval(interval)
      } else {
        i++
        setIndex(i)
        setHistory((h) => [...h, allSteps[i]])
      }
    }, 1200)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-4">
        <ProgressBar current={history.length} total={total} />
        <div
          ref={containerRef}
          className="mt-4 h-[60vh] md:h-[64vh] overflow-y-auto chat-scroll p-3 space-y-4 bg-gradient-to-b from-white to-gray-50 rounded-lg"
        >
          {history.map((s, i) => (
            <ChatBubble key={i} step={s} />
          ))}
        </div>

        <div className="mt-4">
          <div className="flex items-center gap-3">
            <input
              ref={inputRef}
              value={allSteps[index].user}
              readOnly
              className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 focus:outline-none"
            />
            <button
              onClick={handleQuickAsk}
              className="px-4 py-2 rounded-full bg-white border"
            >
              Ask
            </button>
          </div>

          <Controls
            onNext={handleNext}
            onPrev={handlePrev}
            onAutoPlay={toggleAuto}
            isLast={index >= total - 1}
          />

          <div className="mt-3 text-xs text-gray-500">
            Tip: Press <span className="font-semibold">Auto Play ▶</span> to
            watch the demo or use <span className="font-semibold">Next ➡️</span>{' '}
            to step through manually.
          </div>
        </div>
      </div>

      {index >= total - 1 && (
        <div className="mt-4 text-center">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-800 px-4 py-2 rounded-full">
            🎉 You’ve completed the Bino Quest — share it with friends!
          </div>
        </div>
      )}
    </div>
  )
}
