import React from 'react'
import { motion } from 'framer-motion'


export function UserBubble({ text }) {
return (
<motion.div
initial={{ opacity: 0, y: 8 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.35 }}
className="flex justify-end"
>
<div className="bg-blue-500 text-white px-4 py-2 rounded-2xl max-w-[78%] break-words">
{text}
</div>
</motion.div>
)
}


export function BinoBubble({ children, compact=false }) {
return (
<motion.div
initial={{ opacity: 0, y: 8 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.35 }}
className="flex justify-start"
>
<div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-2xl max-w-[78%] break-words">
{children}
</div>
</motion.div>
)
}


export default function ChatBubble({ step }) {
if (!step) return null
const { user, bino } = step
return (
<div className="space-y-3">
<UserBubble text={user} />


<BinoBubble>
<div className="font-semibold mb-1">{bino.title}</div>
{bino.lines && (
<ul className="text-sm list-disc pl-5">
{bino.lines.map((l, i) => (
<li key={i}>{l}</li>
))}
</ul>
)}
{bino.card && (
<div className="mt-2 p-3 bg-white rounded-lg shadow-sm">
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium">{bino.card.summary}</div>
<div className="text-xs text-gray-500">{bino.card.temp}</div>
</div>
</div>
<div className="mt-2 flex gap-2 text-xs text-gray-600">
{bino.card.forecast.map((f) => (
<div key={f.day} className="p-2 bg-gray-50 rounded-md">
<div className="font-medium">{f.day}</div>
<div className="text-xs">{f.cond}</div>
</div>
))}
</div>
</div>
)}
</BinoBubble>
</div>
)
}