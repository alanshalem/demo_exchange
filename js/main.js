const ARS = document.getElementById("input");
ARS.addEventListener("input", function (event) {
  let ARS = event.target.value;
  let dollarValue = document.getElementById("dollarID");
  dollarValue.innerHTML = ARS * 0.011;
  let poundsValue = document.getElementById("poundID");
  poundsValue.innerHTML = ARS * 0.0079;
  let euroValue = document.getElementById("euroID");
  euroValue.innerHTML = ARS * 0.0092;
});
