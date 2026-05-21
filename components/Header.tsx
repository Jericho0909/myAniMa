import Link from 'next/link'


interface HeaderProps {
    children: React.ReactNode;
}


export default function Header({ children }: HeaderProps) {
  

  return (
    <header className="fixed flex justify-between items-center px-4 py-3 w-full bg-transparent z-10">
        {/* Left: Logo */}
        <div 
            className="text-3xl font-bold" 
            style={{ fontFamily: 'var(--font-fredoka)' }}
        >
            <Link href="/">MyAniMa</Link>
        </div>
        

        {/* Right: Navbar */}
        {children}
    
    </header>
  )
}
