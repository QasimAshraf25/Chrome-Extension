window.onload = function()
{
  function doit()
  {
    var input=document.getElementById("inquery").value;
    var answer = input / 1000;
    document.getElementById("ouquery").value=answer;
  }
  document.getElementById('conbutton').onclick=doit;
}
