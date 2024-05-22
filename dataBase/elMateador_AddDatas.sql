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
('Aluminio');


-- Insertar datos en la tabla images
INSERT INTO images (name) VALUES
('el-mateador-imagenes-01.jpg'),
('el-mateador-imagenes-02.jpg'),
('el-mateador-imagenes-03.jpg'),
('el-mateador-imagenes-04.jpg'),
('el-mateador-imagenes-05.jpg'),
('el-mateador-imagenes-06.jpg'),
('el-mateador-imagenes-07.jpg'),
('el-mateador-imagenes-08.jpg'),
('el-mateador-imagenes-09.jpg'),
('bombilla-clasica.jpg'),
('bombilla-plateado.jpg'),
('bombilla-plateado-dorado.jpg'),
('termo-acero.jpg'),
('termo-mate-gris.jpg'),
('termo-mate-negro.jpg'),
('termo-mate-rosa.jpg'),
('termo-mod1-gris.jpg'),
('termo-mod1-marron.jpg'),
('bolso-matero-01.jpg');

-- Insertar datos en la tabla products
INSERT INTO products (name, description, price, stock, category_id, color_id) VALUES
('Mate Rey', 'Con aro y patas metalizado, duradero para un agarre cómodo y auténtico disfrute. Detalles resistentes en acero inoxidable que aportan un toque moderno y aseguran durabilidad. Diseño único que combina tradición y sofisticación.', 699.99, 50, 1, 1),
('Bombilla Clasica', 'Bombilla de acero inoxidable resistente y duradera. Ideal para acompañar tu mate favorito.', 1500, 100, 2, 9),
('Mate clásico de madera', 'Mate tradicional fabricado en madera de primera calidad. Un compañero perfecto para tus momentos de mate.', 779.99, 100, 1, 2),
('Bombilla de aluminio', 'Bombilla de aluminio ligera y resistente. Disfruta de tu mate de forma cómoda con esta práctica bombilla.', 669.99, 100, 2, 9),
('Bolso Matero porta termo - El Mateador', 'Bolso matero negro con base semirrígida y tira regulable, resistente al agua, con amplio compartimento principal sin divisiones y bolsillo externo. Diseño clásico y moderno, perfecto para acompañarte a cualquier destino.', 49.99, 100, 3, 2),
('Bombilla de silicona', 'Bombilla de silicona suave y flexible. Ideal para llevar contigo a todas partes.', 4239.99, 100, 2, 9),
('Termo Acero Inoxidable 1 Litro', 'El Termo Acero Inoxidable 1 Litro Pico Cebador Alta Duracion, es el compañero perfecto para mantener tus bebidas frías o calientes durante todo el día.Con su sistema de doble pared de aislamiento, podrás disfrutar de tus bebidas favoritas sin preocuparte por la temperatura.', 49.99, 100, 4, 2),
('Combo Termo + Mate de color', 'TERMO, con pico sebador a rosca, capacidad 1 litro. MATE, clasico, acero inoxidable, doble capa.', 1349.99, 100, 5, 2),
('Termo', 'Termo Acero Inoxidable Media Manija es el compañero perfecto para disfrutar de tus bebidas favoritas en cualquier momento y lugar. Capacidad de 1 litro. Fabricado con materiales de alta calidad, tanto en su exterior como en su interior.Con su diseño de media manija, este termo ofrece una experiencia de uso cómoda y práctica.', 49.99, 100, 4, 2),
('Bombilla con filtro de acero', 'Bombilla con filtro de acero inoxidable. Filtra las impurezas del mate para una experiencia más limpia.', 89.99, 30, 2, 9);

-- Insertar datos en la tabla shopping_cart
INSERT INTO shopping_cart (user_id, product_id, quantity) VALUES
(1, 1, 1),
(1, 3, 2),
(1, 4, 1),
(1, 7, 3),
(2, 2, 1),
(2, 9, 3),
(3, 6, 6);

-- Insertar datos en la tabla product_images
INSERT INTO product_images (product_id, image_id) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(2, 10),
(3, 8),
(3, 9),
(4, 11),
(4, 12),
(5, 19),
(6, 5),
(6, 7),
(7, 13),
(8, 14),
(8, 15),
(8, 16),
(9, 17),
(9, 18),
(10, 6);