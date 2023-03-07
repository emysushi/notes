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


<%*
qmonday = tp.date.now("YYYY-MM-DD")
qtuesday = tp.date.now("YYYY-MM-DD",1)
qwednesday= tp.date.now("YYYY-MM-DD",2)
qthursday = tp.date.now("YYYY-MM-DD",3)
qfriday = tp.date.now("YYYY-MM-DD",4)
qsaturday= tp.date.now("YYYY-MM-DD",5)
qsunday= tp.date.now("YYYY-MM-DD",6)


-%>




<%*

let dom_choice = await tp.system.suggester(["Anglais", "Francais"], ["Anglais", "Francais"])


let tags=dom_choice

switch (dom_choice) { 
	case "ang": 
		tags = "Anglais" 
		break; 
	case "2": 
		tags = "/Francais/"; 
		break; 
	case "3": 
		tags = "/Svt/"; 
		break; 
	case "4": 
		tags = "/Mathematiques/" 
		break; 
	case "5": 
		tags = "/Physique-Chimie/"; 
		break; 
	case "6": 
		tags = "/Histoire-Geographie/"; 
		break;
	case "7": 
		tags = "Chinois" 
		break; 
	case "8": 
		tags = "/Musique/"; 
		break; 
	case "9": 
		tags = "/Technologie/"; 
		break; 
	default:
		tags = "/aaa/"; 
		break; 	
	}


let date = tp.date.now("YYYY-MM-DD")
titleName = "KNote_" + tags +"_"+ date
await tp.file.rename(titleName)
await tp.file.move("/Cours/"+dom_choice+"/Kanban/" + titleName);




-%>


<%*

let tags_check = tp.file.title.split(" ")[0]
let list_name = tp.system.

let date = tp.date.now("YYYY-MM-DD")
titleName = "KNote_" + test +"_"+ date
await tp.file.rename(titleName)
await tp.file.move("/Cours/"+test+"/Kanban/" + titleName);




-%>🥽





