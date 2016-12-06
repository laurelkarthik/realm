
// Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'data');
        data.addColumn('number', 'values');
        data.addRows([
          ['Returning Visitors', 2.75],
          ['New Visitors', 1.25],
            
       
        ]);

        // Set chart options
        var options = {'title':'',
                       'width':400,
                       'height':250,
                       colors: ['#35606F', '#457485', '#5C91A3', '#6BA3B7', '#7FBED3'],
                       backgroundColor: 'transparent',
                       //is3D: true,
                        legend: 'none'        
                      };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
          
          var data2 = new google.visualization.DataTable();
        data2.addColumn('string', 'Topping');
        data2.addColumn('number', 'Slices');
        data2.addRows([
          ['18-24', 1.75],
          ['25-34', 1.25],
          ['35-44', 0.70],
          ['45-65', 0.29],
          ['unknown', 0.03]
         
        ]);

          
          var chart2 = new google.visualization.PieChart(document.getElementById('chart_div1'));
        chart2.draw(data2, options);
          
          var data3 = new google.visualization.DataTable();
        data3.addColumn('string', 'Topping');
        data3.addColumn('number', 'Slices');
        data3.addRows([
          ['male', 1.8],
          ['Female', 1.2],
          ['unknown', 0.05]    
        ]);
          
          var chart3 = new google.visualization.PieChart(document.getElementById('chart_div2'));
        chart3.draw(data3, options);
          
           var data4 = new google.visualization.DataTable();
        data4.addColumn('string', 'Topping');
        data4.addColumn('number', 'Slices');
        data4.addRows([
          ['Android', 2.5],
          ['IOS', 1.2],
          ['Blackberry', 1.2], 
          ['Windows', 1.8],
          ['Macintosh', 0.2]
        ]);
          
          
          var chart4 = new google.visualization.PieChart(document.getElementById('chart_div3'));
        chart4.draw(data4, options);
          
           var data5 = new google.visualization.DataTable();
        data5.addColumn('string', 'Topping');
        data5.addColumn('number', 'Slices');
        data5.addRows([
          ['Mobile', 3.85],
          ['tablet', 1.5],
          ['Laptop', 0.35]
        ]);
          
          
           var chart5 = new google.visualization.PieChart(document.getElementById('chart_div4'));
        chart5.draw(data5, options);
          
            var data6 = new google.visualization.DataTable();
        data6.addColumn('string', 'Topping');
        data6.addColumn('number', 'Slices');
        data6.addRows([
          ['Apple', 2.8],
          ['Micromax', 1.5],
          ['Gionee', 1.75],
          ['Oppo',0.87],
          ['Asus',1.8]
        ]);
          
           var chart6 = new google.visualization.PieChart(document.getElementById('chart_div5'));
        chart6.draw(data6, options);
          
          var data7 = new google.visualization.DataTable();
        data7.addColumn('string', 'Topping');
        data7.addColumn('number', 'Slices');
        data7.addRows([
          ['Chrome', 2.8],
          ['Firefox', 1.5],
          ['Safari', 1.75],
          ['Edge',1.87],
          ['Internet Explorer',0.8]
        ]);
          
          var chart7 = new google.visualization.PieChart(document.getElementById('chart_div6'));
        chart7.draw(data7, options);
          
           var data8 = new google.visualization.DataTable();
        data8.addColumn('string', 'Topping');
        data8.addColumn('number', 'Slices');
        data8.addRows([
          ['En', 4],
                    
        ]);
          
          var chart8 = new google.visualization.PieChart(document.getElementById('chart_div7'));
        chart8.draw(data8, options);
          
          var data9 = new google.visualization.DataTable();
        data9.addColumn('string', 'Topping');
        data9.addColumn('number', 'Slices');
        data9.addRows([
          ['Facebook', 4],
          ['Google', 3],
          ['Twitter', 1]
                    
        ]);
          
          var chart9 = new google.visualization.PieChart(document.getElementById('chart_div8'));
        chart9.draw(data9, options);
          
           var data1 = google.visualization.arrayToDataTable
            ([['X', 'Y'],
              [1, 3],
              [2, 2.5],
              [3, 3],
              [4, 4],
              [5, 4],
              [6, 3],
              [7, 2.5],
              [8, 3]
        ]);

        var options1 = {
          legend: 'none',
          hAxis: { minValue: 0, maxValue: 9 },
          colors: ['#EF851C'],
          pointSize: 30,
          pointShape: { type: 'star', sides: 4 }
        };

        var chart1 = new google.visualization.LineChart(document.getElementById('starchart'));
        chart1.draw(data1, options1);
      }

$(window).resize(function(){
  
  drawChart();
})

$(window).resize(function() {
    if(this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function() {
        $(this).trigger('resizeEnd');
}, 500);
});
//usage of resizeEnd

$(window).bind('resizeEnd', function() {
    DoSomething();
});