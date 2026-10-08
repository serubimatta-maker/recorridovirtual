# recorridovirtual 
## Mi idea principal consiste en llevar a un usuario, a un recorido virtual en tendra que pasar 4 diferentes acertijos, 2 de ellos siendo de inteligencia y 2 siendo de pelea para poder ganar un premio al final y un cronometro el cual traera presion al usuario de resolver el puzzle rapido.
### Mapa
El mapa es donde el jugador incia su recorrido para que presione la imagen del santuario, y mandarlo al puzzle1.Html para empezar con los puzzles.

### Primer Puzzle
#### El primer puzzle consiste en un acertijo en el que al usuario se lo ofreceran 10 diferentes relojes y tiene que seleccionar el reloj correcto para poder avanzar al puzzle 2:

###### ¿Como funciona?

- Se empezo creando los 10 imagenes relojes diferentes con ayuda de Chat GPT, despues de esto estas se recortaron para poder ponerlas dentro de un codigo de imagen.
- Cuando se selecciono la imagen final siendo la numero 10 con la hora 11:05, a esta se le añadieron 2 partes para poder dar una ilusion de pasar a la siguiente zona:
- Un elemento de ancla (< a >) para que la imagen se pudiera vincular a un link al puzzle 2.
- El codigo de audio (< audio >) para ambientar lo que dentro del usuariao se deberia intepretar como un ''santuario''.
- Cuando el usuario presione la imagen 10 se hara un comando (< href >) que lo mande al puzzle2.html .

### Segundo Puzzle
#### El segundo puzzle consiste en un acertijo en el que al usuario se lo ofrecera un texto narrando una parte de la historia de zelda, para cuando termine el texto pueda seleccionar una parte de la trifuerza (Imagen) este pase al puzzle 3:

###### ¿Como funciona?
- La mayoria de teorias que se utilizaron para el puzzle 1 se aplicaran al puzzle 2 para ahorrar recursos y tiempo.
- Despues de que el usuario lea el texto proporcionado este debe selecionar una parte de la trifuerza, el cual son 3 diferentes imagenes puestas en orden.
- Cuando el usuario presione la imagen del medio, este sera mandado al puzzle3.html 


### Tercer Puzzle
#### El tercer puzzle consiste en un conocimiento del mundo digital en el cual se propondran dos enemigos de diferentes colores, el usuario tendra que seleccionar el enemigo con el codigo Hex #485d58, cuando el usuario presione la imagen del boboklin azul este pasara al cuarto puzzle 

###### ¿Como funciona?
- La idea de que los enemigos se movieran se empleo con un codigo de animacion dentro del CSS (@keyframe)
- Se probo en uno de los enemigos, cuando se comprobo que funcionaba la idea se le aplico a los 2 enemigos
- Cada uno tiene una animacion diferente que esta puesta en un loop para que de esta manera el usuario pueda memorizarse su patron
- Cuando el usuario presione la imagen correcta este sera mandado al Puzzle4

### Cuarto Puzzle
#### Para el cuarto puzzle tome en cuenta dos teorias de diseño de videojuegos siendo la curva de dificultad y el jefe final, mi idea consiste que con lo base aprendido en el puzzle 3 el usuario pueda vencer a un enemigo consistiendo en un jefe final mucho mas rapido y flexible en movimiento.

###### ¿Como funciona?
Gran parte de la teoria utilizada en el tercer puzzle se aplico para el puzzle 4, pero se modificaron 2 codigos para que la curva de dificultad aumente y el enemigo sea mas dificil de vencer.
- El codigo de animacion keyframe se cambio los < left top > para que el enemigo tenga una mayor flexibilidad en el movimiento.
- El codigo de animacion  animation-duration: 0.9s; se cambio para que el enemigo se mueva de manera mas rapida y el usuario tenga que tener reflejos mas rapidos
Cuando el usuario presiona la imagen del enemigo este sera teletransportado el final.


### Final
En el final aparecera el objeto que el jugador gano siendo un orbe con su texto debido descrbiendolo, junto a la musica de ganar un objeto de zelda. 

###### ¿Como funciona?
- La imagen fue sacada directamente de un pantallazo del videojuego The legend of zelda Breath of the Wild
- Con la ayuda de Claude se consiguio que se sacara el texto y la interfaz para que sea transparente.
- Se puso la imagen dentro del codigo con una animacion (@keyframes) de scale.

Tambien se aprego un href con index de boton para poder mandar al usuario al principio del juego.


### Temporizador por Javascript
Cuando se me ocurrio la idea del temporizador sabia que con HTML la idea no se podria realizar, por esta razon obte por el uso de Javascript, la verdad de lo poco que conozco del Javascript es por meterle mods al minecraft por esta razon me toco revisar un tutorial de Youtube.

###### ¿Como funciona?
El codigo inicia desde el html donde se crean 2 clases y un codigo
- La clase de minutos
- La clase de segundo
- La fuente (< src >) para que la html sepa de donde le mandan el codigo del cual se va a basar para poner el reloj

El codigo despues se continua desde app.js 
Donde se le informa el cronometro de que manera este debe reaccionar
- {let} Se empieza por dandole un valor a cada clase se creo en html
- El siguiente codigo ayuda a actualizar los minutos y segundos del cronometro 
- Se le dice al temporizador como debe funcionar los segundos dependiendo del minuto el cual este en pantalla

Tutorial que utilize: https://www.youtube.com/watch?v=RFfagLHx0yA&t=255s


