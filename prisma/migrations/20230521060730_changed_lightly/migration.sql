-- DropForeignKey
ALTER TABLE `address` DROP FOREIGN KEY `address_user_id_fkey`;

-- AlterTable
ALTER TABLE `address` MODIFY `user_id` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `address` ADD CONSTRAINT `address_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
