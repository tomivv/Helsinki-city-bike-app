CREATE DATABASE citybike;

\c citybike

CREATE TABLE "stations" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar,
    "address" varchar,
    "city" varchar,
    "operator" varchar,
    "capacity" varchar,
    "x" varchar,
    "y" varchar
);

CREATE TABLE "journeys" (
    "id" SERIAL PRIMARY KEY,
    "departure" timestamp,
    "return" timestamp,
    "departure_station_id" int,
    "return_station_id" int,
    "distance" int,
    "duration" int
);

ALTER TABLE "journeys" ADD FOREIGN KEY ("departure_station_id") REFERENCES "stations" ("id");
ALTER TABLE "journeys" ADD FOREIGN KEY ("return_station_id") REFERENCES "stations" ("id");