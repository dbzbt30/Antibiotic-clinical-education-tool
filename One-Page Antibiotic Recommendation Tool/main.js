/**
 * Canadian Antibiotic Recommendation Tool
 * Main Application Logic - Updated with new features and fixes for tab navigation
 */

// Initialize the application
async function initializeApp() {
    console.log('Initializing application...');
    
    // Load all data
    const dataLoaded = await window.dataModule.loadAllData();
    if (!dataLoaded) {
        showError('Failed to load data. Please refresh the page.');
        return;
    }
    
    // Initialize UI components
    initializeUI();
    
    // Initialize event listeners
    initializeEventListeners();
    
    // Initialize filters
    window.filtersModule.initializeFilters();
    window.filtersModule.initializeAgeToggle();
    window.filtersModule.initializeDosageCalculator();
    
    console.log('Application initialized successfully');
}

// Initialize UI components
function initializeUI() {
    // Populate category navigation
    populateCategoryNav();
    
    // Show welcome screen by default
    showWelcomeScreen();
}

// Initialize event listeners
function initializeEventListeners() {
    // Category buttons - Using event delegation for better reliability
    document.addEventListener('click', function(e) {
        const categoryBtn = e.target.closest('.category-btn');
        if (categoryBtn) {
            const categoryId = categoryBtn.getAttribute('data-category');
            if (categoryId) {
                console.log('Category button clicked:', categoryId);
                displayCategoryView(categoryId);
            }
        }
    });
    
    // Back buttons - Using event delegation
    document.addEventListener('click', function(e) {
        const backBtn = e.target.closest('.back-btn');
        if (backBtn) {
            handleBackButtonClick();
        }
    });
    
    // Search functionality
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    
    if (searchInput && searchBtn) {
        searchBtn.addEventListener('click', () => {
            performSearch(searchInput.value);
        });
        
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch(searchInput.value);
            }
        });
    }
    
    // Quick access links - Using event delegation
    document.addEventListener('click', function(e) {
        const quickAccessLink = e.target.closest('.quick-access a');
        if (quickAccessLink) {
            e.preventDefault();
            const conditionId = quickAccessLink.getAttribute('data-condition');
            if (conditionId) {
                displayConditionDetails(conditionId);
            }
        }
    });
    
    // Treatment tabs - Using event delegation
    document.addEventListener('click', function(e) {
        const tabBtn = e.target.closest('.tab-btn');
        if (tabBtn) {
            const tabId = tabBtn.getAttribute('data-tab');
            if (tabId) {
                switchTreatmentTab(tabId);
            }
        }
    });
    
    // Antibiotic links - Using event delegation for dynamically created content
    document.addEventListener('click', function(e) {
        const antibioticLink = e.target.closest('.antibiotic-link');
        if (antibioticLink) {
            e.preventDefault();
            const antibioticId = antibioticLink.getAttribute('data-antibiotic-id');
            if (antibioticId) {
                displayAntibioticDetails(antibioticId);
            }
        }
    });
}

// Populate category navigation
function populateCategoryNav() {
    const categories = window.dataModule.getCategories();
    const navContainer = document.querySelector('.category-nav .scroll-container');
    
    if (!navContainer || !categories) {
        console.error('Cannot populate category nav: missing container or categories');
        return;
    }
    
    // Clear existing buttons
    navContainer.innerHTML = '';
    
    // Add category buttons
    categories.forEach(category => {
        const button = document.createElement('button');
        button.className = 'category-btn';
        button.setAttribute('data-category', category.id);
        
        // Use full category name instead of just first word
        button.textContent = category.name;
        
        navContainer.appendChild(button);
    });
}

// Show welcome screen
function showWelcomeScreen() {
    // Hide all sections
    hideAllSections();
    
    // Show welcome screen
    const welcomeScreen = document.getElementById('welcome-screen');
    if (welcomeScreen) {
        welcomeScreen.classList.remove('hidden');
    }
    
    // Reset current selections
    window.dataModule.dataStore.currentCategory = null;
    window.dataModule.dataStore.currentCondition = null;
    window.dataModule.dataStore.currentAntibiotic = null;
}

