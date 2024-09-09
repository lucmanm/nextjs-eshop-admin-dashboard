-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER', 'GUEST', 'SALES', 'EDITOR');

-- AlterTable
ALTER TABLE "images" ADD COLUMN     "quotationId" TEXT;

-- CreateTable
CREATE TABLE "quotations" (
    "id" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "enDescription" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL DEFAULT 0.0,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "categoryId" TEXT NOT NULL,
    "brandId" TEXT NOT NULL,
    "salePrice" DECIMAL(65,30) DEFAULT 0.0,
    "stock" INTEGER NOT NULL DEFAULT 0,
    "arDescription" TEXT NOT NULL,

    CONSTRAINT "quotations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inventory" (
    "id" TEXT NOT NULL,
    "warehouseName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "productId" TEXT,
    "quotationId" TEXT,

    CONSTRAINT "Inventory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "quotations_model_key" ON "quotations"("model");

-- CreateIndex
CREATE UNIQUE INDEX "quotations_enDescription_key" ON "quotations"("enDescription");

-- CreateIndex
CREATE UNIQUE INDEX "quotations_arDescription_key" ON "quotations"("arDescription");

-- CreateIndex
CREATE INDEX "quotations_categoryId_idx" ON "quotations"("categoryId");

-- CreateIndex
CREATE INDEX "quotations_brandId_idx" ON "quotations"("brandId");

-- CreateIndex
CREATE INDEX "Inventory_productId_idx" ON "Inventory"("productId");

-- CreateIndex
CREATE INDEX "Inventory_quotationId_idx" ON "Inventory"("quotationId");

-- CreateIndex
CREATE INDEX "images_quotationId_idx" ON "images"("quotationId");
