
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
        const ctx = document.getElementById('chartMetodos').getContext('2d');

        const data = {
            labels: ['Boleto', 'Pix', 'Cartão'],
            datasets: [{
                data: [17, 49, 34],
                backgroundColor: ['#766d3f', '#f3d32f', '#262625']
            }]
        };

        const chartMetodos = new Chart(ctx, {
            type: 'doughnut',
            data: data,
            options: {
                cutout: '70%', // furo do donut
                plugins: {
                    legend: { display: false },
                    tooltip: { enabled: false }, // desativa tooltip padrão
                }
            },
            plugins: [{
                id: 'centerTooltip',
                afterDraw(chart) {
                    const { ctx, tooltip, chartArea: { width, height } } = chart;
                    const active = chart.getActiveElements();

                    ctx.save();
                    ctx.font = 'bold 14px Arial';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';

                    if (active.length > 0) {
                        const datasetIndex = active[0].datasetIndex;
                        const dataIndex = active[0].index;
                        const value = chart.data.datasets[datasetIndex].data[dataIndex];
                        const label = chart.data.labels[dataIndex];

                        // fundo branco arredondado
                        const centerX = chart.chartArea.left + width / 2;
                        const centerY = chart.chartArea.top + height / 2;
                        const text = `R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n${label}`;

                        // caixa
                        const boxWidth = 120;
                        const boxHeight = 50;
                        const radius = 8;
                        ctx.fillStyle = '#fff';
                        ctx.strokeStyle = '#ccc';
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(centerX - boxWidth / 2 + radius, centerY - boxHeight / 2);
                        ctx.lineTo(centerX + boxWidth / 2 - radius, centerY - boxHeight / 2);
                        ctx.quadraticCurveTo(centerX + boxWidth / 2, centerY - boxHeight / 2, centerX + boxWidth / 2, centerY - boxHeight / 2 + radius);
                        ctx.lineTo(centerX + boxWidth / 2, centerY + boxHeight / 2 - radius);
                        ctx.quadraticCurveTo(centerX + boxWidth / 2, centerY + boxHeight / 2, centerX + boxWidth / 2 - radius, centerY + boxHeight / 2);
                        ctx.lineTo(centerX - boxWidth / 2 + radius, centerY + boxHeight / 2);
                        ctx.quadraticCurveTo(centerX - boxWidth / 2, centerY + boxHeight / 2, centerX - boxWidth / 2, centerY + boxHeight / 2 - radius);
                        ctx.lineTo(centerX - boxWidth / 2, centerY - boxHeight / 2 + radius);
                        ctx.quadraticCurveTo(centerX - boxWidth / 2, centerY - boxHeight / 2, centerX - boxWidth / 2 + radius, centerY - boxHeight / 2);
                        ctx.closePath();
                        ctx.fill();
                        ctx.stroke();

                        // texto
                        ctx.fillStyle = '#000';
                        ctx.fillText(`R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`, centerX, centerY - 5);
                        ctx.font = '12px Arial';
                        ctx.fillText(label, centerX, centerY + 12);
                    }
                    ctx.restore();
                }
            }]
        });

        // Parcelas no cartão
        const ctxParcelas = document.getElementById('chartParcelas').getContext('2d');

        const parcelasData = {
            labels: ['1x no Cartão', '2x no Cartão', '3x no Cartão', '4x no Cartão', '5x no Cartão', '6x no Cartão'],
            datasets: [{
                data: [5, 8, 10, 12, 7, 6], // valores de exemplo = nº de transações
                backgroundColor: ['#a7984a', '#565550', '#ddd5a9', '#766d3f', '#f3d32f', '#262625']
            }]
        };

        new Chart(ctxParcelas, {
            type: 'doughnut',
            data: parcelasData,
            options: {
                cutout: '70%',
                plugins: {
                    legend: { display: false },
                    tooltip: { enabled: false }
                }
            },
            plugins: [{
                id: 'centerLabel',
                afterDraw(chart) {
                    const active = chart.getActiveElements();
                    const { ctx, chartArea: { width, height } } = chart;
                    const centerX = chart.chartArea.left + width / 2;
                    const centerY = chart.chartArea.top + height / 2;

                    ctx.save();

                    if (active.length > 0) {
                        const datasetIndex = active[0].datasetIndex;
                        const dataIndex = active[0].index;
                        const value = chart.data.datasets[datasetIndex].data[dataIndex];
                        const label = chart.data.labels[dataIndex];

                        // fundo caixa branca arredondada
                        const boxWidth = 140;
                        const boxHeight = 50;
                        const radius = 10;

                        ctx.fillStyle = '#fff';
                        ctx.strokeStyle = '#ddd';
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(centerX - boxWidth / 2 + radius, centerY - boxHeight / 2);
                        ctx.lineTo(centerX + boxWidth / 2 - radius, centerY - boxHeight / 2);
                        ctx.quadraticCurveTo(centerX + boxWidth / 2, centerY - boxHeight / 2, centerX + boxWidth / 2, centerY - boxHeight / 2 + radius);
                        ctx.lineTo(centerX + boxWidth / 2, centerY + boxHeight / 2 - radius);
                        ctx.quadraticCurveTo(centerX + boxWidth / 2, centerY + boxHeight / 2, centerX + boxWidth / 2 - radius, centerY + boxHeight / 2);
                        ctx.lineTo(centerX - boxWidth / 2 + radius, centerY + boxHeight / 2);
                        ctx.quadraticCurveTo(centerX - boxWidth / 2, centerY + boxHeight / 2, centerX - boxWidth / 2, centerY + boxHeight / 2 - radius);
                        ctx.lineTo(centerX - boxWidth / 2, centerY - boxHeight / 2 + radius);
                        ctx.quadraticCurveTo(centerX - boxWidth / 2, centerY - boxHeight / 2, centerX - boxWidth / 2 + radius, centerY - boxHeight / 2);
                        ctx.closePath();
                        ctx.fill();
                        ctx.stroke();

                        // textos
                        ctx.fillStyle = '#000';
                        ctx.font = 'bold 14px Arial';
                        ctx.textAlign = 'center';
                        ctx.fillText(label, centerX, centerY - 5);
                        ctx.font = '12px Arial';
                        ctx.fillText(`${value} Transações`, centerX, centerY + 12);
                    }

                    ctx.restore();
                }
            }]
        });


        //indices
        new Chart(document.getElementById('chartIndices'), {
            type: 'bar',
            data: {
                labels: ['Boletos', 'Chargebacks', 'Pix', 'Pré-Chargebacks'],
                datasets: [{
                    data: [75, 12, 95, 20], // valores de exemplo
                    backgroundColor: [
                        '#f7e08d', // Boletos
                        '#e5e29f', // Chargebacks
                        '#ffe033', // Pix
                        '#f8f2d0'  // Pré-Chargebacks
                    ],
                    borderRadius: 6, // borda arredondada nas barras
                }]
            },
            options: {
                plugins: {
                    legend: { display: false }, // remove legenda nativa
                    tooltip: {
                        backgroundColor: '#fff',
                        titleColor: '#000',
                        bodyColor: '#000',
                        borderColor: '#ddd',
                        borderWidth: 1,
                        displayColors: false,
                        callbacks: {
                            label: function (context) {
                                return context.parsed.y + ' ' + context.label;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function (value) {
                                return value + '%';
                            }
                        },
                        grid: {
                            borderDash: [4, 4],
                            color: '#ddd'
                        }
                    },
                    x: {
                        grid: { display: false }
                    }
                }
            }
        });