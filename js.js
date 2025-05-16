document.addEventListener("DOMContentLoaded", async () => {
  const tableBody = document.querySelector("#dataTable tbody");

  let users = JSON.parse(localStorage.getItem("users"));

  if (!users || users.length == 0) 

  {

    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    users = await res.json();
    localStorage.setItem("users", JSON.stringify(users));

  }

  tableBody.innerHTML = '';
  users.forEach(user => {
    const row = document.createElement("tr");

    row.innerHTML = 

  "<td>" + user.id + "</td>" +
  "<td>" + user.name + "</td>" +
  "<td>" + user.email + "</td>" +
  "<td>" +
    "<button onclick='editUser(" + user.id + ")'>Update</button> " +
    "<button onclick='deleteUser(" + user.id + ")'>Delete</button>" +
  "</td>";


    tableBody.appendChild(row);

  });
});

function editUser(id) 
{
  window.location.href = `data.html?id=${id}`;

}


function deleteUser(id) 
{

 let users = localStorage.getItem("users");
if (users) 
{
  users = JSON.parse(users);
} else 
{
  users = [];
}

let newUsers = [];

for (let i = 0; i < users.length; i++) 
  {
  if (users[i].id !== id) 
  {
    newUsers.push(users[i]);
  }
 }

localStorage.setItem("users", JSON.stringify(newUsers));
location.reload();


}


