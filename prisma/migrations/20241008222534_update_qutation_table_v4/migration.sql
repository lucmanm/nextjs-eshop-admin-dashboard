/*
  Warnings:

  - You are about to drop the column `quotationId` on the `images` table. All the data in the column will be lost.
  - Added the required column `image` to the `quotations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `quotations` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "images_quotationId_idx";

-- AlterTable
ALTER TABLE "images" DROP COLUMN "quotationId";

-- AlterTable
ALTER TABLE "quotations" ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;
