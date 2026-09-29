document.addEventListener('DOMContentLoaded', function() {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    // Header: transparent over the hero, solid once the hero scrolls away
    const header = document.querySelector('.site-header');
    const hero = document.querySelector('.hero');

    if (header && hero && 'IntersectionObserver' in window) {
        const headerObserver = new IntersectionObserver(([entry]) => {
            header.classList.toggle('is-solid', !entry.isIntersecting);
        }, { rootMargin: `-${header.offsetHeight + 120}px 0px 0px 0px` });
        headerObserver.observe(hero);
    } else if (header) {
        header.classList.add('is-solid');
    }

    // Mobile / tablet menu
    const navToggle = document.querySelector('.nav-toggle');
    const siteNav = document.getElementById('site-nav');
    const desktopNav = window.matchMedia('(min-width: 1025px)');

    function setMenu(open) {
        navToggle.setAttribute('aria-expanded', String(open));
        siteNav.classList.toggle('is-open', open);
        header.classList.toggle('menu-active', open);
        document.body.classList.toggle('menu-open', open);
    }

    navToggle.addEventListener('click', () => {
        setMenu(navToggle.getAttribute('aria-expanded') !== 'true');
    });

    siteNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => setMenu(false));
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && siteNav.classList.contains('is-open')) {
            setMenu(false);
            navToggle.focus();
        }
    });

    desktopNav.addEventListener('change', (e) => {
        if (e.matches) setMenu(false);
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
            image: './assets/images/services/Space-Planning-Design.jpg',
            title: 'Space Planning and Design',
            description: 'Strategic space planning and design solutions that maximize functionality and aesthetics.',
            features: [
                'Complete presentation quality-Interior space planned design boards',
                'Guestroom/Public Area- Color schemes',
                'FF&E product specification and budget analysis'
            ]
        },
        procurement: {
            image: './assets/images/services/Procurement.jpg',
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
            image: './assets/images/services/Installation.jpg',
            title: 'Installation Services',
            description: 'Professional installation services executed with precision and expertise.',
            features: [
                'Evaluate the required operating systems from approved construction drawings.',
                'Specify, supply and install all franchisor required operating systems.',
                'Coordinate product deliveries with the hotel\'s construction progress',
                'Communicate with sub contractors to facilitate all system installations.'
            ]
        },
        operations: {
            image: './assets/images/services/Operating-System.jpg',
            title: 'Hotel Operating Systems',
            description: 'Comprehensive hotel management systems to streamline operations.',
            features: [
                'Evaluate the required operating systems from approved construction drawings.',
                'Specify, supply and install all franchisor required operating systems.',
                'Coordinate product deliveries with the hotel\'s construction progress.',
                'Communicate with sub contractors to facilitate all system installations.'
            ]
        },
        construction: {
            image: './assets/images/services/Construction.jpg',
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

    // Build one tab panel per service
    const servicesContent = document.querySelector('.services-content');
    const tabList = document.querySelector('.service-tabs');
    const serviceTabs = Array.from(document.querySelectorAll('.service-tab'));
    const indicator = document.querySelector('.tab-indicator');

    Object.keys(serviceContent).forEach((serviceKey, index) => {
        const service = serviceContent[serviceKey];
        const panel = document.createElement('div');
        panel.className = 'service-panel';
        panel.id = `service-${serviceKey}`;
        panel.setAttribute('role', 'tabpanel');
        panel.setAttribute('aria-labelledby', `tab-${serviceKey}`);
        panel.tabIndex = 0;
        panel.hidden = index !== 0;

        panel.innerHTML = `
            <figure class="service-media">
                <img src="${service.image}" alt="${service.title}" loading="lazy" decoding="async">
            </figure>
            <div class="service-text">
                <h3>${service.title}</h3>
                <p>${service.description}</p>
                <ul class="feature-list">
                    ${service.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
        `;

        servicesContent.appendChild(panel);
    });

    function moveIndicator(tab) {
        indicator.style.setProperty('--x', `${tab.offsetLeft}px`);
        indicator.style.setProperty('--w', `${tab.offsetWidth}px`);
    }

    function selectTab(tab, focus) {
        serviceTabs.forEach(t => {
            const selected = t === tab;
            t.setAttribute('aria-selected', String(selected));
            t.tabIndex = selected ? 0 : -1;
            document.getElementById(t.getAttribute('aria-controls')).hidden = !selected;
        });

        moveIndicator(tab);

        // Keep the chosen tab in view when the strip scrolls sideways
        if (tabList.scrollWidth > tabList.clientWidth) {
            const target = tab.offsetLeft - (tabList.clientWidth - tab.offsetWidth) / 2;
            tabList.scrollTo({ left: target, behavior: reduceMotion.matches ? 'auto' : 'smooth' });
        }

        if (focus) tab.focus();
    }

    serviceTabs.forEach((tab, index) => {
        tab.addEventListener('click', () => selectTab(tab, false));

        tab.addEventListener('keydown', (e) => {
            let next = null;
            if (e.key === 'ArrowRight') next = serviceTabs[(index + 1) % serviceTabs.length];
            if (e.key === 'ArrowLeft') next = serviceTabs[(index - 1 + serviceTabs.length) % serviceTabs.length];
            if (e.key === 'Home') next = serviceTabs[0];
            if (e.key === 'End') next = serviceTabs[serviceTabs.length - 1];
            if (next) {
                e.preventDefault();
                selectTab(next, true);
            }
        });
    });

    const activeTab = () => serviceTabs.find(t => t.getAttribute('aria-selected') === 'true') || serviceTabs[0];
    moveIndicator(activeTab());
    if ('ResizeObserver' in window) {
        new ResizeObserver(() => moveIndicator(activeTab())).observe(tabList);
    }
    document.fonts && document.fonts.ready.then(() => moveIndicator(activeTab()));

    // Portfolio gallery
    const track = document.querySelector('.gallery-track');
    const slides = Array.from(track.querySelectorAll('.gallery-slide'));
    const prevButton = document.querySelector('.gallery-prev');
    const nextButton = document.querySelector('.gallery-next');

    function slideStep() {
        return slides.length > 1 ? slides[1].offsetLeft - slides[0].offsetLeft : track.clientWidth;
    }

    function atEnd() {
        return track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    }

    function go(direction) {
        const behavior = reduceMotion.matches ? 'auto' : 'smooth';
        if (direction > 0 && atEnd()) {
            track.scrollTo({ left: 0, behavior });
        } else if (direction < 0 && track.scrollLeft <= 4) {
            track.scrollTo({ left: track.scrollWidth, behavior });
        } else {
            track.scrollBy({ left: direction * slideStep(), behavior });
        }
    }

    // Auto advance every 3 seconds while the gallery is on screen
    let autoAdvance = null;
    let paused = false;
    let visible = false;

    function stopAuto() {
        clearInterval(autoAdvance);
        autoAdvance = null;
    }

    function startAuto() {
        stopAuto();
        if (reduceMotion.matches || paused || !visible) return;
        autoAdvance = setInterval(() => go(1), 3000);
    }

    nextButton.addEventListener('click', () => { go(1); startAuto(); });
    prevButton.addEventListener('click', () => { go(-1); startAuto(); });

    // Pause on hover, focus or touch
    const gallery = document.querySelector('.gallery');
    gallery.addEventListener('mouseenter', () => { paused = true; stopAuto(); });
    gallery.addEventListener('mouseleave', () => { paused = false; startAuto(); });
    gallery.addEventListener('focusin', () => { paused = true; stopAuto(); });
    gallery.addEventListener('focusout', () => { paused = false; startAuto(); });
    track.addEventListener('touchstart', () => { paused = true; stopAuto(); }, { passive: true });

    if ('IntersectionObserver' in window) {
        new IntersectionObserver(([entry]) => {
            visible = entry.isIntersecting;
            startAuto();
        }, { threshold: 0.4 }).observe(track);
    }

    reduceMotion.addEventListener('change', startAuto);

    // Reveal sections as they scroll into view
    const revealTargets = document.querySelectorAll('[data-reveal]');
    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-in');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });
        revealTargets.forEach(el => revealObserver.observe(el));
    } else {
        revealTargets.forEach(el => el.classList.add('is-in'));
    }
});
