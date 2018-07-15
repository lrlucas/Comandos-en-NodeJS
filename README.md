# Proyecto Comandos NodeJS

#### Ejecutar primero `npm install`

Ejecutar el siguiente comando  
`node app.js listar --limite 10 --base 3`
el comando lo que hara sera Mostrar en consola una tabla de multiplicar con la siguiente estructura

3 * 0 = 0  
3 * 1 = 3  
3 * 2 = 6  
3 * 3 = 9  
3 * 4 = 12  
3 * 5 = 15  
3 * 6 = 18  
3 * 7 = 21  
3 * 8 = 24  
3 * 9 = 27  

son 10 filas `--limite 10`  
y la multiplicacion
es en base a 3 `--base 3`

El siguiente comando `node app.js crear --limite 10 --base 3` es para Crear un archivo con el nombre `tabla-3-al-10.txt` lo creará en la carpeta `tablas` y tendra la misma estructura que la anterior solo que esta ves creara un archivo `.txt`