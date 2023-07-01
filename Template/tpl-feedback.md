


<%*
let qcDate = tp.file.creation_date("YYYY-MM-DD")
let qcDomain = tp.file.folder(false)
titleName = "Feedback_" + qcDate
await tp.file.rename(titleName)
-%>

---
author:: EmySushi
created:: <% tp.file.creation_date("YYYY-MM-DD HH:mm:ss") %>

---

- type:: #feedback
- domain::  <% "#"+tp.file.folder(false) %>
- mode :: Dst/Intero/Pres
- date_event :: YYYY-MM-DD
- theme :: NA
- note :: xx/xx
- status :: InProgess/Validate/NValidate


## Points positifs
---



## Points négatifs
---





