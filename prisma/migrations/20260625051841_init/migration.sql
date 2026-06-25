-- CreateEnum
CREATE TYPE "Type" AS ENUM ('Anime', 'Manga');

-- CreateEnum
CREATE TYPE "StatusType" AS ENUM ('Watching', 'Reading', 'Completed', 'PlanToWatch', 'PlanToRead');

-- CreateTable
CREATE TABLE "AnimeManga" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "type" "Type" NOT NULL,
    "status" "StatusType" NOT NULL,
    "isFavorite" BOOLEAN NOT NULL DEFAULT false,
    "genre" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AnimeManga_pkey" PRIMARY KEY ("id")
);
