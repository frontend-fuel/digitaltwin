// Dashboard JavaScript for Digital Twin Substation
class SubstationDashboard {
    constructor() {
        this.charts = {};
        this.socket = null;
        this.data = {
            voltage: [],
            current: [],
            temperature: 65,
            alerts: []
        };
        
        this.init();
    }

    init() {
        this.setupNavigation();
        this.initializeCharts();
        this.connectWebSocket();
        this.startDataSimulation();
        this.setupEventListeners();
    }

    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                // Only prevent default for the current page (home)
                const page = link.dataset.page;
                if (page === 'home') {
                    e.preventDefault();
                    
                    // Remove active class from all nav items
                    document.querySelectorAll('.nav-item').forEach(item => {
                        item.classList.remove('active');
                    });
                    
                    // Add active class to clicked item
                    link.parentElement.classList.add('active');
                    
                    // Handle page switching for home page only
                    this.switchPage(page);
                }
                // For other pages, let the default navigation happen
            });
        });
    }

    switchPage(page) {
        console.log(`Switching to page: ${page}`);
        // Implement page switching logic here
        // For now, we'll just update the header
        const header = document.querySelector('.dashboard-header h1');
        switch(page) {
            case 'home':
                header.textContent = 'Digital Twin Substation Dashboard';
                break;
            case 'realtime':
                header.textContent = 'Real-Time Data Monitoring';
                break;
            case 'equipment':
                header.textContent = 'Equipment Health Status';
                break;
            case 'fault':
                header.textContent = 'Fault Simulation Center';
                break;
            case 'reports':
                header.textContent = 'System Reports';
                break;
            case 'settings':
                header.textContent = 'System Settings';
                break;
        }
    }

    initializeCharts() {
        this.createVoltageChart();
        this.createCurrentChart();
    }

    createVoltageChart() {
        const canvas = document.getElementById('voltageChart');
        if (!canvas) {
            // Chart container not present on this page; skip initialization
            return;
        }
        const ctx = canvas.getContext('2d');
        
        // Generate initial voltage data
        const labels = [];
        const voltageData = [];
        const now = new Date();
        
        for (let i = 19; i >= 0; i--) {
            const time = new Date(now.getTime() - i * 5000); // 5 second intervals
            labels.push(time.toLocaleTimeString());
            voltageData.push(220 + Math.random() * 40 - 20); // 200-240V range
        }
        
        this.data.voltage = voltageData;

        this.charts.voltage = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Voltage (V)',
                    data: voltageData,
                    borderColor: '#4299e1',
                    backgroundColor: 'rgba(66, 153, 225, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 0,
                    pointHoverRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        display: false,
                        grid: {
                            display: false
                        }
                    },
                    y: {
                        display: true,
                        min: 180,
                        max: 260,
                        ticks: {
                            color: '#a0aec0',
                            font: {
                                size: 10
                            }
                        },
                        grid: {
                            color: 'rgba(160, 174, 192, 0.1)'
                        }
                    }
                },
                elements: {
                    point: {
                        radius: 0
                    }
                }
            }
        });
    }

    createCurrentChart() {
        const canvas = document.getElementById('currentChart');
        if (!canvas) {
            // Chart container not present on this page; skip initialization
            return;
        }
        const ctx = canvas.getContext('2d');
        
        const currentData = [45, 78, 52, 68, 85, 72];
        
        this.charts.current = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['1', '2', '3', '4', '5', '6'],
                datasets: [{
                    label: 'Current (A)',
                    data: currentData,
                    backgroundColor: '#4299e1',
                    borderRadius: 4,
                    borderSkipped: false,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        display: false,
                        grid: {
                            display: false
                        }
                    },
                    y: {
                        display: true,
                        max: 120,
                        ticks: {
                            color: '#a0aec0',
                            font: {
                                size: 10
                            }
                        },
                        grid: {
                            color: 'rgba(160, 174, 192, 0.1)'
                        }
                    }
                }
            }
        });
    }

    connectWebSocket() {
        // Connect to WebSocket server for real-time data
        try {
            this.socket = io('http://localhost:3000');
            
            this.socket.on('connect', () => {
                console.log('Connected to WebSocket server');
            });
            
            this.socket.on('sensorData', (data) => {
                this.updateCharts(data);
            });
            
            this.socket.on('alert', (alert) => {
                this.addAlert(alert);
            });
            
            this.socket.on('disconnect', () => {
                console.log('Disconnected from WebSocket server');
            });
        } catch (error) {
            console.log('WebSocket connection failed, using simulation data');
        }
    }

    startDataSimulation() {
        // Simulate real-time data updates
        setInterval(() => {
            this.simulateDataUpdate();
        }, 2000);
        
        // Update temperature display
        setInterval(() => {
            this.updateTemperature();
        }, 5000);
    }

    simulateDataUpdate() {
        // Simulate voltage data
        const newVoltage = 220 + Math.random() * 40 - 20;
        this.updateVoltageChart(newVoltage);
        
        // Simulate current data
        const newCurrent = Math.floor(Math.random() * 100) + 20;
        this.updateCurrentChart(newCurrent);
    }

    updateVoltageChart(newValue) {
        const chart = this.charts.voltage;
        const now = new Date();
        
        // Add new data point
        chart.data.labels.push(now.toLocaleTimeString());
        chart.data.datasets[0].data.push(newValue);
        
        // Remove old data points (keep last 20)
        if (chart.data.labels.length > 20) {
            chart.data.labels.shift();
            chart.data.datasets[0].data.shift();
        }
        
        chart.update('none');
    }

    updateCurrentChart(newValue) {
        const chart = this.charts.current;
        const dataLength = chart.data.datasets[0].data.length;
        
        // Update random bar
        const randomIndex = Math.floor(Math.random() * dataLength);
        chart.data.datasets[0].data[randomIndex] = newValue;
        
        chart.update('none');
    }

    updateTemperature() {
        // Simulate temperature changes
        const tempVariation = (Math.random() - 0.5) * 10;
        this.data.temperature = Math.max(45, Math.min(85, this.data.temperature + tempVariation));
        
        const tempDisplay = document.getElementById('tempValue');
        if (tempDisplay) {
            tempDisplay.textContent = Math.round(this.data.temperature) + '°';
            
            // Change color based on temperature
            if (this.data.temperature > 75) {
                tempDisplay.style.color = '#f56565';
            } else if (this.data.temperature > 65) {
                tempDisplay.style.color = '#ed8936';
            } else {
                tempDisplay.style.color = '#4299e1';
            }
        }
    }

    updateCharts(data) {
        if (data.voltage) {
            this.updateVoltageChart(data.voltage);
        }
        
        if (data.current) {
            this.updateCurrentChart(data.current);
        }
        
        if (data.temperature) {
            this.data.temperature = data.temperature;
            this.updateTemperature();
        }
    }

    addAlert(alert) {
        const alertsContainer = document.querySelector('.alerts-section');
        if (!alertsContainer) return;
        
        const alertElement = document.createElement('div');
        alertElement.className = `alert ${alert.type}`;
        alertElement.innerHTML = `
            <span class="alert-icon">${alert.icon}</span>
            <span class="alert-text">${alert.message}</span>
        `;
        
        // Insert after the h3 title
        const title = alertsContainer.querySelector('h3');
        title.insertAdjacentElement('afterend', alertElement);
        
        // Remove alert after 10 seconds
        setTimeout(() => {
            alertElement.remove();
        }, 10000);
    }

    setupEventListeners() {
        // Handle window resize
        window.addEventListener('resize', () => {
            Object.values(this.charts).forEach(chart => {
                chart.resize();
            });
        });
        
        // Handle mobile menu toggle (if needed)
        const toggleButton = document.querySelector('.menu-toggle');
        if (toggleButton) {
            toggleButton.addEventListener('click', () => {
                document.querySelector('.sidebar').classList.toggle('active');
            });
        }
    }

    // API methods for backend integration
    async fetchSensorData() {
        try {
            const response = await fetch('/api/sensors/latest');
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching sensor data:', error);
            return null;
        }
    }

    async fetchAlerts() {
        try {
            const response = await fetch('/api/alerts');
            const alerts = await response.json();
            return alerts;
        } catch (error) {
            console.error('Error fetching alerts:', error);
            return [];
        }
    }

    async sendCommand(command, parameters) {
        try {
            const response = await fetch('/api/commands', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ command, parameters })
            });
            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Error sending command:', error);
            return null;
        }
    }
}

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const dashboard = new SubstationDashboard();
    
    // Make dashboard globally available for debugging
    window.dashboard = dashboard;
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause updates when page is not visible
        console.log('Dashboard paused');
    } else {
        // Resume updates when page becomes visible
        console.log('Dashboard resumed');
    }
});
