document.addEventListener("DOMContentLoaded", function() {
    // Dynamiczna data i czas
    function updateDateTime() {
        const dateTimeElement = document.getElementById('datetime');
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        dateTimeElement.textContent = now.toLocaleDateString('pl-PL', options);
    }
    setInterval(updateDateTime, 100);

    // Obsługa formularza rezerwacji
    window.calculatePrice = function() {
        const days = document.getElementById('days').value;
        const car = document.getElementById('car').value;
        let pricePerDay;

        switch(car) {
            case 'osobowy':
                pricePerDay = 100;
                break;
            case 'dostawczy':
                pricePerDay = 150;
                break;
            case 'luksusowy':
                pricePerDay = 200;
                break;
            case 'sportowy':
                pricePerDay = 250;
                break;
        }

        const totalPrice = days * pricePerDay;
        document.getElementById('price').textContent = `Całkowity koszt wynajmu: ${totalPrice} PLN`;
    }

    // Galeria zdjęć (slider)
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slider img');
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    setInterval(nextSlide, 2750);
    showSlide(currentSlide);
});
