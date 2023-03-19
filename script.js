var request= new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
    var asia=result.filter((ele)=>ele.region=="Asia");
    console.log(asia);
  var cname=asia.map((ele)=> ele.name);
  console.log(cname);
   
}

