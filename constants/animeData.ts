import type { AnimeSlide } from "../type/model"
import type { Anime } from "../type/model"

export const ANIME_SLIDER_DATA: AnimeSlide[] = [
  {
    id: "a1",
    title: "Attack on Titan",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254585/aotW_j0i9vt.webp",
    genre: ["Action", "Dark Fantasy", "Drama"],
    description:
      "In a world where humanity is on the brink of extinction due to giant humanoid Titans, people live inside massive walled cities. The story follows Eren Yeager and his fight for freedom against the Titans."
  },
  {
    id: "a2",
    title: "Demon Slayer",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254597/dsW_kelu9f.webp",
    genre: ["Action", "Supernatural", "Adventure"],
    description:
      "The story follows Tanjiro Kamado, a kind-hearted boy who becomes a Demon Slayer after his family is slaughtered and his sister is turned into a demon, as he seeks a cure for her and revenge."
  },
  {
    id: "a3",
    title: "My Teen Romantic Comedy SNAFU",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254610/snafuW_ldvh0e.webp",
    genre: ["Romance", "Slice of Life", "Comedy", "Drama"],
    description:
      "The story follows Hachiman Hikigaya, a cynical high school student who is forced to join the Service Club, where he begins to understand relationships, friendships, and social dynamics."
  }
]

export const CAROUSEL_ITEMS: Anime[] = [
  {
    id: "1",
    title: "Attack on Titan",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254585/aotW_j0i9vt.webp",
    genre: "Action, Fantasy",
    isFavorite: true
  },
  {
    id: "2",
    title: "Demon Slayer",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254597/dsW_kelu9f.webp",
    genre: "Action, Supernatural",
    isFavorite: false
  },
  {
    id: "3",
    title: "My Teen Romantic Comedy",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254610/snafuW_ldvh0e.webp",
    genre: "Romance, Comedy",
    isFavorite: true
  },
  {
    id: "4",
    title: "Jujutsu Kaisen",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254585/aotW_j0i9vt.webp",
    genre: "Action, Supernatural",
    isFavorite: true
  },
  {
    id: "5",
    title: "Steins;Gate",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254597/dsW_kelu9f.webp",
    genre: "Sci-Fi, Thriller",
    isFavorite: true
  },
  {
    id: "6",
    title: "Jujutsu Kaisen",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254585/aotW_j0i9vt.webp",
    genre: "Action, Supernatural",
    isFavorite: true
  },
  {
    id: "7",
    title: "Steins;Gate",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254597/dsW_kelu9f.webp",
    genre: "Sci-Fi, Thriller",
    isFavorite: true
  },
  {
    id: "8",
    title: "Jujutsu Kaisen",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254585/aotW_j0i9vt.webp",
    genre: "Action, Supernatural",
    isFavorite: true
  },
  {
    id: "9",
    title: "Steins;Gate",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254597/dsW_kelu9f.webp",
    genre: "Sci-Fi, Thriller",
    isFavorite: true
  },
];
