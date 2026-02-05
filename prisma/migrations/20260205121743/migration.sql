/*
  Warnings:

  - Changed the type of `Date` on the `Application` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Application" ALTER COLUMN "id" SET DEFAULT gen_random_uuid(),
DROP COLUMN "Date",
ADD COLUMN     "Date" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Resume" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();

-- AlterTable
ALTER TABLE "ResumeChanges" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();
