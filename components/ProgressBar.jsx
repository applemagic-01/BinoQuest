import React from 'react'


export default function ProgressBar({ current, total }) {
const pct = Math.round((current / total) * 100)
return (
<div className="w-full">
<div className="h-2 bg-gray-200 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400" style={{ width: `${pct}%` }} />
</div>
<div className="text-xs text-gray-500 mt-2">Step {current} of {total}</div>
</div>
)
}