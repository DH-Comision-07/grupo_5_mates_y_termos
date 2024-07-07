USE el_mateador;

-- Insertar datos en la tabla users
INSERT INTO users (name, lastName, email, birthdate, image, password, role) VALUES
('Rodolfo', 'Quiroga', 'rodolfo@example.com', '1996-02-15', 'avatar1.svg', '$2a$12$Xc7RjOi.8OwQGogKZ5LtKOe8yfWXQQ7fCrq1oM/mYW5OqrKVsVc8u', '1'),
('Belen', 'Brito', 'belen@example.com', '2007-12-10', 'avatar2.svg', '$2a$12$Rye7FTBWebRscMks.rDokuUuDDwmfOym02m/u2XdhpGPhpxwrDI3a', '3'),
('Pedro', 'Alvarez', 'pedro@example.com', '1982-07-09', 'avatar3.svg', '$2a$12$eVLwgFTph8R/gYOjrHfWBOLregtppX0Lgwy5g4RI9rZrYykwvzqHy', '1');

-- Insertar datos en la tabla categories
INSERT INTO categories (name) VALUES
('Mates'),
('Bombillas'),
('Termos'),
('Bolsos Materos'),
('Combos Materos');

-- Insertar datos en la tabla colors
INSERT INTO colors (name) VALUES
('Rojo'),
('Azul'),
('verde'),
('Rosa'),
('Blanco'),
('Negro'),
('Amarillo'),
('Gris'),
('Aluminio'),
('Marron');

-- Insertar datos en la tabla products
INSERT INTO products (name, description, price, discount, stock, category_id, color_id) VALUES
('Mate Rey', 'Con aro y patas metalizado, duradero para un agarre cómodo y auténtico disfrute. Detalles resistentes en acero inoxidable que aportan un toque moderno y aseguran durabilidad. Diseño único que combina tradición y sofisticación.', 6990.99, 15, 60, 1, 1),
('Bombilla Clasica', 'Bombilla de acero inoxidable resistente y duradera. Ideal para acompañar tu mate favorito.', 2500, 0 , 100, 2, 9),
('Bombilla de aluminio', 'Bombilla de aluminio ligera y resistente. Disfruta de tu mate de forma cómoda con esta práctica bombilla.', 2999, 18, 100, 2, 2),
('Mate clásico de madera', 'Mate tradicional fabricado en madera de primera calidad. Un compañero perfecto para tus momentos de mate.', 16690.99, 6 , 100, 1, 9),
('Bolso Matero porta termo', 'Bolso matero negro con base semirrígida y tira regulable, resistente al agua, con amplio compartimento principal sin divisiones y bolsillo externo. Diseño clásico y moderno, perfecto para acompañarte a cualquier destino.', 36999.99, 10, 100, 4, 2),
('Bombilla de silicona', 'Bombilla de silicona suave y flexible. Ideal para llevar contigo a todas partes.', 3699.99, 0, 100, 2, 9),
('Termo Acero Inoxidable 1 Litro', 'El Termo Acero Inoxidable 1 Litro Pico Cebador Alta Duracion, es el compañero perfecto para mantener tus bebidas frías o calientes durante todo el día.Con su sistema de doble pared de aislamiento, podrás disfrutar de tus bebidas favoritas sin preocuparte por la temperatura.', 49000, 0, 100, 3, 2),
('Combo Termo + Mate de color', 'TERMO, con pico sebador a rosca, capacidad 1 litro. MATE, clasico, acero inoxidable, doble capa.', 96999.99, 0, 100, 5, 2),
('Termo', 'Termo Acero Inoxidable Media Manija es el compañero perfecto para disfrutar de tus bebidas favoritas en cualquier momento y lugar. Capacidad de 1 litro. Fabricado con materiales de alta calidad, tanto en su exterior como en su interior.Con su diseño de media manija, este termo ofrece una experiencia de uso cómoda y práctica.', 54000, 0, 100, 3, 2),
('Bombilla con filtro de acero', 'Bombilla con filtro de acero inoxidable. Filtra las impurezas del mate para una experiencia más limpia.', 2199.99, 0, 30, 2, 9),
('Bombilla Clasica Nueva', 'Ideal para acompañar tu mate favorito. Bombilla de acero inoxidable resistente.', 4500, 10 , 30, 2, 9),
('Termo 1 litro', 'El compañero perfecto para disfrutar de tus bebidas favoritas en cualquier momento y lugar. Fabricado con materiales de alta calidad, tanto en su exterior como en su interior.', 45000, 6, 40, 3, 4),
('Mate Acero Inoxidable', 'Con aro y patas metalizado, agarre ergonomico y auténtico disfrute. Diseño único que combina tradición y sofisticación.', 7990.99, 15, 60, 1, 3),
('Mate de madera', 'Compañero perfecto para tus momentos de mate. Mate fabricado en madera de primera calidad.', 18900.99, 0 , 45, 1,6),
('Termo Ergonomico', 'Termo Acero Inoxidable Media Manija es el compañero perfecto para disfrutar de tus bebidas favoritas en cualquier momento y lugar. Capacidad de 1 litro.', 55000, 10, 40, 3, 3),
('Termo con Pico Cebador', 'TERMO, con pico sebador a rosca, capacidad 1 litro.', 43000, 0, 25, 3, 10);

-- Insertar datos en la tabla images
INSERT INTO images (name, product_id) VALUES
('el-mateador-imagenes-01.jpg',1),
('el-mateador-imagenes-02.jpg',1),
('el-mateador-imagenes-03.jpg',1),
('el-mateador-imagenes-04.jpg',1),
('el-mateador-imagenes-05.jpg',2),
('el-mateador-imagenes-06.jpg',3),
('el-mateador-imagenes-07.jpg',3),
('el-mateador-imagenes-08.jpg',4),
('el-mateador-imagenes-09.jpg',4),
('bombilla-clasica.jpg',10),
('bombilla-plateado.jpg',6),
('bombilla-plateado-dorado.jpg',6),
('termo-acero.jpg',7),
('termo-mate-gris.jpg',8),
('termo-mate-negro.jpg',8),
('termo-mate-rosa.jpg',8),
('termo-mod1-gris.jpg',9),
('termo-mod1-marron.jpg',9),
('bolso-matero-01.jpg',5),
('bombilla-clasica1.jpg',11),
('termo-rosa.jpg',12),
('el-mateador-imagenes-033.jpg',13),
('el-mateador-imagenes-044.jpg',13),
('el-mateador-imagenes-10.jpg',14),
('termo-mod11-gris.jpg',15),
('termo-mod11-marron.jpg',16);


-- Insertar datos en la tabla shopping_cart
INSERT INTO shopping_cart (user_id, product_id, quantity) VALUES
(1, 1, 1),
(1, 3, 2),
(1, 4, 1),
(1, 7, 3),
(2, 2, 1),
(2, 9, 3),
(3, 6, 6);

-- Insertar datos en la tabla favoritos
INSERT INTO favorite_product(user_id, product_id) VALUES
(1, 1),
(1, 3),
(1, 4),
(1, 7),
(2, 1),
(2, 3),
(3, 6);
