-- CreateTable
CREATE TABLE "Plataformas" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "imagePath" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Plataformas_pkey" PRIMARY KEY ("id")
);
