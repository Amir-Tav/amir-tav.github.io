/* ==========================================================================
   Amir Tavahin — portfolio interactions
   ========================================================================== */

(function () {
    'use strict';

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    /* ----------------------------------------------------------------------
       Project content
       ---------------------------------------------------------------------- */

    const projectData = {
        1: {
            title: 'Multi-modal molecular toxicity prediction',
            stack: 'MSc dissertation · PyTorch · TensorFlow',
            image: {
                src: 'assets/prj-pics/Toxicity-prediction.png',
                alt: 'Cross-attention fusion architecture',
                caption: 'How the three molecular representations are fused before the per-assay heads.'
            },
            description: 'A machine learning system that predicts molecular toxicity across multiple biological assays using a cross-attention fusion architecture.',
            overview: 'This dissertation combined three views of the same molecule — SMILES transformers, graph neural networks and physicochemical descriptors — into one prediction system, letting cross-attention decide which view to trust for each compound.',
            results: [
                '0.606 average precision on the top-performing assays',
                '67% variance reduction through multi-seed evaluation',
                '90% lower expected calibration error via per-assay Platt scaling',
                'Deployed with production guardrails on out-of-distribution inputs'
            ],
            tech: ['PyTorch', 'TensorFlow', 'Keras', 'ChemBERTa', 'Graph Isomorphism Networks', 'Scikit-learn'],
            impact: 'Regulatory toxicology needs models that know when they are unsure. This work is a blueprint for calibrated, reliable ML in settings where a confident wrong answer is expensive.'
        },
        2: {
            title: 'SYN flood detection — Perseus',
            stack: 'Security · Real-time ML · Python',
            image: {
                src: 'assets/prj-pics/Syn-Flood.png',
                alt: 'Perseus real-time detection pipeline',
                caption: 'Packet capture through to blocking decision.'
            },
            description: 'A network intrusion detection system that identifies and blocks SYN flood attacks live, with very few false alarms.',
            overview: 'Perseus reads network traffic as it arrives, learns the shape of normal connection behaviour, and drops the sources behind denial-of-service floods before they exhaust the server.',
            results: [
                '700,000+ packets analysed in real time',
                '85% blocking efficiency against malicious IPs',
                '93% fewer false positives than the baseline approach',
                '30% faster model inference after optimisation'
            ],
            tech: ['Python', 'T-Shark', 'Scikit-learn', 'Streaming pipelines'],
            impact: 'Shows that ML-based defence can run at line rate without flagging legitimate users — the trade-off that usually keeps these systems out of production.'
        },
        // Bitcoin
        3: {
            title: 'AI-Powered Bitcoin Analytics',
            stack: 'Full-Stack · Machine Learning · Real-Time Data · LLM',
            image: {
                    src: 'assets/prj-pics/Bitcoin Analytics.png',
                    alt: 'Bitcoin analytics dashboard',
                    caption: 'Live BTC/USDT prices, technical indicators, and ML-powered price forecasts.'
                },
            description: 'A real-time Bitcoin analytics platform combining deep learning, predictive modelling, and a locally hosted AI assistant to turn live market data into actionable insights.',
            overview: 'Built a full-stack Flask application that streams live BTC/USDT market data from Binance and processes it through LSTM and XGBoost models to forecast short-term price movements. The platform calculates technical indicators, visualises market trends through interactive Plotly charts, and integrates a locally hosted Mistral 7B chatbot for natural-language market analysis. Containerised with Docker Compose, the entire system can be deployed locally with minimal setup, while dedicated latency tracking monitors network, processing, and end-to-end performance.',
            results: [
                'Developed a 3-layer LSTM model using 60-minute price sequences to forecast the next 5 Bitcoin candles, achieving approximately 52–54% directional accuracy',
                'Implemented a 100-tree XGBoost model for short-term price predictions, achieving approximately 51–53% directional accuracy',
                'Optimised model inference to under 50ms for LSTM and approximately 20ms for XGBoost',
                'Integrated live Binance market data, technical indicators, news sentiment analysis, and an interactive dashboard with 60-second auto-refresh',
                'Deployed a locally hosted Mistral 7B chatbot for context-aware market analysis without relying on external LLM APIs',
                'Containerised the Flask application and AI services using Docker Compose for reproducible, self-contained deployment'
           ],
            tech: ['Python','Flask','PyTorch','LSTM','XGBoost','Mistral 7B','Ollama','Docker','Binance API','Plotly'],
            impact: 'A self-contained financial intelligence platform that brings real-time market monitoring, predictive machine learning, and conversational AI into a single interface — demonstrating how complex ML systems can be deployed as accessible, production-oriented web applications.'
        },
        4: {
            title: 'Hydroponic farm automation',
            stack: 'IoT · LLM agents · Agriculture',
            image: {
                src: 'assets/prj-pics/hydroponics-architecture.png',
                alt: 'ESP32 and Raspberry Pi system architecture',
                caption: 'Sensors and actuators through to the dashboard and LLM agent.'
            },
            description: 'An automated hydroponic system for growing livestock feed year-round, with live monitoring and AI-driven advice.',
            overview: 'ESP32 boards handle sensors and actuators; a Raspberry Pi acts as the hub, dashboard and brain. A local LLM agent reads the sensor history and recommends adjustments to the growing cycle.',
            results: [
                'Designed for a 40–60% annual feed cost reduction',
                'Hybrid ESP32 and Raspberry Pi architecture',
                'Live monitoring dashboard across all sensors',
                'Local LLM agent for predictive growing recommendations',
                'Modular sensor design so the rig scales up'
            ],
            tech: ['ESP32', 'Raspberry Pi', 'Python', 'Flask', 'Ollama', 'IoT pipelines'],
            impact: 'Food production that does not depend on the weather, built from parts you can buy off the shelf.'
        },
        5: {
            title: 'Neural network from scratch',
            stack: 'Fundamentals · NumPy',
            image: {
                src: 'assets/prj-pics/nn-from-scratch-diagram.png',
                alt: 'Network architecture and gradient flow',
                caption: 'Forward pass and the gradients flowing back through it.'
            },
            description: 'A neural network built entirely in NumPy — forward pass, backpropagation and optimisation written by hand.',
            overview: 'No frameworks. Every matrix multiplication, gradient and weight update written out, so the maths behind training is visible rather than hidden behind an API call.',
            results: [
                'Forward and backward propagation implemented from first principles',
                'Custom ReLU, Sigmoid and Softmax activations',
                'Gradient descent and optimisation written by hand',
                'Converges reliably on standard benchmark datasets'
            ],
            tech: ['Python', 'NumPy', 'Matplotlib'],
            impact: 'Knowing what PyTorch does under the hood is what makes debugging a training run possible when the loss goes flat.'
        },
        6: {
            title: 'Generative fashion imagery',
            stack: 'Generative AI · PyTorch',
            image: {
                src: 'assets/prj-pics/gan-architecture.png',
                alt: 'Generator and discriminator architecture',
                caption: 'The adversarial setup used for training.'
            },
            description: 'A generative adversarial network trained to synthesise realistic fashion product images.',
            overview: 'A generator and discriminator trained against each other to produce clothing images, with progressive learning and early stopping used to keep a notoriously unstable training process on track.',
            results: [
                '60% improvement in visual quality over the baseline',
                '40% shorter training time through progressive learning',
                'Diverse outputs without mode collapse',
                'Stability techniques applied throughout training'
            ],
            tech: ['PyTorch', 'CNNs', 'Adam', 'Progressive learning'],
            impact: 'Useful anywhere real images are scarce — product design exploration and synthetic training data in particular.'
        }
    };

    /* ----------------------------------------------------------------------
       Hero entrance
       ---------------------------------------------------------------------- */

    requestAnimationFrame(function () {
        document.body.classList.add('is-ready');
    });

    // Portrait falls back to initials if the image is missing.
    const portraitImg = document.getElementById('portraitImg');
    if (portraitImg) {
        const markMissing = function () {
            portraitImg.closest('.portrait').classList.add('no-image');
        };
        portraitImg.addEventListener('error', markMissing);
        if (portraitImg.complete && portraitImg.naturalWidth === 0) markMissing();
    }

    /* ----------------------------------------------------------------------
       Scroll progress + sticky nav state
       ---------------------------------------------------------------------- */

    const navbar = document.getElementById('navbar');
    const progressBar = document.querySelector('.progress-bar');
    let ticking = false;

    function onScroll() {
        const scrolled = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;

        navbar.classList.toggle('is-stuck', scrolled > 24);
        if (progressBar) {
            progressBar.style.width = (max > 0 ? (scrolled / max) * 100 : 0) + '%';
        }
        ticking = false;
    }

    window.addEventListener('scroll', function () {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(onScroll);
        }
    }, { passive: true });
    onScroll();

    /* ----------------------------------------------------------------------
       Nav: sliding indicator, active section, mobile menu
       ---------------------------------------------------------------------- */

    const navList = document.getElementById('navLinks');
    const navToggle = document.getElementById('navToggle');
    const navAnchors = Array.from(navList.querySelectorAll('a'));
    const pill = navList.querySelector('.nav-pill');
    let activeAnchor = null;

    function movePill(anchor) {
        if (!anchor || !pill || window.innerWidth <= 760) return;
        pill.style.width = anchor.offsetWidth + 'px';
        pill.style.transform = 'translateX(' + anchor.offsetLeft + 'px)';
        pill.classList.add('is-on');
    }

    navAnchors.forEach(function (a) {
        a.addEventListener('mouseenter', function () { movePill(a); });
        a.addEventListener('click', function () {
            navList.classList.remove('is-open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });

    navList.addEventListener('mouseleave', function () {
        if (activeAnchor) movePill(activeAnchor);
        else if (pill) pill.classList.remove('is-on');
    });

    navToggle.addEventListener('click', function () {
        const open = navList.classList.toggle('is-open');
        navToggle.setAttribute('aria-expanded', String(open));
        navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });

    // Highlight whichever section is currently in view.
    const sections = Array.from(document.querySelectorAll('section[id]'));
    if (sections.length) {
        const sectionObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                const anchor = navAnchors.find(function (a) {
                    return a.getAttribute('href') === '#' + entry.target.id;
                });
                if (!anchor) return;
                navAnchors.forEach(function (a) { a.classList.remove('is-active'); });
                anchor.classList.add('is-active');
                activeAnchor = anchor;
                movePill(anchor);
            });
        }, { rootMargin: '-45% 0px -50% 0px' });

        sections.forEach(function (s) { sectionObserver.observe(s); });
    }

    window.addEventListener('resize', function () {
        if (activeAnchor) movePill(activeAnchor);
    });

    /* ----------------------------------------------------------------------
       Scroll reveal
       ---------------------------------------------------------------------- */

    const revealItems = Array.from(document.querySelectorAll('[data-reveal]'));

    if (reduceMotion) {
        revealItems.forEach(function (el) { el.classList.add('is-visible'); });
    } else {
        const revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                const siblings = Array.from(entry.target.parentElement.children);
                const index = siblings.indexOf(entry.target);
                entry.target.style.transitionDelay = Math.min(index, 6) * 55 + 'ms';
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

        revealItems.forEach(function (el) { revealObserver.observe(el); });
    }

    /* ----------------------------------------------------------------------
       Counting stats
       ---------------------------------------------------------------------- */

    const counters = Array.from(document.querySelectorAll('[data-count]'));

    function runCount(el) {
        const target = parseFloat(el.dataset.count);
        const suffix = el.dataset.suffix || '';

        if (reduceMotion) {
            el.textContent = target + suffix;
            return;
        }

        const duration = 1400;
        const start = performance.now();

        function step(now) {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            el.textContent = Math.round(target * eased) + suffix;
            if (t < 1) requestAnimationFrame(step);
        }

        requestAnimationFrame(step);
    }

    // Zero them only once we know the animation can run.
    if (!reduceMotion) {
        counters.forEach(function (el) { el.textContent = '0' + (el.dataset.suffix || ''); });
    }

    if (counters.length) {
        const countObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                runCount(entry.target);
                countObserver.unobserve(entry.target);
            });
        }, { threshold: 0.6 });

        counters.forEach(function (el) { countObserver.observe(el); });
    }

    /* ----------------------------------------------------------------------
       Cursor spotlight on cards
       ---------------------------------------------------------------------- */

    if (finePointer && !reduceMotion) {
        document.querySelectorAll('[data-spotlight]').forEach(function (card) {
            card.addEventListener('pointermove', function (e) {
                const rect = card.getBoundingClientRect();
                card.style.setProperty('--mx', (e.clientX - rect.left) + 'px');
                card.style.setProperty('--my', (e.clientY - rect.top) + 'px');
            });
        });

        /* Portrait tilts towards the cursor — the one piece of pointer-driven
           motion on the page. */
        const heroImage = document.getElementById('heroImage');
        const portrait = heroImage && heroImage.querySelector('.portrait');

        if (portrait) {
            heroImage.addEventListener('pointermove', function (e) {
                const rect = heroImage.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                portrait.style.transform =
                    'rotateY(' + (x * 11).toFixed(2) + 'deg) rotateX(' + (-y * 11).toFixed(2) + 'deg) translateZ(14px)';
            });

            heroImage.addEventListener('pointerleave', function () {
                portrait.style.transform = '';
            });
        }
    }

    /* ----------------------------------------------------------------------
       Project dialog
       ---------------------------------------------------------------------- */

    const modal = document.getElementById('projectModal');
    const modalPanel = modal.querySelector('.modal-panel');
    const modalClose = document.getElementById('modalClose');
    const modalTitle = document.getElementById('modalTitle');
    const modalStack = document.getElementById('modalStack');
    const modalDescription = document.getElementById('modalDescription');
    const modalDetails = document.getElementById('modalDetails');
    let lastFocused = null;

    const modalMedia = document.getElementById('modalMedia');

    /* Each call gets a ticket. A load or error event from a previous project
       arrives with a stale ticket and is ignored, so one project's missing
       image can never hide the next project's artwork. */
    let mediaTicket = 0;

    function renderMedia(image) {
        mediaTicket += 1;
        const ticket = mediaTicket;

        modalMedia.textContent = '';

        if (!image || !image.src) {
            modalMedia.hidden = true;
            return;
        }

        const figure = document.createElement('figure');

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt || '';

        // A missing file hides the block instead of showing a broken icon.
        img.addEventListener('error', function () {
            if (ticket !== mediaTicket) return;
            modalMedia.textContent = '';
            modalMedia.hidden = true;
        });

        figure.appendChild(img);

        if (image.caption) {
            const caption = document.createElement('figcaption');
            caption.textContent = image.caption;
            figure.appendChild(caption);
        }

        modalMedia.appendChild(figure);
        modalMedia.hidden = false;
    }

    function buildList(heading, items) {
        const group = document.createElement('div');
        group.className = 'modal-group';

        const h = document.createElement('h3');
        h.textContent = heading;
        group.appendChild(h);

        const ul = document.createElement('ul');
        ul.className = 'modal-list';
        items.forEach(function (item) {
            const li = document.createElement('li');
            li.textContent = item;
            ul.appendChild(li);
        });
        group.appendChild(ul);
        return group;
    }

    function buildChips(heading, items) {
        const group = document.createElement('div');
        group.className = 'modal-group';

        const h = document.createElement('h3');
        h.textContent = heading;
        group.appendChild(h);

        const ul = document.createElement('ul');
        ul.className = 'chips';
        items.forEach(function (item) {
            const li = document.createElement('li');
            li.textContent = item;
            ul.appendChild(li);
        });
        group.appendChild(ul);
        return group;
    }

    function buildText(heading, text) {
        const group = document.createElement('div');
        group.className = 'modal-group';

        const h = document.createElement('h3');
        h.textContent = heading;
        group.appendChild(h);

        const p = document.createElement('p');
        p.className = 'modal-impact';
        p.textContent = text;
        group.appendChild(p);
        return group;
    }

    function openModal(id) {
        const project = projectData[id];
        if (!project) return;

        lastFocused = document.activeElement;

        modalTitle.textContent = project.title;
        modalStack.textContent = project.stack;
        modalDescription.textContent = project.description;
        renderMedia(project.image);

        modalDetails.textContent = '';
        modalDetails.appendChild(buildText('Overview', project.overview));
        modalDetails.appendChild(buildList('Results', project.results));
        modalDetails.appendChild(buildChips('Built with', project.tech));
        modalDetails.appendChild(buildText('Why it matters', project.impact));

        modal.hidden = false;
        document.body.classList.add('is-locked');
        requestAnimationFrame(function () {
            modal.classList.add('is-open');
        });
        modalClose.focus();
    }

    function closeModal() {
        modal.classList.remove('is-open');
        document.body.classList.remove('is-locked');

        const finish = function () {
            modal.hidden = true;
            modalPanel.removeEventListener('transitionend', finish);
        };

        if (reduceMotion) finish();
        else modalPanel.addEventListener('transitionend', finish);

        if (lastFocused) lastFocused.focus();
    }

    document.querySelectorAll('.project-card').forEach(function (card) {
        const open = function () { openModal(card.dataset.project); };
        card.addEventListener('click', open);
        card.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                open();
            }
        });
    });

    modalClose.addEventListener('click', closeModal);
    modal.querySelector('[data-close]').addEventListener('click', closeModal);

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !modal.hidden) closeModal();
    });

    // Keep tab focus inside the dialog while it is open.
    modal.addEventListener('keydown', function (e) {
        if (e.key !== 'Tab') return;
        const focusable = modal.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])');
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
    });
}());