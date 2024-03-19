function enviarCorreoConUltimaFilaRem() {
  // Obtener el correo electrónico del destinatario de la última fila de la columna AB
  var hoja = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var ultimaFila = hoja.getLastRow();
  var destinatario = hoja.getRange(ultimaFila, 28).getValue(); // Columna AB es la 28 en base a la numeración de columnas de Google Sheets
  
  // Configuración del correo electrónico
  var asunto = "Requisición agendada";
  var cuerpo = "<div style='text-align: center; color: green;'><h1>Requisición Enviada con Éxito</h1></div><br>"; // Texto centrado en negrita

  // Obtén la hoja de Google Sheets y la última fila con datos
  var hoja = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var ultimaFila = hoja.getLastRow();
  var ultimaColumna = hoja.getLastColumn();
  
  // Obtenemos los datos de la última fila
  var datosUltimaFila = hoja.getRange(ultimaFila, 1, 1, ultimaColumna).getValues()[0];

  // Construir la tabla HTML con los datos
  cuerpo += "<table style='border-collapse: collapse; width: 95%; margin: auto; border: 2px solid black;'>";
  
  // Iteramos sobre los títulos de las columnas y los datos de la última fila para agregarlos a la tabla
  for (var i = 0; i < ultimaColumna - 4; i++) {
    var campo = hoja.getRange(1, i + 1).getValue();
    var valor = datosUltimaFila[i];
    var style = ''; // Variable para almacenar el estilo CSS
    if ( i == 8) { // Si estamos en la columna G o la columna I
      style = "color: red;"; // Aplicamos el estilo de color rojo
    }
    if (i == 0 && campo == "[Nombre del solicitante] Nombre") { // Si estamos en la columna A y el título es "Nombre del solicitante"
      campo = "Nombre del solicitante"; // Cambiar el título
    } else if (i == 2 && campo == "[Responsable del evento] Nombre") { // Si estamos en la columna C y el título es "Responsable del evento"
      campo = "Responsable de evento"; // Cambiar el título
    }
    if (i == 0 || i == 2) { // Si estamos en la columna 1 o 3, y no es un campo de fecha/hora
      valor += " " + datosUltimaFila[i + 1]; // Concatenamos con el siguiente campo
      i++; // Saltamos al siguiente campo
    }
    if (typeof valor === 'object' && valor instanceof Date) {
      if (valor.getHours() === 0 && valor.getMinutes() === 0 && valor.getSeconds() === 0) {
        // Si es solo una fecha, mostramos solo la fecha
        valor = Utilities.formatDate(valor, Session.getScriptTimeZone(), 'dd/MM/yyyy');
      } else {
        // Si tiene una hora específica, mostramos solo la hora
        valor = Utilities.formatDate(valor, Session.getScriptTimeZone(), 'HH:mm');
      }
    }
    // Agregar color de fondo a las filas alternas
    var backgroundColor = (i % 2 == 0) ? "#f2f2f2" : "#ffffff";
    cuerpo += "<tr style='background-color: " + backgroundColor + ";'>";
    // Alinear el texto en las celdas
    // Establecer un ancho mínimo para la columna de los nombres de campo
    cuerpo += "<td style='border: 1px solid black; padding: 8px; text-align: left;  max-width: 170px; font-size: smaller;'><b style='" + style + "'>" + campo + ":</b></td>";
    cuerpo += "<td style='border: 1px solid black; padding: 8px; text-align: left; font-size: smaller;'>" + valor + "</td>";
    cuerpo += "</tr>";
}

  // Cerrar la tabla HTML
  cuerpo += "</table>";
  
  // Enviamos el correo electrónico
  MailApp.sendEmail({
    to: destinatario,
    subject: asunto,
    htmlBody: cuerpo
  });
}
