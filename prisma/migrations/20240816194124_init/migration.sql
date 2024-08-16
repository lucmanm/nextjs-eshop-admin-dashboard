-- CreateTable
CREATE TABLE "Slider" (
    "id" TEXT NOT NULL,
    "arSlider" TEXT NOT NULL,
    "enSlider" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Slider_pkey" PRIMARY KEY ("id")
);
