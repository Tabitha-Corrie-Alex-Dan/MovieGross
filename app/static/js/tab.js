d3.json('/sum').then(function(getData) {
    console.log(getData);
});

var data = [
    {
      "type": "sunburst",
      "labels": ["Fall <br> Cumulative Gross:", "Winter <br> Cumulative Gross:", "Spring <br> Cumulative Gross:", "Summer <br> Cumulative Gross:", "Holiday Season <br> Cumulative Gross:"],
      "parents": ["", "", "", "", "", "Fall <br> Releases: 5045"],
      "values":  [21243273.89, 29360349.01, 28614314.82, 78360402.36, 38269909.44, 5045],
      "leaf": {"opacity": 0.4},
      "marker": {"line": {"width": 2}},
      "branchvalues": 'total'
    }];
    
    var layout = {
      "margin": {"l": 0, "r": 0, "b": 0, "t": 0},
      sunburstcolorway:["#B22222", "#FF4500", "#FFA500", "#6B8E23", "#4169E1"],
    };
    
    
    Plotly.newPlot('plot', data, layout)