/*
  Warnings:

  - You are about to drop the column `productId` on the `purchase` table. All the data in the column will be lost.
  - You are about to alter the column `starRating` on the `review` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `purchase` DROP COLUMN `productId`;

-- AlterTable
ALTER TABLE `review` MODIFY `starRating` DOUBLE NOT NULL DEFAULT 0;
