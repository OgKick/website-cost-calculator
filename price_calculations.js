document.addEventListener('DOMContentLoaded', function() {
    const costEstimateElement = document.getElementById('cost-estimate').querySelector('h2');
    const pageAmount = document.getElementById('page-amount');
    const blogPosts = document.getElementById('blog-posts');
    const eCommerce = document.getElementById('e-commerce');
    const additionalProducts = document.getElementById('additional-prod');
    const hostingOptions = document.getElementsByName('hosting');
    const maintenanceOptions = document.getElementsByName('maintenance');
    const seoOpt = document.getElementById('seo-opt');
    const custDesign = document.getElementById('cust-design');
    const contWrite = document.getElementById('cont-write');
    const addLang = document.getElementById('add-lang');
    const socialPlatforms = document.querySelectorAll('input[id^="facebook"], input[id^="instagram"], input[id^="add-social"]');
    const stockImages = document.getElementById('add-stock');
    const logoDesign = document.getElementById('logo-design');
    const customAnimations = document.getElementById('cust-anim');
    const careerPage = document.getElementById('career-page');
    const jobList = document.getElementById('job-list');
    const portfolio = document.getElementById('portfolio');
    const projList = document.getElementById('proj-list');
    const prodPage = document.getElementById('prod-page');
    const prodList = document.getElementById('job-list');
    const chatBot = document.getElementById('chat-bot');
    const dbInteg = document.getElementById('db-integ');
    const loginAuth = document.getElementById('login-auth');
    
    let currentStep = 0; // Track current step
    
    const formSteps = document.querySelectorAll('.form-step');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    
    // Reset form visibility
    function resetForm() {
        formSteps.forEach((step) => step.style.display = 'none');
        formSteps[currentStep].style.display = 'block';
    }

    // Handle step navigation
    nextBtn.addEventListener('click', function() {
        if (currentStep < formSteps.length - 1) {
            currentStep++;
            resetForm();
        }
        togglePrevNextButtons();
    });

    prevBtn.addEventListener('click', function() {
        if (currentStep > 0) {
            currentStep--;
            resetForm();
        }
        togglePrevNextButtons();
    });

    // Toggle visibility of Next and Previous buttons
    function togglePrevNextButtons() {
        prevBtn.style.display = currentStep === 0 ? 'none' : 'inline-block'; // Hide prev on first step
        nextBtn.style.display = currentStep === formSteps.length - 1 ? 'none' : 'inline-block'; // Hide next on last step
    }
    
    // Initialize the form
    resetForm();
    togglePrevNextButtons();
    
    // Reset button functionality
    document.getElementById('reset-btn').addEventListener('click', function() {
        // Reset current step and form fields
        currentStep = 0;
        resetForm();
        togglePrevNextButtons();

        // Reset any dynamic fields like range sliders or numbers
        document.getElementById('page-amount').value = 0;
        document.getElementById('blog-posts').value = 0;
        document.getElementById('blog-count').innerText = 0;
        document.getElementById('e-commerce').checked = false;
        document.getElementById('additional-prod').value = 0;
        document.getElementById('cost-estimate').value = 0;
        document.getElementById('base-maint').checked = false;
        document.getElementById('pro-host').checked = false;
        document.getElementById('adv-host').checked = false;
        document.getElementById('base-maint').checked = false;
        document.getElementById('adv-maint').checked = false;
        document.getElementById('seo-opt').checked = false;
        document.getElementById('cust-design').checked = false;
        document.getElementById('cont-write').value = 0;
        document.getElementById('add-lang').value = 0;
        document.getElementById('facebook').checked = false;
        document.getElementById('instagram').checked = false;
        document.getElementById('add-social').value = 0;
        document.getElementById('adv-host').checked = false;
        document.getElementById('add-stock').value = 0;
        document.getElementById('logo-design').checked = false;
        document.getElementById('cust-anim').value = 0;
        document.getElementById('career-page').checked = false;
        document.getElementById('job-list').value = 0;
        document.getElementById('portfolio').checked = false;
        document.getElementById('proj-list').value = 0;
        document.getElementById('prod-page').checked = false;
        document.getElementById('adv-host').checked = false;
        document.getElementById('products').value = 0;
        document.getElementById('chat-bot').checked = false;
        document.getElementById('db-integ').checked = false;
        document.getElementById('login-auth').checked = false;

        // Reset the cost calculation
        updateCost();
    });

    // Your cost calculation logic here...
    function updateCost() {
        let cost = 0;

        function getInputValue(inputElement) {
            return parseInt(inputElement.value) || 0;
        }

        const pageValue = getInputValue(pageAmount);
        cost += pageValue * 100;

        const blogPostValue = getInputValue(blogPosts);
        cost += blogPostValue * 20;

        if (eCommerce.checked) {
            cost += 500;
            const additionalProductsValue = getInputValue(additionalProducts);
            cost += Math.floor(additionalProductsValue / 5) * 100;
        }

        hostingOptions.forEach(option => {
            if (option.checked) {
                if (option.value === 'basic') {
                    cost += 100;
                } else if (option.value === 'pro') {
                    cost += 200;
                } else if (option.value === 'advanced') {
                    cost += 300;
                }
            }
        });

        maintenanceOptions.forEach(option => {
            if (option.checked) {
                if (option.value === 'basic') {
                    cost += 50;
                } else if (option.value === 'advanced') {
                    cost += 150;
                }
            }
        });

        if (seoOpt.checked) cost += 200;
        if (custDesign.checked) cost += 500;
        const contentWriteValue = getInputValue(contWrite);
        cost += contentWriteValue * 50;
        const addLangValue = getInputValue(addLang);
        cost += addLangValue * 100;

        socialPlatforms.forEach(platform => {
            if (platform.checked) {
                cost += platform.id === 'facebook' || platform.id === 'instagram' ? 100 : 50;
            }
        });

        const stockImagesValue = getInputValue(stockImages);
        cost += stockImagesValue * 10;
        if (logoDesign.checked) cost += 200;
        const customAnimationsValue = getInputValue(customAnimations);
        cost += customAnimationsValue * 100;
        if (careerPage.checked) {
            cost += 300;
            const jobListValue = getInputValue(jobList);
            cost += Math.floor(jobListValue / 1) * 50;
        }
        if (portfolio.checked) {
            cost += 300;
            const projListValue = getInputValue(projList);
            cost += Math.floor(projListValue / 1) * 100;
        }
        if (prodPage.checked) {
            cost += 500;
            const prodListValue = getInputValue(prodList);
            cost += Math.floor(prodListValue / 1) * 50;
        }
        if (chatBot.checked) cost += 200;
        if (dbInteg.checked) cost += 300;
        if (loginAuth.checked) cost += 250;

        costEstimateElement.textContent = `Estimated Cost: $${cost}`;
    }

    // Event listeners for input changes to update cost
    pageAmount.addEventListener('input', updateCost);
    blogPosts.addEventListener('input', function() {
        document.getElementById('blog-count').textContent = blogPosts.value;
        updateCost();
    });
    // More event listeners for your other elements...
    updateCost(); // Initial cost calculation
});
