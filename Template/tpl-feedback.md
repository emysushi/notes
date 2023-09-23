
<%*
let qcFileName = await tp.system.prompt("Titre Fiche (ex: Mahomet)")
let qcDomain = tp.file.folder(false)
titleName = "lesson_" + qcFileName
await tp.file.rename(titleName)
-%>


---
- **type**:: #feedback
- **domain**:: <% "#"+ qcDomain %>
- **title**:: <% qcFileName %>
- **level**:: #college_4
- **status**:: inprogress
- **created**:: <% tp.file.creation_date("YYYY-MM-DD HH:mm:ss") %>
- **updated**:: <% tp.file.last_modified_date("YYYY-MM-DD HH:mm:ss") %>
---


# 1	<% qcFileName %>


## 1.1	Points positifs
---




## 1.2	Points negatifs
---



