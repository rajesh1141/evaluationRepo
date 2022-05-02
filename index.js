document.querySelector("#masaiForm").addEventListener("submit",myCricket);
var matchArr =JSON.parse(localStorage.getItem("schedule"))||[];
function myCricket(){
  event.preventDefault();
var matchData={
  matchNo:masaiForm.matchNum.value,
  team1:masaiForm.teamA.value,
  team2:masaiForm.teamB.value,
  place:masaiForm.venue.value,
  whenT:masaiForm.date.vlaue,
}
matchArr.push(matchData);
localStorage.setItem("schedule",JSON.stringify(matchArr))
}
