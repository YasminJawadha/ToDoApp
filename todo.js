function ToDo(){

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
      if(this.readyState==4&&this.status==200){
          var x = document.getElementById("myCheck");
          // var checkbox = document.getElementById("myCheck");
          var response = JSON.parse(this.responseText);
          var output ="";
          for(var i=0;i<response.length;i++){
              output += "<li>"+ response[i].title+ `<input type="checkbox" onclick="checkAddress();" id="myCheck">`;

          }
          document.getElementById("demo").innerHTML=output;
      }
  }

  xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos" , true);
  xhttp.send();

}




