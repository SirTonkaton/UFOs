// import the data from data.js
const tableData = data

//Reference th eHTML table using d3
var tbody = d3.select("tbody");

//Takes two numbers and adds them
function addition (a, b)  {
    return a + b;
}
//Building a table
function buildTable(data) {
    //First, clear out nay existing data
    tbody.html("");
}

//Next, loop through each object in the data and append a ow and cells for each value in the row
data.forEach((dataRow) => {
    //Append a row to the table body
    let row = tbody.append("tr");

    //Loops through each field in the dataRow and add each value as a table cell (td)
    Object.values(dataRow).forEach((val) => { 
      let cell = row.append("td");
      cell.text(val);
      }
    );

    });

