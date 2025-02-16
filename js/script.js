const apiUrl = "https://icanhazdadjoke.com";

let mainBody = document.getElementById("main_div");

let nextBtn = document.getElementById("next_btn");

const apiData = async () => {
  try {
    const data = await fetch(apiUrl, {
      headers: {
        Accept: "application/json",
      },
    });

    const result = await data.json();

    mainBody.innerHTML = result.joke;
  } catch (error) {
    // alert(`There's a ${error}`);
  }
};

apiData();

nextBtn.addEventListener("click", apiData);
