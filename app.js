

 var hrs = document.getElementById("hrs")
 var mint = document.getElementById("mint")
 var sec = document.getElementById("sec")
 var  day = document.getElementById("days")

 var countDown = new Date("6/17/2024").getTime();   
setInterval ( function () {
      var now = new Date().getTime();
      var distance = countDown - now;

      var days = Math.floor(distance/(1000*60*60*24));
      var hours = Math.floor((distance%(1000*60*60*24))  / (1000*60*60))
      var minutes = Math.floor((distance%(1000*60*60))  / (1000*60))
      var seconds = Math.floor((distance%(1000*60)) / 1000)
    
      day.innerText = days 
      hrs.innerText = hours
      mint.innerText = minutes
      sec.innerText = seconds

      console.log(seconds);
},1000);