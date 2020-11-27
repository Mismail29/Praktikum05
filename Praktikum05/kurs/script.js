function convert() {

    var nilai         = document.getElementById("nilaiuang").value;
    
    var nilai_rupiah         = document.getElementById("rupiah");
    var nilai_rupiahvalue    = nilai_rupiah.options[nilai_rupiah.selectedIndex].value;
    var nilai_rupiahtext     = nilai_rupiah.options[nilai_rupiah.selectedIndex].text;

    var kurs_uang         = document.getElementById("input_uang");
    var kurs_uangvalue    = kurs_uang.options[kurs_uang.selectedIndex].value;
    var kurs_uangtext     = kurs_uang.options[kurs_uang.selectedIndex].text;

    var kurs_hasil        = kurs_uangvalue*nilai;

    document.getElementById("hasil").value = kurs_hasil;
    document.getElementById("textarea").value = nilai +" "+ kurs_uangtext +" Sama Dengan Rp. "+ kurs_hasil +" "+ nilai_rupiahtext;

}
function focus(){
    var input = document.getElementById("nilaiuang");
    input.focus();
}
