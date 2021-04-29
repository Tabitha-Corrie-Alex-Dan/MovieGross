d3.json('/data').then(function(getData) {
    
  var topRelease = [];
  var topGross = [];
  var topReleaseYear = [];
  var topReleaseSeason = [];  

  for (var i = 0; i < getData.length; i+5){
    
    topRelease.push(getData[i]['num_one_release']);
    topGross.push(getData[i]['gross']);
    topReleaseYear.push(getData[i]['year']);
    topReleaseSeason.push(getData[i]['season']);
    }
    console.log(topRelease);
    console.log(topGross);
    console.log(topReleaseYear);
    console.log(topReleaseSeason);

    // function unpack(rows, key) {
    //   return rows.map(function(row) { return row[key]; });

    var trace1 = {
      type: "scatter",
      mode: "lines",
      name: 'Holiday Season',
      x: topRelease,
      y: topReleaseYear,
      line: {color: '#17BECF'}
    }
    
    // var trace2 = {
    //   type: "scatter",
    //   mode: "lines",
    //   name: 'Fall',
    //   x: unpack(rows, 'getData.year'),
    //   y: unpack(rows, 'getData.gross'),
    //   line: {color: '#7F7F7F'}
    // }
    
    // var trace3 = {
    //   type: "scatter",
    //   mode: "lines",
    //   name: 'Winter',
    //   x: unpack(rows, 'getData.year'),
    //   y: unpack(rows, 'getData.season'),
    //   line: {color: '#7F7F7F'}
    // }
    
    // var trace4 = {
    //   type: "scatter",
    //   mode: "lines",
    //   name: 'Holiday Season',
    //   x: unpack(rows, 'getData.year'),
    //   y: unpack(rows, 'AAPL.Low'),
    //   line: {color: '#7F7F7F'}
    // }
    
    // var trace5 = {
    //   type: "scatter",
    //   mode: "lines",
    //   name: 'Spring',
    //   x: unpack(rows, 'Date'),
    //   y: unpack(rows, 'AAPL.Low'),
    //   line: {color: '#7F7F7F'}
    // }
    
    
    var data = [trace1];
    
    var layout = {
      title: 'Basic Time Series',
    };
    
    // Plotly.newPlot('dan-chart', data, layout);
    
    Plotly.newPlot('dan-chart', data, layout);



    });




// d3.csv("https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv", function(err, rows){

  

// })