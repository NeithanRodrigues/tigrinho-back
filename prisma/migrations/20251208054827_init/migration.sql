-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "image" BYTEA NOT NULL,
    "link" TEXT NOT NULL,
    "percent1" INTEGER NOT NULL,
    "percent2" INTEGER NOT NULL,
    "percent3" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);
