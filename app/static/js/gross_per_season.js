d3.json("/sum").then(function (getSum) {
  console.log(getSum);

  var season = getSum.season;
  var cumGross = getSum.cum_gross;
  var average = getSum.average;

  var trace1 = {
    type: "bar",
    x: season,
    y: cumGross,
    line: {
      color: "#17BECF",
    },
  };


  var data = [trace1];

  var layout = {
    title: "Gross per season",
    xaxis: {
      range: [length.season],
    },
    yaxis: {
      autorange: true,
      type: "linear",
    },
  };

  Plotly.newPlot("plot", data, layout);
});
