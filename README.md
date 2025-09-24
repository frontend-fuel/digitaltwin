# 220kV Digital Twin Substation - Advanced Monitoring & Control System

## Overview

This is a comprehensive 3D digital twin visualization system for a **220kV power transformer electrical substation**. The system provides real-time monitoring, control, and analysis capabilities for electrical substation operations with realistic 3D models and simulated operational data.

## 🔌 Key Features

### Real-time Monitoring Dashboard
- **Line Voltage**: 220kV ±2kV monitoring
- **Line Current**: 1250A ±100A monitoring  
- **Active Power**: 475MW ±20MW tracking
- **Reactive Power**: 125MVAr monitoring
- **Power Factor**: 0.97 lag monitoring
- **Frequency**: 50.0Hz ±0.1Hz monitoring
- **Transformer Efficiency**: 99.1% monitoring
- **Load Percentage**: Real-time load tracking
- **Oil Temperature**: Transformer oil temperature monitoring

### Interactive 3D Visualization
- High-quality GLTF 3D model of complete 220kV substation
- Equipment selection and detailed inspection
- Multiple camera presets (Overview, Transformer, Switchgear)
- Environmental controls (Day/Night/Storm modes)
- Wireframe and shadow toggle options
- Real-time equipment status visualization

### 220kV Specific Equipment Management
- **220kV Main Transformer T1** (300 MVA rating)
- **SF6 Circuit Breaker CB1** (3150A rating)
- **Disconnect Switch DS1** (3150A rating)
- **Main Busbar Section A** (4000A rating)
- **Surge Arrester LA1** (192kV rating)
- **Current Transformer CT1** (2000/5A rating)
- **Voltage Transformer VT1** (220kV/110V rating)
- **Control & Protection Panel** (IEC 61850 compliant)

### Advanced 220kV Operations
- **Load Flow Analysis**: Real-time power flow calculations
- **Fault Analysis**: System protection coordination verification
- **Protection Testing**: IEC 61850 GOOSE message testing
- **Maintenance Mode**: Safe isolation and de-energization
- **Tap Position Control**: 21-position transformer tap changer (±12.5% voltage regulation)

## 🚀 Technical Specifications

### System Parameters
- **Nominal Voltage**: 220kV
- **Frequency**: 50Hz
- **Power Rating**: 300 MVA
- **Current Rating**: 3150A (circuit breakers)
- **Busbar Rating**: 4000A
- **Protection Standard**: IEC 61850
- **Communication Protocol**: GOOSE messaging

### Technology Stack
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **3D Engine**: Three.js v0.158.0
- **3D Models**: GLTF format with PBR materials
- **Rendering**: WebGL with hardware acceleration
- **Controls**: OrbitControls for 3D navigation
- **Responsive Design**: Mobile and desktop compatible

## 📊 Monitoring Capabilities

### Real-time Data Points
1. **Electrical Parameters**
   - Line-to-line voltage (220kV nominal)
   - Phase currents (balanced 3-phase system)
   - Active and reactive power flow
   - Power factor and frequency

2. **Equipment Health**
   - Transformer oil temperature
   - Winding temperature
   - Load percentage
   - Efficiency calculations

3. **Protection Status**
   - Circuit breaker positions
   - Protection relay status
   - Communication health
   - Alarm and event logging

### Alert System
- Real-time alert generation for:
  - Temperature excursions
  - Voltage deviations
  - Power factor variations
  - Equipment maintenance schedules
  - Protection system status
  - Communication failures

## 🎮 User Interface Controls

### Scene Controls
- **Lighting Intensity**: Adjustable ambient and directional lighting
- **Environment Modes**: Day, Night, and Storm weather conditions
- **Camera Presets**: Quick navigation to key equipment views
- **Animation Speed**: Control 3D animation playback speed

### Visualization Options
- **Wireframe Mode**: Toggle wireframe rendering
- **Shadow Effects**: Enable/disable shadow mapping
- **Fog Effects**: Atmospheric fog for realism
- **Color Correction**: Force apply equipment colors

### 220kV Operations Panel
- **Load Flow Analysis**: Perform power system analysis
- **Fault Analysis**: Check protection coordination
- **Protection Test**: Verify relay communication
- **Maintenance Mode**: Safe equipment isolation
- **Tap Position**: Transformer voltage regulation (1-21 positions)

## 🔧 Installation & Setup

### Prerequisites
- Modern web browser with WebGL support
- Python 3.x (for local server)
- Internet connection (for CDN resources)

### Quick Start
1. Clone or download the project files
2. Navigate to the project directory
3. Start a local HTTP server:
   ```bash
   python -m http.server 8080
   ```
4. Open browser and navigate to `http://localhost:8080`
5. Wait for 3D model to load completely
6. Interact with the 3D substation using mouse controls

### File Structure
```
power_transformer_electrical_substation/
├── index.html          # Main application file
├── scene.gltf          # 3D model definition
├── scene.bin           # 3D model binary data
├── textures/           # 3D model textures
├── license.txt         # Model license information
└── README.md           # This documentation
```

## 🎯 Use Cases

### Training & Education
- Operator training simulations
- Engineering education tool
- Safety procedure demonstrations
- Equipment familiarization

### Operations & Maintenance
- Real-time system monitoring
- Maintenance planning and scheduling
- Equipment status visualization
- Performance analysis

### Engineering Analysis
- Load flow studies
- Fault analysis
- Protection coordination
- System optimization

## 🔒 Safety Features

### Maintenance Mode
- Complete system isolation simulation
- De-energization procedures
- Safety lockout visualization
- Step-by-step maintenance guidance

### Protection Testing
- Relay coordination verification
- Communication testing
- Fault simulation capabilities
- Emergency response procedures

## 📈 Future Enhancements

### Planned Features
- **SCADA Integration**: Real-time data from actual systems
- **Historical Trending**: Long-term data analysis
- **Predictive Maintenance**: AI-powered equipment health prediction
- **Mobile App**: Companion mobile application
- **VR/AR Support**: Immersive visualization options
- **Multi-user Collaboration**: Shared virtual environment

### Advanced Analytics
- Power quality analysis
- Energy efficiency optimization
- Load forecasting
- Equipment lifecycle management

## 📄 License & Credits

### 3D Model License
- **Model**: "Power Transformer Electrical Substation"
- **Author**: Air Digital Photogrammetry
- **License**: CC-BY-4.0
- **Source**: Sketchfab.com

### Software License
This digital twin application is provided for educational and demonstration purposes.

## 🤝 Support & Contribution

For technical support, feature requests, or contributions, please refer to the project documentation or contact the development team.

---

**220kV Digital Twin Substation** - Advanced power system visualization and monitoring solution.
"# digitaltwin" 
