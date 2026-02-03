/*
  Warnings:

  - You are about to drop the column `Customization` on the `Resume` table. All the data in the column will be lost.
  - You are about to drop the column `ResumeContent` on the `Resume` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Resume` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Resume` table. All the data in the column will be lost.
  - You are about to drop the column `template` on the `Resume` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Resume` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Resume" DROP COLUMN "Customization",
DROP COLUMN "ResumeContent",
DROP COLUMN "createdAt",
DROP COLUMN "name",
DROP COLUMN "template",
DROP COLUMN "updatedAt",
ALTER COLUMN "id" DROP DEFAULT;
