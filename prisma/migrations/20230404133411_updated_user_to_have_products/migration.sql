-- DropIndex
DROP INDEX `product_user_id_fkey` ON `product`;

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `product_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
