//fungsi hitung dipanggil di event onclick pada button proses
function hitung(){
  //variabel yang menampung hasil inputan dari form text nilai-1
  let nilai1 = document.getElementById("nilai1").value ;
  //variabel yang menampung hasil inputan dari form text nilai-2
  let nilai2 = document.getElementById("nilai2").value ;
  //variabel yang menampung hasil inputan dari form combobox "action"
  let action = document.getElementById("action").value;
  //deklarasi variabel hasil, dengan memberi nilai awal hasil = 0;
  if (nilai1 === "" &&  nilai2 === ""){
    message("hasilkalkulatorfalse","Nilai 1 dan 2 wajib diisi");
  } else if (nilai1 === "" || nilai1 === null) {
    message("hasilkalkulatorfalse","Nilai 1 wajib diisi");
  }else if( nilai2 === "" || nilai2 === null){
    message("hasilkalkulatorfalse","Nilai 2 wajib diisi");
  } else {
   if (action == "+") {
    hasil = Number(nilai1) + Number(nilai2);
    cleartext();
  } else if (action == "-") {
    hasil = nilai1 - nilai2;
    cleartext();
  } else if (action == "-") {
    hasil = nilai1-nilai2;
    cleartext();
  } else if (action == "/") {
    hasil = nilai1/nilai2;
    cleartext();
  } else if (action == "*") {
    hasil = nilai1*nilai2;
    cleartext();
  }
}
  //ini memanggil function message(id, text) yang ada di file main.js
  message("hasilkalkulator", `Hasil Perhitungan: ${nilai1} ${action} ${nilai2} = ${Math.ceil(hasil)}`);
}
function cleartext(){
  document.getElementById("nilai1").value = "" ;
  document.getElementById("nilai2").value = "" ;
}