
# 1	FRENCH LIST
```dataview
TABLE WITHOUT ID
	link(file.link, title) as French,
	domain,
	term_translate as English,
	substring(French, 0, 2)
	
FROM #dictionary 
WHERE !contains(file.path, "Template") and term_language = "#french"
SORT term_fr asc
```



```dataview
TABLE rows.file.link AS "Name", rows.domain AS "Domain", file.path.substring(0, 2) AS CourseCode
FROM -"Templates" 
WHERE !contains(file.path, "Template") and term_language = "#french"
SORT file.name ASC 
GROUP BY realm

```
