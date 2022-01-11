for(i=0;i<150;i=i+15){
 document.getElementById("WaktuPertandingan").innerHTML += "<Option value= "+i+">"+i+" Menit</option>";
}
function score(){
    let TimA = document.getElementById("TimA").value;
    let TimB = document.getElementById("TimB").value;
    let WaktuPertandingan = document.getElementById("waktuPertandingan").value;
    let pesan ;
    if ( WaktuPertandingan <= 45 ){
        pesan = "Pertandingan Babak Pertama";
    } else if ( WaktuPertandingan <=90 ) {
        pesan = "Pertandingan Babak Kedua";
    } else if (WaktuPertandingan >= 90 && timA > TimB){
        pesan = "Pemenang Tim A";
    } else if (WaktuPertandingan >= 90 && timA<TimB){
        pesan = "pemenang tim B";
    }if(WaktuPertandingan == 90 && timA==TimB){
        pesan = "perpanjangan waktu 2x 15 menit";
    }else if(WaktuPertandingan >= 135 && timA==TimB){
        pesan ="adu pinalti " ;
    } 
    message("score",
    "Skor TIM A :" + timA +
    "Skor TIM B :" + TimB +
    pesan); 
  }

  document.getElementById("judulbola").onmouseover = function (){
    document.getElementById("judulbola").style.backgroundColor = "red" ;
  };

  document.getElementById("judulbola").onmouseout = function (){
    document.getElementById("judulbola").style.backgroundColor = "whitesmoke" ;
  };

  document.getElementById("timA").onmouseup = function (){
    document.getElementById("timA").style.color = "green" ;
  };
  document.getElementById("timB").onmousedown = function (){
    document.getElementById("timB").style.color = "green" ;
    document.getElementById("timB").style.backgroundColor = "whitesmoke" ;
  };
