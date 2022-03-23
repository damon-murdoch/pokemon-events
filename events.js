// Populates the upcoming tournaments table
function populate_events_body()
{
  // Get the body for the upcoming tournaments table
  let body = document.getElementById('events-body');

  // If there are previous tournaments
  if (EVENTS.previous.length > 0)
  {
    // Loop over all of the upcoming tournaments
    for(let tournament of EVENTS.previous){

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
    td.innerHTML = "There have been no previous tournaments held at this time.";

    // Add the col to the row
    tr.appendChild(td);

    // Add the row to the body
    body.appendChild(tr);
  }
}

// Populate the upcoming tournaments
populate_events_body();