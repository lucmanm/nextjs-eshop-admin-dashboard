/*
  Warnings:

  - You are about to drop the column `quotationId` on the `Inventory` table. All the data in the column will be lost.
  - You are about to drop the column `brandId` on the `quotations` table. All the data in the column will be lost.
  - You are about to drop the column `categoryId` on the `quotations` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Inventory_quotationId_idx";

-- DropIndex
DROP INDEX "quotations_brandId_idx";

-- DropIndex
DROP INDEX "quotations_categoryId_idx";

-- AlterTable
ALTER TABLE "Inventory" DROP COLUMN "quotationId";

-- AlterTable
ALTER TABLE "quotations" DROP COLUMN "brandId",
DROP COLUMN "categoryId";
