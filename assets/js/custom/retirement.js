// JavaScript Document

//var chart;
//$(document).ready(function() {
//	chart = new Highcharts.Chart({
//		chart: {
//			renderTo: 'retirement-graph',
//			type: 'line',
//		},
//		title: {
//			text: 'Employer Sponsorship and Employee Participation in Retirement Plans',
//			x: -20 //center
//		},
//		xAxis: {
//			categories: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2006', '2007', '2008']
//		},
//		yAxis: {
//			title: {
//				text: 'Percentage'
//			},
//			plotLines: [{
//				value: 0,
//				width: 1,
//				color: '#808080'
//			}]
//		},
//		tooltip: {
//			formatter: function() {
//					return '<b>'+ this.series.name +'</b><br/>'+
//					this.x +': '+ this.y +'%';
//			}
//		},
//		legend: {
//			layout: 'vertical',
//			align: 'right',
//			verticalAlign: 'top',
//			x: -10,
//			y: 100,
//			borderWidth: 0
//		},
//		series: [{
//			name: 'Employee sponsorship',
//			data: [61.4, null, null, null, null, 54.9, 52.6, 54.8, 53.2]
//		}, {
//			name: 'Employee participation',
//			data: [50.3, null, null, null, null, 45, 43.2, 45.1, 43.6]
//		}]
//	});
//});

var chart;
  $(document).ready(function() {
	 chart = new Highcharts.Chart({
		chart: {
		   renderTo: 'top-quartile',
		   plotBackgroundColor: null,
		   plotBorderWidth: null,
		},
		title: {
		   text: 'Top quartile'
		},
		credits: {
			enabled: false	
		},
		exporting: {
			enabled: false	
		},
		legend: {
			enabled: false	
		},
		yAxis: {
			title: {
				text: null
			},
			labels: {
			  formatter: function() {
				return this.value +'%';
			  }
			},
			max:90,
			min:30,
			startOnTick: false,
			tickInterval: 30
		},
		xAxis: {
			categories: ["'00", "'08"]
		},
		tooltip: {
			style: {
				fontSize: '9px',	
			},
			formatter: function() {
			  var s;
			  if (this.point.name) { // the pie chart
				 s = ''+
					this.point.name +': '+ this.y + '%';
			  } else {
				 s = ''+
					this.series.name  +': '+ this.y;
			  }
			  return s;
		   }
		},
		plotOptions: {
			area: {
				pointWidth: 25,
				pointPadding: .5,
				groupPadding: .3,
				minPointLength: 1,
				dataLabels: {
					enabled: true,
					formatter: function() {
						return this.y + '%';
					},
					style: {
						fontSize: '14px',
						fontWeight: 'bold'					
					},
				},
			}
		},
		labels: {
			items: [{
				html: '2000',
				style: {
					left: '44px',
					top: '-17px',
					color: 'black'
				}
			},{
				html: '2008',
				style: {
					left: '634px',
					top: '-17px',
					color: 'black'
				}
			},{
				html: 'Employee sponsorship',
				style: {
					left: '295px',
					top: '30px',
					color: '#000',
					zIndex: '1000',
					fontWeight: 'bold',
					fontSize: '16px'
				}
			}]
		},
		series: [{
		   type: 'pie',
		   name: 'Employee retirement plans',
		   data: [{
			  name: 'Employee participation',
			  y: 75.5,
			  color: '#660033'
		   }, {
			  name: 'No participation',
			  y: 24.5,
			  color: '#EEEEEE'
		   }],
		   center: [60, 30],
		   spacingLeft: 100,
		   size: 60,
		   showInLegend: false,
		   dataLabels: {
			  enabled: false
		   },
		   borderColor: '#000000',
		},{
		   type: 'pie',
		   name: 'Employee retirement plans',
		   data: [{
			  name: 'Employee participation',
			  y: 68.6,
			  color: '#660033'
		   }, {
			  name: 'No participation',
			  y: 31.4,
			  color: '#EEEEEE'
		   }],
		   center: [650, 30],
		   spacingLeft: 100,
		   size: 60,
		   showInLegend: false,
		   dataLabels: {
			  enabled: false
		   },
		   borderColor: '#000000',
		},{
			type: 'area',
			data: [80.2, 72.9],
			color: '#0D253F',
		}]
	 });
  });

