


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



## Definitions/Théorèmes
---



$$
\frac{\frac{1}{x}+\frac{1}{y}}{y-z}
$$



```functionplot
---
title: aaaa
xLabel: az
yLabel: za
bounds: [-10,10,-10,10]
disableZoom: false
grid: true
---
f(x) = 2^3 + 2
```



## Propriétés
---



## Exemples
---







---

## Liens

Note :  Noter les liens interessant se rapportant au sujet

- liens1
- liens2

## Outils utiles

- [Resoomer](https://resoomer.com/fr) : en ligne + extension navigateur, multilingue
- [SMMRY](https://smmry.com/) : en ligne, anglais
- [Text Summarizer](http://textsummarization.net/text-summarizer) : en ligne, anglais
- [Text Compactor](https://www.textcompactor.com/) : en ligne, anglais
- [Plot function - Créer un graphique](https://github.com/leonhma/obsidian-functionplot)
- [Latex - Ecrire des mathématiques](https://fr.wikibooks.org/wiki/LaTeX/%C3%89crire_des_math%C3%A9matiques)
- 