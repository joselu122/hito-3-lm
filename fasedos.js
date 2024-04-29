// Realizar la solicitud fetch al API de provincias v1
fetch('https://www.el-tiempo.net/api/json/v1/provincias')
    .then(response => response.json()) // Convertir la respuesta a JSON
    .then(data => {
        // Manejar los datos recibidos
        const provincesData = document.getElementById('provincesData');
        provincesData.innerHTML += '<h2>Provincias (v1)</h2>';
        data.forEach(province => {
            // Mostrar la información de cada provincia
            const provinceInfo = document.createElement('p');
            provinceInfo.textContent = `Provincia: ${province.NOMBRE_PROVINCIA}, Código: ${province.CODPROV}`;

            provincesData.appendChild(provinceInfo);
        });
    })
    .catch(error => {
        console.error('Error al obtener datos de las provincias (v1):', error);
    });

// Realizar la solicitud fetch al API de provincias v2
fetch('https://www.el-tiempo.net/api/json/v2/provincias')
    .then(response => response.json()) // Convertir la respuesta a JSON
    .then(data => {
        // Manejar los datos recibidos
        const provincesData = document.getElementById('provincesData');
        provincesData.innerHTML += '<h2>Provincias (v2)</h2>';
        data.provincias.forEach(province => {
            // Mostrar la información de cada provincia
            const provinceInfo = document.createElement('p');
            provinceInfo.textContent = `Provincia: ${province.NOMBRE_PROVINCIA}, Código: ${province.CODPROV}`;

            provincesData.appendChild(provinceInfo);
        });
    })
    .catch(error => {
        console.error('Error al obtener datos de las provincias (v2):', error);
    });

// Realizar la solicitud fetch al API para obtener información detallada de una provincia específica (código "01")
fetch('https://www.el-tiempo.net/api/json/v1/provincias/01')
    .then(response => response.json()) // Convertir la respuesta a JSON
    .then(data => {
        // Manejar los datos recibidos
        const provinceData = document.createElement('div');
        provinceData.innerHTML = '<h2>Información detallada de la provincia (Código 01)</h2>';
        const provinceInfo = document.createElement('p');
        provinceInfo.textContent = `Nombre: ${data.NOMBRE_PROVINCIA}, Código: ${data.CODPROV}, Comunidad Autónoma: ${data.CODAUTO}`;

        provinceData.appendChild(provinceInfo);
        document.getElementById('provincesData').appendChild(provinceData);
    })
    .catch(error => {
        console.error('Error al obtener datos de la provincia (código 01):', error);
    });
