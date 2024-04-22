/*const searchbox=document.getElementById("myinput");
const searchbtn=document.getElementById("mybutton");*/

/*const apikey="da444258887040a7b55748f4e572be94";
const url=`https://api.openweathermap.org/data/2.5/weather?units=metric&q={city}&appid=${apikey}`; */

async function getweather(city){
    const apikey="da444258887040a7b55748f4e572be94";
const url=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apikey}`; 
    const response = await fetch(`${url}`);
    var data=await response.json();
    console.log(data);
    document.getElementById('city').innerHTML=data.name;
    document.getElementById('temp').innerHTML=data.main.temp + " celsius";
    document.getElementById('humidity').innerHTML= " Humidity : " + data.main.humidity + " %";
    document.getElementById('wind').innerHTML= "Wind Speed : " + data.wind.speed + " km/hr";

}
$(document).ready(function(){
    $('#mybutton').click(function(){
        const cit=$('#myinput').val();
        getweather(cit);
    })
})
/*if(searchbtn){
searchbtn.addEventListener('click',(e) =>{
    const cit=e.target.searchbox.value;
    getweather(cit);
});
}*/

