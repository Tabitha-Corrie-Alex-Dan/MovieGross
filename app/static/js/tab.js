d3.json('/sum').then(function(getSum) {
    console.log(getSum)


  let season = getSum.map((season) => season.season);
  var gross = getSum.map((gross) => gross.gross);
  var average = getSum.map((average) => average.average);
  console.log(season);
  console.log(gross);
  console.log(average);

  

  var data = [
    {
      "type": "sunburst",
      "labels": ["Fall <br> Average Gross <br> {in dollars}:", "Winter <br> Average Gross <br> {in dollars}:", "Spring <br> Average Gross <br> {in dollars}:", "Summer <br> Average Gross <br> {in dollars}:", "Holiday Season <br> Average Gross <br> {in dollars}:"],
      "parents": ["", "", "", "", "", ""],
      "values":  [2124327389, 2936034901, 2861431482, 7836040236, 3826990944],
      "leaf": {"opacity": 5},
      "marker": {"line": {"width": 2}},
      "branchvalues": 'relative'
    }];

  var layout = {
    "margin": {"l": 0, "r": 0, "b": 0, "t": 0},
    sunburstcolorway:["yellow", "red", "blue", "green", "orange"],
    title: 'Average Gross Per Season'
  };

  var config = {responsive: true}

  Plotly.newPlot('plot', data, layout, config)

});