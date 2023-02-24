-- CreateEnum
CREATE TYPE "ProfileIcon" AS ENUM ('ICON_1', 'ICON_2', 'ICON_3', 'ICON_4', 'ICON_5', 'ICON_6', 'ICON_7', 'ICON_8', 'ICON_9');

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "profileIcon" "ProfileIcon" NOT NULL DEFAULT 'ICON_4';
