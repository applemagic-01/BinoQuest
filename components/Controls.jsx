import React from 'react'


export default function Controls({ onNext, onPrev, onAutoPlay, isLast }) {
return (
<div className="flex items-center gap-3 justify-between mt-4">
<div className="flex gap-2">
<button onClick={onPrev} className="px-3 py-2 rounded-md bg-white shadow text-sm">◀ Prev</button>
{!isLast && <button onClick={onNext} className="px-4 py-2 rounded-full bg-indigo-600 text-white shadow font-medium">Next ➡️</button>}
</div>
<div className="flex gap-2">
<button onClick={onAutoPlay} className="px-3 py-2 rounded-md bg-white shadow text-sm">Auto Play ▶</button>
</div>
</div>
)
}