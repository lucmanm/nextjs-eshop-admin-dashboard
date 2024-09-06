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

-- CreateIndex
CREATE UNIQUE INDEX "Warehouse_enName_key" ON "Warehouse"("enName");

-- CreateIndex
CREATE UNIQUE INDEX "Warehouse_arName_key" ON "Warehouse"("arName");

-- CreateIndex
CREATE INDEX "Warehouse_productId_idx" ON "Warehouse"("productId");
