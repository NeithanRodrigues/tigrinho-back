/*
  Warnings:

  - You are about to drop the column `image` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `percent1` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `percent2` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `percent3` on the `Game` table. All the data in the column will be lost.
  - Added the required column `imagePath` to the `Game` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Game" DROP COLUMN "image",
DROP COLUMN "percent1",
DROP COLUMN "percent2",
DROP COLUMN "percent3",
ADD COLUMN     "imagePath" TEXT NOT NULL;
