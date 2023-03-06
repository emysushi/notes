


<%*

let dom_choice = await tp.system.suggester(["ang", "fran", "Person", "Meeting", "Standup", "Onboarding", "New Template", "Blank Note"],["1on1 Template", "Daily Template", "Person Template", "Meeting Template", "Standup Template", "Onboarding Template", "Template", "Blank"])
let tags =''

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

let folder = tp.file.folder(false)
let date = await tp.system.prompt("date YYYY-MM-DD")
titleName = "KNote_" + folder +"_"+ date
await tp.file.rename(titleName)
await tp.file.move(folder+"/Kanban/" + titleName);




-%>



