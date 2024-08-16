/*
  Warnings:

  - You are about to drop the `Meetings` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Usernames` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Meetings";

-- DropTable
DROP TABLE "Usernames";

-- CreateTable
CREATE TABLE "usernames" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,

    CONSTRAINT "usernames_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "meetings" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "telephone" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "meetings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usernames_email_key" ON "usernames"("email");
