/*
  Warnings:

  - You are about to drop the column `Industry` on the `Application` table. All the data in the column will be lost.
  - Added the required column `Link` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jobDescription` to the `Application` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Application" DROP COLUMN "Industry",
ADD COLUMN     "Link" TEXT NOT NULL,
ADD COLUMN     "jobDescription" TEXT NOT NULL;
