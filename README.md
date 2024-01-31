<a name="readme-top"></a>

<br />
<div align="center">
  <img src="./src/assets/img/logos/whiteLogo.webp"/>
  <br>
  <p align="center">
    Servidor de modificación de datos para NovaForge. 
  </p>
</div>

<!-- TABLA DE CONTENIDO -->
<details>
  <summary>Tabla de contenido</summary>
  <ol>
    <li>
      <a href="#resumen">Resumen</a>
      <ul>
        <li><a href="#características-principales">Características Principales<a></li>
      </ul>
    </li>
    <li><a href="#requisitos-previos">Requisitos previos</a></li>
    <li><a href="#instalación">Instalación</a></li>
    <li><a href="#despliegue">Despliegue</a></li>
    <li><a href="#contribuye">Contribuye</a></li>
    <li><a href="#licencia">Licencia</a></li>
    <li><a href="#contacto">Contacto</a></li>
    <li><a href="#agradecimiento">Agradecimiento</a></li>
  </ol>
</details>

<!-- EMPEZAMOS -->

## Resumen

Bienvenido a NovaServer, plataforma de servicio de datos para la aplicación NovaForge. Un proyecto pensado para obtener datos de sensores a través de arduino. Esos datos se escriben en la base de datos. Y por último, esos datos son visualizados en la aplicación del cliente NovaForge. 
- En NovaServer, puedes acceder a los datos de un dispositivo introduciendo su ID por URL.
- Se pueden cambiar los valores a los sensores. Se visualiza si los ejecutores han sido activados o desactivados.

### Características Principales:
- **Filtrar dispositivos por valor:** Busca un dispositivo concreto buscándolo por su nombre, id o tipo.
- **Modificar valores del sensor:** Modifica los valores de un sensor simulando que ha sido un dispositivo de domótica.
- **Observar estado de ejecutores:** Comprueba si un ejecutor está activado o desactivado.
- **Envía datos al cliente:** Modifica los datos y se muestran instantáneamente en la aplicación cliente.
- **Interfaz Intuitiva:** Una interfaz de usuario amigable que facilita la navegación y el uso de las funcionalidades de la aplicación.

Este proyecto busca proporcionar una aplicación sencilla y fácil de usar para simular que un dispositivo con sensor recoje un valor y lo envía a una aplicación que consume sus datos.

Siéntete libre de explorar, contribuir y adaptar este proyecto según tus necesidades específicas. ¡Disfruta de tu experiencia en NovaServer!

## Requisitos previos

Antes de comenzar con la instalación, asegúrate de tener instalado un entorno de desarrollo en tu sistema. También debes tener instalado y configurado Git en tu sistema. 

## Instalación

Sigue estos pasos para configurar el proyecto en tu entorno local:

1. **Clonación del repositorio de GitHub:**

   - Copia la dirección de este repositorio e introduce el siguiente comando para clonar el repositorio a tu equipo local:
    ```bash
    git clone https://github.com/Marioby9/NovaServer.git
    ```

2. **Acceder al directorio del proyecto:**

   - Una vez ya te has traído todos los archivos del repositorio a tu equipo, debes moverte a la carpeta del directorio creado.
   ```bash
   cd NovaServer
   ```

3. **Instalación de las dependencias:**

   - En los archivos `package.json` y `package-lock.json` se encuentran las dependencias ya definidas. Este fichero no debe editarse.
   - Introduce el siguiente comando para instalar las dependencias:

    ```bash
    npm install
    ```

