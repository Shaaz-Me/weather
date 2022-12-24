const getCurrentDay = (dayVal) => {
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    return weekday[dayVal];
};

const getCurrentDate = (curDate, curMonth) => {
    let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    return `${curDate} ${months[curMonth]}`
};


const form = document.getElementById("form_input");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    let getCity = form.city.value;

    
    
    fetch("/weather", {
        method: "POST",
        body: JSON.stringify({getCity}),
        headers: {
            "Content-type": "application/json",
        }
    })
    .then(response => response.json())
    .then(res => {
        const city = document.getElementById("city_name");
        
        const day = document.getElementById("day");
        const todayDate = document.getElementById("today_date");
        
        city.innerText = res.cityName;
        if(res.hideData === false){
            const temp = document.getElementById("temp");
            const tempStatus = document.getElementById("temp_status");
            const now = new Date();
            
            temp.innerText = res.tempVal;
            tempStatus.setAttribute("src",res.tempStatus);
            
            day.innerText = getCurrentDay(now.getDay());
            day.style.color = "#fff";
            
            todayDate.innerText = getCurrentDate(now.getDate(), now.getMonth());
            todayDate.style.color = "#fff";
            
            city.style.color = "#fff";
            
            document.getElementById("data_hide").classList.remove("data_hide");
        }
        else{
            day.innerText = "Day";
            day.style.color = "#8f9191";
            
            todayDate.innerText = "Date";
            todayDate.style.color = "#8f9191";
            
            city.style.color = "#bfc1c8";

            document.getElementById("data_hide").classList.add("data_hide");
        }
        form.reset();

    });
});