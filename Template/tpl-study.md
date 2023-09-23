---
trello_plugin_note_id: nTApDpzAc-zwsKTIL5hhv
trello_board_card_id: 63722ae807d5fd02b2b92859;64fe08bc63bc153395eb9818
---

<%*
let qcFileName = await tp.system.prompt("Titre Fiche (ex: Mahomet)")
let qcDomain = tp.file.folder(false)
titleName = "study_" + qcFileName
await tp.file.rename(titleName)
-%>


---
- **type**:: #study
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



## 1.2	Liens
---

Note :  Noter les liens interessant se rapportant au sujet

- liens1
- liens2



## 1.3	Outils utiles
---

-   [Resoomer](https://resoomer.com/fr) : en ligne + extension navigateur, multilingue
-   [SMMRY](https://smmry.com/) : en ligne, anglais
-   [Text Summarizer](http://textsummarization.net/text-summarizer) : en ligne, anglais
-   [Text Compactor](https://www.textcompactor.com/) : en ligne, anglais
- [Plot function - Créer un graphique](https://github.com/leonhma/obsidian-functionplot)
- [Latex - Ecrire des mathématiques](https://fr.wikibooks.org/wiki/LaTeX/%C3%89crire_des_math%C3%A9matiques)
- [GEOGEBRA](https://www.geogebra.org/geometry?lang=fr) : dessiner des formes geometriques 