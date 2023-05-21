-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `product_user_id_fkey`;

-- AlterTable
ALTER TABLE `product` ADD COLUMN `user` JSON NULL;
