-- AlterTable
ALTER TABLE `purchase` ADD COLUMN `adminId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `purchase` ADD CONSTRAINT `purchase_adminId_fkey` FOREIGN KEY (`adminId`) REFERENCES `admin`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
