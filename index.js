const xlsx = require('xlsx');
const fs = require('fs');

// Ruta al archivo Excel
const excelPath = './Codificación_de_Municipios_por_Departamento.xlsx';

// Función para capitalizar nombres (ejemplo: "MEDELLIN" -> "Medellín")
const capitalize = str => {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// Leer el archivo Excel
const workbook = xlsx.readFile(excelPath);
const sheetName = workbook.SheetNames[0]; // Usar la primera hoja
const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

// Generar el array en el formato solicitado
const cities = sheetData.map(row => {
  const departmentCode = String(row['Código Departamento']).padStart(2, '0');
  const municipalityCode = `${departmentCode}.${String(row['Código Municipio']).padStart(3, '0')}`;
  const municipalityName = capitalize(row['Municipio']);

  return {
    region: 'Unknown', // Actualizar si se tiene información de la región
    c_digo_dane_del_departamento: departmentCode,
    departamento: row['Departamento'],
    c_digo_dane_del_municipio: municipalityCode,
    municipio: municipalityName,
    cName: municipalityName,
    ctId: municipalityCode,
  };
});

// Guardar el resultado en un archivo JSON
fs.writeFileSync('./cities.json', JSON.stringify(cities, null, 2), 'utf-8');
console.log('Archivo JSON generado con éxito:', './cities.json');

// Mostrar una vista previa del array
console.log(cities.slice(0, 5)); // Mostrar los primeros 5 elementos
