# **📚 Instrucciones para Usar el Repositorio Template - MongoDB Query Evaluator**
Este proyecto es un **GitHub Template Repository** diseñado para evaluar consultas MongoDB. Sigue estos pasos para usarlo correctamente:

-----
## **🚀 1. Crear tu Repositorio desde el Template**
1. **Accede al repositorio template**:
   1. Haz clic en el botón verde Use this template → Create a new repository
2. **Open in codespace**:
   -  **Nombre**: Ej. S2.4
   -  **Visibilidad**: Elige *Public* (para que GitHub Actions funcione) o *Private* (si prefieres trabajo privado).
   -  **Include all branches**: No es necesario (el template solo usa main).
3. **Crea el repositorio**: Haz clic en Create repository.

-----
## **✍️ 2. Escribir Consultas e Índices**
Puedes editar los archivos directamente en github con el botón de 'edit this file'
### **📂 Archivo** queries.js
- Ubicación: query/queries.js
- **Formato requerido**:

```javascript
// X. Enunciado de la consulta
db.restaurants.find({...}, { _id: 0, campo1: 1, campo2: 1 });
```
- **Reglas**:
  - Excluir siempre \_id: 0.
  - Respetar el **orden exacto** de los campos en las proyecciones.
### **📂 Archivo** indexes.js
- Ubicación: query/indexes.js
- **Ejemplo**:

```javascript
db.restaurants.createIndex({ borough: 1 }); // Índice para consultas en borough
db.restaurants.createIndex({ "location.coordinates": "2dsphere" }); // Índice geoespacial
```
-----
## **🔍 3. Probar Localmente (Opcional)**
Puedes hacer pruebas y ejecutar el análisis localmente.

Sigue las instrucciones en:
\
📄 [script/README.md](https://script/README.md)


-----
## **📤 4. Subir Cambios a GitHub**
1. **Guarda tus cambios**:
   -  Pincha en el botón verde **Commits changes**
   -  Cada vez que guardes los cambios se ejecutará una prueba nueva.
----
2. **🔍 Verifica los resultados**:
   -  Ve a la pestaña Actions en tu repositorio.
   -  Cuando termine el workflow, revisa:
      - **Reporte de rendimiento**: docs/performanceReport.md
      - **Comparación de resultados**: docs/expectedResults.md
-----
## **🔄 5. Reintentos y Correcciones**
Si hay errores:

1. Corrige las consultas o índices en los archivos correspondientes.
2. Vuelve a hacer commit.
3. GitHub Actions se ejecutará automáticamente de nuevo.
-----
## **📌 Notas Importantes**
- **No modifiques** la estructura de archivos/carpetas (excepto queries.js e indexes.js).
- Las consultas se evalúan por:
  - **Correctitud** (resultados esperados).
  - **Rendimiento** (uso de índices, eficiencia).
- Si tu repositorio es *private*, asegúrate de que **GitHub Actions tenga permisos** (en Settings > Actions > General).
-----
## **🆘 Soporte**
¿Problemas? Abre un **Issue** en el repositorio template o contacta a tu mentor.

-----
¡Listo! Ahora puedes resolver las consultas y recibir feedback automatizado. 🎯