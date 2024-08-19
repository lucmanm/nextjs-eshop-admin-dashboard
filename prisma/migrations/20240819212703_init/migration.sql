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
