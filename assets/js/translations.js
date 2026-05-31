// async function checkTranslate() {
//   const text = document.getElementById('input-word').value;

//   // const response = await fetch(`/api/translate?translate=${text}&lang=${localStorage.getItem('language')}`);
//   // const result = await response.json();

//   // console.log(result.translation);
//   // document.getElementById('input-translation').value = result.translation;
// }
// import { pipeline } from 'https://jsdelivr.net';

// let translatorInstance = null;

// export async function translateWord(text, targetLang) {
//   if (!translatorInstance) {
//     translatorInstance = await pipeline('translation', 'Xenova/m2m100_418M', {
//       quantized: true,
//     });
//   }

//   const output = await translatorInstance(text, {
//     tgt_lang: targetLang,
//   });

//   return output.translation_text;
// }