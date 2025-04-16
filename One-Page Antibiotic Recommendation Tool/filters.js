/**
 * Canadian Antibiotic Recommendation Tool
 * Filters Module
 */

window.filtersModule = (function() {
    // Store filter states
    const filterState = {
        age: 'adult',
        allergies: [],
        setting: 'outpatient',
        specialPopulations: []
    };
    
    // Initialize filters
    function initializeFilters() {
        // Set up filter button event listeners
        const filterButtons = document.querySelectorAll('.filter-btn');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filterType = this.getAttribute('data-filter');
                const filterValue = this.getAttribute('data-value');
                
                // Handle different filter types
                switch(filterType) {
                    case 'age':
                        // Age is exclusive (only one can be selected)
                        document.querySelectorAll(`.filter-btn[data-filter="age"]`).forEach(btn => {
                            btn.classList.remove('active');
                        });
                        this.classList.add('active');
                        filterState.age = filterValue;
                        
                        // Update age group in data store
                        window.dataModule.dataStore.ageGroup = filterValue;
                        break;
                        
                    case 'allergy':
                        // Allergies can have multiple selections
                        this.classList.toggle('active');
                        
                        if (this.classList.contains('active')) {
                            // Add to allergies array if not already present
                            if (!filterState.allergies.includes(filterValue)) {
                                filterState.allergies.push(filterValue);
                            }
                        } else {
                            // Remove from allergies array
                            filterState.allergies = filterState.allergies.filter(a => a !== filterValue);
                        }
                        
                        // Update allergies in patient factors
                        window.dataModule.dataStore.patientFactors.allergies = filterState.allergies;
                        break;
                        
                    case 'setting':
                        // Setting is exclusive (only one can be selected)
                        document.querySelectorAll(`.filter-btn[data-filter="setting"]`).forEach(btn => {
                            btn.classList.remove('active');
                        });
                        this.classList.add('active');
                        filterState.setting = filterValue;
                        
                        // Update setting in patient factors
                        window.dataModule.dataStore.patientFactors.setting = filterValue;
                        break;
                        
                    case 'special':
                        // Special populations can have multiple selections
                        this.classList.toggle('active');
                        
                        if (this.classList.contains('active')) {
                            // Add to special populations array if not already present
                            if (!filterState.specialPopulations.includes(filterValue)) {
                                filterState.specialPopulations.push(filterValue);
                            }
                        } else {
                            // Remove from special populations array
                            filterState.specialPopulations = filterState.specialPopulations.filter(sp => sp !== filterValue);
                        }
                        
                        // Update special populations in patient factors
                        window.dataModule.dataStore.patientFactors.specialPopulations = filterState.specialPopulations;
                        break;
                }
                
                // Apply filters to current view
                applyFilters();
            });
        });
    }
    
    // Initialize age toggle (Adult/Pediatric)
    function initializeAgeToggle() {
        const adultToggle = document.getElementById('adult-toggle');
        const pediatricToggle = document.getElementById('pediatric-toggle');
        
        if (adultToggle && pediatricToggle) {
            adultToggle.addEventListener('click', function() {
                if (!this.classList.contains('active')) {
                    this.classList.add('active');
                    pediatricToggle.classList.remove('active');
                    
                    // Set age group to adult
                    window.dataModule.dataStore.ageGroup = 'adult';
                    
                    // Update filter buttons to match
                    document.querySelectorAll(`.filter-btn[data-filter="age"]`).forEach(btn => {
                        if (btn.getAttribute('data-value') === 'adult') {
                            btn.classList.add('active');
                        } else {
                            btn.classList.remove('active');
                        }
                    });
                    
                    // Apply filters to current view
                    applyFilters();
                }
            });
            
            pediatricToggle.addEventListener('click', function() {
                if (!this.classList.contains('active')) {
                    this.classList.add('active');
                    adultToggle.classList.remove('active');
                    
                    // Set age group to pediatric by default
                    window.dataModule.dataStore.ageGroup = 'pediatric';
                    
                    // Update filter buttons to match
                    document.querySelectorAll(`.filter-btn[data-filter="age"]`).forEach(btn => {
                        if (btn.getAttribute('data-value') === 'pediatric') {
                            btn.classList.add('active');
                        } else {
                            btn.classList.remove('active');
                        }
                    });
                    
                    // Apply filters to current view
                    applyFilters();
                }
            });
        }
        
        // Initialize pediatric age toggle buttons
        const pedAgeButtons = document.querySelectorAll('.ped-age-btn');
        
        pedAgeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const ageValue = this.getAttribute('data-age');
                
                // Toggle active state
                pedAgeButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Set age group
                window.dataModule.dataStore.ageGroup = ageValue;
                
                // Update filter buttons to match
                document.querySelectorAll(`.filter-btn[data-filter="age"]`).forEach(btn => {
                    if (btn.getAttribute('data-value') === ageValue) {
                        btn.classList.add('active');
                    } else {
                        btn.classList.remove('active');
                    }
                });
                
                // Apply filters to current view
                applyFilters();
                
                // Update dosage calculator if visible
                updateDosageCalculator();
            });
        });
    }
    
    // Apply filters to current view
    function applyFilters() {
        const currentView = getCurrentView();
        
        switch(currentView) {
            case 'category':
                // Refresh category view with current filters
                const categoryId = window.dataModule.dataStore.currentCategory;
                if (categoryId) {
                    displayCategoryView(categoryId);
                }
                break;
                
            case 'condition':
                // Refresh condition view with current filters
                const conditionId = window.dataModule.dataStore.currentCondition;
                if (conditionId) {
                    // Get current treatment tab
                    const activeTab = document.querySelector('.tab-btn.active');
                    const tabId = activeTab ? activeTab.getAttribute('data-tab') : 'first-line';
                    
                    // Refresh condition details
                    displayConditionDetails(conditionId);
                    
                    // Switch to the previously active tab
                    switchTreatmentTab(tabId);
                }
                break;
                
            case 'antibiotic':
                // Refresh antibiotic view with current filters
                const antibioticId = window.dataModule.dataStore.currentAntibiotic;
                if (antibioticId) {
                    displayAntibioticDetails(antibioticId);
                }
                break;
        }
    }
    
    // Get current view
    function getCurrentView() {
        if (!document.getElementById('welcome-screen').classList.contains('hidden')) {
            return 'welcome';
        } else if (!document.getElementById('category-view').classList.contains('hidden')) {
            return 'category';
        } else if (!document.getElementById('condition-view').classList.contains('hidden')) {
            return 'condition';
        } else if (!document.getElementById('antibiotic-view').classList.contains('hidden')) {
            return 'antibiotic';
        }
        
        return 'unknown';
    }
    
    // Initialize dosage calculator
    function initializeDosageCalculator() {
        const weightInput = document.getElementById('weight-input');
        const calculateBtn = document.getElementById('calculate-btn');
        const estimateWeightCheckbox = document.getElementById('estimate-weight');
        const ageInput = document.getElementById('age-input');
        const ageUnit = document.getElementById('age-unit');
        const ageInputGroup = document.querySelector('.age-input-group');
        
        if (estimateWeightCheckbox) {
            estimateWeightCheckbox.addEventListener('change', function() {
                if (this.checked) {
                    ageInputGroup.classList.remove('hidden');
                    weightInput.disabled = true;
                } else {
                    ageInputGroup.classList.add('hidden');
                    weightInput.disabled = false;
                }
            });
        }
        
        if (ageInput && ageUnit) {
            ageInput.addEventListener('input', function() {
                if (estimateWeightCheckbox.checked) {
                    const age = parseFloat(ageInput.value);
                    const unit = ageUnit.value;
                    
                    if (!isNaN(age) && age > 0) {
                        const estimatedWeight = estimateWeightFromAge(age, unit);
                        weightInput.value = estimatedWeight.toFixed(1);
                    }
                }
            });
            
            ageUnit.addEventListener('change', function() {
                if (estimateWeightCheckbox.checked) {
                    const age = parseFloat(ageInput.value);
                    const unit = ageUnit.value;
                    
                    if (!isNaN(age) && age > 0) {
                        const estimatedWeight = estimateWeightFromAge(age, unit);
                        weightInput.value = estimatedWeight.toFixed(1);
                    }
                }
            });
        }
        
        if (calculateBtn && weightInput) {
            calculateBtn.addEventListener('click', function() {
                calculatePediatricDosage();
            });
            
            weightInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    calculatePediatricDosage();
                }
            });
        }
    }
    
    // Calculate pediatric dosage
    function calculatePediatricDosage() {
        const weightInput = document.getElementById('weight-input');
        const calculationResult = document.getElementById('calculation-result');
        
        if (!weightInput || !calculationResult) return;
        
        const weight = parseFloat(weightInput.value);
        
        if (isNaN(weight) || weight <= 0) {
            calculationResult.innerHTML = '<p class="error">Please enter a valid weight.</p>';
            return;
        }
        
        // Get current antibiotic
        const antibioticId = window.dataModule.dataStore.currentAntibiotic;
        if (!antibioticId) {
            calculationResult.innerHTML = '<p class="error">No antibiotic selected.</p>';
            return;
        }
        
        const antibiotic = window.dataModule.getAntibioticById(antibioticId);
        if (!antibiotic) {
            calculationResult.innerHTML = '<p class="error">Antibiotic not found.</p>';
            return;
        }
        
        // Get current age group
        const ageGroup = window.dataModule.dataStore.ageGroup;
        
        // Check if pediatric dosing exists for this antibiotic
        if (!antibiotic.pediatric_dosing || !antibiotic.pediatric_dosing[ageGroup]) {
            calculationResult.innerHTML = '<p class="error">No pediatric dosing available for this antibiotic in the selected age group.</p>';
            return;
        }
        
        const pediatricDosing = antibiotic.pediatric_dosing[ageGroup];
        
        // Calculate dosages
        let resultHTML = '<h4>Calculated Dosages</h4>';
        
        // Check for contraindications
        if (pediatricDosing.contraindications) {
            resultHTML += `<div class="contraindication"><strong>⚠️ Contraindications:</strong> ${pediatricDosing.contraindications}</div>`;
        }
        
        // Calculate mg/kg/day dosing
        if (pediatricDosing.mg_per_kg_per_day) {
            const doseRange = parseDoseRange(pediatricDosing.mg_per_kg_per_day);
            const minDailyDose = doseRange.min * weight;
            const maxDailyDose = doseRange.max * weight;
            
            resultHTML += `<div class="dose-calculation">
                <div><strong>Total daily dose:</strong></div>
                <div>${minDailyDose.toFixed(1)} - ${maxDailyDose.toFixed(1)} mg/day</div>
            </div>`;
            
            // Calculate per-dose amount based on frequency
            if (pediatricDosing.frequency) {
                const frequency = parseFrequency(pediatricDosing.frequency);
                const minDosePerAdmin = minDailyDose / frequency;
                const maxDosePerAdmin = maxDailyDose / frequency;
                
                resultHTML += `<div class="dose-calculation">
                    <div><strong>Per dose (${pediatricDosing.frequency}):</strong></div>
                    <div>${minDosePerAdmin.toFixed(1)} - ${maxDosePerAdmin.toFixed(1)} mg</div>
                </div>`;
                
                // Round to nearest formulation
                if (pediatricDosing.formulations) {
                    const roundedMin = roundToNearestFormulation(minDosePerAdmin, pediatricDosing.formulations);
                    const roundedMax = roundToNearestFormulation(maxDosePerAdmin, pediatricDosing.formulations);
                    
                    resultHTML += `<div class="dose-calculation">
                        <div><strong>Rounded to available formulations:</strong></div>
                        <div>${roundedMin} - ${roundedMax} mg</div>
                 
(Content truncated due to size limit. Use line ranges to read in chunks)