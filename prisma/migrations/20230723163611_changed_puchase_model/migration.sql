/*
  Warnings:

  - You are about to drop the column `quantity` on the `purchase` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `purchase` DROP FOREIGN KEY `purchase_productId_fkey`;

-- AlterTable
ALTER TABLE `purchase` DROP COLUMN `quantity`;

-- CreateTable
CREATE TABLE `_productTopurchase` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_productTopurchase_AB_unique`(`A`, `B`),
    INDEX `_productTopurchase_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_productTopurchase` ADD CONSTRAINT `_productTopurchase_A_fkey` FOREIGN KEY (`A`) REFERENCES `product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_productTopurchase` ADD CONSTRAINT `_productTopurchase_B_fkey` FOREIGN KEY (`B`) REFERENCES `purchase`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
