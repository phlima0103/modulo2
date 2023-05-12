BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "experiencias" (
	"ID"	INTEGER NOT NULL UNIQUE,
	"Data"	NUMERIC NOT NULL,
	"experiência"	TEXT NOT NULL,
	PRIMARY KEY("ID")
);
CREATE TABLE IF NOT EXISTS "dadospessoais" (
	"CPF"	NUMERIC NOT NULL,
	"Nome"	TEXT NOT NULL,
	"Email"	NUMERIC NOT NULL,
	"Telefone"	NUMERIC NOT NULL,
	"Endereço"	INTEGER NOT NULL,
	"ID"	INTEGER NOT NULL UNIQUE,
	PRIMARY KEY("ID")
);
CREATE TABLE IF NOT EXISTS "formacao" (
	"ID"	INTEGER NOT NULL UNIQUE,
	"Formação"	TEXT NOT NULL,
	"Data início"	NUMERIC NOT NULL,
	"Data final"	NUMERIC NOT NULL,
	"Instituição"	TEXT,
	PRIMARY KEY("ID")
);
CREATE TABLE IF NOT EXISTS "habilidades" (
	"habilidades"	INTEGER NOT NULL,
	"ID"	INTEGER NOT NULL UNIQUE,
	PRIMARY KEY("ID")
);
CREATE TABLE IF NOT EXISTS "personalidade" (
	"ID"	INTEGER NOT NULL UNIQUE,
	"características"	TEXT NOT NULL,
	PRIMARY KEY("ID")
);
CREATE TABLE IF NOT EXISTS "realizacoes" (
	"ID"	INTEGER NOT NULL UNIQUE,
	"realizações"	TEXT,
	PRIMARY KEY("ID")
);
INSERT INTO "experiencias" VALUES (1,2018,'Simulação diplomática');
INSERT INTO "experiencias" VALUES (2,2018,'FEBRACE');
INSERT INTO "experiencias" VALUES (3,2019,'Simulação diplomática');
INSERT INTO "experiencias" VALUES (4,2019,'FEBRACE');
INSERT INTO "experiencias" VALUES (5,2020,'Simulação diplomática');
INSERT INTO "experiencias" VALUES (6,2021,'Simulação diplomática');
INSERT INTO "experiencias" VALUES (7,2022,'Simulação diplomática');
INSERT INTO "experiencias" VALUES (8,2020,'Matemática financeira - ESPM');
INSERT INTO "dadospessoais" VALUES ('4816425683*','Pedro Henrique Oliveira Lima','pedroholima01@gmail.com','(11)98314-1303','Rua Tabapuã 474',1);
INSERT INTO "formacao" VALUES (1,'Ensino fundamental',2011,2019,'E.E Prof. Napoleão de Carvalho Freire');
INSERT INTO "formacao" VALUES (2,'Ensino médio',2020,2022,'Colégio Santo Américo');
INSERT INTO "formacao" VALUES (3,'Ensino superior',2023,'-','INTELI');
INSERT INTO "habilidades" VALUES ('Comunicação não violenta',1);
INSERT INTO "habilidades" VALUES ('Liderança',2);
INSERT INTO "habilidades" VALUES ('Colaboração',3);
INSERT INTO "habilidades" VALUES ('Relação interpessoal',4);
INSERT INTO "habilidades" VALUES ('Comunicação em público',5);
INSERT INTO "personalidade" VALUES (1,'Extrovertido');
INSERT INTO "personalidade" VALUES (2,'Analítico');
INSERT INTO "personalidade" VALUES (3,'Calmo');
INSERT INTO "realizacoes" VALUES (0,'Ingresso ISMART');
INSERT INTO "realizacoes" VALUES (1,'Formatura do ensino médio');
INSERT INTO "realizacoes" VALUES (2,'Ingresso na faculdade');
INSERT INTO "realizacoes" VALUES (3,'Medalhista MOGFOG 2022');
INSERT INTO "realizacoes" VALUES (4,'Mérito acadêmico 2020-2022');
COMMIT;
