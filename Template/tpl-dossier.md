
tags : #dossier

<%*
let qcFileName = await tp.system.prompt("matiere")
titleName = "Dossier_"+ qcFileName
await tp.file.rename(titleName)
-%>

---

title:: <% qcFileName %>
domaine:: <% tp.file.folder(false) %>
author:: EmySushi
status:: inprogress
created:: <% tp.file.creation_date("YYYY-MM-DD HH:mm:ss") %>
updated:: <% tp.file.last_modified_date("YYYY-MM-DD HH:mm:ss") %>
duedate:: 

<% tp.file.cursor() %>

---








## Liens

Note :  Noter les liens interessant se rapportant au sujet

- liens1
- liens2

## Outils utiles

-   [Resoomer](https://resoomer.com/fr) : en ligne + extension navigateur, multilingue
-   [SMMRY](https://smmry.com/) : en ligne, anglais
-   [Text Summarizer](http://textsummarization.net/text-summarizer) : en ligne, anglais
-   [Text Compactor](https://www.textcompactor.com/) : en ligne, anglais