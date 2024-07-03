# API REST para Red Social (Backend)

Este proyecto es una API REST desarrollada con el Stack MERN (MongoDB, Express.js, React.js, Node.js) para una aplicación de Red Social. La autenticación se realiza utilizando JWT (JSON Web Tokens).

## Instalación

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

1. Clona este repositorio en tu máquina local (Crea un Fork si lo vas a editar):

    ```bash
    git clone https://github.com/inesmariao/api-social-network.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd api-social-network
    ```

3. Instala las dependencias del proyecto utilizando npm:

    ```bash
    npm install
    ```

## Ejecución de Servidores

Para ejecutar los servidores necesarios, sigue estos pasos:

### Para Windows:

1. En el archivo `start-project.bat` ubicado en el directorio raíz del proyecto, ajusta las rutas de los comandos `npm` según la configuración de tu equipo.
2. Ejecuta el archivo `start-project.bat`. Este archivo se encarga de iniciar el servidor de Node.js con vigilancia de archivos:

    ```bash
    .\start-project.bat
    ```

### Para Linux y Mac:

1. Edita el archivo `start-project.sh` y ajusta las rutas de los comandos `npm` según sea necesario para tu sistema operativo.
2. Ejecuta el archivo `start-project.sh` utilizando el siguiente comando:

    ```bash
    sh start-project.sh
    ```

> [!IMPORTANT]
> Asegúrate de tener Mongo Atlas Cloud configurado correctamente y la conexión de base de datos en el archivo `.env` antes de ejecutar el archivo de inicio. Este proyecto está configurado para trabajar con una conexión a Base de Datos con Mongo Atlas Cloud.

---

## Contribuciones

> [!TIP]
> ¡Si te gustó este proyecto, puedes dejarme una estrella en el repositorio! 🌟

En caso que estés interesad@ en contribuir al proyecto para hacer mejoras, puedes solicitarme unirte al repositorio como contribuidor, enviándome un correo a inesmaoh@gmail.com

> [!NOTE]
> Por favor, sigue las guías de contribución y buenas prácticas antes de enviar un Pull Request.

## Licencia

Este proyecto está licenciado bajo la [Licencia ISC](https://opensource.org/licenses/ISC). Consulta el archivo LICENSE para más detalles.

> [!IMPORTANT]
> **Copyright 2024. Ing. Inés María Oliveros**

Por la presente se concede permiso para utilizar, copiar, modificar y/o distribuir este software para cualquier fin, con o sin cargo, siempre que el aviso de copyright anterior y este aviso de permiso aparezcan en todas las copias.

EL SOFTWARE SE PROPORCIONA "TAL CUAL" Y EL AUTOR RECHAZA TODA GARANTÍA CON RESPECTO A ESTE SOFTWARE, INCLUIDAS TODAS LAS GARANTÍAS IMPLÍCITAS DE COMERCIABILIDAD E IDONEIDAD. EN NINGÚN CASO EL AUTOR SERÁ RESPONSABLE DE NINGÚN DAÑO ESPECIAL, DIRECTO, INDIRECTO O CONSECUENTE, NI DE NINGÚN DAÑO DERIVADO DE LA PÉRDIDA DE USO, DATOS O BENEFICIOS, YA SEA EN UNA ACCIÓN CONTRACTUAL, NEGLIGENCIA U OTRA ACCIÓN ILÍCITA, QUE SURJA DE O EN RELACIÓN CON EL USO O RENDIMIENTO DE ESTE SOFTWARE.

## License

> [!IMPORTANT]
> **Copyright 2024. Ing. Inés María Oliveros Hernández**

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED “AS IS” AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
