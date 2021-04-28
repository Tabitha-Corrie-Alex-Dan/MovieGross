d3.json('/data').then(function(getData) {
    console.log(getData)
})

var data = [
    {
      "type": "sunburst",
      "labels": ["Fall <br> Cumulative Gross <br> {in dollars}:", "Winter <br> Cumulative Gross <br> {in dollars}:", "Spring <br> Cumulative Gross <br> {in dollars}:", "Summer <br> Cumulative Gross <br> {in dollars}:", "Holiday Season <br> Cumulative Gross <br> {in dollars}:"],
      "parents": ["", "", "", "", "", ""],
      "values":  ["21243273.89", "29360349.01", "28614314.82", "78360402.36", "38269909.44"],
      "leaf": {"opacity": 0.4},
      "marker": {"line": {"width": 2}},
      "branchvalues": 'relative'
    }];
    
    var layout = {
      "margin": {"l": 0, "r": 0, "b": 0, "t": 0},
      sunburstcolorway:["red", "orange", "yellow", "green", "blue"],
    };
    
    
    Plotly.newPlot('plot', data, layout)