var newMatch = JSON.parse(localStorage.getItem("schedule"))
var crickArr=JSON.parse(localStorage.getItem("favourites"))||[]
  display(newMatch)
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
       td6.innerText = "Favourites"
       td6.style.color = "blue"
       td6.style.cursor="pointer"
       td6.addEventListener("onClick",favour)
           
       
       
      tr.append(td1,td2,td3,td4,td5,td6);
      document.querySelector("tbody").append(tr);
    })
    localStorage.setItem("favourites",JSON.stringify(newMatch));
  function favour(){
      crickArr.push(data);
      localStorage.setItem("favourites",JSON.stringify(crickArr));
      
  }

   }
    
  