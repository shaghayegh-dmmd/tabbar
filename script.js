let btns = Array.from(document.getElementsByClassName("link-wp"));
let content = document.querySelector(".content-div");
let post = document.querySelector(".posts");
let tab_bar = document.querySelector(".tab-bar");

async function getData(url) {
  const response = await fetch(url);
  return await response.json();
}

btns.map((item, index, btns) => {
  item.addEventListener("click", (e) => {
    btns.map((item, index1) => {
      if (index === index1) {
        item.style.backgroundColor = "#ffe66c";
        item.style.color = "black";
      } else {
        item.style.backgroundColor = "#3d3d3d";
        item.style.color = "white";
      }
    });

    getData("https://jsonplaceholder.typicode.com/users").then((listData) =>
      listData.map((item) => {
        console.log(item);
        // create all elements
        let div_card = document.createElement("div");
        let div_img = document.createElement("div");
        let div_text = document.createElement("div");
        let img = document.createElement("img");
        let title = document.createElement("p");
        let date = document.createElement("p");

        // add classes
        div_card.classList.add("card_div")
        div_img.classList.add("img_div")
        div_text.classList.add("text_div")
        img.classList.add("img")
        title.classList.add("title")
        date.classList.add("date")

        // append childs
        div_card.appendChild(div_img)
        div_card.appendChild(div_text);
        div_img.appendChild(img)
        div_text.appendChild(title)
        div_text.appendChild(date)

        img.alt = item.username;
        title.textContent = item.name;
        date.textContent = item.phone;

        post.appendChild(div_card);

        console.log(div_card)
      })
    );
  });
});
