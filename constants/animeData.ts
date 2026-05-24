import type { AnimeType } from "../type/model"

export const ANIME_SLIDER_DATA: AnimeType[] = [
  {
    id: "1",
    title: "Attack on Titan",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254585/aotW_j0i9vt.webp",
    genre: ["Action", "Dark Fantasy", "Drama"],
    description:
      "In a world where humanity is on the brink of extinction due to giant humanoid Titans, people live inside massive walled cities. The story follows Eren Yeager and his fight for freedom against the Titans.",
    type: "Anime"
  },
  {
    id: "2",
    title: "Demon Slayer",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254597/dsW_kelu9f.webp",
    genre: ["Action", "Supernatural", "Adventure"],
    description:
      "The story follows Tanjiro Kamado, a kind-hearted boy who becomes a Demon Slayer after his family is slaughtered and his sister is turned into a demon, as he seeks a cure for her and revenge.",
    type: "Anime"
  },
  {
    id: "3",
    title: "My Teen Romantic Comedy SNAFU",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254610/snafuW_ldvh0e.webp",
    genre: ["Romance", "Slice of Life", "Comedy", "Drama"],
    description:
      "The story follows Hachiman Hikigaya, a cynical high school student who is forced to join the Service Club, where he begins to understand relationships, friendships, and social dynamics.",
    type: "Anime"
  },
  {
    id: "4",
    title: "Soredemo Sekai wa Utsukushii",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779501095/twisbW_yzthxj.webp",
    genre: ["Romance", "Fantasy", "Adventure"],
    description:
      "The story follows Nike, a princess with the power to summon rain, who is sent to marry a young king and discovers a deeper connection as they face challenges together.",
    type: "Manga"
  },
  {
    id: "5",
    title: "Kamisama Kiss",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779501108/kkW_ynbxkd.webp",
    genre: ["Romance", "Supernatural", "Comedy"],
    description:
      "Nanami Momozono suddenly becomes a land god after helping a stranger and begins a new life filled with spirits, gods, and an unexpected relationship.",
    type: "Manga"
  },
  {
    id: "6",
    title: "Masamune-kun no Revenge",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779501122/mrW_voymz6.webp",
    genre: ["Romance", "Comedy", "School"],
    description:
      "Masamune Makabe returns after years of self-improvement with a plan to get revenge on the girl who once rejected him, but things do not go as expected.",
    type: "Manga"
  }

]

export const Favorite_Anime: AnimeType[] = [
  {
    id: "1",
    title: "Attack on Titan",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254585/aotW_j0i9vt.webp",
    genre: ["Action", "Fantasy"],
    description:"testing description for carousel item",
    isFavorite: true,
    type: "Anime",
    status: "completed"
  },
  {
    id: "2",
    title: "Demon Slayer",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254597/dsW_kelu9f.webp",
    genre: ["Action", "Supernatural"],
    description:"testing description for carousel item",
    isFavorite: false,
    type: "Anime",
    status: "completed"
  },
  {
    id: "3",
    title: "My Teen Romantic Comedy",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254610/snafuW_ldvh0e.webp",
    genre: ["Romance", "Comedy"],
    description:"testing description for carousel item",
    isFavorite: true,
    type: "Anime",
    status: "completed"
  },
  {
    id: "4",
    title: "Jujutsu Kaisen",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254585/aotW_j0i9vt.webp",
    genre: ["Action", "Supernatural"],
    description:"testing description for carousel item",
    isFavorite: true,
    type: "Anime",
    status: "completed"
  },
  {
    id: "5",
    title: "Steins;Gate",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254597/dsW_kelu9f.webp",
    genre: ["Sci-Fi", "Thriller"],
    description:"testing description for carousel item",
    isFavorite: true,
    type: "Anime",
    status: "completed"
  },
  {
    id: "6",
    title: "Jujutsu Kaisen",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254585/aotW_j0i9vt.webp",
    genre: ["Action", "Supernatural"],
    description:"testing description for carousel item",
    isFavorite: true,
    type: "Anime",
    status: "completed"
  },
  {
    id: "7",
    title: "Steins;Gate",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254597/dsW_kelu9f.webp",
    genre: ["Sci-Fi", "Thriller"],
    description:"testing description for carousel item",
    isFavorite: true,
    type: "Anime",
    status: "completed"
  },
  {
    id: "8",
    title: "Jujutsu Kaisen",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254585/aotW_j0i9vt.webp",
    genre: ["Action", "Supernatural"],
    description:"testing description for carousel item",
    isFavorite: true,
    type: "Anime",
    status: "completed"
  },
];

export const Completed_Anime: AnimeType[] = [
  {
    id: "1",
    title: "Attack on Titan",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254585/aotW_j0i9vt.webp",
    genre: ["Action", "Fantasy"],
    description:"testing description for carousel item",
    isFavorite: true,
    type: "Anime",
    status: "completed"
  },
  {
    id: "2",
    title: "Demon Slayer",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254597/dsW_kelu9f.webp",
    genre: ["Action", "Supernatural"],
    description:"testing description for carousel item",
    isFavorite: false,
    type: "Anime",
    status: "completed"
  },
  {
    id: "3",
    title: "My Teen Romantic Comedy",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254610/snafuW_ldvh0e.webp",
    genre: ["Romance", "Comedy"],
    description:"testing description for carousel item",
    isFavorite: true,
    type: "Anime",
    status: "completed"
  },
  {
    id: "4",
    title: "Jujutsu Kaisen",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254585/aotW_j0i9vt.webp",
    genre: ["Action", "Supernatural"],
    description:"testing description for carousel item",
    isFavorite: true,
    type: "Anime",
    status: "completed"
  },
  {
    id: "5",
    title: "Steins;Gate",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254597/dsW_kelu9f.webp",
    genre: ["Sci-Fi", "Thriller"],
    description:"testing description for carousel item",
    isFavorite: true,
    type: "Anime",
    status: "completed"
  },
  {
    id: "6",
    title: "Jujutsu Kaisen",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254585/aotW_j0i9vt.webp",
    genre: ["Action", "Supernatural"],
    description:"testing description for carousel item",
    isFavorite: true,
    type: "Anime",
    status: "completed"
  },
  {
    id: "7",
    title: "Steins;Gate",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254597/dsW_kelu9f.webp",
    genre: ["Sci-Fi", "Thriller"],
    description:"testing description for carousel item",
    isFavorite: true,
    type: "Anime",
    status: "completed"
  },
  {
    id: "8",
    title: "Jujutsu Kaisen",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254585/aotW_j0i9vt.webp",
    genre: ["Action", "Supernatural"],
    description:"testing description for carousel item",
    isFavorite: true,
    type: "Anime",
    status: "completed"
  },
  {
    id: "9",
    title: "Jujutsu Kaisen",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254585/aotW_j0i9vt.webp",
    genre: ["Action", "Supernatural"],
    description:"testing description for carousel item",
    isFavorite: true,
    type: "Anime",
    status: "completed"
  },
];

export const Current_Anime: AnimeType[] = [
  {
    id: "1",
    title: "Attack on Titan",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254585/aotW_j0i9vt.webp",
    genre: ["Action", "Fantasy"],
    description:"testing description for carousel item",
    isFavorite: true,
    type: "Anime",
    status: "watching"
  },
  {
    id: "2",
    title: "Demon Slayer",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254597/dsW_kelu9f.webp",
    genre: ["Action", "Supernatural"],
    description:"testing description for carousel item",
    isFavorite: false,
    type: "Anime",
    status: "watching"
  },
  {
    id: "3",
    title: "My Teen Romantic Comedy",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254610/snafuW_ldvh0e.webp",
    genre: ["Romance", "Comedy"],
    description:"testing description for carousel item",
    isFavorite: true,
    type: "Anime",
    status: "watching"
  },
  {
    id: "4",
    title: "Jujutsu Kaisen",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254585/aotW_j0i9vt.webp",
    genre: ["Action", "Supernatural"],
    description:"testing description for carousel item",
    isFavorite: true,
    type: "Anime",
    status: "watching"
  },
  {
    id: "5",
    title: "Steins;Gate",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254597/dsW_kelu9f.webp",
    genre: ["Sci-Fi", "Thriller"],
    description:"testing description for carousel item",
    isFavorite: true,
    type: "Anime",
    status: "watching"
  },
  {
    id: "6",
    title: "Jujutsu Kaisen",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254585/aotW_j0i9vt.webp",
    genre: ["Action", "Supernatural"],
    description:"testing description for carousel item",
    isFavorite: true,
    type: "Anime",
    status: "watching"
  }
];

