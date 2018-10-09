CREATE TABLE "users" (
	"id" serial NOT NULL,
	"username" varchar NOT NULL UNIQUE,
	"password_digest" varchar NOT NULL,
	"wpm_avg" int NOT NULL,
	"completed_races" int NOT NULL,
	CONSTRAINT Users_pk PRIMARY KEY ("ID")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "prompts" (
	"id" serial NOT NULL,
	"title" varchar NOT NULL,
	"text" varchar NOT NULL,
	CONSTRAINT Prompts_pk PRIMARY KEY ("ID")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "user history" (
	"id" serial NOT NULL,
	"user_id" int NOT NULL,
	"prompt_id" int NOT NULL,
	"wpm" int NOT NULL,
	"date" serial NOT NULL,
	CONSTRAINT User History_pk PRIMARY KEY ("ID")
) WITH (
  OIDS=FALSE
);





ALTER TABLE "User History" ADD CONSTRAINT "User History_fk0" FOREIGN KEY ("UserID") REFERENCES "Users"("ID");
ALTER TABLE "User History" ADD CONSTRAINT "User History_fk1" FOREIGN KEY ("Prompt ID") REFERENCES "Prompts"("ID");

