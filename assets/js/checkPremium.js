async function checkPremium() {
  const userCode = document.getElementById('input-code-premium').value;

  const response = await fetch(`/assets/api/codes?code=${userCode}`);
  const result = await response.json();

  if (result.valid) {
    alert("Your premium activated! Thank you so much");
  } else {
    alert("Error");
  }
}
