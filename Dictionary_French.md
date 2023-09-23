
# 1	FRENCH LIST
```dataview
TABLE WITHOUT ID
	link(file.link, title) as Ref,
	term_fr,
	term_en
	
FROM #dictionary 
WHERE !contains(file.path, "Template") and term_language=#french
SORT term_fr asc
```

