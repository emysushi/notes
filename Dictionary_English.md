

## 0.1	ENGLISH LIST
```dataview
TABLE rows.file.link as Term,rows.domain, upper(rows.term_language) as Lang, upper(rows.term_translate) as Translate_french
	
FROM #dictionary 
WHERE !contains(file.link, "Template") and term_language = "#english"
GROUP BY substring(string(upper(file.name)), 0, 1) as Letter
```

