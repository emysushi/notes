

# 1	Home



## 1.1	Dernières notes

```dataview
TABLE domain, dateformat(file.mtime, "dd.MM.yyyy - HH:mm") AS "Last modified"
FROM "" and  !"Template" and !"Banner" and !"Crypto"
WHERE file.name !="Home" and file.name !="README" and file.name !="birthdayNode"
SORT domain DESC , file.mtime DESC
LIMIT 10
```


## 1.2	Liste des dossiers

```dataview
TABLE WITHOUT ID
	domaine as Domaine,
	link(file.link, title) as Title,
	status as Status,
	created as DateCreated,
	duedate as DueDate
	
FROM #dossier
WHERE !contains(file.path, "Template") 
SORT domaine ASC, status DESC, file.ctime ASC
```



## 1.3	Liste des Feedback

```dataview
TABLE WITHOUT ID
	link(file.link, title) as Ref,
	domain as Domain,
	mode as Mode,
	date_event as Date,
	note as Note,
	status as Status
FROM #feedback
WHERE contains(file.name, "Feedback_")
SORT Domain DESC, Type ASC
```



```dataview
TABLE WITHOUT ID
	status as Status,
	"![|60](" + cover + ")" as Cover,
	link(file.link, title) as Title,
	author as Author,
	join(list(publisher, publish)) as Publisher,
	created as Date

WHERE Tags = "Book"

SORT status DESC, file.ctime ASC
```