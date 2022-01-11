document.getElementById("namadaftar").onkeydown = function (){
let nama = document.getElementById("namadaftar").value;
let kode = nama.substring(0,3); 
let tahun = "2022" ;
document.getElementById("kodedaftar").value = kode +  tahun ; 
}

document.getElementById("namadaftar").onkeyup = function (){
let ket = document.getElementById("namadaftar");
ket.value = ket.value.toUpperCase();
};

document.getElementById("TTL").onchange = function (text){
let input = document.getElementById("TTL").value ;
let d = new Date(input);
let year = d.getFullYear();
let umur = (2022-year);
let status = "tahun" ;
text = umur ;
document.getElementById("tampilumur").innerHTML = "<b>" + text + status + "</b>";
document.getElementById("tampilumur").style.display = "inline";
if( umur <= 17 ){
    alert("Mohon Maaf Anda Belum Bisa Mendaftar Karena Belum 18 Tahun")
}else{
 document.getElementById("kumpulkan").value ;
}
}
 document.getElementById("alamat").onchange = function(){
   let cekalamat  = document.getElementById("alamat").value; 
   let panjang  = cekalamat.length ;
   text = "Panjang Karakter min.30 Karakter" ;
   if( panjang <= 30 ) {
    document.getElementById("pjgtxt").innerHTML = "<b>" + text + "</b>";
    document.getElementById("pjgtxt").style.display = "inline";
   }else{
     document.getElementById("pjgtxt").style.display="none";
   } 
 } 

 function post () {
  // text = document.getElementById("kode").value ;
  // document.getElementById("kode").value = document.getElementById("kodedaftar").value ;
  // document.getElementById("kode").innerHTML = "<b>" + text + "</b>";
  // document.getElementById("kode").style.display = "inline";
  let tmpkode = document.getElementById("kodedaftar").value ;
  let tmpnama = document.getElementById("namadaftar").value ;
  let tmpttl  = document.getElementById("TTL").value ;
  let tmpmail = document.getElementById("email").value ;
  let tmpjk =  document.getElementById("JK").value ;
  let tmpadd = document.getElementById("alamat").value ;
  // let mastersbmt = tmpkode + tmpnama + tmpttl +tmpmail + tmpjk + tmpadd ;
  document.getElementById("kumpulkan").innerHTML = "<tbody> <tr> <th scope='row'>"+ tmpkode + "</th><td>"+tmpnama+"</td><td>"+tmpttl+"</td><td>"+tmpmail+"</td><td>"+tmpjk+"</td><td>"+tmpadd+"</td></tr>";
  document.getElementById("kumpulkan").style.display = "inline";
 }
