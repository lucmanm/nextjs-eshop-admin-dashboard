/*
  Warnings:

  - You are about to drop the column `productId` on the `Inventory` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Inventory_productId_idx";

-- AlterTable
ALTER TABLE "Inventory" DROP COLUMN "productId";

-- AlterTable
ALTER TABLE "products" ALTER COLUMN "brandId" DROP NOT NULL;
