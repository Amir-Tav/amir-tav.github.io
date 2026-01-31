// Project data for modals
const projectData = {
    1: {
        title: "Multi-Modal Molecular Toxicity Prediction",
        description: "A sophisticated machine learning system designed to predict molecular toxicity across multiple biological assays using a novel cross-attention fusion architecture.",
        details: `
            <h3>Project Overview</h3>
            <p>This dissertation project combined multiple representations of molecules—SMILES transformers, graph neural networks, and physicochemical descriptors—into a unified prediction system using cross-attention mechanisms.</p>
            
            <h3>Key Achievements</h3>
            <ul>
                <li>Achieved 0.606 Average Precision on top-performing assays</li>
                <li>67% variance reduction through multi-seed evaluation</li>
                <li>90% improvement in Expected Calibration Error through per-assay Platt scaling</li>
                <li>Successfully deployed with production safeguards and guardrail mechanisms</li>
            </ul>
            
            <h3>Technologies Used</h3>
            <ul>
                <li>PyTorch for neural network implementation</li>
                <li>TensorFlow/Keras for comparative models</li>
                <li>ChemBERTa for SMILES tokenization</li>
                <li>Graph Isomorphism Networks (GIN) for molecular graphs</li>
                <li>Scikit-learn for statistical validation</li>
            </ul>
            
            <h3>Impact</h3>
            <p>This work addressed fundamental challenges in computational toxicology, providing a blueprint for reliable, calibrated ML systems suitable for regulatory applications where uncertainty matters.</p>
        `
    },
    2: {
        title: "SYN Flood Detection (Perseus)",
        description: "An ML-powered real-time network intrusion detection system that identifies and blocks SYN flood attacks with minimal false positives.",
        details: `
            <h3>Project Overview</h3>
            <p>Perseus is a cybersecurity system that analyzes network traffic patterns in real-time to detect and prevent SYN flood attacks—a common form of distributed denial-of-service (DDoS) attack.</p>
            
            <h3>Key Achievements</h3>
            <ul>
                <li>Analyzed 700,000+ network packets in real-time</li>
                <li>85% blocking efficiency for malicious IPs</li>
                <li>93% false positive reduction compared to baseline approaches</li>
                <li>30% optimization improvement in model inference</li>
            </ul>
            
            <h3>Technologies Used</h3>
            <ul>
                <li>Python for system implementation</li>
                <li>T-Shark for packet analysis</li>
                <li>Scikit-learn for ML models</li>
                <li>Real-time processing pipelines</li>
            </ul>
            
            <h3>Impact</h3>
            <p>Demonstrates practical application of ML to cybersecurity, providing a scalable solution for network protection in production environments.</p>
        `
    },
    3: {
        title: "3D Printer Defect Detection (DefectEye)",
        description: "A computer vision system using deep learning to detect 3D printing failures in real-time, reducing material waste and improving manufacturing efficiency.",
        details: `
            <h3>Project Overview</h3>
            <p>DefectEye is an automated defect detection system deployed on IoT devices to monitor 3D printing processes and alert operators to failures before they happen.</p>
            
            <h3>Key Achievements</h3>
            <ul>
                <li>Real-time detection of printing defects (spaghetti failures, layer misalignment, etc.)</li>
                <li>Successfully deployed on Raspberry Pi with optimized inference</li>
                <li>30% estimated reduction in print failure rates and material waste</li>
                <li>64% accuracy at current stage with ongoing improvements targeting 80%+</li>
            </ul>
            
            <h3>Technologies Used</h3>
            <ul>
                <li>YOLOv11 for real-time object detection</li>
                <li>PyTorch for model training</li>
                <li>Raspberry Pi for edge deployment</li>
                <li>Computer vision techniques for failure analysis</li>
            </ul>
            
            <h3>Impact</h3>
            <p>Bridges gap between research and industrial application, providing cost-effective automated quality control for manufacturing.</p>
        `
    },
    4: {
        title: "Hydroponic Farm Automation",
        description: "An IoT-powered agricultural system for automated hydroponic crop production with AI-driven optimization and real-time monitoring.",
        details: `
            <h3>Project Overview</h3>
            <p>A complete smart farm system that automates hydroponic vegetable and livestock feed production, reducing costs and enabling year-round cultivation independent of weather.</p>
            
            <h3>Key Achievements</h3>
            <ul>
                <li>Designed for 40-60% annual feed cost reduction</li>
                <li>Hybrid ESP32-Raspberry Pi IoT architecture</li>
                <li>Real-time monitoring dashboard with sensor integration</li>
                <li>LLM-based intelligence agent for predictive recommendations</li>
                <li>Modular sensor integration for scalability</li>
            </ul>
            
            <h3>Technologies Used</h3>
            <ul>
                <li>ESP32 microcontrollers for sensor management</li>
                <li>Raspberry Pi for central hub and dashboard</li>
                <li>IoT data pipelines for real-time monitoring</li>
                <li>LLM agents (Ollama) for crop optimization</li>
                <li>Python Flask for web dashboard</li>
            </ul>
            
            <h3>Impact</h3>
            <p>Demonstrates application of AI and IoT to sustainable agriculture, enabling self-sufficient food production while reducing environmental impact.</p>
        `
    },
    5: {
        title: "Primitive Neural Network (NN From Scratch)",
        description: "An educational implementation of a neural network built entirely from scratch using NumPy, demonstrating core ML concepts without frameworks.",
        details: `
            <h3>Project Overview</h3>
            <p>A pure Python and NumPy implementation of a neural network including forward propagation, backpropagation, and gradient descent optimization—no ML frameworks allowed.</p>
            
            <h3>Key Achievements</h3>
            <ul>
                <li>Implemented from-scratch forward and backward propagation</li>
                <li>Built custom activation functions (ReLU, Softmax, Sigmoid)</li>
                <li>Implemented gradient descent and optimization algorithms</li>
                <li>Achieved successful convergence on standard datasets</li>
            </ul>
            
            <h3>Technologies Used</h3>
            <ul>
                <li>NumPy for numerical computations</li>
                <li>Python for implementation</li>
                <li>Matplotlib for visualization</li>
            </ul>
            
            <h3>Impact</h3>
            <p>Provides deep understanding of neural network mechanics, essential foundation for working effectively with ML frameworks at scale.</p>
        `
    },
    6: {
        title: "Generative Fashion Image Creation (GAN)",
        description: "A generative adversarial network trained to synthesize realistic fashion images, demonstrating advanced deep learning techniques.",
        details: `
            <h3>Project Overview</h3>
            <p>A GAN-based system that learns to generate high-quality, realistic fashion product images through adversarial training between generator and discriminator networks.</p>
            
            <h3>Key Achievements</h3>
            <ul>
                <li>60% improvement in visual quality compared to baselines</li>
                <li>40% reduction in training time through progressive learning</li>
                <li>Successfully trained adversarial networks to generate diverse outputs</li>
                <li>Implemented early stopping and training stability techniques</li>
            </ul>
            
            <h3>Technologies Used</h3>
            <ul>
                <li>PyTorch for GAN implementation</li>
                <li>Convolutional neural networks for feature extraction</li>
                <li>Adam optimizer for stable training</li>
                <li>Progressive learning for quality improvement</li>
            </ul>
            
            <h3>Impact</h3>
            <p>Demonstrates mastery of advanced generative models with practical applications in product design and synthetic data generation.</p>
        `
    }
};

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Add scroll animation for project cards
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// Modal functionality
const modal = document.getElementById('projectModal');
const closeBtn = document.querySelector('.close');
const learnMoreBtns = document.querySelectorAll('.learn-more-btn');

learnMoreBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const projectId = this.closest('.project-card').getAttribute('data-project');
        const project = projectData[projectId];
        
        document.getElementById('modalTitle').textContent = project.title;
        document.getElementById('modalDescription').textContent = project.description;
        document.getElementById('modalDetails').innerHTML = project.details;
        
        modal.style.display = 'block';
    });
});

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});