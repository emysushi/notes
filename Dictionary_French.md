
# 1	FRENCH LIST
```dataview
TABLE WITHOUT ID
	link(file.link, title) as French,
	domain,
	term_translate as English
	
FROM #dictionary 
WHERE !contains(file.path, "Template") and term_language = "#french"
SORT term_fr asc
GROUP BY substring(file.link, 0, 1)
```

