const key="a13bc2e4392cbf9aa8d3e13fa7f1741d"
async function showdata(){

            let city =document.getElementById("city").value;
            
            let url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
            let x= await fetch(url)
             let data = await x.json()
            append(data); 
            console.log(data)
            
    }
    
    function append(data){
    
                    let box=document.getElementById("cont");
                    box.innerHTML=null; 
                    let h2=document.createElement("h2");
                        h2.innerText=data.name;
                        

                    let p1=document.createElement("p") 
                    p1.innerText= `current temp: ${Math.round(data.main.temp-273)+"°C"}`;
                    
                    let p2=document.createElement("p")
                    p2.innerText=`max temp : ${Math.round(data.main.temp_max-273)+"°C"}`;

                    let p3=document.createElement("p") 
                    p3.innerText= `Min temp: ${Math.round(data.main.temp-273)+"°C"}`;
                    

                    let p4=document.createElement("p")
                    p4.innerText=`Wind Speed : ${data.wind.speed}`;

                    let p5=document.createElement("p")
                    p5.innerText=`Clouds : ${data.clouds.all}`;
                    
                    let p6=document.createElement("p") 
                    p6.innerText=`Sunrise : ${data.sys.sunrise}`;
                    
                    let p7=document.createElement("p")
                    p7.innerText=`Sunset : ${data.sys.sunset}`;

                       
 box.append(h2, p1, p2, p3, p4, p5, p6, p7);

let iframe= document.getElementById('gmap_canvas');
iframe.src= `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`

}

function getLocation() {

    navigator.geolocation.getCurrentPosition(success); }
    function success(position) {
    const latitude=position.coords.latitude; 
    const longitude= position.coords.longitude;
    console.log(latitude);
    console.log(longitude);

} 

getLocation()
