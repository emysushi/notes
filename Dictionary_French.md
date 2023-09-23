
# 1	FRENCH LIST
```dataview
LIST

	
FROM #dictionary 
WHERE !contains(file.link, "Template") and term_language = "#french"
SORT term_fr asc


```


	substring(string(file.name), 0, 1) as Letter

```dataview
TABLE rows.file.link AS "Name", rows.domain AS "Domain", file.path.substring(0, 2) AS CourseCode
FROM -"Templates" 
WHERE !contains(file.path, "Template") and term_language = "#french"
SORT file.name ASC 
GROUP BY realm

```
