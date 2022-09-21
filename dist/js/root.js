alert('selamat datang..');

var tess = true;

for (var t = 0; t < 3; t++) {
    var nama = prompt('isi nama Kamu ');
    if (nama) {
        alert('halo' + ' ' + nama);
        alert('wahh kamu cantik banget yaa hari ini ' + nama);
    } else {
        alert('anda belum mengisi nama');
        tess = confirm('mau isi lagi ga??');
        if (tess) {
            var nama = prompt('isi nama kamu ');
        }
    }
}