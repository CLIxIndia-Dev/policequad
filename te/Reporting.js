var playedMission =[0,0,0,0];
var completedMission =[0,0,0,0];
var language1 = "te";
var StorySkiped = false;
var GlossaryDownloaded = false;
var helpScreen =[0,0,0,0];
/* var JsonArray = [
{
"StudentGroupName": GroupName,
"location": "SchoolName"
},
{
"MissionsPlayed": playedMission,
"highScore": highScore,
"starTotal": gameScore,
"StorySkiped": StorySkiped,
"GlossaryDownloaded": GlossaryDownloaded,
"helpScreenviewed": helpScreen,
},
{
"Mission1Stage": currentstage,
"Mission2Stage": CurrentStage,
"Mission3Stage": currentStage,
"Mission4Stage": currentLevel +1
}
]; */


/* function doQuit(){
JsonArray2 = [
{
"MissionsPlayed": playedMission, // Mission attempted [0,0,0,0]  1 is yes
"MissionsCompleted": completedMission, //Mission completed - yes/ no
"SessionTimeSpent": getTimeSpent(), //Mission time spent  total 
"highScore": highScore,  //highScore
"starTotal": gameScore, //starts earned total
"StorySkiped": StorySkiped,  //story skiped
"GlossaryDownloaded": GlossaryDownloaded,  //Glossary downloaded
"helpScreenviewed": helpScreen, //help screen per Mission [0,0,0,0] 1 is yes
},
{
"Mission1Stage": currentstage,
"Mission2Stage": CurrentStage,
"Mission3Stage": currentStage,
"Mission4Stage": currentLevel +1
}
];
//pass the method to calculate score.
window.opener.saveDataOnExit(JsonArray2);


} */

function doQuit(){
var JsonArray = 
{
"app_name": "policesquadv2",
"event_type": "session_end",
"params": 
{
"MissionsPlayed": playedMission, // Mission attempted [0,0,0,0]  1 is yes
"MissionsCompleted": completedMission, //Mission completed - yes/ no
"SessionTimeSpent": getTimeSpent(), //Mission time spent  total 
"highScore": highScore,  //highScore
"starTotal": gameScore, //starts earned total
"StorySkiped": StorySkiped,  //story skiped
"GlossaryDownloaded": GlossaryDownloaded,  //Glossary downloaded
"helpScreenviewed": helpScreen, //help screen per Mission [0,0,0,0] 1 is yes
"Mission1Stage": currentstage,
"Mission2Stage": CurrentStage,
"Mission3Stage": currentStage,
"Mission4Stage": currentLevel +1
}

}; 
//pass the method to calculate score.
//window.opener.saveDataOnExit(JsonArray);
}

function stageEnd( mmission,stagePlayed,replayCount,isPassed,caseDetails,scoreIN,stageStar){
var JsonArray = 
{
"app_name": "policesquadv2",
"event_type": "stage_end",
"params": 
{
"CurrentMission": mmission,
"CurrentLevel": "", //please infer per mission
"StagePlayed": stagePlayed, // cases attempted
"ReplayUsedNumber": replayCount, //Mission completed - yes/ no
"statusConpleted": isPassed, //passed or failed
"TimeSpentStage": getTimeSpentLvl(), //Mission time spent  total 
"CaseDetails": caseDetails,
"NumberOfErrors": "", //infer it from case details values
"NumberOfClues": "",//infer it from case details values
"scoreAchieved": scoreIN,  //highScore
"starEarned": stageStar, //starts earned total
"language" : language1
}

};  replayCount =0;
//pass the method to calculate score.
//window.opener.saveDataStages(JsonArray);
//console.log(JsonArray);
}

//starting code for gstudio
/*var somevariavb =0;
function opneinnewindow(){
somevariavb = window.open('/modules/policequadv2/index.html');
}
function saveDataOnExit(JsonArray)
{
gameReporter.submitData('/dev-utilities/tools-test/', JsonArray)
console.log('hi');
}
function saveDataStages(JsonArray)
{
gameReporter.submitData('/dev-utilities/tools-test/', JsonArray)
console.log('hi-2');
}
class GameReporter 
{
	constructor(data) {
		this.session_id = this.getCookie('session_uuid')
	}

	submitData(url, data) {
	


           	var xhr = new XMLHttpRequest();
		var data_string = {}
		data_string['session_id'] = this.getCookie('session_uuid');
		for (var key in data) {data_string[key] = data[key];};
		data_string = JSON.stringify(data_string);

		xhr.open('POST', url, false);
		xhr.setRequestHeader("Content-Type","application/json");
		xhr.send(data_string);
		return xhr.response
	}
	getCookie(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for(var i=0; i<ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1);
			if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
		}
        console.log('no uuid found')
	}
}
var gameReporter = new GameReporter();
//returnGameReporter();
*/

