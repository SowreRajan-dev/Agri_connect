-- DropIndex
DROP INDEX `cart_product_id_fkey` ON `cart`;

-- AlterTable
ALTER TABLE `cart` ADD COLUMN `price` INTEGER NOT NULL DEFAULT 0;
