import React from 'react'


export default function Header() {
return (
<header className="w-full max-w-2xl mx-auto py-4 px-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-white text-lg font-bold">B</div>
<div>
<h1 className="text-lg font-semibold">The Bino Quest</h1>
<p className="text-xs text-gray-500">Interactive demo — plan a quick trip with Bino</p>
</div>
</div>
</div>
</header>
)
}