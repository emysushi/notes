

## 0.1	FRENCH LIST
```dataview
TABLE rows.file.link as Term, rows.term_language as Lang, rows.term_translate as Translation
	
FROM #dictionary 
WHERE !contains(file.link, "Template") and term_language = "#english"
GROUP BY substring(string(upper(file.name)), 0, 1) as Letter



```

