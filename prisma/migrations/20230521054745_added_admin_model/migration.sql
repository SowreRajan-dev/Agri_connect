/*
  Warnings:

  - Added the required column `admin_id` to the `address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `admin_id` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `product_user_id_fkey`;

-- AlterTable
ALTER TABLE `address` ADD COLUMN `admin_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `product` ADD COLUMN `admin_id` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `admin` (
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `email` VARCHAR(191) NOT NULL,
    `user_name` VARCHAR(191) NOT NULL,
    `hashed_password` VARCHAR(191) NOT NULL,
    `role` ENUM('USER', 'ADMIN') NOT NULL DEFAULT 'USER',
    `id` VARCHAR(191) NOT NULL,
    `mobile` VARCHAR(191) NULL,
    `updated_at` DATETIME(3) NOT NULL,
    `IF(role='ADMIN',reviewRate,NULL)` INTEGER NULL DEFAULT 0,

    UNIQUE INDEX `admin_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `address` ADD CONSTRAINT `address_admin_id_fkey` FOREIGN KEY (`admin_id`) REFERENCES `admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `product_admin_id_fkey` FOREIGN KEY (`admin_id`) REFERENCES `admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
