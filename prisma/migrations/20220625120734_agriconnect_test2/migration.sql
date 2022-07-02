-- DropForeignKey
ALTER TABLE `cart` DROP FOREIGN KEY `cart_product_id_fkey`;

-- CreateTable
CREATE TABLE `_cartToproduct` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_cartToproduct_AB_unique`(`A`, `B`),
    INDEX `_cartToproduct_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_cartToproduct` ADD CONSTRAINT `_cartToproduct_A_fkey` FOREIGN KEY (`A`) REFERENCES `cart`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_cartToproduct` ADD CONSTRAINT `_cartToproduct_B_fkey` FOREIGN KEY (`B`) REFERENCES `product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
