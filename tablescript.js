const renderTable = () => {
    const advices = JSON.parse(localStorage.getItem('advices')) || [];
    const reversedAdvices = advices.slice().reverse(); // Odwróć kolejność
  
    const table = document.createElement('table');
    table.className = 'advice-table';
  
    const tableHeader = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headers = ['ID', 'Advice'];
  
    headers.forEach((headerText) => {
      const header = document.createElement('th');
      header.textContent = headerText;
      headerRow.appendChild(header);
    });
  
    tableHeader.appendChild(headerRow);
    table.appendChild(tableHeader);
  
    const tableBody = document.createElement('tbody');
    reversedAdvices.slice(0, 10).forEach((advice, index) => {
      const row = document.createElement('tr');
  
      const idCell = document.createElement('td');
      idCell.textContent = index + 1;
  
      const adviceCell = document.createElement('td');
      adviceCell.textContent = advice;
  
      row.appendChild(idCell);
      row.appendChild(adviceCell);
  
      tableBody.appendChild(row);
    });
  
    table.appendChild(tableBody);
  
    const container = document.querySelector('.container');
    container.appendChild(table);
  };
  
  renderTable();
  