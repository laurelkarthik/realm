angular.module("myapp",[])
 .controller("myctrl",["$scope",function($scope)
{
     // Initialize the Firebase SDK
    var config = {
    apiKey: 'AIzaSyBM1J3z7HKuCphgwEGC1ZYCAzCHRPB0nT8',
    authDomain: 'realm-c19e0.firebaseapp.com',
    databaseURL: 'https://realm-c19e0.firebaseio.com',
    storageBucket: 'realm-c19e0.appspot.com',
    messagingSenderId: '857590881553'
  };
  firebase.initializeApp(config);
var c = new Date();
var d = c.toISOString();
var y = d.slice(0, 4);
var m = d.slice(5, 7);
var d1= d.slice(8,10);
 myfun();

function myfun(){
  console.log("hiii");
  var path='/testnas/counters/'+y+'/'+m+'/'+d1+'/authentication';
  firebase.database().ref(path).once('value').then(function (snapshot) {
  var scdata= JSON.stringify(snapshot.val(), null, 2);
  console.log(scdata);
  var scobj= JSON.parse(scdata);
  console.log(scobj);
})
}
$scope.fun=function(btn){
//if gender
    if(btn=="gender")
    {
       var path1 = '/testnas/counters/'+y+'/'+m+'/cumilative/gender';
firebase.database().ref(path1).once('value').then(function (snapshot) {
  var data= JSON.stringify(snapshot.val(), null, 2);
  var chartdata=[];
var obj= JSON.parse(data);
  console.log(obj);
 for(var key in obj)
 {
     console.log(key+obj[key]);
     chartdata.push(
         {
             "gender":key,
             "value":parseInt(obj[key])
         }
     )
 }
 console.log(chartdata);
 chart.dataProvider=chartdata;
 chart.titleField="gender";
 chart.valueField="value";
 chart.validateData();
 console.log("atchart");
});
    }
}

var chart = AmCharts.makeChart( "chartdiv", {
  "type": "pie",
  "theme": "light",
  "labelsEnabled":false,
  "responsive": {
    "enabled": false
  },
    "legend":{
   	"position":"right",
    "marginRight":50,
    "autoMargins":false,
    "fontSize":11,
    "markerSize":10,
      },
  "dataProvider": [ {
    "country": "Lithuania",
    "value": 260
  }, {
    "country": "Ireland",
    "value": 201
  }, {
    "country": "Germany",
    "value": 65
  }, {
    "country": "Australia",
    "value": 39
  }, {
    "country": "UK",
    "value": 19
  }, {
    "country": "Latvia",
    "value": 10
  } ],
  "valueField": "value",
  "titleField": "country",
  
  "outlineAlpha": 0.4,
  "startDuration":0,
  "depth3D": 15,
  "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
  "angle": 15,
  "export": {
    "enabled": false
  }
} );

// series chart code

var chart1 = AmCharts.makeChart("chartseries", {
    "type": "serial",
    "theme": "dark",
    "marginRight": 40,
    "marginLeft": 40,
    "autoMarginOffset": 20,
    "mouseWheelZoomEnabled":true,
    "dataDateFormat": "YYYY-MM-DD",
    "responsive": {
    "enabled": true
  },
    "valueAxes": [{
        "id": "v1",
        "axisAlpha": 0,
        "position": "left",
        "ignoreAxisWidth":true
    }],
    "balloon": {
        "borderThickness": 1,
        "shadowAlpha": 0
    },
    "graphs": [{
        "id": "g1",
        "balloon":{
          "drop":false,
          "adjustBorderColor":false,
          "color":"#ffffff"
        },
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#FFFFFF",
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "title": "red line",
        "useLineColorForBulletBorder": true,
        "valueField": "value",
        "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
    },
    {
        "id": "g2",
        "balloon":{
          "drop":false,
          "adjustBorderColor":false,
          "color":"#000"
        },
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#000",
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "title": "red line",
        "useLineColorForBulletBorder": true,
        "valueField": "value1",
        "balloonText": "<span style='font-size:18px;'>[[value1]]</span>"
    }
    ],

    "chartScrollbar": {
        "graph": "g1",
        "oppositeAxis":false,
        "offset":30,
        "scrollbarHeight": 80,
        "backgroundAlpha": 0,
        "selectedBackgroundAlpha": 0.1,
        "selectedBackgroundColor": "#888888",
        "graphFillAlpha": 0,
        "graphLineAlpha": 0.5,
        "selectedGraphFillAlpha": 0,
        "selectedGraphLineAlpha": 1,
        "autoGridCount":true,
        "color":"#AAAAAA"
    },

    "chartScrollbar": {
        "graph": "g2",
        "oppositeAxis":false,
        "offset":30,
        "scrollbarHeight": 50,
        "backgroundAlpha": 0,
        "selectedBackgroundAlpha": 0.1,
        "selectedBackgroundColor": "#000",
        "graphFillAlpha": 0,
        "graphLineAlpha": 0.5,
        "selectedGraphFillAlpha": 0,
        "selectedGraphLineAlpha": 1,
        "autoGridCount":true,
        "color":"#AAAAAA"
    },

    "chartCursor": {
        "pan": true,
        "valueLineEnabled": true,
        "valueLineBalloonEnabled": true,
        "cursorAlpha":1,
        "cursorColor":"#258cbb",
        "limitToGraph":"g1",
        "valueLineAlpha":0.8,
        "valueZoomable":true
    },

     "chartCursor": {
        "pan": true,
        "valueLineEnabled": true,
        "valueLineBalloonEnabled": true,
        "cursorAlpha":1,
        "cursorColor":"#258cbb",
        "limitToGraph":"g2",
        "valueLineAlpha":0.8,
        "valueZoomable":true
    },
    
    "categoryField": "date",
    "categoryAxis": {
        "parseDates": true,
        "dashLength": 1,
        "minorGridEnabled": true
    },
    
    "export": {
        "enabled": false
    },

    "dataProvider": [{
        "date": "2012-07-27",
        "value": 13
        ,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-07-28",
        "value": 11
        ,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-07-29",
        "value": 15
        ,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-07-30",
        "value": 16
        ,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-07-31",
        "value": 18
        ,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-08-01",
        "value": 13
        ,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-08-02",
        "value": 22
        ,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-08-03",
        "value": 23
        ,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-08-04",
        "value": 20
        ,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-08-05",
        "value": 17
        ,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-08-06",
        "value": 16
        ,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-08-07",
        "value": 18
        ,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-08-08",
        "value": 21
        ,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-08-09",
        "value": 26,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-08-10",
        "value": 24,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-08-11",
        "value": 29,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-08-12",
        "value": 32,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-08-13",
        "value": 18,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-08-14",
        "value": 24,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-08-15",
        "value": 22,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-08-16",
        "value": 18,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-08-17",
        "value": 19,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-08-18",
        "value": 14,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-08-19",
        "value": 15,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-08-20",
        "value": 12,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-08-21",
        "value": 8,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-08-22",
        "value": 9,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-08-23",
        "value": 8,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-08-24",
        "value": 7,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-08-25",
        "value": 5,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-08-26",
        "value": 11,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-08-27",
        "value": 13,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-08-28",
        "value": 18,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-08-29",
        "value": 20,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-08-30",
        "value": 29,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-08-31",
        "value": 33,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-09-01",
        "value": 42,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-09-02",
        "value": 35,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-09-03",
        "value": 31,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-09-04",
        "value": 47,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-09-05",
        "value": 52,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-09-06",
        "value": 46,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-09-07",
        "value": 41,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-09-08",
        "value": 43,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-09-09",
        "value": 40,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-09-10",
        "value": 39,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-09-11",
        "value": 34,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-09-12",
        "value": 29,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-09-13",
        "value": 34,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-09-14",
        "value": 37,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-09-15",
        "value": 42,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-09-16",
        "value": 49,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-09-17",
        "value": 46,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-09-18",
        "value": 47,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-09-19",
        "value": 55,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-09-20",
        "value": 59,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-09-21",
        "value": 58,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-09-22",
        "value": 57,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-09-23",
        "value": 61,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-09-24",
        "value": 59,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-09-25",
        "value": 67,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-09-26",
        "value": 65,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-09-27",
        "value": 61,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-09-28",
        "value": 66,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-09-29",
        "value": 69,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-09-30",
        "value": 71,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-10-01",
        "value": 67,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-10-02",
        "value": 63,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-10-03",
        "value": 46,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-10-04",
        "value": 32,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-10-05",
        "value": 21,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-10-06",
        "value": 18,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-10-07",
        "value": 21,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-10-08",
        "value": 28,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-10-09",
        "value": 27,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-10-10",
        "value": 36,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-10-11",
        "value": 33,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-10-12",
        "value": 31,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-10-13",
        "value": 30,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-10-14",
        "value": 34,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-10-15",
        "value": 38,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-10-16",
        "value": 37,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-10-17",
        "value": 44,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-10-18",
        "value": 49,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-10-19",
        "value": 53,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-10-20",
        "value": 57,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-10-21",
        "value": 60,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-10-22",
        "value": 61,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-10-23",
        "value": 69,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-10-24",
        "value": 67,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-10-25",
        "value": 72,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-10-26",
        "value": 77,"value1": Math.floor(Math.random() * 60) + 10
    }, {
        "date": "2012-10-27",
        "value": 75,"value1": Math.floor(Math.random() * 60) + 10
    }
]
});

chart1.addListener("rendered", zoomChart);

zoomChart();

function zoomChart() {
    chart1.zoomToIndexes(chart1.dataProvider.length - 40, chart1.dataProvider.length - 1);
}

 }]);