function init(){
//add your javascrip between these two lines of code
  var input;
  var button = document.getElementById("entrybutton");
  button.addEventListener("click", function()
  {
    alert("Congratulations, You are Registered! You will receive an email regarding the next steps shortly");
  });
}
window.addEventListener('load', init);