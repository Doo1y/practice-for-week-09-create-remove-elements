/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();

    const url = data.message; // URL of new dog image
    const breed = url.split("/").map((x, i, a) => {
      if (x === "breeds") return a[i + 1];
    });

    const unorderedList = document.getElementsByClassName('gallery')[0];
    unorderedList.children[0].innerHTML += `<li><figure><img src=${url} /><figcaption>${breed}</figcaption></figure></li>`
  } catch (e) {
    console.log("Couldn't fetch dog :(")
  }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
  document.getElementsByClassName('gallery')[0].children[0].children[0].remove()
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
  document.getElementsByClassName('gallery')[0].children[0].lastChild.remove();
});