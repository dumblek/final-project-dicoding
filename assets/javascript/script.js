const poto = document.querySelector('.image-profil');

poto.addEventListener('click',function(event){
// mendapatkan objek elemen yang diklik
    const target = event.target;
    target.src='assets/image/foto2.png';
});