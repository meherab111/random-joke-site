let mainBody = document.getElementById("main-div");

let nextBtn = document.getElementById("next-btn");

const apiUrl = "https://icanhazdadjoke.com";

// Api Fetch And Execute Functionality.

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
    alert(`There's a ${error}`);
  }
};

apiData();

// Next Button Click

nextBtn.addEventListener("click", apiData);
