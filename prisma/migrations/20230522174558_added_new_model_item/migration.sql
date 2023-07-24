-- AlterTable
ALTER TABLE `purchase` ADD COLUMN `orderStatus` ENUM('cancelled', 'delivered', 'draft', 'failed', 'in_progress', 'on_hold', 'pending', 'refunded', 'return_to_seller', 'returned', 'shipped') NOT NULL DEFAULT 'pending';
