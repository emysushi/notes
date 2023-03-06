


<%*
let dom = await tp.system.prompt("1:ang, 2:fran, 3:svt, 4:math, 5:phychim, 6:histgeo,7:chin, 8:mus, 9:tech ")
let dom_choice = await tp.system.suggester(["ang", "fran", "Person", "Meeting", "Standup", "Onboarding", "New Template", "Blank Note"],["1on1 Template", "Daily Template", "Person Template", "Meeting Template", "Standup Template", "Onboarding Template", "Template", "Blank"])
let Tags =''

switch (dom_choice) { 
	case "ang": 
		let Tags = "/Anglais/" 
		break; 
	case "2": 
		let Tags = "/Francais/"; 
		break; 
	case "3": 
		let Tags = "/Svt/"; 
		break; 
	case "4": 
		let Tags = "/Mathematiques/" 
		break; 
	case "5": 
		let Tags = "/Physique-Chimie/"; 
		break; 
	case "6": 
		let Tags = "/Histoire-Geographie/"; 
		break;
	case "7": 
		let Tags = "/Chinois/" 
		break; 
	case "8": 
		let Tags = "/Musique/"; 
		break; 
	case "9": 
		let Tags = "/Technologie/"; 
		break; 
	default:
		let Tags = "/aaa/"; 
		break; 	
	}


let date = await tp.system.prompt("date YYYY-MM-DD")
titleName = "KNote_" + Tags +"_"+ date
await tp.file.rename(titleName)
await tp.file.move("/Cours/"+Tags+"Kanban/" + titleName);




-%>



