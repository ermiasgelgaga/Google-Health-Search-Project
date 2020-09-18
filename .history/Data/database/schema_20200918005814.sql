-- Data Engineering
DROP TABLE IF EXISTS  location CASCADE;
DROP TABLE IF EXISTS  search_condition CASCADE;
DROP TABLE IF EXISTS leading_causes_of_death CASCADE;

CREATE TABLE "location" (
    "location" VARCHAR   NOT NULL,
    "location_id" INT   NOT NULL,
    "latitude" INT   NOT NULL,
    "longitude" INT   NOT NULL,
    CONSTRAINT "pk_location" PRIMARY KEY (
        "location_id"
     )
);

CREATE TABLE "search_condition" (
    "location_id" VARCHAR   NOT NULL,
    "Cancer" INT   NOT NULL,
    "cardiovascular" INT   NOT NULL,
    "stroke" INT   NOT NULL,
    "depression" INT   NOT NULL,
    "rehab" INT   NOT NULL,
    "vaccine" INT   NOT NULL,
    "diarrhea" INT   NOT NULL,
    "obesity" INT   NOT NULL,
    "diabetes" INT   NOT NULL,
    "year" INT   NOT NULL,
    CONSTRAINT "pk_search_condition" PRIMARY KEY (
        "year"
     )
);

CREATE TABLE "leading_causes_of_death" (
    "Diseases_of_heart" INT   NOT NULL,
    "Malignant_neoplasms" INT   NOT NULL,
    "Accidents" INT   NOT NULL,
    "respiratory" INT   NOT NULL,
    "Cerebrovascular" INT   NOT NULL,
    "Alzheimer" INT   NOT NULL,
    "Diabetes" INT   NOT NULL,
    "Influenza_and_pneumonia" INT   NOT NULL,
    "Nephrosis" INT   NOT NULL,
    "Suicide" INT   NOT NULL,
    "year" INT   NOT NULL
);

ALTER TABLE "search_condition" ADD CONSTRAINT "fk_search_condition_location_id" FOREIGN KEY("location_id")
REFERENCES "location" ("location_id");

ALTER TABLE "leading_causes_of_death" ADD CONSTRAINT "fk_leading_causes_of_death_year" FOREIGN KEY("year")
REFERENCES "search_condition" ("year");


