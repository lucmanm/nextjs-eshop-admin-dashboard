/*
  Warnings:

  - You are about to drop the column `name` on the `categories` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[enName]` on the table `categories` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[arName]` on the table `categories` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `arName` to the `categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `enName` to the `categories` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "categories_name_key";

-- AlterTable
ALTER TABLE "categories" DROP COLUMN "name",
ADD COLUMN     "arName" TEXT NOT NULL,
ADD COLUMN     "enName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "categories_enName_key" ON "categories"("enName");

-- CreateIndex
CREATE UNIQUE INDEX "categories_arName_key" ON "categories"("arName");
