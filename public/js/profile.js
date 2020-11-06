async function profileFormHandler(event) {
    event.preventDefault();
  
    // each checkbox value is declared indivually
    const eggsAllergy = document.querySelector("#eggs-allergy").checked;
    const fishAllergy = document.querySelector("#fish-allergy").checked;
    const glutenAllergy = document.querySelector("#gluten-allergy").checked;
    const peanutAllergy = document.querySelector("#peanut-allergy").checked;
    const shellfishAllergy = document
      .querySelector("#shellfish-allergy")
      .checked;
    const soyAllergy = document.querySelector("#soy-allergy").checked;
    const treenutAllergy = document
      .querySelector("#treenut-allergy")
      .checked;
    const wheatAllergy = document.querySelector("#wheat-allergy").checked;
  
    const celiac = document.querySelector("#celiac").checked;
    const sugarFree = document.querySelector("#sugar-free").checked;
    const gout = document.querySelector("#gout").checked;
    const hypertension = document.querySelector("#hypertension").checked;
    const lactoseIntolerant = document
      .querySelector("#lactose-intolerant")
      .checked;
  
    const buddhist = document.querySelector("#buddhist").checked;
    const hindu = document.querySelector("#hindu").checked;
    const jewish = document.querySelector("#jewish").checked;
    const muslim = document.querySelector("#muslim").checked;
  
    const alcoholFree = document.querySelector("#alcohol-free").checked;
    const caffineFree = document.querySelector("#caffine-free").checked;
  
    const atkins = document.querySelector("#atkins").checked;
    const keto = document.querySelector("#keto").checked;
    const lowCarb = document.querySelector("#low-carb").checked;
    const lowFat = document.querySelector("#low-fat").checked;
    const paleo = document.querySelector("#paleo").checked;
  
    const pescetarian = document.querySelector("#pescetarian").checked;
    const vegan = document.querySelector("#vegan").checked;
    const vegitarian = document.querySelector("#vegitarian").checked;
  
    // checkbox values are stored in an array
    const restrictionsArray = [
      eggsAllergy,
      fishAllergy,
      glutenAllergy,
      peanutAllergy,
      shellfishAllergy,
      soyAllergy,
      treenutAllergy,
      wheatAllergy,
      celiac,
      sugarFree,
      gout,
      hypertension,
      lactoseIntolerant,
      buddhist,
      hindu,
      jewish,
      muslim,
      alcoholFree,
      caffineFree,
      atkins,
      keto,
      lowCarb,
      lowFat,
      paleo,
      pescetarian,
      vegan,
      vegitarian,
    ];
  
    // for each element (checkbox)...
    restrictionsArray.forEach(checkPostData);
    console.log(restrictionsArray);
    // check if item has a value & post data
    async function checkPostData(item) {
      if (item) {
        const response = await fetch("/api/profiles", {
          method: "post",
          body: JSON.stringify({ item }),
          headers: { "Content-Type": "application/json" },
        });
  
        if (response.ok) {
          console.log(item);
        } else {
          alert(response.statusText);
        }
      }
    }
  }
  
  // event listener
  document
    .querySelector(".profile-form")
    .addEventListener("submit", profileFormHandler);
  