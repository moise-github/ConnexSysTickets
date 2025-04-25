document.getElementById('upload-csv').addEventListener('change', function (e) {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const data = results.data;
        if (data.length === 0) return;
  
        let html = "<table><thead><tr>";
        Object.keys(data[0]).forEach(key => {
          html += `<th>${key}</th>`;
        });
        html += "</tr></thead><tbody>";
        data.forEach(row => {
          html += "<tr>";
          Object.values(row).forEach(value => {
            html += `<td>${value}</td>`;
          });
          html += "</tr>";
        });
        html += "</tbody></table>";
        document.getElementById('table-container').innerHTML = html;
      }
    });
  });
  