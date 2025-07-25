/*
  Warnings:

  - You are about to drop the column `clekId` on the `profile` table. All the data in the column will be lost.
  - Added the required column `clerkId` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `profile` DROP COLUMN `clekId`,
    ADD COLUMN `clerkId` VARCHAR(191) NOT NULL;