export const Anime_List: AnimeType[] = [
  {
    id: "1",
    title: "Soredemo Sekai wa Utsukushii",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779501095/twisbW_yzthxj.webp",
    genre: ["Romance", "Fantasy", "Adventure"],
    description:
      "The story follows Nike, a princess with the power to summon rain, who is sent to marry a young king and discovers a deeper connection as they face challenges together.",
    isFavorite: true,
    type: "Anime",
    status: "planToWatch"
  },
  {
    id: "2",
    title: "Kamisama Kiss",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779501108/kkW_ynbxkd.webp",
    genre: ["Romance", "Supernatural", "Comedy"],
    description:
      "Nanami Momozono suddenly becomes a land god after helping a stranger and begins a new life filled with spirits, gods, and an unexpected relationship.",
    isFavorite: false,
    type: "Anime",
    status: "planToWatch"
  },
  {
    id: "3",
    title: "Masamune-kun no Revenge",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779501122/mrW_voymz6.webp",
    genre: ["Romance", "Comedy", "School"],
    description:
      "Masamune Makabe returns after years of self-improvement with a plan to get revenge on the girl who once rejected him, but things do not go as expected.",
    isFavorite: true,
    type: "Anime",
    status: "planToWatch"
  },
  {
    id: "4",
    title: "Soredemo Sekai wa Utsukushii",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779501095/twisbW_yzthxj.webp",
    genre: ["Romance", "Fantasy", "Adventure"],
    description:
      "The story follows Nike, a princess with the power to summon rain, who is sent to marry a young king and discovers a deeper connection as they face challenges together.",
    isFavorite: true,
    type: "Anime",
    status: "planToWatch"
  },
  {
    id: "5",
    title: "Kamisama Kiss",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779501108/kkW_ynbxkd.webp",
    genre: ["Romance", "Supernatural", "Comedy"],
    description:
      "Nanami Momozono suddenly becomes a land god after helping a stranger and begins a new life filled with spirits, gods, and an unexpected relationship.",
    isFavorite: false,
    type: "Anime",
    status: "planToWatch"
  },
  {
    id: "6",
    title: "Masamune-kun no Revenge",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779501122/mrW_voymz6.webp",
    genre: ["Romance", "Comedy", "School"],
    description:
      "Masamune Makabe returns after years of self-improvement with a plan to get revenge on the girl who once rejected him, but things do not go as expected.",
    isFavorite: true,
    type: "Anime",
    status: "planToWatch"
  }
];

