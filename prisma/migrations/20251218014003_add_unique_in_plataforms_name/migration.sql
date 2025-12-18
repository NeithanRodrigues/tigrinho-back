/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `plataformas` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "game" ALTER COLUMN "name" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "plataformas_name_key" ON "plataformas"("name");
