//url https://651096ae3ce5d181df5d63eb.mockapi.io/api/produk

//base url
const baseUrl = "https://651096ae3ce5d181df5d63eb.mockapi.io/api";

//endpoint
const produkEndpoint = `${baseUrl}/produk`;


function fetchProduk() {
    //get data produk
    fetch(produkEndpoint)
        .then((response) => response.json())
        .then((result) => {
            let tabelProduk = document.getElementById("tabelBodyProduk");

            let produk = "";

            result.forEach((item) => {
                produk +=`
                <tr>
                    <td>${item.nama}</td>
                    <td>${item.harga}</td>
                    <td>${item.keterangan}</td>
                </tr>
                `;
            });

            
            
            tabelProduk.innerHTML = produk;
        })
        .catch((error) => {
            console.log(error);
        })
}

function postProduk(produk) {
    fetch(produkEndpoint, {
        method: "POST",
        headers: {'content-type':'application/json'},
        body: JSON.stringify(produk)
       
    })
    .then((response) => response.json())
    .then((result) => {
        fetchProduk();
    })
    .finally(() => {
        alert("Produk Berhasil Ditambahkan");
    })
}


let formProduk = document.getElementById("formProduk");

formProduk.addEventListener("submit", (event) => {
    event.preventDefault();
    const nama = document.getElementById("nama").value;
    const harga = document.getElementById("harga").value;
    const keterangan = document.getElementById("keterangan").value;

    if (!nama) {
        alert("Nama harus diisi");
        return;
    }

    if (!harga) {
        alert("Harga harus diisi");
        return;
    }

    if (!keterangan) {
        alert("Keterangan harus diisi");
        return;
    }

    const produk = {
        nama: nama,
        harga: harga,
        keterangan: keterangan
    };
    postProduk(produk);
});

fetchProduk();