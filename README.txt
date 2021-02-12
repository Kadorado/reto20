Instrucciones de Implementación

Bienvenidos al reto 20, para cumplirlo deberán seguir lo siguiente:

1. Ver el video de explicación de reto.

2. Tienen los siguientes recursos: HTML y parte del css 
   
   * Acá les damos una estructura y una guía de cómo deben hacerlo sientanse libres de cambiar el código en donde necesiten para llegar al resultado final.

3. Resultado: El reto debe ser igual al que visualizan en el video.

¡HINTS!

CSS

-  El CSS está completo pero deben practicar y entender cómo funciona el keyframe grow para la animación del corazón


JS

Revisar cómo funciona la creación de doble click a través de loveMe.addEventListener('click', (e) => { ... })

Con base en el anterior crear un arrow function const createHeart = (e) => => { ... })

En esta función desarrollaremos:

crear un elemento i y las clases correspondientes

Crear las constantes 

   const x = e.clientX
   const y = e.clientY

   podemos probar con console.log para ver qué coordenada arroja


Crear las constantes Offset basados en el evento (e) se necesitará para quedar dentro de la imagen.

una vez tengamos la coordenada dentro de la imagen podemos asignar el estilo con la posición dada por las coordenadas

y podemos hacer que aparezca el corazón

Tener en cuenta que debemos incrementar timesClicked y mostrarlo al usuario

deben quitar los corazones después de que aparezcan.  (aunque no se ven en el front quedan cómo código, validar por consola)



