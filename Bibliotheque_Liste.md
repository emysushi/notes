

## List of all books

```dataview
TABLE WITHOUT ID
	status as Status,
	"![|60](" + cover + ")" as Cover,
	link(file.link, title) as Title,
	author as Author,
	join(list(publisher, publish)) as Publisher,
	created as Date
FROM #book
WHERE contains(file.path, "FicheLecture") 
SORT status DESC, file.ctime ASC
```