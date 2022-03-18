// Populates the upcoming tournaments table
function populate_upcoming_body()
{
  // Get the body for the upcoming tournaments table
  let body = document.getElementById('upcoming-body');

  // Loop over all of the upcoming tournaments
  for(let tournament of EVENTS.upcoming){

    // Create a new table row object
    let tr = document.createElement('tr');

    // Ensure the tr text is light
    tr.classList = 'text-light';

    // Loop over the tournament properties
    for(let property of tournament)
    {
      console.log(property);

      // Create a new table element object
      let td = document.createElement('td');

      // Set the element content to the property
      td.innerHTML = property;

      // Add the column to the row
      tr.appendChild(td);
    }

    // Add the row to the table
    body.appendChild(tr);
  }
}

// Populate the upcoming tournaments
populate_upcoming_body();