import readlineSync from "readline-sync";
let words = [];
let isvalid = true;
let previouslength = 0;

for (let i = 0; i < 5; i++) {
  let word = readlineSync.question(`Enter word ${i + 1}: `);

  if (word.length > previouslength) {
    words[i] = word;
    previouslength = word.length;
  } else {
    isvalid = false;
    words[i] = word;
  }
}

console.log("\nYou entered:");
for (let i = 0; i < words.length; i++) {
  console.log(words[i]);
}

if (isvalid) {
  console.log("\n✅ Success: Each word was longer than the previous one!");
} else {
  console.log("\n❌ Failed: Not all words were longer than the previous one.");
}
