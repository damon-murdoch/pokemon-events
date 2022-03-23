// Top Cut Points
let p_topcut = [
  32, 24, 16, 8, 1
];

// No Cut Points
let p_nocut = [
  20, 15, 20, 5, 1
];

// Get values for tournament type
function get_player_placings(placings)
{
  // 1st, 2nd, t4, t8
  let results = [0, 0, 0, 0, 0];

  // Loop over the no cut rows
  for(let row of placings)
  {
    // First places
    if (row == 1)
    { results[0]++; }
    // Second Places
    else if (row == 2)
    { results[1]++; }
    // Top Four Placings
    else if (row <= 4)
    { results[2]++; }
    // Top Eight Placings
    else if (row <= 8)
    { results[3]++; }
    else // Any other placing
    { results[4]++; }
  }

  // Return the results array
  return results;
}

// Get the total points for the player
function get_player_points(topcut, nocut)
{
  // Initial point count
  let points = 0;

  // Number of different placings that award points
  for(let i = 0; i < 5; i++)
  {
    console.log(topcut[i], nocut[i])

    // Add points for top cut events
    points += p_topcut[i] * topcut[i];

    // Add points for non-cut events
    points += p_nocut[i] * nocut[i];
  }

  // Return the points value
  return points;
}

// Populates the upcoming tournaments table
function populate_ladder_body()
{
  // Get the body for the upcoming tournaments table
  let body = document.getElementById('ladder-body');

  // If there are previous tournaments
  if (LADDER.length > 0)
  {
    // Table to display
    let table = [];

    // Loop over all of the upcoming tournaments
    for(let player of LADDER)
    {
      // Player results (w/ top cut)
      let result_cut = get_player_placings(player[1]);

      // PLayer results (no top cut)
      let result_nocut = get_player_placings(player[2]);

      // Row contents
      let row = [
        // Skip the rank, will be added when the list is sorted
        player[0], // Player Name
        result_cut[0] + result_nocut[0], // Number of first places
        result_cut[1] + result_nocut[1], // Number of second places
        result_cut[2] + result_nocut[2], // Number of top 4 placings
        result_cut[3] + result_nocut[3], // Number of top 8 placings
        get_player_points(result_cut, result_nocut), // Total points
      ];

      // Add row to the table
      table.push(row);
    }

    // Sort the table object 
    table.sort(function(a, b){

      // Compare points
      // If players have the same number of points
      if (a[5] == b[5])
      {
        // Loop over the rest of the rows (in order)
        for(let i=1; i<5; i++)
        {
          // If the row values DO NOT match
          if (!(a[i] == b[i]))
          {
            // Return which one is bigger
            return a[i] > b[i];
          }
        }

        // If we made it here, pick alphabetically
        return (a.toLowerCase() > b.toLowerCase());
      } 
      else // Different points count
      {
        // Return a more points than b
        return a[5] > b[5];
      }
    });

    // Loop over the table
    for(let i=0; i < table.length; i++)
    {
      // Dereference the table row
      let row = table[i];

      // Create a new table row object
      let tr = document.createElement('tr');

      // Ensure the tr text is light
      tr.classList = 'text-light';

      // Create the ranking column
      let td = document.createElement('td');

      // Set the contents to the rank
      td.innerHTML = i + 1;

      // Add the column to the row
      tr.appendChild(td);

      // Loop over the tournament properties
      for(let property of row)
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

    for (let row of table)
    {

    }    
  }
  else // No players
  {
    // Insert generic row
    let tr = document.createElement('tr');

    // Ensure the tr text is light
    tr.classList = "text-light";

    // Create the new table element object
    let td = document.createElement('td');

    // Set the column span to 7
    td.colSpan = 7;

    // Set the td content to the warning text
    td.innerHTML = "There are no ranked players at this time.";

    // Add the col to the row
    tr.appendChild(td);

    // Add the row to the body
    body.appendChild(tr);
  }
}

// Populate the upcoming tournaments
populate_ladder_body();