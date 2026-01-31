/*
  Warnings:

  - You are about to drop the column `ResumeData` on the `Resume` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Resume" DROP COLUMN "ResumeData",
ADD COLUMN     "ResumeContent" JSONB DEFAULT '{}',
ALTER COLUMN "Customization" SET DEFAULT '{}';
