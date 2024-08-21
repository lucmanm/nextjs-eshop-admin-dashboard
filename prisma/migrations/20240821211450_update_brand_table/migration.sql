/*
  Warnings:

  - You are about to drop the column `name` on the `Brand` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[enName]` on the table `Brand` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[arName]` on the table `Brand` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `arName` to the `Brand` table without a default value. This is not possible if the table is not empty.
  - Added the required column `enName` to the `Brand` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Brand_name_key";

-- AlterTable
ALTER TABLE "Brand" DROP COLUMN "name",
ADD COLUMN     "arName" TEXT NOT NULL,
ADD COLUMN     "enName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Brand_enName_key" ON "Brand"("enName");

-- CreateIndex
CREATE UNIQUE INDEX "Brand_arName_key" ON "Brand"("arName");
