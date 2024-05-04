  // JavaScript untuk mengubah salam
  const date = new Date();
  const hours = date.getHours();

  let greetings;
  if (hours < 12) {
    greetings = "Selamat pagi!";
  } else if (hours >= 12 && hours <= 17) {
    greetings = "Selamat siang!";
  } else {
    greetings = "Selamat malam!";
  }

  document.querySelector('.greetings').innerText = greetings;

  // JavaScript untuk menampilkan tanggal dan jam
  setInterval(() => {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false };
    const formattedDate = now.toLocaleDateString('en-US', options);
    document.querySelector('.datetime').innerText = formattedDate;
  }, 1000);

// JavaScript untuk menangani klik pada navbar "Contact"
document.querySelector('.contact-link').addEventListener('click', function(event) {
  event.preventDefault(); // Mencegah link default
  if (confirm('Anda akan keluar dari halaman. Lanjutkan?')) { // Menampilkan konfirmasi
    window.location.href = this.href; // Mengarahkan ke link yang dituju
  }
});