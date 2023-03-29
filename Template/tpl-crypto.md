
tags : #crypto

<%*
let qcFileName = await tp.system.prompt("Nom du dossier - sans espace -")
titleName = tp.file.folder(false) +"_" + qcFileName
await tp.file.rename(titleName)
-%>

---

title:: <% "#" + qcFileName %>
domaine:: <% "#"+tp.file.folder(false) %>
author:: EmySushi
status:: inprogress
created:: <% tp.file.creation_date("YYYY-MM-DD HH:mm:ss") %>
updated:: <% tp.file.last_modified_date("YYYY-MM-DD HH:mm:ss") %>

<% tp.file.cursor() %>

---







## Outils utiles

-   [Crypto playlist youtube](https://www.youtube.com/playlist?list=PL-eMoIHaC-ssjIoyHUPFT9t-6D92XmFZI) 
-   [captain-trading](https://captain-trading.com/) 
