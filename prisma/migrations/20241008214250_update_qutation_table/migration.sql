/*
  Warnings:

  - You are about to drop the column `isActive` on the `quotations` table. All the data in the column will be lost.
  - You are about to drop the column `salePrice` on the `quotations` table. All the data in the column will be lost.
  - You are about to drop the column `stock` on the `quotations` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "quotations" DROP COLUMN "isActive",
DROP COLUMN "salePrice",
DROP COLUMN "stock",
ADD COLUMN     "quantity" INTEGER NOT NULL DEFAULT 0;
