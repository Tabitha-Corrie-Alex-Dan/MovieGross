<<<<<<< HEAD
d3.json('/data').then(function(getData) {
  console.log(getData)
})
=======
d3.json("/data").then(function(getdata) {
  console.log(getdata);
});
>>>>>>> c298def64ce9c00e0dd93a1149baf40cbff2f6b1

var traceH = {
    x: [134, 258, 237, 232, 236, 246, 242, 217, 214, 216, 233, 244, 244, 228, 243, 258, 246, 280, 245, 109],
    y: [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
    name: 'Holiday Season',
    orientation: 'h',
    marker: {
      color: 'red',
      width: 1
    },
    type: 'bar'
  };
  
  var traceF = {
    x: [123, 256, 264, 243, 249, 247, 257, 265, 231, 248, 275, 274, 293, 301, 267, 292, 301, 311, 261, 96],
    y: [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
    name: 'Fall',
    orientation: 'h',
    type: 'bar',
    marker: {
      color: 'orange',
      width: 1
    }
  };

  var traceSum = {
    x: [185, 287, 356, 361, 338, 331, 352, 350, 308, 320, 346, 379, 374, 367, 389, 396, 369, 425, 404, 86],
    y: [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
    name: 'Summer',
    orientation: 'h',
    type: 'bar',
    marker: {
      color: 'yellow',
      width: 1
    }
  };

  var traceSpr = {
    x: [124, 134, 231, 235, 235, 258, 241, 237, 206, 219, 236, 266, 251, 255, 227, 259, 244, 300, 266, 129],
    y: [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
    name: 'Spring',
    orientation: 'h',
    type: 'bar',
    marker: {
      color: 'green',
      width: 1
    }
  };

  var traceW = {
    x: [108, 112, 227, 221, 193, 204, 193, 205, 177, 175, 192, 209, 204, 228, 224, 192, 197, 220, 201, 208],
    y: [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
    name: 'Winter',
    orientation: 'h',
    type: 'bar',
    marker: {
      color: 'blue',
      width: 1
    }
  };
  
  var data = [traceH, traceF, traceSum, traceSpr, traceW];
  
  var layout = {
    title: 'Movie Releases By Season',
    barmode: 'stack'
  };
  
  Plotly.newPlot('hbar', data, layout);

  d3.json("/data").then(function(getdata) {
    console.log(getdata);
  });
  