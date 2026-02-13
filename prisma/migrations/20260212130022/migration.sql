-- CreateEnum
CREATE TYPE "Subscription" AS ENUM ('Free', 'Pro');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "Subscription" "Subscription" NOT NULL DEFAULT 'Free';
