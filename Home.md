



## 0.1	Lis



## 0.2	List of all feedback

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