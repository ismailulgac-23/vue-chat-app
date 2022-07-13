-- CreateTable
CREATE TABLE `User` (
    `userUUID` VARCHAR(191) NOT NULL,
    `fullName` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `photoURL` VARCHAR(191) NOT NULL DEFAULT 'default-user-8523853295.jpg',

    UNIQUE INDEX `User_username_key`(`username`),
    PRIMARY KEY (`userUUID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
