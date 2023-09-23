
<%*
let qcFileName = await tp.system.prompt("Titre Fiche (ex: Mahomet)")
let qcDomain = tp.file.folder(false)
titleName = "lesson_" + qcFileName
await tp.file.rename(titleName)
-%>


---
- **type**:: #lesson
- **domain**:: <% "#"+ qcDomain %>
- **title**:: <% qcFileName %>
- **level**:: #college_4
- **status**:: inprogress
- **created**:: <% tp.file.creation_date("YYYY-MM-DD HH:mm:ss") %>
- **updated**:: <% tp.file.last_modified_date("YYYY-MM-DD HH:mm:ss") %>
---


# 1	<% qcFileName %>


## 1.1	Context
---




  
## 1.2	Timelines
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



## 1.3	Idees a retenir
---





---

## 1.4	Liens

Note :  Noter les liens interessant se rapportant au sujet

- liens1
- liens2



## 1.5	Outils utiles

-   [Resoomer](https://resoomer.com/fr) : en ligne + extension navigateur, multilingue
-   [SMMRY](https://smmry.com/) : en ligne, anglais
-   [Text Summarizer](http://textsummarization.net/text-summarizer) : en ligne, anglais
-   [Text Compactor](https://www.textcompactor.com/) : en ligne, anglais
- [Plot function - Créer un graphique](https://github.com/leonhma/obsidian-functionplot)
- [Latex - Ecrire des mathématiques](https://fr.wikibooks.org/wiki/LaTeX/%C3%89crire_des_math%C3%A9matiques)
- [GEOGEBRA](https://www.geogebra.org/geometry?lang=fr) : dessiner des formes geometriques 