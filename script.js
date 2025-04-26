document.getElementById('upload-csv').addEventListener('change', function (e) {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const data = results.data;
        if (data.length === 0) return;
  
        let html = "<div class='grid'>";
        data.forEach(row => {
          const loginUrl = row['Comment'];
          const username = row['Username'];
          const password = row['Password'];
          const profile_name = row['Profile Name'];
          const expiration = row['Expiration'];
          const validity = row['Validity'];
  
          // Générer un QR code avec login URL
          const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(loginUrl)}&size=100x100`;
  
          html += `
            <div class="card">
              <div class = "connexsys"> <strong> CONNEXSYS TICKETS </strong> </div>
              <div class="title">  User : <strong>${username} </strong><br> Pwd : <strong>${password}</strong> <br> Time : ${profile_name}</div>
              <div classe="expi_val"> Exp : ${expiration} <br> Valid : ${validity} </div>
            </div>
          `;
        });
        html += "</div>";
        document.getElementById('card-grid').innerHTML = html;
      }
    });
  });
  