export const Favorite_Manga: AnimeType[] = [
    {
    id: "1",
    title: "Soredemo Sekai wa Utsukushii",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779501095/twisbW_yzthxj.webp",
    genre: ["Romance", "Fantasy", "Adventure"],
    description:
      "The story follows Nike, a princess with the power to summon rain, who is sent to marry a young king and discovers a deeper connection as they face challenges together.",
    isFavorite: true,
    type: "Manga",
    status: "completed"
  },
  {
    id: "2",
    title: "Kamisama Kiss",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779501108/kkW_ynbxkd.webp",
    genre: ["Romance", "Supernatural", "Comedy"],
    description:
      "Nanami Momozono suddenly becomes a land god after helping a stranger and begins a new life filled with spirits, gods, and an unexpected relationship.",
    isFavorite: false,
    type: "Manga",
    status: "completed"
  },
  {
    id: "3",
    title: "Masamune-kun no Revenge",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779501122/mrW_voymz6.webp",
    genre: ["Romance", "Comedy", "School"],
    description:
      "Masamune Makabe returns after years of self-improvement with a plan to get revenge on the girl who once rejected him, but things do not go as expected.",
    isFavorite: true,
    type: "Manga",
    status: "completed"
  },
  {
    id: "4",
    title: "Soredemo Sekai wa Utsukushii",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779501095/twisbW_yzthxj.webp",
    genre: ["Romance", "Fantasy", "Adventure"],
    description:
      "The story follows Nike, a princess with the power to summon rain, who is sent to marry a young king and discovers a deeper connection as they face challenges together.",
    isFavorite: true,
    type: "Manga",
    status: "completed"
  },
  {
    id: "5",
    title: "Kamisama Kiss",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779501108/kkW_ynbxkd.webp",
    genre: ["Romance", "Supernatural", "Comedy"],
    description:
      "Nanami Momozono suddenly becomes a land god after helping a stranger and begins a new life filled with spirits, gods, and an unexpected relationship.",
    isFavorite: false,
    type: "Manga",
    status: "completed"
  },
  {
    id: "6",
    title: "Masamune-kun no Revenge",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779501122/mrW_voymz6.webp",
    genre: ["Romance", "Comedy", "School"],
    description:
      "Masamune Makabe returns after years of self-improvement with a plan to get revenge on the girl who once rejected him, but things do not go as expected.",
    isFavorite: true,
    type: "Manga",
    status: "completed"
  }
];

export const Completed_Manga: AnimeType[] = [
    {
    id: "1",
    title: "Soredemo Sekai wa Utsukushii",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779501095/twisbW_yzthxj.webp",
    genre: ["Romance", "Fantasy", "Adventure"],
    description:
      "The story follows Nike, a princess with the power to summon rain, who is sent to marry a young king and discovers a deeper connection as they face challenges together.",
    isFavorite: true,
    type: "Manga",
    status: "completed"
  },
  {
    id: "2",
    title: "Kamisama Kiss",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779501108/kkW_ynbxkd.webp",
    genre: ["Romance", "Supernatural", "Comedy"],
    description:
      "Nanami Momozono suddenly becomes a land god after helping a stranger and begins a new life filled with spirits, gods, and an unexpected relationship.",
    isFavorite: false,
    type: "Manga",
    status: "completed"
  },
  {
    id: "3",
    title: "Masamune-kun no Revenge",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779501122/mrW_voymz6.webp",
    genre: ["Romance", "Comedy", "School"],
    description:
      "Masamune Makabe returns after years of self-improvement with a plan to get revenge on the girl who once rejected him, but things do not go as expected.",
    isFavorite: true,
    type: "Manga",
    status: "completed"
  },
  {
    id: "4",
    title: "Soredemo Sekai wa Utsukushii",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779501095/twisbW_yzthxj.webp",
    genre: ["Romance", "Fantasy", "Adventure"],
    description:
      "The story follows Nike, a princess with the power to summon rain, who is sent to marry a young king and discovers a deeper connection as they face challenges together.",
    isFavorite: true,
    type: "Manga",
    status: "completed"
  },
  {
    id: "5",
    title: "Kamisama Kiss",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779501108/kkW_ynbxkd.webp",
    genre: ["Romance", "Supernatural", "Comedy"],
    description:
      "Nanami Momozono suddenly becomes a land god after helping a stranger and begins a new life filled with spirits, gods, and an unexpected relationship.",
    isFavorite: false,
    type: "Manga",
    status: "completed"
  },
  {
    id: "6",
    title: "Masamune-kun no Revenge",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779501122/mrW_voymz6.webp",
    genre: ["Romance", "Comedy", "School"],
    description:
      "Masamune Makabe returns after years of self-improvement with a plan to get revenge on the girl who once rejected him, but things do not go as expected.",
    isFavorite: true,
    type: "Manga",
    status: "completed"
  }
];

