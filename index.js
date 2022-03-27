// Populates the upcoming tournaments table
function populate_upcoming_body()
{
  // Get the body for the upcoming tournaments table
  let body = document.getElementById('upcoming-body');

  // If there are upcoming events
  if(EVENTS.upcoming.length > 0)
  {
    // Loop over all of the upcoming tournaments
    for(let tournament of EVENTS.upcoming){

      // Create a new table row object
      let tr = document.createElement('tr');

      // Ensure the tr text is light
      tr.classList = 'text-light';

      // Loop over the tournament properties
      for(let property of tournament)
      {
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
  else // No previous tournaments
  {
    // Insert generic row
    let tr = document.createElement('tr');

    // Ensure the tr text is light
    tr.classList = "text-light";

    // Create the new table element object
    let td = document.createElement('td');

    // Set the column span to 8
    td.colSpan = 8;

    // Set the td content to the warning text
    td.innerHTML = "There are no upcoming tournaments planned at this time.";

    // Add the col to the row
    tr.appendChild(td);

    // Add the row to the body
    body.appendChild(tr);
  }
}

// Populate the upcoming tournaments
populate_upcoming_body();