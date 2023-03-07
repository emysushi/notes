


<%*
let qcFileName = await tp.system.prompt("Titre Fiche (ex: Mahomet)")
let qcDomain = tp.file.folder(false)
titleName = "Fiche_"+ qcDomain + "_" + qcFileName
await tp.file.rename(titleName)
-%>


tags : #fiche  <% "#"+qcDomain %> <% "#"+qcFileName %>

---

title:: <% qcFileName %>
domaine:: <% tp.file.folder(false) %>
author:: EmySushi
status:: inprogress
created:: <% tp.file.creation_date("YYYY-MM-DD HH:mm:ss") %>
updated:: <% tp.file.last_modified_date("YYYY-MM-DD HH:mm:ss") %>


<% tp.file.cursor() %>

---



## Definitions
---



## Timelines

```mermaid
journey
    title Exemple
    section Califat Omeyade (732-852)
      Charles Martel (732) : 5
      Go upstairs: 3: 
      Do work: 1: 
    section Califat Abbasside (732-750)
      Go downstairs: 5: 
      Sit down: 5: 
```







## Idees a retenir
---





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