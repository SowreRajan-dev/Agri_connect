/*
  Warnings:

  - Made the column `adminId` on table `purchase` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `purchase` DROP FOREIGN KEY `purchase_adminId_fkey`;

-- AlterTable
ALTER TABLE `purchase` MODIFY `adminId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `purchase` ADD CONSTRAINT `purchase_adminId_fkey` FOREIGN KEY (`adminId`) REFERENCES `admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
