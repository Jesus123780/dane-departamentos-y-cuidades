# Codificación de Municipios por Departamento

Este proyecto procesa un archivo Excel que contiene información sobre departamentos y municipios en Colombia, transformándolo en un archivo JSON con un formato estructurado.

## Tabla de Contenidos
- [Descripción](#descripción)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del JSON](#estructura-del-json)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Descripción
Este script utiliza Node.js y las librerías `xlsx` y `fs` para:
1. Leer un archivo Excel con datos de departamentos y municipios.
2. Transformar los datos en un arreglo de objetos con campos estructurados y nombres capitalizados.
3. Guardar los datos transformados en un archivo JSON.

## Requisitos
- Node.js instalado (versión 12 o superior).
- Archivo Excel con las siguientes columnas:
  - `Código Departamento`
  - `Código Municipio`
  - `Municipio`
  - `Departamento`

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/Jesus123780/dane-departamentos-y-cuidades.git
   cd nombre_del_repositorio
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Asegúrate de que el archivo Excel `Codificación_de_Municipios_por_Departamento.xlsx` esté en el directorio raíz del proyecto.

## Uso

1. Ejecuta el script para procesar el archivo Excel:
   ```bash
   node index.js
   ```

2. El archivo JSON generado estará disponible como `cities.json` en el directorio raíz.

## Estructura del JSON

Cada objeto en el archivo JSON tiene la siguiente estructura:

```json
{
  "region": "Unknown",
  "c_digo_dane_del_departamento": "01",
  "departamento": "Nombre del Departamento",
  "c_digo_dane_del_municipio": "01.001",
  "municipio": "Nombre del Municipio",
  "cName": "Nombre del Municipio",
  "ctId": "01.001"
}
```

### Ejemplo:
```json
[
  {
    "region": "Unknown",
    "c_digo_dane_del_departamento": "05",
    "departamento": "Antioquia",
    "c_digo_dane_del_municipio": "05.001",
    "municipio": "Medellín",
    "cName": "Medellín",
    "ctId": "05.001"
  }
]
```

## Contribuciones

¡Las contribuciones son bienvenidas! Por favor, sigue estos pasos:
1. Haz un fork del repositorio.
2. Crea una rama para tu función (`git checkout -b feature/nueva-funcion`).
3. Realiza tus cambios y haz un commit (`git commit -m 'Agrega nueva función'`).
4. Sube tu rama (`git push origin feature/nueva-funcion`).
5. Abre un Pull Request.

## Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
