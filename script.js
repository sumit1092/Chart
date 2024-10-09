const renderChart = (id, labels, currentYearData, previousYearData, colors) => {
	const c = document.getElementById(id);
	const ctx = c.getContext('2d');
	new Chart(ctx, {
	  type: 'bar',
	  data: {
		labels: labels,
		datasets: [
		  {
			label: 'Current Year',
			data: currentYearData,
			borderColor: '#36A2EB',
			backgroundColor:colors.currentYear,
		  },
		  {
			label: 'Previous Year',
			data: previousYearData,
			backgroundColor: colors.previousYear,
		  },
		]
	  },
	  options: {
		responsive: true,
		// maintainAspectRatio: false,
		scales: {
		  y: {
			beginAtZero: true
		  }
		}
	  }
	});
  };
  
  
  document.addEventListener('DOMContentLoaded', () => {
	renderChart('revenueChart', ['October', 'November', 'December'], 
	            [800000, 850000, 900000], [750000, 830000, 870000],
				{
					currentYear: 'rgba(251, 175, 125, 0.8)', 
					previousYear: 'rgba(241, 73, 10, 0.8)' 
				  }
				);
	renderChart('customersChart', ['October', 'November', 'December'], 
		         [100, 90, 119], [80, 85, 100],
				 {
					currentYear: 'rgba(164, 243, 124, 0.8)', 
					previousYear: 'rgba(5, 168, 117, 0.8)'
				 }
	            );
	renderChart('revenuePerCustomerChart', ['October', 'November', 'December'], 
		        [1500, 1700, 1780], [1400, 1600, 1750],
				{
					currentYear: 'rgba(75, 192, 192, 0.6)', 
					previousYear: 'rgba(153, 102, 255, 0.6)'
				}
			   );
	renderChart('cacChart', ['October', 'November', 'December'], 
		        [350, 380, 380], [300, 340, 330],
				{
					currentYear: 'rgba(241, 241, 122, 0.8)', 
					previousYear: 'rgba(254, 193, 10, 0.8)'
				}
			);
  });
  