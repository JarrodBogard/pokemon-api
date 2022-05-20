console.clear();

const list = document.querySelector(".list");

const firstFetch = fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
  .then((response) => response.json())
  .then((data) => {
    let fetchedData = data.results;
    console.log(data.results);
    fetchedData.forEach((element) => {
      console.log(element.url)
      const li = document.createElement("li");
      const h3 = document.createElement("h3");
      const img = document.createElement("img");
      
      h3.innerText = element.name;
      img.src = element.image;
      
      li.appendChild(h3);
      li.appendChild(img);
      
      list.appendChild(li);
      const secondFetch = fetch(`${element.url}`)
      .then((response) => response.json())
      .then((data) => console.log(data, "second set of data"))
      console.log(secondFetch)
        
    });
  });
  console.log(firstFetch, "firstFetch");
  
  
  // const secondFetch = fetch("https://pokeapi.co/api/v2/pokemon/")
  //   .then((response) => response.json())
  //   .then((data) => console.log(data))
  
  //   console.log(secondFetch, "secondFetch")
