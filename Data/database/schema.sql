-- Data Engineering
DROP TABLE IF EXISTS  location CASCADE;
DROP TABLE IF EXISTS  search_condition CASCADE;
DROP TABLE IF EXISTS  year CASCADE;
DROP TABLE IF EXISTS leading_causes_of_death CASCADE;


CREATE TABLE "location" (
    "location" VARCHAR,
    "location_id" VARCHAR NOT NULL,
    "latitude" VARCHAR,
    "longitude" VARCHAR,
    CONSTRAINT "pk_location" PRIMARY KEY (
        "location_id"
     )
);

CREATE TABLE "year" (
    "year" VARCHAR   NOT NULL,
    "year_code" VARCHAR  NOT NULL,
    CONSTRAINT "pk_year" PRIMARY KEY (
        "year_code"
     )
);

CREATE TABLE "search_condition" (
    "location_id" VARCHAR   NOT NULL,
    "Cancer" VARCHAR,
    "cardiovascular" VARCHAR,
    "stroke" VARCHAR,
    "depression" VARCHAR,
    "rehab" VARCHAR,
    "vaccine" VARCHAR,
    "diarrhea" VARCHAR,
    "obesity" VARCHAR,
    "diabetes" VARCHAR,
    "year_code" VARCHAR   NOT NULL
);

CREATE TABLE "leading_causes_of_death" (
    "Diseases_of_heart" VARCHAR,
    "Malignant_neoplasms" VARCHAR,
    "Accidents" VARCHAR,
    "respiratory" VARCHAR,
    "Cerebrovascular" VARCHAR,
    "Alzheimer" VARCHAR,
    "Diabetes" VARCHAR,
    "Influenza_and_pneumonia" VARCHAR,
    "Nephrosis" VARCHAR,
    "Suicide" VARCHAR,
    "year_code" VARCHAR
);

ALTER TABLE "search_condition" ADD CONSTRAINT "fk_search_condition_location_id" FOREIGN KEY("location_id")
REFERENCES "location" ("location_id");

ALTER TABLE "search_condition" ADD CONSTRAINT "fk_search_condition_year_code" FOREIGN KEY("year_code")
REFERENCES "year" ("year_code");

ALTER TABLE "leading_causes_of_death" ADD CONSTRAINT "fk_leading_causes_of_death_year_code" FOREIGN KEY("year_code")
REFERENCES "year" ("year_code");