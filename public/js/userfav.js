async function profileFormHandler(event) {
  event.preventDefault();
  M.toast({ html: 'Profile Updated Successfully!' });

  const restrictionsArray = [];
  const restrict = document.forms[0];

  for (var i = 0; i < restrict.length; i++) {
    if (restrict[i].checked) {
      restrictionsArray.push(restrict[i].value);
    }
  }

  // for each element (checkbox)...
  restrictionsArray.forEach(checkPostData);

  // check if item has a value & post data
  async function checkPostData(item) {
    const response = await fetch(`api/profiles/restriction/` + item,
      {
        method: "get",
        headers: { "Content-Type": "application/json" }
      }
    );
    if (response.ok) {
    } else {
      const response = await fetch("/api/profiles", {
        method: "post",
        body: JSON.stringify({ restriction_id: item }),
        headers: { "Content-Type": "application/json" },
      });
    }
  }
}

// event listener
document
  .querySelector(".profile-form")
  .addEventListener("submit", profileFormHandler);