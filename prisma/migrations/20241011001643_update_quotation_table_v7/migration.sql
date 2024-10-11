/*
  Warnings:

  - A unique constraint covering the columns `[quoteNumber]` on the table `quotations` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `quoteNumber` to the `quotations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "quotations" ADD COLUMN     "quoteNumber" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "quotations_quoteNumber_key" ON "quotations"("quoteNumber");
