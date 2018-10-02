<script>
var judgeMain = document.getElementById('main-cal');
if(judgeMain != null){
  var b = judgeMain.getElementsByClassName('ai1ec-calendar-view')[0];
  var c = b.getElementsByClassName('ai1ec-week');
  for(var i = 0; i< c.length; i++){
    var d = c[i].getElementsByTagName('td');
    for(var j = 0; j < d.length; j++){
      if(d[j].classList.contains('ai1ec-today') == true){
        i = i + 1;
      };
    };
    c[i].style.display = "none";
  }
}
</script>
