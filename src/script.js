function countdown() {
    const eventDate = new Date("March 4, 2025 00:00:00").getTime(); // Atualizado para 2025
    const now = new Date().getTime();
    const timeLeft = eventDate - now;
  
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
  
    if (timeLeft < 0) {
      document.getElementById("countdown").innerHTML = "O evento já aconteceu!";
    }
  }
  
  setInterval(countdown, 1000);
  