// Pull all data from database
d3.json("/data").then(function(getdata) {
  console.log(getdata);

  // Grab the years from data
  let dataYears = getdata.map((data) => data.year);
  console.log(dataYears);

  // Filter out the duplicate years for y axis
  let uniqueYears = [...new Set(dataYears)];
  console.log(uniqueYears);
  
  // Set variables that will represent the seasons
  let xHoliday = [];
  let xFall = [];
  let xSummer = [];
  let xSpring = [];
  let xWinter = [];

  // Create for loop to pull the releases for each season
  for (var i = 0; i < getdata.length; i++) {

    if (getdata[i].season === "Holiday Season") {
      xHoliday.push(getdata[i].releases);
    }
    else if (getdata[i].season === "Fall") {
      xFall.push(getdata[i].releases);
    }
    else if (getdata[i].season === "Summer") {
      xSummer.push(getdata[i].releases);
    }
    else if (getdata[i].season === "Spring") {
      xSpring.push(getdata[i].releases);
    }
    else {
      xWinter.push(getdata[i].releases);
    };

    // Create and color the bars
    var traceH = {
      x: xHoliday,
      y: uniqueYears,
      name: 'Holiday Season',
      orientation: 'h',
      marker: {
        color: 'red',
        width: 1
      },
      type: 'bar'
    };
    
    var traceF = {
      x: xFall,
      y: uniqueYears,
      name: 'Fall',
      orientation: 'h',
      type: 'bar',
      marker: {
        color: 'orange',
        width: 1
      }
    };

    var traceSum = {
      x: xSummer,
      y: uniqueYears,
      name: 'Summer',
      orientation: 'h',
      type: 'bar',
      marker: {
        color: 'yellow',
        width: 1
      }
    };

    var traceSpr = {
      x: xSpring,
      y: uniqueYears,
      name: 'Spring',
      orientation: 'h',
      type: 'bar',
      marker: {
        color: 'green',
        width: 1
      }
    };

    var traceW = {
      x: xWinter,
      y: uniqueYears,
      name: 'Winter',
      orientation: 'h',
      type: 'bar',
      marker: {
        color: 'blue',
        width: 1
      }
    };
    
    var data = [traceH, traceF, traceSum, traceSpr, traceW];
    
    var layout = {
      title: 'Movie Releases By Season',
      barmode: 'stack'
    };

    var config = {responsive: true}
    
    Plotly.newPlot('hbar', data, layout, config);
    
  }});