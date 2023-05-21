-- DropForeignKey
ALTER TABLE `address` DROP FOREIGN KEY `address_admin_id_fkey`;

-- DropIndex
DROP INDEX `product_user_id_fkey` ON `product`;

-- AlterTable
ALTER TABLE `address` MODIFY `admin_id` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `address` ADD CONSTRAINT `address_admin_id_fkey` FOREIGN KEY (`admin_id`) REFERENCES `admin`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
