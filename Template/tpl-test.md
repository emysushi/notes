<%*
let qcFileName = await tp.system.prompt("Titre - sans espace")
titleName = "Livre_"+ qcFileName
await tp.file.rename(titleName)
await tp.file.move("/FicheLecture/" + titleName);
-%>

---

livre: <% qcFileName %>
date: <% tp.file.creation_date("YYYY-MM-DD HH:mm:ss") %>
auteur: quick_note
topic: 

<% tp.file.cursor() %>

---