// Display category view
function displayCategoryView(categoryId) {
    console.log('Displaying category view for:', categoryId);
    
    // Hide all sections
    hideAllSections();
    
    // Get category data
    const category = window.dataModule.getCategoryById(categoryId);
    if (!category) {
        console.error('Category not found:', categoryId);
        showError('Category not found');
        return;
    }
    
    // Store current category
    window.dataModule.dataStore.currentCategory = categoryId;
    
    // Update category title
    const categoryTitle = document.getElementById('category-title');
    if (categoryTitle) {
        categoryTitle.textContent = category.name;
    }
    
    // Populate conditions list
    const conditionsContainer = document.getElementById('conditions-container');
    if (conditionsContainer) {
        conditionsContainer.innerHTML = '';
        
        if (category.conditions && category.conditions.length > 0) {
            category.conditions.forEach(condition => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = '#';
                link.textContent = condition.name;
                link.setAttribute('data-condition', condition.id);
                
                listItem.appendChild(link);
                conditionsContainer.appendChild(listItem);
            });
        } else {
            conditionsContainer.innerHTML = '<li>No conditions available for this category.</li>';
        }
        
        // Add event listeners to condition links using event delegation
        conditionsContainer.addEventListener('click', function(e) {
            const conditionLink = e.target.closest('a');
            if (conditionLink) {
                e.preventDefault();
                const conditionId = conditionLink.getAttribute('data-condition');
                if (conditionId) {
                    displayConditionDetails(conditionId);
                }
            }
        });
    } else {
        console.error('Conditions container not found');
    }
    
    // Populate empiric coverage with enhanced information
    const empiricContent = document.getElementById('empiric-content');
    if (empiricContent) {
        const empiricCoverage = window.dataModule.getEmpiricCoverageForCategory(categoryId);
        
        if (empiricCoverage) {
            let html = `<p>${empiricCoverage.description}</p>`;
            
            // Get current age group
            const ageGroup = window.dataModule.dataStore.ageGroup;
            
            // Add recommendations for current age group
            if (empiricCoverage.recommendations[ageGroup] && empiricCoverage.recommendations[ageGroup].length > 0) {
                html += '<div class="empiric-recommendations">';
                
                empiricCoverage.recommendations[ageGroup].forEach(rec => {
                    html += `
                        <div class="treatment-regimen">
                            <div class="regimen-header">${rec.regimen}</div>
                            <div class="regimen-details">
                                ${rec.dosing ? `<div class="regimen-label">Dosing:</div><div>${rec.dosing}</div>` : ''}
                                ${rec.duration ? `<div class="regimen-label">Duration:</div><div>${rec.duration}</div>` : ''}
                                ${rec.notes ? `<div class="regimen-label">Notes:</div><div>${rec.notes}</div>` : ''}
                                <div class="regimen-label">For:</div><div>${rec.condition}</div>
                            </div>
                        </div>
                    `;
                });
                
                html += '</div>';
            } else {
                html += `<p>No specific empiric recommendations available for ${ageGroup} patients. Please refer to individual conditions.</p>`;
            }
            
            empiricContent.innerHTML = html;
        } else {
            empiricContent.innerHTML = '<p>No empiric coverage information available for this category.</p>';
        }
    } else {
        console.error('Empiric content container not found');
    }
    
    // Show category view
    const categoryView = document.getElementById('category-view');
    if (categoryView) {
        categoryView.classList.remove('hidden');
    } else {
        console.error('Category view not found');
    }
    
    // Highlight active category button
    highlightActiveCategory(categoryId);
}

// Display condition details
function displayConditionDetails(conditionId) {
    console.log('Displaying condition details for:', conditionId);
    
    // Hide all sections
    hideAllSections();
    
    // Get condition data
    const condition = window.dataModule.getConditionById(conditionId);
    if (!condition) {
        showError('Condition not found');
        return;
    }
    
    // Store current condition
    window.dataModule.dataStore.currentCondition = conditionId;
    
    // Update condition title
    const conditionTitle = document.getElementById('condition-title');
    if (conditionTitle) {
        conditionTitle.textContent = condition.name;
    }
    
    // Get treatment recommendations
    const treatment = window.dataModule.getTreatmentForCondition(conditionId);
    
    // Populate treatment options
    populateTreatmentOptions(treatment);
    
    // Populate notes
    const notesContent = document.getElementById('notes-content');
    if (notesContent && condition.notes) {
        notesContent.innerHTML = '';
        const notesList = document.createElement('ul');
        
        condition.notes.forEach(note => {
            const listItem = document.createElement('li');
            listItem.textContent = note;
            notesList.appendChild(listItem);
        });
        
        notesContent.appendChild(notesList);
    } else if (notesContent) {
        notesContent.innerHTML = '<p>No specific notes available for this condition.</p>';
    }
    
    // Populate references
    const referencesContent = document.getElementById('references-content');
    if (referencesContent && condition.references) {
        referencesContent.innerHTML = '';
        const referencesList = document.createElement('ul');
        
        condition.references.forEach(reference => {
            const listItem = document.createElement('li');
            listItem.textContent = reference;
            referencesList.appendChild(listItem);
        });
        
        referencesContent.appendChild(referencesList);
    } else if (referencesContent) {
        referencesContent.innerHTML = '<p>References: Canadian guidelines including Bugs & Drugs, CPS Guidelines, Sanford Guide Canada, and Choosing Wisely Canada.</p>';
    }
    
    // Show condition view
    const conditionView = document.getElementById('condition-view');
    if (conditionView) {
        conditionView.classList.remove('hidden');
    }
    
    // Set first-line tab as active
    switchTreatmentTab('first-line');
}

