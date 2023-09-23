


<%*
let qcFileName = await tp.system.prompt("Titre Fiche (ex: Mahomet)")
let qcDomain = tp.file.folder(false)
titleName = "lesson_" + qcFileName
await tp.file.rename(titleName)
-%>


---
- **type**:: #lesson
- **domain**:: <% "#"+ lower(qcDomain) %>
- **title**:: <% qcFileName %>
- **status**:: inprogress
- **created**:: <% tp.file.creation_date("YYYY-MM-DD HH:mm:ss") %>
- **updated**:: <% tp.file.last_modified_date("YYYY-MM-DD HH:mm:ss") %>
---




## 0.1	Context
---




  
## 0.2	Timelines
---


```timeline-labeled
[line-3, body-2]

date: 2015
title: Naissance de Erwan
content:
Erwan le roi de la depanne

date: 2010
title: Naissance de Emy
content:
EmySushi la plus jolie
```



## 0.3	Idees a retenir
---





---

## 0.4	Liens

Note :  Noter les liens interessant se rapportant au sujet

- liens1
- liens2

## 0.5	Outils utiles

-   [Resoomer](https://resoomer.com/fr) : en ligne + extension navigateur, multilingue
-   [SMMRY](https://smmry.com/) : en ligne, anglais
-   [Text Summarizer](http://textsummarization.net/text-summarizer) : en ligne, anglais
-   [Text Compactor](https://www.textcompactor.com/) : en ligne, anglais