// Variable to track language globally
let currentLang = 'fr';

const translations = {
    fr: {
        "header-subtitle": "Étudiant à l'université de Yaoundé 1",
        "btn-contact": "Me contacter",
        "nav-home": "Accueil",
        "nav-about": "À Propos",
        "nav-skills": "Compétences",
        "nav-projects": "Projets",
        "nav-journey": "Mon parcours",
        "nav-contact": "Contact",
        "about-title": "À Propos",
        "about-text": `Je m'appelle MOUNBEKET NGOUNDAM V ABDEL FADIL, étudiant en développement web. \n                             Développeur web passionné, je conçois des sites modernes, \n                            élégants et performants. Maîtriser le code c'est avoir le \n                            pouvoir de transformer une simple idée en une réalité visible \n                            par le monde entier. Et crois-moi, ce sentiment est \n                            incomparable ! 💻  <br><br>\n                            Je suis passionné par la création de sites web et j'apprends chaque jour \n                            de nouvelles technologies. Mon objectif est de devenir un développeur \n                            web fullstack compétent et créatif.`,
        "btn-cv": "Télécharger mon CV",
        "skills-title": "Mes Compétences",
        "skills-tech": "<span class=\"emoji\">💻</span> Techniques & Outils",
        "skills-design": "<span class=\"emoji\">🎨</span> Design & Graphisme",
        "skills-soft": "<span class=\"emoji\">🤝</span> Savoir-être (Soft Skills)",
        "skill-team": "Travail en équipe",
        "skill-problem": "Résolution de problèmes",
        "skill-org": "Organisation",
        "skill-rigor": "Rigueur professionnelle",
        "skill-deco": "Décoration / Design",
        "skill-crea": "Créativité Web",
        "skill-maintenance": "Maintenance Informatique",
        "projects-title": "Mes Projets",
        "proj1-title": "Site d'Entreprise & Centralisation",
        "proj1-desc": "Développement d'un site web structuré avec HTML5 et complètement stylisé via CSS3. Le code est sécurisé avec Git et hébergé en ligne grâce à GitHub Pages.",
        "proj2-title": "Architecture Système et Gestion",
        "proj2-desc": "Création d'une base de données métier sous Microsoft Access pour administrer efficacement les informations. Rédaction des guides et rapports via Microsoft Word.",
        "stat-projects": "Projets Réalisés",
        "stat-years": "Années d'Études",
        "stat-passion": "Passion",
        "stat-hours": "Heures de code / sem",
        "journey-title": "Mon parcours",
        "journey-l2": "Licence 2 - Spécialisation Web",
        "journey-l2-desc": "Informatique et spécialisation en développement Web",
        "journey-l1": "Licence 1 - Informatique",
        "journey-l1-desc": "Informatique et développement Web",
        "journey-bac": "Baccalauréat",
        "journey-bac-desc": "Série D",
        "journey-prob": "Probatoire",
        "journey-prob-desc": "Série D",
        "contact-title": "Contact",
        "lbl-nom": "Nom :",
        "lbl-prenom": "Prenom :",
        "lbl-email": "Email :",
        "lbl-service": "Quel service vous intéresse ? :",
        "opt-default": "-- Sélectionnez un service --",
        "opt-1": "Création de site web",
        "opt-2": "Refonte de site web",
        "opt-3": "Maintenance et hébergement",
        "opt-4": "Autre demande",
        "lbl-msg": "Message :",
        "btn-send": "Envoyer le message",
        "ft-github": "👨‍💻 Profil GitHub",
        "ft-linkedin": "💼 Profil LinkedIn",
        "testimonials-title": "Ce qu'ils disent de moi",
        "test-1-text": "\"Un développeur très talentueux. Notre site a été livré en avance et dépasse nos attentes !\"",
        "test-1-author": "- Client Modèle",
        "test-2-text": "\"Je suis convaincu qu'Abdel Fadil deviendra un grand développeur web. Il apprend très vite et est toujours prêt à relever de nouveaux défis.\"",
        "test-2-author": "- Encardreur PropentaTech",
        "test-3-text": "\"Excellent sens du design et une maîtrise technique impeccable. Je recommande fortement !\"",
        "test-3-author": "- Designer UI/UX",
        "term-out-1": "Mounbeket Ngoundam V Abdel Fadil",
        "term-out-2": "{<br>&nbsp;&nbsp;\"frontend\": [\"HTML5\", \"CSS3\", \"JavaScript\", \"React\"],<br>&nbsp;&nbsp;\"backend\": [\"Node.js\", \"SQL\"],<br>&nbsp;&nbsp;\"status\": \"Disponible pour de nouveaux défis\"<br>}"
    },
    en: {
        "header-subtitle": "Student at the University of Yaoundé 1",
        "btn-contact": "Contact me",
        "nav-home": "Home",
        "nav-about": "About",
        "nav-skills": "Skills",
        "nav-projects": "Projects",
        "nav-journey": "My Journey",
        "nav-contact": "Contact",
        "about-title": "About",
        "about-text": `My name is MOUNBEKET NGOUNDAM V ABDEL FADIL, a web development student. \n                             As a passionate web developer, I design modern, \n                            elegant, and performant sites. Mastering code means having the \n                            power to transform a simple idea into a reality visible \n                            by the whole world. And believe me, that feeling is \n                            incomparable! 💻  <br><br>\n                            I am passionate about creating websites and I learn new \n                            technologies every day. My goal is to become a competent and creative \n                            fullstack web developer.`,
        "btn-cv": "Download my CV",
        "skills-title": "My Skills",
        "skills-tech": "<span class=\"emoji\">💻</span> Techniques & Tools",
        "skills-design": "<span class=\"emoji\">🎨</span> Design & Graphics",
        "skills-soft": "<span class=\"emoji\">🤝</span> Soft Skills",
        "skill-team": "Teamwork",
        "skill-problem": "Problem solving",
        "skill-org": "Organization",
        "skill-rigor": "Professional rigor",
        "skill-deco": "Decoration / Design",
        "skill-crea": "Web Creativity",
        "skill-maintenance": "IT Maintenance",
        "projects-title": "My Projects",
        "proj1-title": "Corporate Website & VCS",
        "proj1-desc": "Development of a structured website using HTML5 and fully styled with CSS3. The codebase is secured using Git and hosted online via GitHub Pages.",
        "proj2-title": "Database & Documentation",
        "proj2-desc": "Creation of a business database using Microsoft Access to efficiently administer information. Wrote detailed system guides and reports with Microsoft Word.",
        "stat-projects": "Projects Completed",
        "stat-years": "Years of Study",
        "stat-passion": "Passion",
        "stat-hours": "Hours of code / week",
        "journey-title": "My Journey",
        "journey-l2": "Bachelor 2 - Web Specialization",
        "journey-l2-desc": "Computer Science and Web Development Specialization",
        "journey-l1": "Bachelor 1 - Computer Science",
        "journey-l1-desc": "Computer Science and Web Development",
        "journey-bac": "High School Diploma",
        "journey-bac-desc": "Science Series (D)",
        "journey-prob": "Probationary Exam",
        "journey-prob-desc": "Science Series (D)",
        "contact-title": "Contact",
        "lbl-nom": "Last Name :",
        "lbl-prenom": "First Name :",
        "lbl-email": "Email :",
        "lbl-service": "Which service interests you? :",
        "opt-default": "-- Select a service --",
        "opt-1": "Website creation",
        "opt-2": "Website redesign",
        "opt-3": "Maintenance and hosting",
        "opt-4": "Other request",
        "lbl-msg": "Message :",
        "btn-send": "Send message",
        "ft-github": "👨‍💻 GitHub Profile",
        "ft-linkedin": "💼 LinkedIn Profile",
        "testimonials-title": "What they say about me",
        "test-1-text": "\"A very talented developer. Our website was delivered early and exceeded our expectations!\"",
        "test-1-author": "- Model Client",
        "test-2-text": "\"I am convinced that Abdel Fadil will become a great web developer. He learns very fast and is always ready to take on new challenges.\"",
        "test-2-author": "- PropentaTech Supervisor",
        "test-3-text": "\"Excellent sense of design and flawless technical mastery. I highly recommend!\"",
        "test-3-author": "- UI/UX Designer",
        "term-out-1": "Mounbeket Ngoundam V Abdel Fadil",
        "term-out-2": "{<br>&nbsp;&nbsp;\"frontend\": [\"HTML5\", \"CSS3\", \"JavaScript\", \"React\"],<br>&nbsp;&nbsp;\"backend\": [\"Node.js\", \"SQL\"],<br>&nbsp;&nbsp;\"status\": \"Available for new challenges\"<br>}"
    }
};

