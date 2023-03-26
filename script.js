let pressCount = 0;

function countPress() {
  pressCount++;
  document.getElementById("press-count").innerHTML = pressCount + " people have shown interest so far.";
  document.getElementById("interest-form").style.display = "block";
}
