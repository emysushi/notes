
<%*
let qcFileName = await tp.system.prompt("Titre exposé - sans espace")
titleName = "Expose_"+ qcFileName
await tp.file.rename(titleName)
-%>

---

dossier: <% qcFileName %>
date: <% tp.file.creation_date("YYYY-MM-DD HH:mm:ss") %>
<% tp.file.cursor() %>

---


-   [Resoomer](https://resoomer.com/fr) : en ligne + extension navigateur, multilingue
-   [SMMRY](https://smmry.com/) : en ligne, anglais
-   [Text Summarizer](http://textsummarization.net/text-summarizer) : en ligne, anglais
-   [Text Compactor](https://www.textcompactor.com/) : en ligne, anglais