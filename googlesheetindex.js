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
          sheetName: 'Vocab',
          apiKey: 'AIzaSyALiu3EN3HMWPLZs6SwYx0JzX00G5L3eKo',
          complete: showInfo
      });
  }

  function showInfo(results) {
    var data = results.data
      document.getElementById("head1").innerHTML = data[0].head;
      document.getElementById("para1.1").innerHTML = data[0].para1;
      document.getElementById("para1.2").innerHTML = data[0].para2;
      document.getElementById("para1.3").innerHTML = data[0].para3;
      document.getElementById("para1.4").innerHTML = data[0].para4;
      document.getElementById("para1.5").innerHTML = data[0].para5;
      document.getElementById("para1.6").innerHTML = data[0].para6;
      console.log(data);
    }

  window.addEventListener('DOMContentLoaded', init)
