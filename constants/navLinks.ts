type NavLink = {
  id: string
  label: string
  href: string
  openInNewTab?: boolean
}

export const HomePageNavLinks: NavLink[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "anime", label: "Anime", href: "/#anime" },
  { id: "manga", label: "Manga", href: "/#manga" },
  { id: "about", label: "About", href: "/about", openInNewTab: true },
  { id: "add", label: "AddWatchList", href: "/addwatchlist", openInNewTab: true },
]