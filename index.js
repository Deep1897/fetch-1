
//https://swapi.dev/api/people/?search=${your_search_term}
async function myfun(){
    let query= document.getElementById("query").value;
    let url='https://swapi.dev/api/people/?search=${query}';
    res=await fetch(url);
    data=await res.json();
    console.log(data);




}