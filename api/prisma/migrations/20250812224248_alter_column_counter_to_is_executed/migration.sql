/*
  Warnings:

  - You are about to drop the column `counter` on the `goal` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `goal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."goal" DROP COLUMN "counter",
ADD COLUMN     "isExecuted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
