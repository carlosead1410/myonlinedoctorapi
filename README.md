# ShortPaper2 - NestJs

## Características del Repositrorio
### Este es el repositorio del servicio elaborado en NestJs del segundo shortpaper de la Materia de Desarrollo del Software.
Elaborado por: Subgrupo 1 - Code Rebels 
- Carlos Arriaga
- Christian Sanchez
- Tadeo Vazquez


### Requerimientos
- Debe tener instalado nodejs, nestjs y typescript en su computadora antes de ejecutar el proyecto


### Aportes Significativos

|   Integrante               |    Commit|
| :------------: | ------------ |
|  Carlos Arriaga |[1. Modularizando el proyecto (Doctor y Especialidad)](https://github.com/carlosead1410/paper2api/commit/12e81683fdd4fe59e74e78cf7921439183684d32 "Modularizando el proyecto (Doctor y Especialidad)")</br>[2. Servicio traer doctores y especialidades](https://github.com/carlosead1410/paper2api/commit/d8d470674d66f9ccbd6808eed0770271d0e5e24e "Servicio traer doctores y especialidades")</br>[3. Colocando el metodod asincrono](https://github.com/carlosead1410/paper2api/commit/1d0b607b04fdf781721ec223682b520030ec672f "3. Colocando el metodod asincrono")</br>[4. Servicio Api](https://github.com/carlosead1410/paper2api/commit/1e54fcafcbf3f4424fe3a1548a1d9762dc559cae "4. Servicio Api")|
|   Christian Sanchez |[5. Aplicando doctor generico](https://github.com/carlosead1410/paper2api/commit/fcca896f39e5c970f389269ca55bfcc5014b38c2 "2. Aplicando doctor generico")</br>[6. endpoint busqueda doctor por especialidad](https://github.com/carlosead1410/paper2api/commit/3d57650529cc79995ca5bfea3902674fad7cb953 "3. endpoint busqueda doctor por especialidad")</br>[7. creando modulo config](https://github.com/carlosead1410/paper2api/commit/8f2a2fe88d963d52b3d9fb9b0d1fca9390c95f36 "4. creando modulo config")|
|   Tadeo Vazquez| Revisar repositorio de Dart|


<hr>

### Explicacion de los commits mas significativos
Los commits no tienen un orden en especifico, por lo tanto es posible que vea como por ejemplo que el commit 5 se complementa con el commit 3. Ya que solo se estan enumerando para poder identificarlos.
  
  1. ` Modularizando el proyecto (Doctor y Especialidad)`
En este commit se logro modularizar el proyecto con la final de cumplir el principio de separacion de responsabilidades (SoC), donde los modulos creados (Doctor y Especialidad) solo iban a cumplir la tarea para las cuales fueron diseñados. Este commit se complementa con el commit 7.

  2. `Servicio traer doctores y especialidades`
En este commit se logro aplicar el TypeORM con el patron repository para la busqueda de todos los doctores y todas las especialidades (Este commit se completa con el commit 5 y 6).

  3.  `Colocando el metodod asincrono`
En este commit se hizo uson del patron async await para aplicar la programacion asincrona, en especial se uso al realizar la consulta a la base de datos para poder resolver la promesa.

  4. `Servicio Api`
Este commit complementa el commit 6 en donde se mejora el manejo del servicio para la busqueda de doctores por especialidad.

  5. ` Aplicando doctor generico`  
En este commit se creo una clase customRepository que hereda de la clase generica "Repository" esto es de gran utilidad ya que ayuda a reducir la cantidad de código que se necesita para lograr una tarea

  6. `endpoint busqueda doctor por especialidad`
Este es el commit mas importante ya que es el servicio que logra filtrar la lista de doctores por su especialidad, fue aplicado mediante el uso de TypeORM y mejorado en el commit 4 para asi tener un codigo mas legible.

  7. `creando modulo config`
En este commit se separa el appmodule con la conexion de la base de datos, aparte se encarga de validar si el servidor esta en produccion o en desarrollo para asi obtener los datos correspondientes del archivo ".env "


En caso de que se quiera descargar el repositorio y utilizarlo, usted debera de bajarse las dependencias de node con el siguiente comando:

 `npm install --force`

- Puede que al ejecutar el proyecto tenga problemas con ciertos paquetes que fueron utilizados en el proyecto, se recomienda instalar todos los paquetes que requiera el proyecto al ser ejecutado.
Posible problema relacionado con el customRepository, solucion:

`npm install @nestjs/typeorm@next --force`

-  Crear un archivo ".env" en el directorio raiz el cual contendra los datos necesarios para la conexion a la base de datos, como por ejemplo: usuario, contraseña, puerto de la base de datos, nombre de la base de datos y puerto del servicio.

Una vez realizado todo lo anterior, puede proceder a ejecutar el proyecto con el comando.

`npm run start`



### Observacion
En la elaboracion del servicio de nestjs como en la vista elaborada en Flutter, participaron **TODOS** los integrantes del subgrupo, aportando ideas y posibles soluciones.