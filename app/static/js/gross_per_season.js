d3.json("/sum").then(function (getSum) {
  console.log(getSum);

  let season = getSum.map((season) => season.season);
  var cumGross = getSum.map((gross) => gross.cum_gross);
  var average = getSum.average;
  console.log(season);
  console.log(cumGross)

var data = [
    {
      x: season,
      y: cumGross,
      type: 'bar'
    }
  ];
  
  Plotly.newPlot('plot', data);

});

