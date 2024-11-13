var qualifications = [
    {
       subject : "Maths",
       grade : "A"
    },
    {
       subject : "English",
       grade : "B"
    }, 
    {
       subject : "French",
       grade : "C"
    },
    {
       subject : "Physics",
       grade : "B"
    
    }
    ];

      qualifications.forEach(function(element) {
      console.info(element.subject);
      console.info(element.grade);


   fetch("data/staff.json")
  .then((response) => response.json())
  .then((data) => {

   const staffTable = document.getElementById("staffTable");

   //This creates the table itself
   data.forEach((item) => {
      const row = document.createElement("tr");
      const nameCell = document.createElement("td");
      const emailCell = document.createElement("td");

      //This is what fills it in with the Fname and Lname in the content of table {} and email {} in col 2 
      //.textContent is to set/get the info into text
      nameCell.textContent = `${item.first_name} ${item.last_name}`;
      emailCell.textContent = item.email;
    
      //
      row.appendChild(nameCell);
      row.appendChild(emailCell);
      staffTable.appendChild(row);

    });

   //Work with the parsed data
  })
  .catch((error) => {
   console.error("Error loading JSON:", error);
 });

  }) 