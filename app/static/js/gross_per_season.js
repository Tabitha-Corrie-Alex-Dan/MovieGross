d3.json("/sum").then(function (getSum) {
  console.log(getSum);

  let season = getSum.map((season) => season.season);
  var cumGross = getSum.map((gross) => gross.cum_gross);
  var average = getSum.map((avg) => avg.average);
  console.log(season);
  console.log(cumGross)

  var trace1 = {
    x: season,
    y: cumGross,
    type: 'bar',
    name: 'Cummlative Gross/Season',
    marker: {
      color: 'rgb(49,130,189)',
      opacity: 0.7,
    }
  };
  
  var trace2 = {
    x: season,
    y: average,
    type: 'bar',
    name: 'Average Gross/Season',
    marker: {
      color: 'rgb(204,204,204)',
      opacity: 0.5
    }
  };
  
  var data = [trace1, trace2];
  
  var layout = {
    title: 'Gross per Season',
    xaxis: {
      tickangle: -45
    },
    barmode: 'group'
  };
  
  Plotly.newPlot('plot', data, layout);

});
