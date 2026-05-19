type NavLink = {
  id: string
  label: string
  href: string
}

export const HomePageNavLinks: NavLink[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About", href: "/about" },
  { id: "suggestion", label: "Suggestion", href: "/suggestion" },
]