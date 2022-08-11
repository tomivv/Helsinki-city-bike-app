INSERT INTO stations
(id, name, address, city, operator, capacity, x, y)
SELECT t.id, t.name, t.adress, t.kaupunki, t.operaattor, t.kapasiteet, t.x, t.y
FROM tmp_stations t