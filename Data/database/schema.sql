-- Data Engineering
DROP TABLE IF EXISTS  location CASCADE;
DROP TABLE IF EXISTS  search_condition CASCADE;
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
    "year" VARCHAR,
    CONSTRAINT "pk_search_condition" PRIMARY KEY (
        "year"
     )
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
    "Suicide"  VARCHAR,
    "year" VARCHAR
);

ALTER TABLE "search_condition" ADD CONSTRAINT "fk_search_condition_location_id" FOREIGN KEY("location_id")
REFERENCES "location" ("location_id");

ALTER TABLE "leading_causes_of_death" ADD CONSTRAINT "fk_leading_causes_year" FOREIGN KEY("year")
REFERENCES "search_condition" ("year");

	
	
	
	
	
	
	
	
	
	
