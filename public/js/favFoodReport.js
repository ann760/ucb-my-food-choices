const delAcc = document.querySelector("#deleteAcc");
const elems = document.querySelectorAll('.modal');
const instances = M.Modal.init(elems);
const closeModal = document.querySelector('#close');
const deleteAccount = document.querySelector('#delete');
const entreeTable = document.getElementById("entree-table");
const sidesTable = document.getElementById("sides-table");
const dessertTable = document.getElementById("dessert-table");
const beverageTable = document.getElementById("beverage-table");
const guestCountEl = document.getElementById("guestCount");

function createTableElem(food_name, id, newDict, table) {
  let tdElem = document.createElement('td');
  let tdCountElem = document.createElement('td');
  tdElem.textContent = food_name;
  if (id in newDict) {
    tdCountElem.textContent = newDict[id];
  }
  else {
    tdCountElem.textContent = 0;
  }
  table.appendChild(document.createElement('tbody'));
  table.appendChild(tdElem);
  table.appendChild(tdCountElem);
}

async function reportHandler() {

  console.log('in this function');
  const response = await fetch(`/api/favorite/favorite`, {
    method: "get",
    headers: { "Content-Type": "application/json" }
  });
  const responseCount = await fetch(`/api/userfav/favreports`, {
    method: "get",
    headers: { "Content-Type": "application/json" }
  })
  if (response.ok && responseCount.ok) {
    const finalDict = await response.json();
    console.log(finalDict);
    const finalCountDict = await responseCount.json();

    console.log(finalCountDict);
    const newDict = {};
    let guestCount = 0;
    for (j = 0; j < finalCountDict.length; j++) {
      newDict[finalCountDict[j].favorite_id] = finalCountDict[j].count;
      guestCount+=finalCountDict[j].count;
    }
    guestCountEl.textContent = guestCount;
    console.log(newDict);
    for (i = 0; i < finalDict.length; i++) {

      if (finalDict[i].food_category === 'Entree') {
        createTableElem(finalDict[i].food_name, finalDict[i].id, newDict, entreeTable);
      }
      else if (finalDict[i].food_category === 'Sides') {
        createTableElem(finalDict[i].food_name, finalDict[i].id, newDict, sidesTable);
      }
      else if (finalDict[i].food_category === 'Dessert') {
        createTableElem(finalDict[i].food_name, finalDict[i].id, newDict, dessertTable);
      }
      else {
        createTableElem(finalDict[i].food_name, finalDict[i].id, newDict, beverageTable);
      }
    }
  }
}


function openModalHandler(event) {
  event.preventDefault();
  instances[0].open();
}

function closeModalHandler(event) {
  event.preventDefault();
  instances[0].close();
}

async function deleteAccountHandler(event) {
  event.preventDefault();
  const id = parseInt(delAcc.dataset.account);

  const response = await fetch(`/api/users/${id}`, {
    method: "delete",
  });
  console.log(response.body);
  if (response.ok) {

    M.toast({ html: "Account Deleted Successfully!" });
    logoutFormHandler();

  }

}
// event listener
//document.addEventListener("load", reportHandler);
document.body.onload = function () { reportHandler(); }

delAcc.addEventListener('click', openModalHandler);
closeModal.addEventListener('click', closeModalHandler);
deleteAccount.addEventListener('click', deleteAccountHandler);