


<%*
let qcDate = tp.file.creation_date("YYYY-MM-DD")
let qcDomain = tp.file.folder(false)
titleName = "Feedback_" + qcDate
await tp.file.rename(titleName)
-%>


tags : #fiche  <% "#"+qcDomain %> <% "#"+qcFileName %>

---

title:: <% "#"+"feedback" %>
domaine:: <% "#"+tp.file.folder(false) %>
author:: EmySushi
status:: inprogress
created:: <% tp.file.creation_date("YYYY-MM-DD HH:mm:ss") %>

<% tp.file.cursor() %>

---

type :: Dst/Interro/Pres
date_event :: YYYY-MM-DD
theme :: NA
note :: NA


## Points positifs


## Points négatifs




