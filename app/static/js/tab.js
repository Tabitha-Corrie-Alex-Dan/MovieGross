d3.json('/sum').then(function(getSum) {
    console.log(getSum)


  var fall = [];
  var cumGrossFall = [];
  var releasesFall = [];
  var averageFall = [];
  var grossFall = [];  

  var winter = [];
  var cumGrossWinter = [];
  var releasesWinter = [];
  var averageWinter = [];
  var grossWinter = [];  

  var spring = [];
  var cumGrossSpring = [];
  var releasesSpring = [];
  var averageSpring = [];
  var grossSpring = [];  

  var summer = [];
  var cumGrossSummer = [];
  var releasesSummer = [];
  var averageSummer = [];
  var grossSummmer = [];  

  var holidaySeason = [];
  var cumGrossHolidaySeason = [];
  var releasesHolidaySeason = [];
  var averageHolidaySeason = [];
  var grossHolidaySeason = [];

  for (var i = 0; i < getSum.length; i+=5){
    
    fall.push(getSum[i]['season']);
    cumGrossFall.push(getSum[i]['cum_gross']);
    releasesFall.push(getSum[i]['releases']);
    averageFall.push(getSum[i]['average']);
    grossFall.push(getSum[i]['gross']);
    }

  for (var i = 1; i < getSum.length; i+=5){

    winter.push(getSum[i]['season']);
    cumGrossWinter.push(getSum[i]['cum_gross']);
    releasesWinter.push(getSum[i]['releases']);
    averageWinter.push(getSum[i]['average']);
    grossWinter.push(getSum[i]['gross']);
    }

  for (var i = 2; i < getSum.length; i+=5){

    spring.push(getSum[i]['season']);
    cumGrossSpring.push(getSum[i]['cum_gross']);
    releasesSpring.push(getSum[i]['releases']);
    averageSpring.push(getSum[i]['average']);
    grossSpring.push(getSum[i]['gross']);
    }

  for (var i = 3; i < getSum.length; i+=5){

    summer.push(getSum[i]['season']);
    cumGrossSummer.push(getSum[i]['cum_gross']);
    releasesSummer.push(getSum[i]['releases']);
    averageSummer.push(getSum[i]['average']);
    grossSummmer.push(getSum[i]['gross']);
    }

  for (var i = 4; i < getSum.length; i+=5){

    holidaySeason.push(getSum[i]['season']);
    cumGrossHolidaySeason.push(getSum[i]['cum_gross']);
    releasesHolidaySeason.push(getSum[i]['releases']);
    averageHolidaySeason.push(getSum[i]['average']);
    grossHolidaySeason.push(getSum[i]['gross']);
    }

    console.log(fall);
    console.log(cumGrossFall);
    console.log(releasesFall);
    console.log(averageFall);
    console.log(grossFall);

var trace1 = {
  type: 'scatter',
  x: averageFall,
  y: fall,
  mode: 'markers',
  name: 'Fall Average Gross',
  marker: {
    color: 'orange',
    line: {
      color: 'orange',
      width: 1,
    },
    symbol: 'circle',
    size: 100
  }
};

var trace2 = {
  x: averageWinter,
  y: winter,
  mode: 'markers',
  name: 'Winter Average Gross',
  marker: {
    color: 'red',
    line: {
      color: 'red',
      width: 1,
    },
    symbol: 'circle',
    size: 100
  }
};

var trace3 = {
  x: averageSpring,
  y: spring,
  mode: 'markers',
  name: 'Spring Average Gross',
  marker: {
    color: 'green',
    line: {
      color: 'green',
      width: 1,
    },
    symbol: 'circle',
    size: 100
  }
};

var trace4 = {
  x: averageSummer,
  y: summer,
  mode: 'markers',
  name: 'Summer Average Gross',
  marker: {
    color: 'yellow',
    line: {
      color: 'yellow',
      width: 1,
    },
    symbol: 'circle',
    size: 100
  }
};

var trace5 = {
  x: averageHolidaySeason,
  y: holidaySeason,
  mode: 'markers',
  name: 'Holiday Season Average Gross',
  marker: {
    color: 'blue',
    line: {
      color: 'blue',
      width: 1,
    },
    symbol: 'circle',
    size: 100
  }
};

var data = [trace1, trace2, trace3, trace4, trace5];

var layout = {
  title: 'Average Gross Per Season',
  xaxis: {
    // showgrid: false,
    // showline: true,
    linecolor: 'black',
    titlefont: {
      font: {
        color: 'black'
      }
    },
    tickfont: {
      font: {
        color: 'black'
      }
    },
    autotick: false,
    dtick: 10,
    ticks: 'outside',
    tickcolor: 'black'
  },
  margin: {
    l: 100,
    r: 40,
    b: 1,
    // t: 1
  },
  legend: {
    font: {
      size: 10,
    },
    yanchor: 'middle',
    xanchor: 'right'
  },
  width: 600,
  height: 600,
  paper_bgcolor: 'white',
  plot_bgcolor: 'white',
  hovermode: 'closest'
};

Plotly.newPlot('plot', data, layout);

});