const typewriterTexts = {
    fr: ["Passionné par le développement web", "Créatif et rigoureux", "Je donne vie à vos idées"],
    en: ["Passionate about web development", "Creative and rigorous", "I bring your ideas to life"]
};

document.addEventListener('DOMContentLoaded', () => {

    // -- PRELOADER LOGIC --
    const preloader = document.getElementById('preloader');
    const loaderBar = document.getElementById('loader-bar');
    const loaderCount = document.getElementById('loader-count');
    
    if (preloader) {
        document.body.classList.add('loading');
        let progress = 0;
        
        // Chargement progressif simulé
        const preloadInterval = setInterval(() => {
            progress += Math.floor(Math.random() * 12) + 2; 
            if (progress >= 100) {
                progress = 100;
                clearInterval(preloadInterval);
                loaderBar.style.width = '100%';
                loaderCount.innerText = '100%';
                
                setTimeout(() => {
                    preloader.style.opacity = '0';
                    preloader.style.visibility = 'hidden';
                    document.body.classList.remove('loading');
                }, 600); // Disparait 0.6s après 100%
            } else {
                loaderBar.style.width = `${progress}%`;
                loaderCount.innerText = `${progress}%`;
            }
        }, 80);
    }

    // -- THEME TOGGLE (DARK / LIGHT) --
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    let isLightMode = false;
    
    if(themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            isLightMode = !isLightMode;
            if(isLightMode) {
                body.classList.add('light-mode');
                themeToggleBtn.innerText = '🌙';
                themeToggleBtn.title = currentLang === 'fr' ? 'Activer le mode sombre' : 'Enable Dark Mode';
            } else {
                body.classList.remove('light-mode');
                themeToggleBtn.innerText = '☀️';
                themeToggleBtn.title = currentLang === 'fr' ? 'Activer le mode clair' : 'Enable Light Mode';
            }
        });
    }

    // -- PARTICLES BACKGROUND CANVAS --
    const canvas = document.getElementById('particles-canvas');
    if(canvas) {
        const ctx = canvas.getContext('2d');
        let particlesArray = [];
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        });
        
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1;
                this.speedX = Math.random() * 1 - 0.5;
                this.speedY = Math.random() * 1 - 0.5;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                
                if(this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if(this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }
            draw() {
                ctx.fillStyle = isLightMode ? 'rgba(56, 189, 248, 0.4)' : 'rgba(56, 189, 248, 0.2)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }
        }
        
        function initParticles() {
            particlesArray = [];
            let numberOfParticles = (canvas.width * canvas.height) / 7000;
            for(let i=0; i<numberOfParticles; i++){
                particlesArray.push(new Particle());
            }
        }
        
        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for(let i=0; i<particlesArray.length; i++){
                particlesArray[i].update();
                particlesArray[i].draw();
                
                // Connection
                for(let j=i; j<particlesArray.length; j++){
                    let dx = particlesArray[i].x - particlesArray[j].x;
                    let dy = particlesArray[i].y - particlesArray[j].y;
                    let distance = Math.sqrt(dx*dx + dy*dy);
                    if(distance < 120) {
                        ctx.beginPath();
                        ctx.strokeStyle = isLightMode ? `rgba(2, 132, 199, ${0.15 - distance/800})` : `rgba(56, 189, 248, ${0.15 - distance/800})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                        ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                        ctx.stroke();
                        ctx.closePath();
                    }
                }
            }
            requestAnimationFrame(animateParticles);
        }
        
        initParticles();
        animateParticles();
    }

    // -- 3D TILT EFFECT --
    const tiltElements = document.querySelectorAll('.project-card, .profile-img');
    tiltElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Max tilt of 10 degrees
            const rotateX = ((y - centerY) / centerY) * -10; 
            const rotateY = ((x - centerX) / centerX) * 10;
            
            el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            el.style.transition = 'none';
        });
        
        el.addEventListener('mouseleave', () => {
            el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
            el.style.transition = 'transform 0.5s ease';
        });
    });

    // -- SPOTLIGHT (GLOW) EFFECT ON CARDS --
    const glowCards = document.querySelectorAll('.project-card, .skill-category');
    glowCards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // -- RIPPLE EFFECT ON BUTTONS --
    const buttons = document.querySelectorAll('.btn-primary, .btn-hero, button[type="submit"]');
    buttons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            const rect = e.target.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const ripples = document.createElement('span');
            ripples.style.left = x + 'px';
            ripples.style.top = y + 'px';
            ripples.classList.add('ripple');
            this.appendChild(ripples);

            setTimeout(() => {
                ripples.remove();
            }, 800);
        });
    });

    // -- SCROLL PROGRESS BAR --
    const scrollProgress = document.getElementById('scroll-progress');
    if (scrollProgress) {
        window.addEventListener('scroll', () => {
            const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = (totalScroll / windowHeight) * 100;
            scrollProgress.style.width = scroll + '%';
        });
    }

    // -- LINGUISTIC TOGGLE --
    const btnFr = document.getElementById('lang-fr');
    const btnEn = document.getElementById('lang-en');

    if (btnFr && btnEn) {
        btnFr.addEventListener('click', () => setLanguage('fr'));
        btnEn.addEventListener('click', () => setLanguage('en'));
    }

    function setLanguage(lang) {
        currentLang = lang;
        if (lang === 'fr') {
            btnFr.classList.add('active');
            btnEn.classList.remove('active');
        } else {
            btnEn.classList.add('active');
            btnFr.classList.remove('active');
        }

        // Update all texts with data-i18n attribute
        const elementsToTranslate = document.querySelectorAll('[data-i18n]');
        elementsToTranslate.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                if (el.tagName.toLowerCase() === 'input' || el.tagName.toLowerCase() === 'textarea') {
                    el.placeholder = translations[lang][key]; 
                } else {
                    el.innerHTML = translations[lang][key];
                }
            }
        });

        // Update document lang
        document.documentElement.lang = lang;
    }

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

    // 2. Gestion du formulaire de contact avec Toast Notification
    const contactForm = document.getElementById('contact-form');
    
    function showToast(message) {
        let container = document.getElementById('toast-container');
        if(!container) {
            container = document.createElement('div');
            container.id = 'toast-container';
            document.body.appendChild(container);
        }
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `<span style="margin-right: 10px; font-size: 1.2rem; vertical-align: middle;">🚀</span> <span style="vertical-align: middle;">${message}</span>`;
        container.appendChild(toast);
        
        setTimeout(() => {
            toast.remove();
        }, 4500);
    }

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            
            // État de chargement
            submitBtn.disabled = true;
            submitBtn.innerHTML = currentLang === 'fr' ? '🚀 Envoi...' : '🚀 Sending...';

            const formData = new FormData(contactForm);
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    },
                    body: json
                });

                const result = await response.json();

                if (response.status === 200) {
                    const prenom = document.getElementById('prenom').value;
                    const msgFr = `Merci ${prenom} ! Votre message a bien été envoyé.`;
                    const msgEn = `Thank you ${prenom} ! Your message has been successfully sent.`;
                    showToast(currentLang === 'fr' ? msgFr : msgEn);
                    contactForm.reset();
                } else {
                    console.log(result);
                    showToast(currentLang === 'fr' ? "Erreur lors de l'envoi." : "Error sending message.");
                }
            } catch (error) {
                showToast(currentLang === 'fr' ? "Erreur de connexion." : "Connection error.");
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
            }
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
    const typingDelay = 80;
    const erasingDelay = 40;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        let textArray = typewriterTexts[currentLang];
        // Ensure index doesn't go out of bounds if switching languages
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        
        if (charIndex < textArray[textArrayIndex].length) {
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        let textArray = typewriterTexts[currentLang];
        if (charIndex > 0) {
            // Erase one character at a time
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

    // -- MAGNETIC BUTTONS (Physique) --
    const magneticBtns = document.querySelectorAll('.btn-primary, .btn-hero');
    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', function(e) {
            const pos = btn.getBoundingClientRect();
            const x = e.clientX - pos.left - pos.width / 2;
            const y = e.clientY - pos.top - pos.height / 2;
            btn.style.transform = `translate(${x * 0.25}px, ${y * 0.4}px)`;
            btn.style.transition = 'none';
        });
        btn.addEventListener('mouseleave', function() {
            btn.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            btn.style.transform = 'translate(0px, 0px)';
        });
    });

    // -- ENHANCED BACK TO TOP (Circular Progress) --
    const progressPath = document.querySelector('.progress-circle path');
    if (progressPath) {
        const pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        
        const updateProgress = function () {
            const scroll = window.scrollY;
            const height = document.documentElement.scrollHeight - window.innerHeight;
            const progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        }
        
        updateProgress();
        const backToTopBtn = document.getElementById('back-to-top-container');
        
        window.addEventListener('scroll', () => {
            updateProgress();
            if (window.scrollY > 200) {
                backToTopBtn.classList.add('active');
            } else {
                backToTopBtn.classList.remove('active');
            }
        });
        
        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Initialisation de la langue par défaut
    setLanguage('fr');

});
