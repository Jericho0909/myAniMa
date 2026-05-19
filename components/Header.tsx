import Link from 'next/link'
import Navbar from './Navbar';

interface HeaderProps {
    children: React.ReactNode;
}


export default function Header({ children }: HeaderProps) {
  

  return (
    <header className="flex justify-between items-center px-4 py-3 border-b">
      {/* Left: Logo */}
      <div className="text-lg font-semibold">
        <Link href="/">MyAniMa</Link>
      </div>
      

      {/* Right: Navbar */}
      {children}
    
    </header>
  )
}
