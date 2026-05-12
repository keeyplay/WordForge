async function checkPremium() {
  const userCode = document.getElementById('input-code-premium').value;

  const response = await fetch(`/api/codes?code=${userCode}`);
  const result = await response.json();

  if (result.valid) {
    alert("Your premium activated! Thank you so much");
    localStorage.setItem("premium", userCode);
  } else {
    alert("Error");
    document.getElementById("activateButton").replaceWith("Try later");
  }
}

//for another conditions (activate was premium?)
async function reloadPremium() {
  if(localStorage.getItem("premium")) {
    const response = await fetch(`/api/codes?code=${localStorage.getItem("premium")}`);
    const result = await response.json();

    if (result.valid) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
