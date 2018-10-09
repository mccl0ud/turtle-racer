CREATE TABLE "Users" (
	"ID" serial NOT NULL,
	"UserName" varchar NOT NULL,
	"Password" varchar NOT NULL,
	"W.P.M(average)" int NOT NULL,
	"CompletedRaces" int NOT NULL,
	CONSTRAINT Users_pk PRIMARY KEY ("ID")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Prompts" (
	"ID" serial NOT NULL,
	"Title" varchar NOT NULL,
	"Text" varchar NOT NULL,
	CONSTRAINT Prompts_pk PRIMARY KEY ("ID")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "User History" (
	"ID" serial NOT NULL,
	"UserID" int NOT NULL,
	"Prompt ID" int NOT NULL,
	"W.P.M" int NOT NULL,
	"Date" serial NOT NULL,
	CONSTRAINT User History_pk PRIMARY KEY ("ID")
) WITH (
  OIDS=FALSE
);





ALTER TABLE "User History" ADD CONSTRAINT "User History_fk0" FOREIGN KEY ("UserID") REFERENCES "Users"("ID");
ALTER TABLE "User History" ADD CONSTRAINT "User History_fk1" FOREIGN KEY ("Prompt ID") REFERENCES "Prompts"("ID");

