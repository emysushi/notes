

## List of all feedback

```dataview
TABLE WITHOUT ID
	link(file.link, title) as Ref,
	qcDomain as Domain,
	type as Type,
	date_event as Date,
	note as Note,
	status as Status
FROM "*/Feedback_*"
SORT Domain DESC, type ASC
```