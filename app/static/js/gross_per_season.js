d3.json("/sum").then(function (getSum) {
  console.log(getSum);

  let season = getSum.map((season) => season.season);
  var cumGross = getSum.map((gross) => gross.cum_gross);
  //   var average = getSum.map((avg) => avg.average);
  console.log(season);
  console.log(cumGross);

  var trace1 = {
    x: season,
    y: cumGross,
    type: "bar",
    name: "Cumulative Gross/Season",
    marker: {
      color: ["orange", "red", "green", "yellow", "blue"],
      opacity: 0.8,
      line: {
        color: "black",
        width: 1.2,
      },
    },
  };

  var data = [trace1];

  var layout = {
    title: "Cumulative Gross per Season (2001-2020)",
    yaxis: {
      title: "Cumulative Gross (USD)",
      titlefont: {
        size: 16,
        color: "rgb(107, 107, 107)",
      },
    },
    xaxis: {
      tickangle: -45,
    },
  };
  var config = {responsive: true}

  Plotly.newPlot("bar-plot", data, layout, config);
});

d3.json("/sum").then(function (getTable) {
  // console.log(getTable);

  var values = [["Fall", "Holiday Season", "Spring", "Summer", "Winter"], 
  ["5,054", "4,562", "4,635", "6,723", "3,966"], 
  ["$83,497,912", "$166,124,494", "$128,163,021", "$229,192,669", "$155,753,235" ],
  ["$21,243,273,891", "$38,269,909,440", "$28,616,867,596", "$78,360,402,361", "$29,360,349,014"]]

  var data = [{
    type: 'table',
    header: {
    values: [["<b>Seasons</b>"], ["<b>Total Releases</b>"], ["<b>Average per Release</b>"],
         ["<b>Total Gross</b>"]],
    align: ["left", "center"],
    line: {width: 1, color: '#506784'},
    fill: {color: '#119DFF'},
    font: {family: "Arial", size: 12, color: "white"}
    },
    cells: {
    values: values,
    align: ["left", "center"],
    line: {color: "#506784", width: 1},
    fill: {color: ['#25FEFD', 'white']},
    font: {family: "Arial", size: 11, color: ["#506784"]},
    height: 43
    }
    }]
  var layout = {
    title: "Summary Data"
  }

  var config = {responsive: true}

  Plotly.newPlot("table2", data, layout, config);
});
