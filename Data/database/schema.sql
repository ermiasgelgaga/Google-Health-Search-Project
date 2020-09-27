-- Data Engineering
DROP TABLE IF EXISTS location CASCADE;
DROP TABLE IF EXISTS search_condition CASCADE;
DROP TABLE IF EXISTS leading_causes_of_death CASCADE;


CREATE TABLE "location" (
	"location_id" VARCHAR NOT NULL,
    "city" VARCHAR,
	"state" VARCHAR,
	"postal" VARCHAR,
    "latitude" VARCHAR,
    "longitude" VARCHAR);


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
    "year" VARCHAR);


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






