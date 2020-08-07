$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Pune,%20MH,%20India&units=imperial&APPID=5598789b200a8783ecf4be827b83a515" , function(data)
{
        dataChart = data;
        var icon = "http://openweathermap.org/img/w/"+ data.weather[0].icon + ".png";
       
        $('.city').append(data.name);
        $('.weatherImg').attr('src' , icon);
        $('.weatherType').append(data.weather[0].main ).append(" " +"(" + data.weather[0].description + ")");
        $('.weatherTemperature').append(data.main.temp);
        $('.weatherTemperatureHigh').append(data.main.temp_max);
        $('.weatherTemperatureLow').append(data.main.temp_min);

        $('.WindSpeed').append(data.wind.speed);
        $('.Humidity').append(data.main.humidity);
        $('.Pressure').append(data.main.pressure);
        var sunriseSunsetTime = data.sys.sunrise+" " +"/" + data.sys.sunset;
        
        $('.SunriseTime').append(sunriseSunsetTime);
        $('.FeelsLike').append(data.main.feels_like)
 
        openChartData(data);
});

function moreInfo()
{
    var x = document.getElementById("moreInfoDiv");
    x.style.display = "block";
    document.getElementById("moreInfoBtn").style.display = "none";

    document.getElementById("lessInfoBtn").style.display = "block";
}

function lessInfo()
{
    document.getElementById("moreInfoBtn").style.display = "block";
    document.getElementById("moreInfoDiv").style.display = "none";    
}

function openChartData(data) {
    console.log(data);
    var today = new Date();

    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    switch (new Date().getDay()) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
           day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case 6:
          day = "Saturday";
      }
    
      $('.Day').append(day);
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
    
        // The data for our dataset
        data: {
            labels: [String(parseInt(dd)) + '/' + mm + '/' + yyyy, String(parseInt(dd) + 1) + '/' + mm + '/' + yyyy, String(parseInt(dd) + 2) + '/' + mm + '/' + yyyy,
                    String(parseInt(dd) + 3) + '/' + mm + '/' + yyyy, String(parseInt(dd) + 4) + '/' + mm + '/' + yyyy, String(parseInt(dd) + 5) + '/' + mm + '/' + yyyy, 
                    String(parseInt(dd) + 6) + '/' + mm + '/' + yyyy],
            datasets: [{
                label: 'Low temp',
                
                data: [dataChart.main.temp_min ] ,
                backgroundColor : "blue" ,
                borderColor : "lightblue",
                fill : false,
                lineTension : 0.1 ,
                pointRadius : 8 
            }, 
            {
                label: 'High temp',
                
                data: [dataChart.main.temp_max ] ,
                backgroundColor : "red" ,
                borderColor : "light red",
                fill : false,
                lineTension : 0.1 ,
                pointRadius : 16 
            }
        ]
        },
    
    
        // Configuration options go here
        options: {}
    
        
    });
  }      

  function openChart()
  {
    window.location.href = "OpenChart.html";
    $('.chartImage').append(chart);
  }
 function goToIndex() {
    window.location.href = "Index.html";
  }      