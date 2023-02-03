//move capital letters to the front
function capToFront(s) {
    let capitalLetters = '';
    let lowercaseLetters = '';
    for (let i = 0; i < s.length; i++) {
      if (s[i] >= 'A' && s[i] <= 'Z') {
        capitalLetters += s[i];
      } else {
        lowercaseLetters += s[i];
      }
    }
    return capitalLetters + lowercaseLetters;
  }
  console.log(capToFront("hApPy")); // Output: "Aphpy"
  console.log(capToFront("moveMENT")); // Output: "MENTmove"
  console.log(capToFront("shOrtCAKE")); // Output: "OCAKEshrt"
  