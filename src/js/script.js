// Vendas por dia
new Chart(document.getElementById('chartVendas'), {
  type: 'line',
  data: {
    labels: ['1 ago', '5 ago', '10 ago', '15 ago', '20 ago', '25 ago', '31 ago'],
    datasets: [{
      label: 'Vendas',
      data: [450, 600, 300, 297, 650, 720, 400],
      borderColor: '#ffd600',
      backgroundColor: 'rgba(255,214,0,0.3)',
      fill: true,
      tension: 0.4
    }]
  },
  options: {
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } }
  }
});

// Vendas por método
new Chart(document.getElementById('chartMetodos'), {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [17, 49, 34],
      backgroundColor: ['#766d3f', '#f3d32f', '#262625']
    }]
  },
  options: {
    plugins: { legend: { position: 'bottom' } }
  }
});

// Parcelas no cartão
new Chart(document.getElementById('chartParcelas'), {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [1, 3, 5, 8, 10, 12],
      backgroundColor: ['#a7984a', '#565550', '#ddd5a9', '#766d3f', '#f3d32f', '#262625']
    }]
  },
  options: { plugins: { legend: { position: 'bottom' } } }
});

// Índices
new Chart(document.getElementById('chartIndices'), {
  type: 'bar',
  data: {
    labels: ['Boletos', 'Chargebacks', 'Pix', 'Pré-Chargebacks'],
    datasets: [{
      data: [20, 12, 90, 30],
      backgroundColor: ['#ffd54f', '#ef5350', '#ffd600', '#90a4ae']
    }]
  },
  options: {
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } }
  }
});

// Filtro período (placeholder)
document.getElementById('btnPeriodo').addEventListener('click', () => {
  alert('Aqui você pode integrar um datepicker (ex.: flatpickr ou Litepicker).');
});
