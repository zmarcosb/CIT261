var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if(xhr.readyState === 4) { // Obtaining the response of the request
    var flights = JSON.parse(xhr.responseText);
    var statusHTML = '';
    for(var i = 0; i < flights.length; i++) {
      statusHTML += '<tr>';
      statusHTML += '<td>' + flights[i].time + '</td>';
      statusHTML += '<td>' + flights[i].destination + '</td>';
      statusHTML += '<td>' + flights[i].gate + '</td>';
      if(flights[i].status === 'Boarding') {
        statusHTML += '<td class="status">' + flights[i].status + '</td>';
      } else if(flights[i].status === 'On Time') {
        statusHTML += '<td class="status onTime">' + flights[i].status + '</td>';
      } else if(flights[i].status === 'Delayed') {
        statusHTML += '<td class="status delayed">' + flights[i].status + '</td>';
      } else {
        statusHTML += '<td class="status cancelled">' + flights[i].status + '</td>';
      }
      statusHTML += '</tr>';
    }
    document.querySelector('.flightStatus tbody').innerHTML = statusHTML;
  }
}
xhr.open('GET', 'https://zmarcosb.github.io/CIT261/Ajax/flight.json'); // Obtaining data from json file
xhr.send();
