const input = document.getElementById('ingresoGasto');
const button = document.querySelector('#enviar-btn');
const table = document.querySelector('table');
//calcular el total
const totalElement = document.getElementById('total');
let total=[];
//exportar 
const exportButton = document.getElementById('export-btn');
//linea
let bandera = 0;
totalElement.textContent = 'Total:';
button.addEventListener("click", ()=> {
    if(bandera == 0){
      const lineaElement = document.querySelector("#select");
      lineaElement.id = "linea";
      bandera = 1;
    });

    const valor = input.value;
    const motivoValor = motivo.value || 'No especificado';
    const table = document.querySelector('table');
    const row = document.createElement('tr');
    const valorColumn = document.createElement('td');
    const motivoColumn = document.createElement('td');
    valorColumn.textContent = valor;
    motivoColumn.textContent = motivoValor;
    row.appendChild(valorColumn);
    row.appendChild(motivoColumn);
    table.appendChild(row);
  
    input.value = '';
    motivo.value = '';
  
    total.push(Number(valor));

    let sum = 0;
    for(let i = 0; i< total.length; i++){
        sum += total[i];
    }
    totalElement.textContent = `Total: ${sum}`;
  });
  

  exportButton.addEventListener('click', () => {
    let txtContent = 'monto,motivo\n';
    const rows = table.querySelectorAll('tr');
    rows.forEach((row) => {
      const cells = row.querySelectorAll('td');
      const monto = cells[1].textContent;
      const motivo = cells[0].textContent;
      const rowText = `${motivo},${monto}`;
      txtContent += rowText + '\n';
    });
  
    const encodedUri = encodeURI(txtContent);
    const link = document.createElement('a');
    link.setAttribute('href', 'data:text/plain;charset=utf-8,'+ encodedUri);
    link.setAttribute('download', 'lista.txt');
    document.body.appendChild(link);
  
    link.click();
  });
  