export const Current_Manga: AnimeType[] = [
  {
    id: "1",
    title: "Soredemo Sekai wa Utsukushii",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779501095/twisbW_yzthxj.webp",
    genre: ["Romance", "Fantasy", "Adventure"],
    description:
      "The story follows Nike, a princess with the power to summon rain, who is sent to marry a young king and discovers a deeper connection as they face challenges together.",
    isFavorite: true,
    type: "Manga",
    status: "reading"
  },
  {
    id: "2",
    title: "Kamisama Kiss",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779501108/kkW_ynbxkd.webp",
    genre: ["Romance", "Supernatural", "Comedy"],
    description:
      "Nanami Momozono suddenly becomes a land god after helping a stranger and begins a new life filled with spirits, gods, and an unexpected relationship.",
    isFavorite: false,
    type: "Manga",
    status: "reading"
  },
  {
    id: "3",
    title: "Masamune-kun no Revenge",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779501122/mrW_voymz6.webp",
    genre: ["Romance", "Comedy", "School"],
    description:
      "Masamune Makabe returns after years of self-improvement with a plan to get revenge on the girl who once rejected him, but things do not go as expected.",
    isFavorite: true,
    type: "Manga",
    status: "reading"
  },
  {
    id: "4",
    title: "Soredemo Sekai wa Utsukushii",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779501095/twisbW_yzthxj.webp",
    genre: ["Romance", "Fantasy", "Adventure"],
    description:
      "The story follows Nike, a princess with the power to summon rain, who is sent to marry a young king and discovers a deeper connection as they face challenges together.",
    isFavorite: true,
    type: "Manga",
    status: "reading"
  },
  {
    id: "5",
    title: "Kamisama Kiss",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779501108/kkW_ynbxkd.webp",
    genre: ["Romance", "Supernatural", "Comedy"],
    description:
      "Nanami Momozono suddenly becomes a land god after helping a stranger and begins a new life filled with spirits, gods, and an unexpected relationship.",
    isFavorite: false,
    type: "Manga",
    status: "reading"
  },
  {
    id: "6",
    title: "Masamune-kun no Revenge",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779501122/mrW_voymz6.webp",
    genre: ["Romance", "Comedy", "School"],
    description:
      "Masamune Makabe returns after years of self-improvement with a plan to get revenge on the girl who once rejected him, but things do not go as expected.",
    isFavorite: true,
    type: "Manga",
    status: "reading"
  }
];

export const Manga_List: AnimeType[] = [
  {
    id: "1",
    title: "Attack on Titan",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254585/aotW_j0i9vt.webp",
    genre: ["Action", "Fantasy"],
    description:"testing description for carousel item",
    isFavorite: true,
    type: "Anime",
    status: "planToRead"
  },
  {
    id: "2",
    title: "Demon Slayer",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254597/dsW_kelu9f.webp",
    genre: ["Action", "Supernatural"],
    description:"testing description for carousel item",
    isFavorite: false,
    type: "Anime",
    status: "planToRead"
  },
  {
    id: "3",
    title: "My Teen Romantic Comedy",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254610/snafuW_ldvh0e.webp",
    genre: ["Romance", "Comedy"],
    description:"testing description for carousel item",
    isFavorite: true,
    type: "Anime",
    status: "planToRead"
  },
  {
    id: "4",
    title: "Jujutsu Kaisen",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254585/aotW_j0i9vt.webp",
    genre: ["Action", "Supernatural"],
    description:"testing description for carousel item",
    isFavorite: true,
    type: "Anime",
    status: "planToRead"
  },
  {
    id: "5",
    title: "Steins;Gate",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254597/dsW_kelu9f.webp",
    genre: ["Sci-Fi", "Thriller"],
    description:"testing description for carousel item",
    isFavorite: true,
    type: "Anime",
    status: "planToRead"
  },
  {
    id: "6",
    title: "Jujutsu Kaisen",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254585/aotW_j0i9vt.webp",
    genre: ["Action", "Supernatural"],
    description:"testing description for carousel item",
    isFavorite: true,
    type: "Anime",
    status: "planToRead"
  }
];



