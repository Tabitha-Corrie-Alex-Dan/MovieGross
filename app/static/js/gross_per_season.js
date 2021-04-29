d3.json("/sum").then(function (getSum) {
  console.log(getSum);

  let season = getSum.map((season) => season.season);
  var cumGross = getSum.map((gross) => gross.cum_gross);
//   var average = getSum.map((avg) => avg.average);
  console.log(season);
  console.log(cumGross)

  var trace1 = {
    x: season,
    y: cumGross,
    type: 'bar',
    name: 'Cumulative Gross/Season',
    marker: {
      color: ['orange', 'red', 'green', 'yellow', 'blue'],
      opacity: 0.8,
      line: {
        color: 'black',
        width: 1.2
      }
    }
  };
  
  var data = [trace1];
  
  var layout = {
      margin: 0,
    yaxis: {
        title: 'Cumulative Gross (USD)',
        titlefont: {
          size: 16,
          color: 'rgb(107, 107, 107)'
        }},
    xaxis: {
      tickangle: -45
    }
    
  };
  var config = {responsive: true}

  Plotly.newPlot('bar-plot', data, layout, config);

});
