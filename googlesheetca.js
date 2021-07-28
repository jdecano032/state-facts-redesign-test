function fetchSheet({ spreadsheetId, sheetName, apiKey, complete }) {
    let url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`;
    return fetch(url).then(response =>
        response.json().then(result => {
            let data = Papa.parse(Papa.unparse(result.values), { header: true });
            complete(data);
        })
    );
}
    function init() {
      fetchSheet({
          spreadsheetId: '1yGs29zGuMy5vr24udUMveKEPQF-aJ5j4JSzkfcgEBqQ',
          sheetName: 'California',
          apiKey: 'AIzaSyALiu3EN3HMWPLZs6SwYx0JzX00G5L3eKo',
          complete: showInfo
      });
  }

  function showInfo(results) {
    var data = results.data
      document.getElementById("head1").innerHTML = data[0].head;
      document.getElementById("para1.1").innerHTML = data[0].para1;
      document.getElementById("para1.2").innerHTML = data[0].para2;
      document.getElementById("head2").innerHTML = data[1].head;
      document.getElementById("para2.1").innerHTML = data[1].para1;
      document.getElementById("head3").innerHTML = data[2].head;
      document.getElementById("para3.1").innerHTML = data[2].para1;
      document.getElementById("head4").innerHTML = data[3].head;
      document.getElementById("para4.1").innerHTML = data[3].para1;
      document.getElementById("head5").innerHTML = data[4].head;
      document.getElementById("para5.1").innerHTML = data[4].para1;
      document.getElementById("para5.2").innerHTML = data[4].para2;
      document.getElementById("para5.3").innerHTML = data[4].para3;
      document.getElementById("head6").innerHTML = data[5].head;
      document.getElementById("para6.1").innerHTML = data[5].para1;
      document.getElementById("para6.2").innerHTML = data[5].para2;
      document.getElementById("para6.3").innerHTML = data[5].para3;
      document.getElementById("para6.4").innerHTML = data[5].para4;
      document.getElementById("para6.5").innerHTML = data[5].para5;
      document.getElementById("head7").innerHTML = data[6].head;
      document.getElementById("para7.1").innerHTML = data[6].para1;
      document.getElementById("para7.2").innerHTML = data[6].para2;
      document.getElementById("head8").innerHTML = data[7].head;
      document.getElementById("para8.1").innerHTML = data[7].para1;
      document.getElementById("para8.2").innerHTML = data[7].para2;
      document.getElementById("head9").innerHTML = data[8].head;
      document.getElementById("para9.1").innerHTML = data[8].para1;
      document.getElementById("para9.2").innerHTML = data[8].para2;
      document.getElementById("head10").innerHTML = data[9].head;
      document.getElementById("para10.1").innerHTML = data[9].para1;
      document.getElementById("para10.2").innerHTML = data[9].para2;
      document.getElementById("para10.3").innerHTML = data[9].para3;
      document.getElementById("head11").innerHTML = data[10].head;
      document.getElementById("para11.1").innerHTML = data[10].para1;
      document.getElementById("head12").innerHTML = data[11].head;
      document.getElementById("para12.1").innerHTML = data[11].para1;
      document.getElementById("para12.2").innerHTML = data[11].para2;
      document.getElementById("head13").innerHTML = data[12].head;
      document.getElementById("para13.1").innerHTML = data[12].para1;
      console.log(data);
    }

  window.addEventListener('DOMContentLoaded', init)
