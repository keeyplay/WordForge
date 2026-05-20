async function checkTranslate() {
  const text = document.getElementById('input-word').value;

  const response = await fetch(`/api/translate?translate=${[text, localStorage.getItem('language')]}`);
  const result = await response.json();

  console.log(result.translation);
  document.getElementById('input-translation').value = result.translation;
}