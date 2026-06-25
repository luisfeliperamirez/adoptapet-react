Componente: Se usa en la contrucción total de la app en src/compononents, Es el adecuado porque nos permite estructurar toda la app 

JSX: Se usa para

Props: son datos que solo se leen, porque sirven para heredar funciones como por ejemplo los botones de las especies, solo hace falta 1 y luego ya se puede modificar dependiendo de lo que desee poner

Estado: se usa en la busqueda de mascotas, porque el valor de la mascota es un dato que cambia dentro del componente y este lo va actualizando

Renderizado de listas: en MascotaCard especificamente para la key drop id, porque las ordena por el id y esto evita que hayan errores con los filtros, busquedas, etc

Rederizado condicional: en el contador de mascotas Urgentes, porque muestra u oculta elementos según condiciones sin necesitar algun otro componente

1. la ventaja de dividir el directorio en componentes es para así poder ir trabajando por secciones y si nos da error algo tendrá que ver con algún componente y no con la app entera, así no tendrémos que buscar el error por todo el código gigante

2. los props son datos solo de lectura mientras que los de estado se pueden modificar por ejemplo la seleccion de especies y busqueda tienen datos que cambian por que no siempre estarán los mismos datos para buscar ya que las mascotas se irán adoptando y un ejemplo de los props sería el botón en sí de "Perro" por ejemplo ya que siempre estará ahí solo que puede o no dar un resultado dependiendo si hay o no mascotas disponibles