import { data } from './data.js';

const inputValue = document.getElementById('inputValue');
const hasil = document.getElementsByClassName('hasil');
let timer = null;

inputValue.addEventListener('keyup', (event) => {
  //function debounce
  if (timer) clearTimeout(timer);
  timer = setTimeout(function () {
    const coba = data.filter(
      (item) => item.nim.toString() === event.target.value
    );
    if (coba !== undefined)
      coba.map((item) =>
        newName(
          item.nama_lengkap,
          item.nama_panggilan,
          item.nomor_telepon,
          item.id_line,
          item.nim,
          item.email,
          item.hobi
        )
      );
    if (event.target.value === '' || coba.length === 0) {
      const warning = document.createElement('p');
      warning.innerText = 'Data tidak ditemukan !';
      hasil[0].innerHTML = '';
      hasil[0].append(warning);
    }
    timer = null;
  }, 1000);
});

function newName(fullName, name, telp, line, nim, email, hobi) {
  hasil[0].innerHTML = '';
  const containerFullName = document.createElement('p');
  containerFullName.innerText = 'Nama lengkap : ' + fullName;
  const containerName = document.createElement('p');
  containerName.innerText = 'Nama panggilan : ' + name;
  const containerTelp = document.createElement('p');
  containerTelp.innerText = 'Nomor telepon : ' + telp;
  const containerLine = document.createElement('p');
  containerLine.innerText = 'ID Line : ' + line;
  const containerNim = document.createElement('p');
  containerNim.innerText = 'NIM : ' + nim;
  const containerEmail = document.createElement('p');
  containerEmail.innerText = 'Email : ' + email;
  const containerHobi = document.createElement('p');
  containerHobi.innerText = 'Hobi : ' + hobi;

  hasil[0].append(
    containerFullName,
    containerName,
    containerTelp,
    containerLine,
    containerNim,
    containerEmail,
    containerHobi
  );
}
