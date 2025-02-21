document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinksContainer = document.querySelector('.nav-links-container');
    const navLinks = document.querySelectorAll('.nav-link a');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinksContainer.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinksContainer.classList.remove('active');
        });
    });

    // Service content data
    const serviceContent = {
        architectural: {
            image: './assets/images/services/architectural-services.jpg',
            title: 'Architectural Services',
            description: 'Architectural services that bring your vision to life with precision and care.',
            features: [
                'Licensed in 29 states',
                'CAD Construction Drawings',
                'Master Planning',
                'Knowledge of Franchise Requirements'
            ]
        },
        planning: {
            image: './assets/images/strategic-planning.png',
            title: 'Space Planning and Design',
            description: 'Strategic space planning and design solutions that maximize functionality and aesthetics.',
            features: [
                'Complete presentation quality-Interior space planned design boards',
                'Guestroom/Public Area- Color schemes',
                'FF&E product specification and budget analysis'
            ]
        },
        procurement: {
            image: './assets/images/purchase.png',
            title: 'Purchasing and Procurement',
            description: 'Smart procurement strategies that maximize savings without compromising quality.',
            features: [
                'Cost savings alternatives for products selected.',
                'Verify FF&E quantity requirements before ordering, to coincide with property improvement plan.',
                'Monitor Progress and delivery schedules with planned install dates for soft opening.',
                'Reduce freight expenditures by using our freight management division.',
                'Factory direct purchasing'
                
            ]
        },
        installation: {
            image: './assets/images/repair-tools.png',
            title: 'Installation Services',
            description: 'Professional installation services executed with precision and expertise.',
            features: [
                'Evaluate the required operating systems from approved construction drawings.',
                'Specify, supply and install all franchisor required operating systems.',
                'Coordinate product deliveries with the hotel`s construction progress',
                'Communicate with sub contractors to facilitate all system installations.'
            ]
        },
        operations: {
            image: './assets/images/desk-bell.png',
            title: 'Hotel Operating Systems',
            description: 'Comprehensive hotel management systems to streamline operations.',
            features: [
                'Evaluate the required operating systems from approved construction drawings.',
                'Specify, supply and install all franchisor required operating systems.',
                'Coordinate product deliveries with the hotel`s construction progress.',
                'Communicate with sub contractors to facilitate all system installations.'
            ]
        },
        construction: {
            image: './assets/images/construction.png',
            title: 'Hotel Construction',
            description: 'Full-service hotel construction management from ground up to renovation.',
            features: [
                'Design-Build',
                'Project Construction Management',
                'Locked-in Pricing Upfront',
                'Project Evaluation & Consulting'
            ]
        }
    };

    // Create service details elements
    const servicesContent = document.querySelector('.services-content');
    Object.keys(serviceContent).forEach(serviceKey => {
        const service = serviceContent[serviceKey];
        const serviceDiv = document.createElement('div');
        serviceDiv.className = `service-details${serviceKey === 'architectural' ? ' active' : ''}`;
        serviceDiv.id = `service-${serviceKey}`;
        
        serviceDiv.innerHTML = `
            <img src="${service.image}" alt="${service.title}">
            <div class="service-text">
                <h3>${service.title}</h3>
                <p>${service.description}</p>
                <ul>
                    ${service.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
        `;
        
        servicesContent.appendChild(serviceDiv);
    });

    // Add click handlers to tabs
    const serviceTabs = document.querySelectorAll('.service-tab');
    serviceTabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            // Remove active class from all tabs and content
            serviceTabs.forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.service-details').forEach(content => {
                content.classList.remove('active');
            });

            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            const serviceId = `service-${this.getAttribute('data-service')}`;
            const contentElement = document.getElementById(serviceId);
            if (contentElement) {
                contentElement.classList.add('active');
            }

            // Prevent any default behavior
            e.preventDefault();
        });
    });

    // Add select menu functionality
    const serviceSelect = document.querySelector('.service-select');
    if (serviceSelect) {
        serviceSelect.addEventListener('change', function(e) {
            // Remove active class from all content
            document.querySelectorAll('.service-details').forEach(content => {
                content.classList.remove('active');
            });

            // Add active class to selected content
            const serviceId = `service-${this.value}`;
            const contentElement = document.getElementById(serviceId);
            if (contentElement) {
                contentElement.classList.add('active');
            }
        });
    }

    // Carousel functionality
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    
    let currentIndex = 0;
    const slideCount = slides.length;

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateCarousel();
    }

    // Auto advance slides every 5 seconds
    let autoAdvance = setInterval(nextSlide, 5000);

    // Add click handlers for navigation buttons
    nextButton.addEventListener('click', () => {
        clearInterval(autoAdvance);
        nextSlide();
        autoAdvance = setInterval(nextSlide, 5000);
    });

    prevButton.addEventListener('click', () => {
        clearInterval(autoAdvance);
        prevSlide();
        autoAdvance = setInterval(nextSlide, 5000);
    });

    // Optional: Pause auto-advance on hover
    track.addEventListener('mouseenter', () => {
        clearInterval(autoAdvance);
    });

    track.addEventListener('mouseleave', () => {
        autoAdvance = setInterval(nextSlide, 5000);
    });
});
