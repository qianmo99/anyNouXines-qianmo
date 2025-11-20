document.addEventListener('DOMContentLoaded', function () {
    // Countdown to Chinese New Year
    function updateCountdown() {
        const countdownElement = document.getElementById('countdown-days');

        // Get current date
        const currentDate = new Date();

        // Get next Chinese New Year date (February 17th)
        // First check if we've already passed Feb 17 in current year
        const currentYear = currentDate.getFullYear();
        let chineseNewYearDate = new Date(currentYear, 1, 17); // Month is 0-indexed (1 = February)

        // If today's date is past Feb 17 of current year, use next year's date
        if (currentDate > chineseNewYearDate) {
            chineseNewYearDate = new Date(currentYear + 1, 1, 17);
        }

        // Calculate the difference in days
        const timeDiff = chineseNewYearDate.getTime() - currentDate.getTime();
        const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

        // Update the countdown element
        countdownElement.textContent = daysDiff;
    }

    // Update countdown immediately
    updateCountdown();

    // Update countdown every day
    setInterval(updateCountdown, 86400000); // 86400000 ms = 24 hours

    // Sponsor logos rotation
    const sponsorLogos = document.querySelector('.sponsor-logos');

    // Solo ejecutar si existe el elemento sponsor-logos
    if (sponsorLogos && sponsorLogos.children && sponsorLogos.children.length > 0) {
        const logos = Array.from(sponsorLogos.children);
        let currentIndex = 0;

        function rotateLogos() {
            if (logos.length > 0) {
                const firstLogo = logos.shift();
                sponsorLogos.appendChild(firstLogo);
                logos.push(firstLogo);

                currentIndex = (currentIndex + 1) % logos.length;
            }
        }

        setInterval(rotateLogos, 1500);
    }
});