4. **Modificación de Firebase:**
  Tienes la posibilidad de utilizar nuestra base de datos común, ya que el fichero fb.js ya viene configurado con la API KEY y todos los datos necesarios para un uso correcto.
  Si lo prefieres, puedes crear tú tu propia base de datos y configurarla a tu gusto:

   - Visita la página web oficial de [Firebase](https://firebase.google.com/).

   - Crea una base de datos para una aplicación web y nómbrala como quieras.

   - Coloca los parámetros de configuración de tu base de datos en el archivo fb.js en la carpeta src.

   ```javascript
   // Firebase Parameters
   const firebaseConfig = {
    apiKey: "AIzaSyBOOh2SgVKUfB9py_Bk-ONWsoHgAZuEgIE",
    authDomain: "novaforge-bb5b4.firebaseapp.com",
    projectId: "novaforge-bb5b4",
    storageBucket: "novaforge-bb5b4.appspot.com",
    messagingSenderId: "947172484435",
    appId: "1:947172484435:web:7dd3344801c947e90f6da6",
    measurementId: "G-L400S2DMWP"
    }
    // Initialize Firebase
    const app = initializeApp(firebaseConfig)
    const db = getFirestore()
    const analytics = getAnalytics(app)
    export const auth = getAuth()
   ```

5. **Lanzamiento de la aplicación en local:**
    - Utiliza esta opción si estás desarrollando la aplicación.
    - Introduce el siguiente comando para desplegar tu proyecto en local:

    ```bash
    npm run dev
    ```
    - NPM acaba de abrir un puerto en tu equipo para alojar la aplicación en local.

6. **Acceso al Usuario de Prueba:**
   - Utiliza el siguiente usuario de prueba para acceder a la aplicación como cliente:
     - Nombre usuario: `mario@mail.com`
     - Contraseña: `mariomg`

Ahora deberías poder acceder a tu proyecto a través de [http://localhost.com:5050]() (Por ejemplo) en tu navegador. Asegúrate de que las variables en los archivos de configuración de firebase estén configuradas correctamente y que las tablas y datos de prueba se hayan creado con éxito.

¡Listo! Tu entorno local está configurado para ejecutar el proyecto de página web en VUE con las variables globales personalizadas y datos de prueba. ¡Feliz desarrollo!

<p align="right">(<a href="#readme-top">Volver arriba</a>)</p>

<!-- DESPLIGUE -->
## Despliegue

Si lo deseas, puedes desplegar tu proyecto VUE, en este caso tu modificación de NovaForge. Para poder desplegar tu aplicación web VUE debes seguir los siguientes pasos: 

1. **Crear repositorio en GitHub:**
   - Crea un nuevo repositorio para alojar todo el código de tu proyecto en GitHub:
     - El nombre que quieras
     - La descripción que quieras
     - Debe tener visibilidad pública

  <img src="./public/readmeFiles/newRepo.webp"><br>

2. **Modificar los archivos vite.config.js y vue.config.js:**
   - Debes modificar el fichero vite.config.js de tu proyecto indicando la ruta base de despliegue:

  <img src="./public/readmeFiles/vite.webp"><br>
  - Debes crear el fichero vue.config.js de tu proyecto y añadir las siguientes líneas (ignora errores):

  <img src="./public/readmeFiles/vue.webp"><br>

3. **Conectar repositorio a tu proyecto local:**
   - Conecta tu repositorio remoto con tu repositorio local:
  ```bash
  git init
  git add .
  git commit -m "First Commit"
  git remote add origin tuRepositorio.git
  git branch -M main
  git push -u origin main
  ```

4. **Generar carpeta dist lista para despliegue:**
   - Esta carpeta será la que convierta los archivos de tu proyecto VUE a archivos .html y .js legibles por un servidor de despliegue:
   - Los siguientes comandos subirán el contenido de dicha carpeta a una rama de despliegue llamada gh-pages.
  ```bash
  npm run build
  ```
  ```bash
  git add dist -f
  git commit -m "deploy: 🚀 DEPLOY"
  git subtree push --prefix dist origin gh-pages
  ```
5. **Indicar rama gh-pages en GitHub:**
   - En tu repositorio:
      - Accede a settings
      - Accede a Pages
      - Selecciona en source: Deploy from a branch
      - Como rama selecciona la rama gh-pages desde la raíz

  <img src="./public/readmeFiles/ghpages.webp"><br>
  
6. **Espera y accede a tu web:**
   - Tardará unos minutos en desplegarse
   - El link será: https://tuUsuario.github.io/tuRepositorio/
   - Disfruta de tu web VUE desplegada


<p align="right">(<a href="#readme-top">Volver arriba</a>)</p>
      
<!-- CONTRIBUYE -->
## Contribuye

Las contribuciones son las que hacen de la comunidad de código abierto un lugar increíble para aprender, inspirar y crear. Cualquier contribución que hagas será muy apreciada.

Si tiene alguna sugerencia que pueda mejorar esto, bifurque el repositorio y cree una pull request. También puedes simplemente abrir un problema con la etiqueta "mejora". ¡No olvides darle una estrella al proyecto! ¡Gracias de nuevo!

<p align="right">(<a href="#readme-top">Volver arriba</a>)</p>

<!-- LICENCIA -->

## Licencia

Distribuido bajo la licencia Apache License 2.0. Consulte `LICENCIA.txt` para obtener más información.

<p align="right">(<a href="#readme-top">Volver arriba</a>)</p>

<!-- CONTACTO -->

## Contacto

Mario Martín Godoy - [@mariomg]() - mmartin.mrmg@gmail.com

Enlace del proyecto: [https://github.com/Marioby9/NovaForge](https://github.com/Marioby9/NovaForge)

<p align="right">(<a href="#readme-top">Volver arriba</a>)</p>

<!-- AGREDECIMIENTO -->

## Agradecimiento

Las páginas que he utilizado para obtener documentación del proyecto son las siguientes:


- [TailwindCSS](https://tailwindcss.com/)
- [VUE](https://vuejs.org/)
- [Deploy VUE GH-PAGES](https://learnvue.co/articles/deploy-vue-to-github-pages)
- [Better GH commits](https://alvarovalverde.dev/blog/write-better-git-commit-messages)

<p align="right">(<a href="#readme-top">Volver arriba</a>)</p>
