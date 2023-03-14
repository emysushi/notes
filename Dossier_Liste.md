

## Liste des dossiers

```dataview
TABLE WITHOUT ID
	status as Status,
	domaine as Domaine,
	link(file.link, title) as Title,
	author as Author,
	created as DateCreated,
	duedate as DueDate
	
FROM #dossier
WHERE !contains(file.path, "Template") 
SORT domaine ASC, status DESC, file.ctime ASC
```