CREATE TABLE users (
	"id" serial NOT NULL,
	"username" varchar NOT NULL UNIQUE,
	"password_digest" varchar NOT NULL,
	"wpm_avg" int NOT NULL,
	"completed_races" int NOT NULL,
	CONSTRAINT users_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE prompts (
	"id" serial NOT NULL,
	"title" varchar NOT NULL,
	"text" varchar NOT NULL,
	CONSTRAINT prompts_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE user_history (
	"id" serial NOT NULL,
	"user_id" int NOT NULL,
	"prompt_id" int NOT NULL,
	"wpm" int NOT NULL,
	"date" serial NOT NULL,
	CONSTRAINT user_history_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);





ALTER TABLE "user_history" ADD CONSTRAINT "user_history_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");
ALTER TABLE "user_history" ADD CONSTRAINT "user_history_fk1" FOREIGN KEY ("prompt_id") REFERENCES "prompts"("id");

