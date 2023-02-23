-- CreateEnum
CREATE TYPE "Section" AS ENUM ('FOODS', 'DRINKS', 'DESSERTS', 'EXTRAS');

-- AlterTable
ALTER TABLE "Categories" ADD COLUMN     "section" "Section" NOT NULL DEFAULT 'FOODS';
