import Header from '../../components/Header'
import './globals.css'


export const metadata = {
title: 'The Bino Quest',
}


export default function RootLayout({ children }) {
return (
<html lang="en">
<body>
<div className="min-h-screen flex flex-col items-center">
<Header />
<main className="w-full flex-1 px-4 py-6">
{children}
</main>
</div>
</body>
</html>
)
}