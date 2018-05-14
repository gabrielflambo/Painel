class GraficoController {

	constructor() {

		let $ = document.querySelector.bind(document);
		let grafico = new Chart($("#line_chart").getContext("2d"), getChartJs('line'));

		function getChartJs(type) {
		    let config = null;

		    if (type === 'line') {
		        config = {
		            type: 'line',
		            data: {
		                labels: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado", "Domingo"],
		                datasets: [{
		                    label: "Novos",
		                    data: [65, 51, 180, 97, 56, 205, 40],
		                    borderColor: 'rgba(2, 2, 2, 0.8)',
		                    backgroundColor: 'rgba(2, 2, 2, 0.5)',
		                    pointBorderColor: 'rgba(2, 2, 2, 0)',
		                    pointBackgroundColor: 'rgba(2, 2, 2, 0.8)',
		                    pointBorderWidth: 1
		                }, {
		                    label: "Recorrentes",
		                    data: [65, 59, 80, 81, 175, 55, 30],
		                    borderColor: 'rgba(180, 131, 65, 0.75)',
		                    backgroundColor: 'rgba(180, 131, 65, 0.3)',
		                    pointBorderColor: 'rgba(180, 131, 65, 0)',
		                    pointBackgroundColor: 'rgba(180, 131, 65, 0.9)',
		                    pointBorderWidth: 1
		                }]
		            },
		            options: {
		                responsive: true,
		                legend: false
		            }
		        }
		    }
		    return config;
		}
	}

}