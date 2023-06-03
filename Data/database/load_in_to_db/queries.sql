SELECT * FROM location;
SELECT * FROM search_condition;
SELECT * FROM leading_causes_of_death;

-- Health Search Volume by Year
SELECT year, SUM ("Cancer" + "cardiovascular" + "stroke" + "depression" + "rehab" + "vaccine" + "diarrhea" + "obesity" + "diabetes") AS Searches  
FROM search_condition 
GROUP BY year
ORDER BY year;

-- Health Search Volume by Year and Condition
SELECT year, SUM ("Cancer") AS Cancer,SUM ("cardiovascular") As Cardiovascular,SUM ("stroke") As Stroke,SUM ("depression") As Depression,SUM ("rehab") AS Rehab,SUM ("vaccine") AS Vaccine, SUM ("diarrhea") AS Diarrhea, SUM("obesity") AS Obesity, SUM ("diabetes") AS Diabetes    
FROM search_condition 
GROUP BY year
ORDER BY year;

-- Health Search Volume by city
SELECT l.city,l.postal,l.state, l.latitude, l.longitude, SUM (s."Cancer" + s."cardiovascular" + s."stroke" + s."depression" + s."rehab" + s."vaccine" + s."diarrhea" + s."obesity" + s."diabetes") AS Searches  
FROM location l
INNER JOIN search_condition s on s.location_id = l.location_id
GROUP BY l.city,l.state,l.postal, l.latitude, l.longitude
ORDER BY l.city;

-- Health Search Volume by state
SELECT l.state,l.postal, SUM (s."Cancer" + s."cardiovascular" + s."stroke" + s."depression" + s."rehab" + s."vaccine" + s."diarrhea" + s."obesity" + s."diabetes") AS Searches  
FROM location l
INNER JOIN search_condition s on s.location_id = l.location_id
GROUP BY l.state,l.postal;


-- Health Search Volume by city and Year
SELECT l.city, l.latitude, l.longitude,s.year, SUM (s."Cancer" + s."cardiovascular" + s."stroke" + s."depression" + s."rehab" + s."vaccine" + s."diarrhea" + s."obesity" + s."diabetes") AS Searches  
FROM location l
INNER JOIN search_condition s on s.location_id = l.location_id
GROUP BY l.city, l.latitude, l.longitude,s.year
ORDER BY year;


-- Top ten states most searched
SELECT l.state, SUM ("Cancer") AS Cancer,SUM ("cardiovascular") As Cardiovascular,SUM ("stroke") As Stroke,SUM ("depression") As Depression,SUM ("rehab") AS Rehab,SUM ("vaccine") AS Vaccine, SUM ("diarrhea") AS Diarrhea, SUM("obesity") AS Obesity, SUM ("diabetes") AS Diabetes 
FROM location l
INNER JOIN search_condition s on s.location_id = l.location_id
GROUP BY state
order by Cancer desc, Cardiovascular desc,Stroke desc,Depression desc,Rehab desc,Vaccine desc, Diarrhea desc, Diabetes desc, Obesity desc
LIMIT 10;

-- Total Search Volume by Condition
SELECT SUM ("Cancer") AS Cancer,SUM ("cardiovascular") As Cardiovascular,SUM ("stroke") As Stroke,SUM ("depression") As Depression,SUM ("rehab") AS Rehab,SUM ("vaccine") AS Vaccine, SUM ("diarrhea") AS Diarrhea, SUM("obesity") AS Obesity, SUM ("diabetes") AS Diabetes    
FROM search_condition 


-- Top Cases people dying through the year
SELECT * FROM leading_causes_of_death;

-- All Search Record List
SELECT *
FROM location l
INNER JOIN search_condition s on s.location_id = l.location_id
ORDER BY year;


SELECT SUM ("Accidents") AS Accidents,SUM ("Alzheimer") As Alzheimer,SUM ("Cerebrovascular") As Cerebrovascular,SUM ("Diabetes") As Diabetes,SUM ("Diseases_of_heart") AS Diseases_of_Heart, SUM ("Influenza_and_pneumonia") AS Influenza_and_Pneumonia, SUM ("Malignant_neoplasms") AS Malignant_eoplasms, SUM("Nephrosis") AS Nephrosis, SUM ("Suicide") AS Suicide,SUM ("Respiratory") AS Respiratory   
FROM leading_causes_of_death




