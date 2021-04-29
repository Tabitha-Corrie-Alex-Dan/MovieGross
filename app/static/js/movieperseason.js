d3.json('/data').then(function(getData) {
    
  var topRelease = [];
  var topGross = [];
  var topReleaseYear = [];
  var topReleaseSeason = [];  

  var topReleaseFall = [];
  var topGrossFall = [];
  var topReleaseYearFall = [];
  var topReleaseSeasonFall = [];  

  var topReleaseWinter = [];
  var topGrossWinter = [];
  var topReleaseYearWinter = [];
  var topReleaseSeasonWinter = [];  

  var topReleaseSpring = [];
  var topGrossSpring = [];
  var topReleaseYearSpring = [];
  var topReleaseSeasonSpring = [];  

  var topReleaseSummer = [];
  var topGrossSummer = [];
  var topReleaseYearSummer = [];
  var topReleaseSeasonSummmer = [];  

  for (var i = 0; i < getData.length; i+=5){
    
    topRelease.push(getData[i]['num_one_release']);
    topGross.push(getData[i]['gross']);
    topReleaseYear.push(getData[i]['year']);
    topReleaseSeason.push(getData[i]['season']);
    }

  for (var i = 1; i < getData.length; i+=5){
    topReleaseFall.push(getData[i]['num_one_release']);
    topGrossFall.push(getData[i]['gross']);
    topReleaseYearFall.push(getData[i]['year']);
    topReleaseSeasonFall.push(getData[i]['season']);
    }

  for (var i = 2; i < getData.length; i+=5){

    topReleaseSummer.push(getData[i]['num_one_release']);
    topGrossSummer.push(getData[i]['gross']);
    topReleaseYearSummer.push(getData[i]['year']);
    topReleaseSeasonSummmer.push(getData[i]['season']);
    }

  for (var i = 3; i < getData.length; i+=5){
    topReleaseSpring.push(getData[i]['num_one_release']);
    topGrossSpring.push(getData[i]['gross']);
    topReleaseYearSpring.push(getData[i]['year']);
    topReleaseSeasonSpring.push(getData[i]['season']);
    }
  
    for (var i = 4; i < getData.length; i+=5){
    topReleaseWinter.push(getData[i]['num_one_release']);
    topGrossWinter.push(getData[i]['gross']);
    topReleaseYearWinter.push(getData[i]['year']);
    topReleaseSeasonWinter.push(getData[i]['season']);
    }

    console.log(topReleaseSummer);
    console.log(topGrossSummer);
    console.log(topReleaseYearSummer);
    console.log(topReleaseSeasonSummmer);

  //   // function unpack(rows, key) {
  //   //   return rows.map(function(row) { return row[key]; });

    var trace1 = {
      type: "scatter",
      mode: "lines",
      name: 'Holiday Season',
      text: topRelease,
      x: topReleaseYear,
      y: topGross,
      line: {color: 'red'}
    }
    
    var trace2 = {
      type: "scatter",
      mode: "lines",
      name: 'Fall',
      text: topReleaseFall,
      x: topReleaseYearFall,
      y: topGrossFall,
      line: {color: 'orange'}
    }
    
    var trace3 = {
      type: "scatter",
      mode: "lines",
      name: 'Winter',
      text: topReleaseWinter,
      x: topReleaseYearWinter,
      y: topGrossWinter,
      line: {color: 'blue'}
    }
    
    var trace4 = {
      type: "scatter",
      mode: "lines",
      name: 'Spring',
      text: topReleaseSpring,
      x: topReleaseYearSpring,
      y: topGrossSpring,
      line: {color: 'green'}
    }
    
    var trace5 = {
      type: "scatter",
      mode: "lines",
      name: 'Summer',
      text: topReleaseSummer,
      x: topReleaseYearSummer,
      y: topGrossSummer,
      line: {color: 'yellow'}
    }
    
    
    var data = [trace1, trace2, trace3, trace4, trace5];
    
    var layout = {
      title: 'Top Movies by Season',
    };
    
    var config = {responsive: true}

    Plotly.newPlot('dan-chart', data, layout, config);

    });
