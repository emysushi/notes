
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

Resumer de texte : [lien](https://resoomer.com/)