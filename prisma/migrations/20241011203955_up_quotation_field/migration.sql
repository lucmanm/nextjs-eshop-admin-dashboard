-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER', 'GUEST', 'SALES', 'EDITOR');

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "enDescription" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL DEFAULT 0.0,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "categoryId" TEXT NOT NULL,
    "brandId" TEXT,
    "salePrice" DECIMAL(65,30) DEFAULT 0.0,
    "stock" INTEGER NOT NULL DEFAULT 0,
    "arDescription" TEXT NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" TEXT NOT NULL,
    "imageUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "arName" TEXT NOT NULL,
    "enName" TEXT NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Brand" (
    "id" TEXT NOT NULL,
    "logoUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "arName" TEXT NOT NULL,
    "enName" TEXT NOT NULL,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quotations" (
    "id" TEXT NOT NULL,
    "quoteNumber" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "enDescription" TEXT NOT NULL,
    "arDescription" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL DEFAULT 0.0,
    "quantity" INTEGER NOT NULL DEFAULT 0,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "quotations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Slider" (
    "id" TEXT NOT NULL,
    "arSlider" TEXT NOT NULL,
    "enSlider" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Slider_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StoreImage" (
    "id" TEXT NOT NULL,
    "storeLogo" TEXT NOT NULL,
    "categoryDefaultImage" TEXT NOT NULL,
    "productDefaultImage" TEXT NOT NULL,
    "storeIcon" TEXT NOT NULL,
    "vatLogo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StoreImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Warehouse" (
    "id" TEXT NOT NULL,
    "enName" TEXT NOT NULL,
    "arName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "productId" TEXT,

    CONSTRAINT "Warehouse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inventory" (
    "id" TEXT NOT NULL,
    "warehouseName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Inventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "images" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "images_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "products_model_key" ON "products"("model");

-- CreateIndex
CREATE UNIQUE INDEX "products_enDescription_key" ON "products"("enDescription");

-- CreateIndex
CREATE UNIQUE INDEX "products_arDescription_key" ON "products"("arDescription");

-- CreateIndex
CREATE INDEX "products_brandId_idx" ON "products"("brandId");

-- CreateIndex
CREATE INDEX "products_categoryId_idx" ON "products"("categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "categories_arName_key" ON "categories"("arName");

-- CreateIndex
CREATE UNIQUE INDEX "categories_enName_key" ON "categories"("enName");

-- CreateIndex
CREATE UNIQUE INDEX "Brand_arName_key" ON "Brand"("arName");

-- CreateIndex
CREATE UNIQUE INDEX "Brand_enName_key" ON "Brand"("enName");

-- CreateIndex
CREATE UNIQUE INDEX "Warehouse_enName_key" ON "Warehouse"("enName");

-- CreateIndex
CREATE UNIQUE INDEX "Warehouse_arName_key" ON "Warehouse"("arName");

-- CreateIndex
CREATE INDEX "Warehouse_productId_idx" ON "Warehouse"("productId");

-- CreateIndex
CREATE INDEX "images_productId_idx" ON "images"("productId");
