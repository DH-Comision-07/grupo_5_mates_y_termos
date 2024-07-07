DROP DATABASE IF EXISTS `el_mateador`;
CREATE DATABASE el_mateador;

USE el_mateador;

-- Tabla users
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(250) NOT NULL,
    lastName VARCHAR(250) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    birthdate DATE NOT NULL ,
    image VARCHAR(250) NOT NULL DEFAULT 'avatar1.svg',
    password VARCHAR(250) NOT NULL,
    role VARCHAR(10) NOT NULL DEFAULT '1'
);

-- Tabla categories
CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(60) UNIQUE NOT NULL
);

-- Tabla colors
CREATE TABLE colors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(60) UNIQUE NOT NULL
);



-- Tabla products
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(250) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(10) NOT NULL,
    discount DECIMAL(10) NOT NULL,
    discount_price DECIMAL(10) AS ((price * (1 - (discount/100)))) STORED,
    stock INT NOT NULL,
    category_id INT NOT NULL,
    color_id INT NOT NULL,
    FOREIGN KEY (category_id) REFERENCES categories(id),
    FOREIGN KEY (color_id) REFERENCES colors(id)
);

CREATE TABLE images (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(250) UNIQUE NOT NULL,
    product_id INT,
    FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Tabla carrito de compras
CREATE TABLE shopping_cart (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT ,
    product_id INT,
    quantity INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Tabla favoritos
CREATE TABLE favorite_product (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT ,
    product_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);