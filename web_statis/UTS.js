function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    sidebar.style.width = sidebar.style.width === '250px' ? '0' : '250px';
}
const buttons = document.querySelectorAll('button');

buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
} )
function submitForm() {
    var form = document.getElementById('reservation-form');
    var nama = form.elements['nama'].value;
    var email = form.elements['email'].value;
    var tanggalCheckin = form.elements['tanggal-checkin'].value;
    var tanggalCheckout = form.elements['tanggal-checkout'].value;
    var jumlahTamu = form.elements['jumlah-tamu'].value;

    console.log('Nama:', nama);
    console.log('Email:', email);
    console.log('Tanggal Check-in:', tanggalCheckin);
    console.log('Tanggal Check-out:', tanggalCheckout);
    console.log('Jumlah Tamu:', jumlahTamu);

}ZZZZZ
