fetch("https://isro.vercel.app/api/spacecrafts")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data); // Log the fetched data to the console
    data.spacecrafts.forEach(element => {
        const col = document.createElement("div");
        console.log(element)
        col.className = "col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mt-2";
        card=document.createElement("div");
        card.className="card";
        card.innerHTML+=`<h3>${element.id}</h3>`
       card.innerHTML+=`<h5>${element.name}</h5>`
       
       col.appendChild(card)
        row.appendChild(col);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });