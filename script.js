let btnSection = document.getElementById('btnSection');
let bodySection = document.getElementById('bodySection');
let btnContainer = document.getElementById("btnContainer");

const catagoriesCall = async () => {
    const catagories = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
    const data = await catagories.json();
    const catagoriesData = data.data;
    displayBtn(catagoriesData);
}

const displayBtn = (catagoriesData) => {
    for (const catagoryData of catagoriesData) {
        let btn = document.createElement("button");
        btn.innerText = catagoryData.category;
        btn.classList.add("btn", "btn-outline", "btn-info");
        btnContainer.appendChild(btn);
        btnClick(btn, catagoryData);
    }
}

const btnClick = (btn, catagoryData) => {
    btn.addEventListener("click", function () {

        let categoryId = catagoryData.category_id;
        btnClickFetch(categoryId);

    });
}

const btnClickFetch = async (categoryId) => {
    let btnClickFetch = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    let idData = await btnClickFetch.json();
    console.log(idData);
}

catagoriesCall();