d3.json('/sum').then(function(getSum) {
    console.log(getSum)


  let season = getSum.map((season) => season.season);
  var gross = getSum.map((gross) => gross.gross);
  var average = getSum.map((average) => average.average);
  console.log(season);
  console.log(gross)
  console.log(average);

  

  var data = [
    {
      "type": "sunburst",
      "labels": ["Fall <br> Average Gross <br> {in dollars}:", "Winter <br> Average Gross <br> {in dollars}:", "Spring <br> Average Gross <br> {in dollars}:", "Summer <br> Average Gross <br> {in dollars}:", "Holiday Season <br> Average Gross <br> {in dollars}:"],
      "parents": ["", "", "", "", "", ""],
      "values": [83497912, 155753235, 128158975, 229192669, 166124494],
      "leaf": {"opacity": 5},
      "marker": {"line": {"width": 4}},
      "branchvalues": 'total'
    }];

  var layout = {
    "margin": {"l": 0, "r": 0, "b": 0, "t": 0},
    sunburstcolorway:["orange", "blue", "green", "yellow", "red"],
  };

  Plotly.newPlot('plot', data, layout)

});