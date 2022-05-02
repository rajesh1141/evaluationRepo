var crickArr=JSON.parse(localStorage.getItem("favourites"))
display(crickArr)
function display(data){
  data.forEach(function(elem){
    var tr = document.createElement("tr")

    var td1 =document.createElement("td")
     td1.innerText = elem.matchNo;
    var td2 =document.createElement("td")
    td2.innerText = elem.team1;
    var td3 =document.createElement("td")
    td3.innerText = elem.team2;
    var td4 =document.createElement("td")
    td4.innerText=elem.whenT;
    var td5 =document.createElement("td")
    td5.innerText = elem.place;
    var td6 =document.createElement("td")
     td6.innerText = "RemoveAsFavourites"
     td6.style.color = "blue"
     td6.style.cursor="pointer"
     
    tr.append(td1,td2,td3,td4,td5,td6);
    document.querySelector("tbody").append(tr);
  })
}