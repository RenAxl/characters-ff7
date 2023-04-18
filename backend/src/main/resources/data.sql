INSERT INTO tb_user (name, email, password) VALUES ('Axl', 'axl@email.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Rose', 'rose@email.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (authority) VALUES ('ROLE_ANALYST');
INSERT INTO tb_role (authority) VALUES ('ROLE_ADMIN');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);

INSERT INTO tb_category (name) VALUES ('Principal');
INSERT INTO tb_category (name) VALUES ('Membro da Shinra');
INSERT INTO tb_category (name) VALUES ('Secundário');
INSERT INTO tb_category (name) VALUES ('Vilão');
INSERT INTO tb_category (name) VALUES ('Weapon');
INSERT INTO tb_category (name) VALUES ('Turk');
INSERT INTO tb_category (name) VALUES ('Monstro');
INSERT INTO tb_category (name) VALUES ('Chefe');

INSERT INTO tb_character (name, age, residence, history, img_url) VALUES ('Cloud Strife', 21, 'Nibelhein', 'Cloud Strife é o personagem principal de Final Fantasy VII ...', 'https://clubedovideogame.com.br/wp-content/uploads/2019/11/ff7remake-cloud-1024x683.jpg');
INSERT INTO tb_character (name, age, residence, history, img_url) VALUES ('Rufus Shinra', 25, 'Midgar', 'Rufus Shinra é o vice-presidente da Companhia de Energia Elétrica...', 'https://gh.cdn.sewest.net/assets/ident/news/final-fantasy-vii-remake-screenshots-rufus-kyrie/en_US/re_01_Rufus%20header.jpg?quality=65');
INSERT INTO tb_character (name, age, residence, history, img_url) VALUES ('Elmyra Gainsborough', 45, 'Midgar (Favelas do Setor 5)', 'Elmyra era uma dona de casa cujo marido foi enviado para a linha de frente na guerra contra Wutai...', 'https://muralgamer.com/wp-content/uploads/2020/05/Elmyra-FF7-01.jpg');
INSERT INTO tb_character (name, age, residence, history, img_url) VALUES ('Sephiroth', 27, 'Nibelhein', 'Sephiroth é o principal antagonista de Final Fantasy VII...', 'https://s2.glbimg.com/J5_3LKvcPS6f_VDRY1kNbYEPtqo=/0x0:1000x563/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/H/U/A7e28TQ5eEyAVzA06MbQ/final-fantasy-vii-remake-crop.jpg');
INSERT INTO tb_character (name, age, residence, history, img_url) VALUES ('Ultimate Weapon', 0, 'Desconhecido', 'Ultimate Weapon é o Weapon em que os heróis mais lutam...', 'https://www.finalfantasyd20.com/wp-content/webpc-passthru.php?src=https://www.finalfantasyd20.com/wp-content/uploads/ult-wpn.png&nocache=1');
INSERT INTO tb_character (name, age, residence, history, img_url) VALUES ('Rude', 30, 'Midgar', 'Rude é um membro proeminente dos Turks...', 'https://criticalhits.com.br/wp-content/uploads/2020/05/final-fantasy-7-remake-como-derrotar-rude-01.jpg');
INSERT INTO tb_character (name, age, residence, history, img_url) VALUES ('Midgar Zolom', 0, 'Grasslands area', 'Midgar Zolom é um dos monstros mais fortes de final fantasy VII...', 'https://cdnb.artstation.com/p/assets/images/images/022/176/753/large/jasmine-zhang-zolom.jpg?1574386492');
INSERT INTO tb_character (name, age, residence, history, img_url) VALUES ('Lost Number', 0, 'Shinra Mansion', 'Lost Number é um chefe secreto encontrado no cofre da mansão Shinra...', 'https://i.ytimg.com/vi/DdQqZIDKEks/maxresdefault.jpg');

INSERT INTO tb_character_category (character_id, category_id) VALUES (1, 1);
INSERT INTO tb_character_category (character_id, category_id) VALUES (2, 2);
INSERT INTO tb_character_category (character_id, category_id) VALUES (3, 3);
INSERT INTO tb_character_category (character_id, category_id) VALUES (4, 4);
INSERT INTO tb_character_category (character_id, category_id) VALUES (5, 5);
INSERT INTO tb_character_category (character_id, category_id) VALUES (6, 6);
INSERT INTO tb_character_category (character_id, category_id) VALUES (7, 7);
INSERT INTO tb_character_category (character_id, category_id) VALUES (8, 8);