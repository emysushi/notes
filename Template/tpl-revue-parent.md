---
aliases: [TODO]
linter-yaml-title-alias: TODO
date created: Monday, October 2nd 2023, 10:11:28 pm
date modified: Monday, October 2nd 2023, 10:13:54 pm
---

<%*
let qcFileName = tp.file.creation_date("YYYY-MM-DD")
let qcDomain = tp.file.folder(false)
titleName = "revue_" + qcFileName
await tp.file.rename(titleName)
-%>


---
- **type**:: #revue
- **domain**:: <% "#"+ qcDomain %>
- **title**:: <% titleName %>
- **level**:: #college_4
- **status**:: NA
- **created**:: <% tp.file.creation_date("YYYY-MM-DD HH:mm:ss") %>
- **updated**:: <% tp.file.last_modified_date("YYYY-MM-DD HH:mm:ss") %>
---


# TODO
---




# CONSEIL
---
