d3.json('/sum').then(function(getData) {
    console.log(getData);
});

var data = [
    {
      "type": "sunburst",
      "labels": ["Fall <br> Cumulative Gross <br> {in dollars}:", "Winter <br> Cumulative Gross <br> {in dollars}:", "Spring <br> Cumulative Gross <br> {in dollars}:", "Summer <br> Cumulative Gross <br> {in dollars}:", "Holiday Season <br> Cumulative Gross <br> {in dollars}:"],
      "parents": ["", "", "", "", "", ""],
      "values":  [2124327389, 2936034901, 2861431482, 7836040236, 3826990944],
      "leaf": {"opacity": 0.4},
      "marker": {"line": {"width": 2}},
      "branchvalues": 'relative'
    }];
    
    var layout = {
      "margin": {"l": 0, "r": 0, "b": 0, "t": 0},
      sunburstcolorway:["red", "orange", "yellow", "green", "blue"],
    };
    
    
    Plotly.newPlot('plot', data, layout)