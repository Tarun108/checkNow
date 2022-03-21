
const num = [10, 20, 30, 40, 50];  

const long = 76.7267986 ;

for(let i=0; i< num.length; i++ ){
    let lat =  num[0];
    fetch(`https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`)
    .then(data => data.json())
    .then(res => {
        //get imformation
        const cName = res.name;
        const tem = res.main.temp;
        const disc = res.weather[0].main;
        const iconUrl = res.weather[0].icon;
        // console.log(res.weather[0]);
        // displaying imforation
        // cityName.textContent = cName;
        // temp_deg.textContent = Math.round(tem);
        // temp_disc.textContent = disc;
        // city_icon.src = iconUrl;
        
        console.log(tem);
        num = num[0+1]

        console.log(i);
    })
    ;

}
        
       
       
        
             console.log(num, long,);
    
    
