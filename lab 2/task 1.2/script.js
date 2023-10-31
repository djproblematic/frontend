let tds = document.querySelectorAll("td");

tds.forEach((kkk, index) => {
    if (index % 2 == 0) {
        kkk.classList.add("selected");
    }
})
