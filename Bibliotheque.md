


```dataview
TABLE WITHOUT ID
	status as Status,
	rows.file.link as Book
FROM  #book
WHERE !contains(file.path, "*FicheLecture*") and status==unread
GROUP BY status
SORT status
```

## List of all books

```dataview
TABLE WITHOUT ID
	status as Status,
	"![|60](" + cover + ")" as Cover,
	link(file.link, title) as Title,
	author as Author,
	join(list(publisher, publish)) as Publisher
FROM #book
WHERE !contains(file.path, "*FicheLecture*")
SORT status DESC, file.ctime ASC
```