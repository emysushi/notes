


<%*

let dom_choice = await tp.system.suggester(["Anglais", "Francais"], ["Anglais", "Francais"])

let tags_check_index=0

let tags_check = tp.file.title.split(" ")[tags_check_index]
switch (tags_check) {
	case "#revision":
		tags_tags_index=tags_check_index
		break;
	case "control":
		tags_tags_index=tags_check_index
		break;
	case "#exercice"
		tags_tags_index=tags_check_index
		break;
	default:
		tags_domain_index=tags_check_index+1
		break;		
}






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
titleName = "KNote_" + test +"_"+ date
await tp.file.rename(titleName)
await tp.file.move("/Cours/"+test+"/Kanban/" + titleName);




-%>