// Populate treatment options
function populateTreatmentOptions(treatment) {
    if (!treatment) {
        const treatmentContents = document.querySelectorAll('.treatment-content');
        treatmentContents.forEach(content => {
            content.innerHTML = '<p>No treatment recommendations available for this condition.</p>';
        });
        return;
    }
    
    // Get current age group and patient factors
    const ageGroup = window.dataModule.dataStore.ageGroup;
    const patientFactors = window.dataModule.dataStore.patientFactors;
    
    // Populate first-line treatment
    const firstLineContent = document.getElementById('first-line');
    if (firstLineContent && treatment.first_line && treatment.first_line[ageGroup]) {
        populateTreatmentContent(firstLineContent, treatment.first_line[ageGroup], patientFactors);
    } else if (firstLineContent) {
        firstLineContent.innerHTML = '<p>No first-line recommendations available for this age group.</p>';
    }
    
    // Populate second-line treatment
    const secondLineContent = document.getElementById('second-line');
    if (secondLineContent && treatment.second_line && treatment.second_line[ageGroup]) {
        populateTreatmentContent(secondLineContent, treatment.second_line[ageGroup], patientFactors);
    } else if (secondLineContent) {
        secondLineContent.innerHTML = '<p>No second-line recommendations available for this age group.</p>';
    }
    
    // Populate third-line treatment
    const thirdLineContent = document.getElementById('third-line');
    if (thirdLineContent && treatment.third_line && treatment.third_line[ageGroup]) {
        populateTreatmentContent(thirdLineContent, treatment.third_line[ageGroup], patientFactors);
    } else if (thirdLineContent) {
        thirdLineContent.innerHTML = '<p>No third-line recommendations available for this age group.</p>';
    }
}

// Populate treatment content
function populateTreatmentContent(container, treatmentOptions, patientFactors) {
    container.innerHTML = '';
    
    // If treatmentOptions is an object with multiple scenarios
    if (typeof treatmentOptions === 'object' && !Array.isArray(treatmentOptions)) {
        // Filter based on patient factors if possible
        const filteredTreatment = window.dataModule.filterTreatmentsByPatientFactors({ first_line: { [window.dataModule.dataStore.ageGroup]: treatmentOptions } }, patientFactors);
        
        if (filteredTreatment && filteredTreatment.regimen) {
            // Single filtered option
            container.appendChild(createTreatmentRegimen(filteredTreatment));
        } else {
            // Multiple options
            Object.entries(treatmentOptions).forEach(([scenario, regimen]) => {
                const scenarioTitle = document.createElement('h4');
                scenarioTitle.textContent = formatScenarioTitle(scenario);
                container.appendChild(scenarioTitle);
                
                container.appendChild(createTreatmentRegimen(regimen));
            });
        }
    } else if (Array.isArray(treatmentOptions)) {
        // Array of treatment options
        treatmentOptions.forEach(regimen => {
            container.appendChild(createTreatmentRegimen(regimen));
        });
    } else {
        container.innerHTML = '<p>No treatment recommendations available for this scenario.</p>';
    }
}

// Create treatment regimen element
function createTreatmentRegimen(regimen) {
    const regimenElement = document.createElement('div');
    regimenElement.className = 'treatment-regimen';
    
    const regimenHeader = document.createElement('div');
    regimenHeader.className = 'regimen-header';
    regimenHeader.textContent = regimen.regimen;
    
    const regimenDetails = document.createElement('div');
    regimenDetails.className = 'regimen-details';
    
    // Add dosing
    if (regimen.dosing) {
        const dosingLabel = document.createElement('div');
        dosingLabel.className = 'regimen-label';
        dosingLabel.textC
(Content truncated due to size limit. Use line ranges to read in chunks)