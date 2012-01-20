/**
 * Dark blue theme for Highcharts JS
 * @author Torstein Hønsi
 */

Highcharts.theme = {
	colors: ["#6499AD", "#0d253f", "#4c7888", "#a8bc8b", "#e8e2b7"],
	chart: {
		backgroundColor: {
			linearGradient: [0, 0, 250, 500],
			stops: [
				[0, 'rgb(239, 239, 239)'],
			]
		},
		className: 'dark-container',
		plotBackgroundColor: 'rgba(255, 255, 255, 1)',
	},
	title: {
		style: {
			color: '#000',
			font: '22px "Book Antiqua",Georgia,"Times New Roman","DejaVu Serif",serif;'
		}
	},
	subtitle: {
		style: {
			color: '#AAA',
			font: 'bold 11px Georgia,"Times New Roman",Times,serif;'
		}
	},
	xAxis: {
		gridLineColor: '#000000',
		gridLineWidth: 1,
		labels: {
			style: {
				color: '#000000'
			}
		},
		lineColor: '#000000',
		tickColor: '#000000',
		title: {
			style: {
				color: '#000',
				fontSize: '12px',
				fontFamily: 'Helvetica,Arial,"Nimbus Sans L",sans-serif;'

			}
		}
	},
	yAxis: {
		gridLineColor: '#000000',
		labels: {
			style: {
				color: '#000000'
			}
		},
		lineColor: '#000000',
		minorTickInterval: null,
		tickColor: '#000000',
		tickWidth: 1,
		title: {
			style: {
				color: '#000000',
				fontSize: '12px',
				fontFamily: 'Helvetica,Arial,"Nimbus Sans L",sans-serif;'
			}
		}
	},
	tooltip: {
		backgroundColor: 'rgba(255, 255, 255, 1)',
		style: {
			color: '#000'
		}
	},
	toolbar: {
		itemStyle: {
			color: '#4c7888'
		}
	},
	plotOptions: {
		line: {
			dataLabels: {
				color: '#CCC'
			},
			marker: {
				lineColor: '#333'
			}
		},
		spline: {
			marker: {
				lineColor: '#333'
			}
		},
		scatter: {
			marker: {
				lineColor: '#333'
			}
		},
		candlestick: {
			lineColor: 'white'
		}
	},
	legend: {
		itemStyle: {
			font: '9pt Helvetica,Arial,"Nimbus Sans L",sans-serif;',
			color: '#000'
		},
		itemHoverStyle: {
			color: '#FFF'
		},
		itemHiddenStyle: {
			color: '#444'
		}
	},
	credits: {
		style: {
			color: '#666'
		}
	},
	labels: {
		style: {
			color: '#CCC'
		}
	},

	navigation: {
		buttonOptions: {
			backgroundColor: {
				linearGradient: [0, 0, 0, 20],
				stops: [
					[0.4, '#606060'],
					[0.6, '#333333']
				]
			},
			borderColor: '#000000',
			symbolStroke: '#C0C0C0',
			hoverSymbolStroke: '#FFFFFF'
		}
	},

	exporting: {
		buttons: {
			exportButton: {
				symbolFill: '#55BE3B'
			},
			printButton: {
				symbolFill: '#7797BE'
			}
		}
	},

	// scroll charts
	rangeSelector: {
		buttonTheme: {
			fill: {
				linearGradient: [0, 0, 0, 20],
				stops: [
					[0.4, '#888'],
					[0.6, '#555']
				]
			},
			stroke: '#000000',
			style: {
				color: '#CCC',
				fontWeight: 'bold'
			},
			states: {
				hover: {
					fill: {
						linearGradient: [0, 0, 0, 20],
						stops: [
							[0.4, '#BBB'],
							[0.6, '#888']
						]
					},
					stroke: '#000000',
					style: {
						color: 'white'
					}
				},
				select: {
					fill: {
						linearGradient: [0, 0, 0, 20],
						stops: [
							[0.1, '#000'],
							[0.3, '#333']
						]
					},
					stroke: '#000000',
					style: {
						color: 'yellow'
					}
				}
			}
		},
		inputStyle: {
			backgroundColor: '#333',
			color: 'silver'
		},
		labelStyle: {
			color: 'silver'
		}
	},

	navigator: {
		handles: {
			backgroundColor: '#666',
			borderColor: '#AAA'
		},
		outlineColor: '#CCC',
		maskFill: 'rgba(16, 16, 16, 0.5)',
		series: {
			color: '#7798BF',
			lineColor: '#A6C7ED'
		}
	},

	scrollbar: {
		barBackgroundColor: {
				linearGradient: [0, 0, 0, 20],
				stops: [
					[0.4, '#888'],
					[0.6, '#555']
				]
			},
		barBorderColor: '#CCC',
		buttonArrowColor: '#CCC',
		buttonBackgroundColor: {
				linearGradient: [0, 0, 0, 20],
				stops: [
					[0.4, '#888'],
					[0.6, '#555']
				]
			},
		buttonBorderColor: '#CCC',
		rifleColor: '#FFF',
		trackBackgroundColor: {
			linearGradient: [0, 0, 0, 10],
			stops: [
				[0, '#000'],
				[1, '#333']
			]
		},
		trackBorderColor: '#666'
	},

	// special colors for some of the
	legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
	legendBackgroundColorSolid: 'rgb(35, 35, 70)',
	dataLabelsColor: '#444',
	textColor: '#C0C0C0',
	maskColor: 'rgba(255,255,255,0.3)'
};

// Apply the theme
var highchartsOptions = Highcharts.setOptions(Highcharts.theme);