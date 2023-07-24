/*
  Warnings:

  - You are about to drop the column `user_id` on the `product` table. All the data in the column will be lost.
  - You are about to drop the `_producttopurchase` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `productsBrought` to the `purchase` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_producttopurchase` DROP FOREIGN KEY `_productTopurchase_A_fkey`;

-- DropForeignKey
ALTER TABLE `_producttopurchase` DROP FOREIGN KEY `_productTopurchase_B_fkey`;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `user_id`,
    ADD COLUMN `purchasesDone` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `purchase` ADD COLUMN `productId` VARCHAR(191) NULL,
    ADD COLUMN `productsBrought` JSON NOT NULL;

-- DropTable
DROP TABLE `_producttopurchase`;
