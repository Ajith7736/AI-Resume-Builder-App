/*
  Warnings:

  - Added the required column `name` to the `Resume` table without a default value. This is not possible if the table is not empty.
  - Added the required column `resumeContent` to the `Resume` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Resume` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Applied', 'Pending', 'Interviewing', 'No_Response', 'Rejected', 'Offer');

-- AlterTable
ALTER TABLE "Resume" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "resumeContent" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Application" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "roleTitle" TEXT NOT NULL,
    "resumeId" TEXT NOT NULL,
    "resumeUsed" TEXT NOT NULL,
    "Date" TEXT NOT NULL,
    "Industry" TEXT NOT NULL,
    "Status" "Status" NOT NULL DEFAULT 'Applied',

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResumeChanges" (
    "id" TEXT NOT NULL,
    "old_resume_id" TEXT NOT NULL,
    "new_resume_id" TEXT NOT NULL,
    "changed" TEXT NOT NULL,
    "removed" TEXT NOT NULL,
    "notChanged" TEXT NOT NULL,
    "dateChanged" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "resumeId" TEXT,

    CONSTRAINT "ResumeChanges_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResumeChanges" ADD CONSTRAINT "ResumeChanges_old_resume_id_fkey" FOREIGN KEY ("old_resume_id") REFERENCES "Resume"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResumeChanges" ADD CONSTRAINT "ResumeChanges_new_resume_id_fkey" FOREIGN KEY ("new_resume_id") REFERENCES "Resume"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
