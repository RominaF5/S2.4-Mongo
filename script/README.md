# **📚 Instrucciones para Usar MongoDB Query Evaluator**

## **💻 1. Clonar tu Repositorio Localmente**
Ejecuta en tu terminal:

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git

cd mongodb-queries-tuNombre
```

## **📤 2. Subir Cambios a GitHub**
1. **Guarda tus cambios**:

```bash
git add query/queries.js query/indexes.js

git commit -m "test: Update queries and indexes"
```
----
2. **Haz push a tu repositorio**:

```bash
git push origin main
```
----
## **3. 🧪 Ejecutar pruebas antes de subir cambios al repositorio** 

### ⚙️ Requisitos Previos

💻 **Software Necesario**
- 🐳 **Docker Desktop** ([Descargar](https://www.docker.com/products/docker-desktop))
- 🟩 **Node.js** v18 o superior ([Descargar](https://nodejs.org/))
---

📦 **Instalación de Dependencias** 

Ejecuta en la raíz del proyecto:
```bash
npm install
```
----
### 🛠️ Pasos en la ejecución de pruebas:

1. 📝 **Escribe tus consultas en query/queries.js e índices en query/indexes.js**
---

2. 🧹 **Dale formato a tus consultas para poder ejecutarlas con mongosh desde el contenedor:**

```bash
node script/formatQueries.js
```
Este script creará el archivo `query/execute.js`

---

4. 🚀 **Levanta el contenedor Docker:**

```bash
docker-compose up -d
```
---

5. 🔍 **Asegurate que el contenedor está diponible:**

```bash
docker ps
```
---

6. 👨🏻‍💻 **Ejecuta las consultas y guarda el resultado en un json:**

```bash
docker exec -i mongo-evaluator mongosh --quiet "mongodb://user:pass@localhost:27017/nyc?authSource=admin" query/execute.js > result/myResult.json
```
---

7. 📊 **Ejecuta el análisis de los resultados y genera el reporte:**

```bash
node script/compareResults.js
```
Los resultados se mostrarán por consola y se guardarán en `docs/resultReport.md`

---

8. ⚡ **Ejecuta el análisis de rendimiento:**

```bash
node script/performaceReporter.js
```
---

9. 📁 **El resultado se mostrará por consola y guardará un reporte en `docs/performanceReport.md`**
