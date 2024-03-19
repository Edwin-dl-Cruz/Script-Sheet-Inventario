<h1>Script para Enviar Correo con Última Fila de Respuestas del Formulario</h1><br><br>

El sistema es una solución desarrollada en Google Apps Script que automatiza el procesamiento de respuestas recibidas en un formulario de Google (FormsApp). A continuación, se proporciona una descripción detallada de cómo funciona el sistema y los componentes involucrados:
<br><br>

<h2>Componentes del Sistema:</h2>
1.- Formulario de Google (FormsApp): 

El sistema utiliza un formulario de Google para recopilar información de los usuarios. Este formulario puede contener diferentes tipos de preguntas, como texto, opciones múltiples, casillas de verificación, listas desplegables, entre otros. <br><br>

<img src="https://github.com/Edwin-dl-Cruz/Script-Sheet-Requisicion/assets/90342140/5249be18-221f-4220-b503-150264d1e671" alt="Captura de Pantalla 2024-03-19 a la(s) 10 34 32" width="70%"><br><br>

2.- Hoja de Cálculo de Google (Google Sheets):

Las respuestas del formulario se almacenan en una hoja de cálculo de Google. Cada vez que se envía una respuesta al formulario, se registra como una nueva fila en esta hoja de cálculo. El script se ejecuta en esta hoja de cálculo para procesar automáticamente las nuevas respuestas.

3.- Google Apps Script:

Es un entorno de desarrollo basado en JavaScript que permite crear scripts para automatizar tareas en las aplicaciones de Google, como Google Sheets, Google Docs, Google Forms, entre otros. En este caso, se utiliza Google Apps Script para procesar las respuestas del formulario y enviar correos electrónicos con la información recopilada.<br><br>

<img src="https://github.com/Edwin-dl-Cruz/Script-Sheet-Requisicion/assets/90342140/65131ec9-d887-4132-bc92-f9cfdacc4f32" alt="Captura de Pantalla 2024-03-19 a la(s) 10 43 21" width="70%">
<br><br>

<h2>Funcionamiento del Sistema:</h2>
1.- Recepción de Respuestas:

Cuando un usuario envía una respuesta al formulario, esta respuesta se registra como una nueva fila en la hoja de cálculo de Google vinculada al formulario.

2.- Ejecución del Script:

El script de Google Apps Script está configurado para ejecutarse automáticamente cada vez que se recibe una nueva respuesta en la hoja de cálculo. El script procesa la última fila de la hoja de cálculo, que contiene la información más reciente enviada por el usuario.

3.- Formateo de Datos:

El script formatea los datos de la última fila de la hoja de cálculo en una tabla HTML. Este formato proporciona una presentación visualmente atractiva de la información recopilada en el formulario.

4.- Envío de Correo Electrónico:

Una vez que los datos están formateados en la tabla HTML, el script envía un correo electrónico al destinatario especificado. El correo electrónico contiene la tabla HTML con los datos recopilados del formulario.


<h2>Características Adicionales:</h2>
1.- Personalización del Correo Electrónico:

El script permite personalizar el contenido del correo electrónico, incluido el asunto, el destinatario y el formato del cuerpo del correo electrónico.

2.- Automatización de Tareas:

El sistema automatiza el procesamiento de respuestas del formulario, lo que ahorra tiempo y reduce la necesidad de intervención manual.

3.- Integración con Google Calendar:

En algunos casos, el sistema puede estar vinculado a Google Calendar para programar eventos automáticamente en función de las respuestas recibidas en el formulario.
En resumen, el sistema proporciona una solución eficiente para recopilar, procesar y presentar información de formularios de Google, utilizando herramientas como Google Sheets, Google Apps Script y Google Forms.
