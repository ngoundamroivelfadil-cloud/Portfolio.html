// Script Javascript pour ajouter des interactions 

document.addEventListener('DOMContentLoaded', () => {

    // 1. Animation d'apparition des sections au scroll (Intersection Observer)
    const fadeElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 // Déclenche l'animation quand 20% de la section est visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        sectionObserver.observe(element);
    });

    // 2. Gestion du formulaire de contact avec Alert
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Empêche le rechargement de la page
            
            // Récupère les valeurs
            const nom = document.getElementById('nom').value;
            const prenom = document.getElementById('prenom').value;
            
            // Affiche un joli message javascript
            alert(`Merci ${prenom} ! Votre message a bien été envoyé.`);
            
            // Réinitialise le formulaire
            contactForm.reset();
        });
    }

    // 3. Changement de style au clic sur la navigation
    const navLinks = document.querySelectorAll('.navigation a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Retire la couleur active de tous les liens
            navLinks.forEach(l => {
                l.style.color = '';
                l.style.background = '';
            });
            // Ajoute une couleur spéciale au lien cliqué
            this.style.color = '#38bdf8';
            this.style.background = 'rgba(56, 189, 248, 0.1)';
        });
    });

    // 5. Effet Machine à écrire (Typewriter)
    const typedTextSpan = document.getElementById("typed-text");
    const textArray = ["Passionné par le développement web", "Créatif et rigoureux", "Je donne vie à vos idées"];
    const typingDelay = 80;
    const erasingDelay = 40;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }

    if (typedTextSpan) {
        setTimeout(type, newTextDelay + 250);
    }

    // 7. Animation des compteurs (Statistiques)
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stat = entry.target;
                const target = +stat.getAttribute('data-target');
                const duration = 2000; 
                const increment = target / (duration / 16);
                let current = 0;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        stat.innerText = Math.ceil(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        stat.innerText = target;
                    }
                };
                updateCounter();
                observer.unobserve(stat); // Arrête d'observer une fois l'animation terminée
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => statsObserver.observe(stat));

    // 4. Bouton Retour en haut
    const backToTopButton = document.getElementById('back-to-top');
    
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.style.display = 'flex';
            } else {
                backToTopButton.style.display = 'none';
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

});
