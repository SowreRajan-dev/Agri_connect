/*
  Warnings:

  - Added the required column `addressline1` to the `address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressline2` to the `address` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `address` ADD COLUMN `addressline1` VARCHAR(191) NOT NULL,
    ADD COLUMN `addressline2` VARCHAR(191) NOT NULL;
