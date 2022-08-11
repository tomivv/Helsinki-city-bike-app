-- remove journeys that are too short
DELETE FROM tmp_journey
WHERE distance < 10 OR duration < 10;

INSERT INTO journeys
(departure, return_time, departure_station_id, return_station_id, distance, duration)
SELECT departure, t.return, departure_station_id, return_station_id, distance, duration
FROM tmp_journey t
WHERE EXISTS (
	SELECT id FROM stations s
	WHERE s.id = t.departure_station_id -- check if departure station exists in stations table 
		AND t.return_station_id = ( 
			SELECT id FROM stations s2
			WHERE s2.id = t.return_station_id -- check if return station exists in stations table
		)
)
ON CONFLICT DO NOTHING;