var chart;
  $(document).ready(function() {
	 chart = new Highcharts.Chart({
		chart: {
		   renderTo: 'second-quartile',
		   plotBackgroundColor: null,
		   plotBorderWidth: null,
		},
		title: {
		   text: 'Second quartile'
		},
		credits: {
			enabled: false	
		},
		exporting: {
			enabled: false	
		},
		legend: {
			enabled: false	
		},
		yAxis: {
			title: {
				text: null
			},
			labels: {
			  formatter: function() {
				return this.value +'%';
			  }
			},
			max:90,
			min:30,
			startOnTick: false,
			tickInterval: 30
		},
		xAxis: {
			categories: ["'00", "'08"]
		},
		tooltip: {
			style: {
				fontSize: '9px',	
			},
			formatter: function() {
			  var s;
			  if (this.point.name) { // the pie chart
				 s = ''+
					this.point.name +': '+ this.y + '%';
			  } else {
				 s = ''+
					this.series.name  +': '+ this.y;
			  }
			  return s;
		   }
		},
		plotOptions: {
			area: {
				pointWidth: 25,
				pointPadding: .5,
				groupPadding: .3,
				minPointLength: 1,
			}
		},
		labels: {
			items: [{
				html: '2000',
				style: {
					left: '44px',
					top: '-17px',
					color: 'black'
				}
			},{
				html: '2008',
				style: {
					left: '634px',
					top: '-17px',
					color: 'black'
				}
			}]
		},
		series: [{
		   type: 'pie',
		   name: 'Employee retirement plans',
		   data: [{
			  name: 'Employee participation',
			  y: 67.1,
			  color: '#660033'
		   }, {
			  name: 'No participation',
			  y: 32.9,
			  color: '#EEEEEE'
		   }],
		   center: [60, 30],
		   size: 60,
		   showInLegend: false,
		   dataLabels: {
			  enabled: false
		   },
		   borderColor: '#000000',
		},{
		   type: 'pie',
		   name: 'Employee retirement plans',
		   data: [{
			  name: 'Employee participation',
			  y: 60.1,
			  color: '#660033'
		   }, {
			  name: 'No participation',
			  y: 39.9,
			  color: '#EEEEEE'
		   }],
		   center: [650, 30],
		   spacingLeft: 100,
		   size: 60,
		   showInLegend: false,
		   dataLabels: {
			  enabled: false
		   },
		   borderColor: '#000000',
		},{
			type: 'area',
			data: [74.3, 67.3],
			color: '#0D253F',
		}]
	 });
  });

