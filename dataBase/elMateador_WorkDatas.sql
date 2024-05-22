USE el_mateador;

SELECT * FROM users;
SELECT * FROM categories;
SELECT * FROM colors;
SELECT * FROM images;
SELECT * FROM products;
SELECT * FROM product_images;
SELECT * FROM shopping_cart;

SELECT products.name, product_images.id, images.name
FROM products
INNER JOIN product_images ON products.id = product_id
INNER JOIN images ON images.id = image_id;
