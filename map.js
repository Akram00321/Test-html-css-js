// Bar Chart
const barCtx = document.getElementById('barChart').getContext('2d');
new Chart(barCtx, {
  type: 'bar',
  data: {
    labels: ['A', 'B', 'C', 'D', 'E'],
    datasets: [{
      label: 'Data',
      data: [27, 95, 33, 64, 250],
      backgroundColor: '#6a5acd'
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Pie Chart
const pieCtx = document.getElementById('pieChart').getContext('2d');
new Chart(pieCtx, {
  type: 'doughnut',
  data: {
    labels: ['Dashboard', 'Tasks', 'Resources'],
    datasets: [{
      data: [40, 30, 30],
      backgroundColor: ['#ff4c4c', '#6a5acd', '#00bfff']
    }]
  },
  options: {
    responsive: true,
    cutout: '70%'
  }
});
