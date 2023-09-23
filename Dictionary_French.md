
# 1	FRENCH LIST
```dataview
TABLE WITHOUT ID
	link(file.link, title) as Ref,
	domain
	
FROM #dictionary 
WHERE !contains(file.path, "Template") and term_language=#french
SORT term_fr asc
```

