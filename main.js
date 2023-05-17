let button = document.querySelector('button')
let Name = document.querySelector('#Name')
let email = document.querySelector('#email')
let username = document.querySelector('#Username')
let address = document.querySelector('#address')




const fetchData = async () => {
  const response = await fetch ("https://jsonplaceholder.typicode.com/users")
  const data = await response.json();

  data.forEach((item) =>{
 let Pli = document.createElement("td")
 let newtd = document.createElement("td")
let texttd = document.createElement("td")
let newtexttd = document.createElement("td")
 Pli.className = "list-group-item"
 newtd.className = "list-group-item"
texttd.className = "list-group-item"
newtexttd.className = "list-group-item"
 Pli.innerText = item.name;
 newtd.innerText = item.email;
texttd.innerText = item.username;
newtexttd.innerText = item.address.city;
 Name.appendChild(Pli);
 email.appendChild(newtd);
 username.appendChild(texttd);
 address.appendChild(newtexttd);


  })
}
button.addEventListener("click" , fetchData)