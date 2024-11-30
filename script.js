function calculateCarbonFootprint() {
    const electricity = parseFloat(document.getElementById('electricity').value) || 0;
    const transport = parseFloat(document.getElementById('transport').value) || 0;
    const waste = parseFloat(document.getElementById('waste').value) || 0;
    
    const carbonElectricity = electricity * 0.5;
    const carbonTransport = transport * 0.21;
    const carbonWaste = waste * 2.5;
    
    const totalCarbonFootprint = (carbonElectricity + carbonTransport + carbonWaste).toFixed(2);

    document.getElementById('result').textContent = "Huella de Carbono Total: " + totalCarbonFootprint + " kg de CO₂";
}
