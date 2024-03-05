CREATE TABLE `sales`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `id_client` INT NOT NULL,
    `id_product` INT NOT NULL,
    `amount` INT NOT NULL,
    `date` TIMESTAMP NOT NULL DEFAULT 'CURRENT_DATETIME'
);
CREATE TABLE `phones`(
    `id_client` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `phone` TEXT NOT NULL,
    PRIMARY KEY(`phone`)
);
CREATE TABLE `client`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nane` TEXT NOT NULL,
    `cpf` TEXT NOT NULL,
    `street` TEXT NULL,
    `neighbourhood` TEXT NULL,
    `city` TEXT NULL
);
ALTER TABLE
    `client` ADD UNIQUE `client_cpf_unique`(`cpf`);
CREATE TABLE `product`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` TEXT NOT NULL,
    `price` DECIMAL(8, 2) NOT NULL,
    `descrption` TEXT NULL
);
ALTER TABLE
    `sales` ADD CONSTRAINT `sales_id_product_foreign` FOREIGN KEY(`id_product`) REFERENCES `product`(`id`);
ALTER TABLE
    `sales` ADD CONSTRAINT `sales_id_client_foreign` FOREIGN KEY(`id_client`) REFERENCES `client`(`id`);
ALTER TABLE
    `phones` ADD CONSTRAINT `phones_id_client_foreign` FOREIGN KEY(`id_client`) REFERENCES `client`(`id`);