var chart;
  $(document).ready(function() {
	 chart = new Highcharts.Chart({
		chart: {
		   renderTo: 'third-quartile',
		   plotBackgroundColor: null,
		   plotBorderWidth: null,
		},
		title: {
		   text: 'Third quartile'
		},
		credits: {
			enabled: false	
		},
		exporting: {
			enabled: false	
		},
		legend: {
			enabled: false	
		},
		yAxis: {
			title: {
				text: null
			},
			labels: {
			  formatter: function() {
				return this.value +'%';
			  }
			},
			max:90,
			min:30,
			startOnTick: false,
			tickInterval: 30
		},
		xAxis: {
			categories: ["'00", "'08"]
		},
		tooltip: {
			style: {
				fontSize: '9px',	
			},
			formatter: function() {
			  var s;
			  if (this.point.name) { // the pie chart
				 s = ''+
					this.point.name +': '+ this.y + '%';
			  } else {
				 s = ''+
					this.series.name  +': '+ this.y;
			  }
			  return s;
		   }
		},
		plotOptions: {
			area: {
				pointWidth: 25,
				pointPadding: .5,
				groupPadding: .3,
				minPointLength: 1,
			}
		},
		labels: {
			items: [{
				html: '2000',
				style: {
					left: '44px',
					top: '-17px',
					color: 'black'
				}
			},{
				html: '2008',
				style: {
					left: '634px',
					top: '-17px',
					color: 'black'
				}
			}]
		},
		series: [{
		   type: 'pie',
		   name: 'Employee retirement plans',
		   data: [{
			  name: 'Employee participation',
			  y: 55.5,
			  color: '#660033'
		   }, {
			  name: 'No participation',
			  y: 44.5,
			  color: '#EEEEEE'
		   }],
		   center: [60, 30],
		   spacingLeft: 100,
		   size: 60,
		   showInLegend: false,
		   dataLabels: {
			  enabled: false
		   },
		   borderColor: '#000000',
		},{
		   type: 'pie',
		   name: 'Employee retirement plans',
		   data: [{
			  name: 'Employee participation',
			  y: 49.7,
			  color: '#660033'
		   }, {
			  name: 'No participation',
			  y: 50.3,
			  color: '#EEEEEE'
		   }],
		   center: [650, 30],
		   spacingLeft: 100,
		   size: 60,
		   showInLegend: false,
		   dataLabels: {
			  enabled: false
		   },
		   borderColor: '#000000',
		},{
			type: 'area',
			data: [66, 59.2],
			color: '#0D253F',
		}]
	 });
  });

var chart;
  $(document).ready(function() {
	 chart = new Highcharts.Chart({
		chart: {
		   renderTo: 'bottom-quartile',
		   plotBackgroundColor: null,
		   plotBorderWidth: null,
		},
		title: {
		   text: 'Bottom quartile'
		},
		credits: {
			enabled: false	
		},
		exporting: {
			enabled: false	
		},
		legend: {
			enabled: false	
		},
		yAxis: {
			title: {
				text: null
			},
			labels: {
			  formatter: function() {
				return this.value +'%';
			  }
			},
			max:90,
			min:30,
			startOnTick: false,
			tickInterval: 30
		},
		xAxis: {
			categories: ["'00", "'08"]
		},
		tooltip: {
			style: {
				fontSize: '9px',	
			},
			formatter: function() {
			  var s;
			  if (this.point.name) { // the pie chart
				 s = ''+
					this.point.name +': '+ this.y + '%';
			  } else {
				 s = ''+
					this.series.name  +': '+ this.y;
			  }
			  return s;
		   }
		},
		plotOptions: {
			area: {
				pointWidth: 25,
				pointPadding: .5,
				groupPadding: .3,
				minPointLength: 1,
			}
		},
		labels: {
			items: [{
				html: '2000',
				style: {
					left: '44px',
					top: '-17px',
					color: 'black'
				}
			},{
				html: '2008',
				style: {
					left: '634px',
					top: '-17px',
					color: 'black'
				}
			}]
		},
		series: [{
		   type: 'pie',
		   name: 'Employee retirement plans',
		   data: [{
			  name: 'Employee participation',
			  y: 32.1,
			  color: '#660033'
		   }, {
			  name: 'No participation',
			  y: 67.9,
			  color: '#EEEEEE'
		   }],
		   center: [60, 30],
		   spacingLeft: 100,
		   size: 60,
		   showInLegend: false,
		   dataLabels: {
			  enabled: false
		   },
		   borderColor: '#000000',
		},{
		   type: 'pie',
		   name: 'Employee retirement plans',
		   data: [{
			  name: 'Employee participation',
			  y: 27.7,
			  color: '#660033'
		   }, {
			  name: 'No participation',
			  y: 72.3,
			  color: '#EEEEEE'
		   }],
		   center: [650, 30],
		   size: 60,
		   showInLegend: false,
		   dataLabels: {
			  enabled: false
		   },
		   borderColor: '#000000',
		},{
			type: 'area',
			data: [44.9, 38.4],
			color: '#0D253F',
		}]
	 });
  });
