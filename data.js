/**
 * Canadian Antibiotic Recommendation Tool
 * Data Module - Enhanced with updated pediatric structure and empiric coverage
 * Data embedded directly to avoid loading issues in production
 */

window.dataModule = (function() {
    // Data store for application state
    const dataStore = {
        infections: null,
        antibiotics: null,
        treatments: null,
        categories: null,
        ageGroup: 'adult',
        patientFactors: {
            allergies: [],
            setting: 'outpatient',
            specialPopulations: []
        },
        currentCategory: null,
        currentCondition: null,
        currentAntibiotic: null
    };
    
    // Embedded infections data
    const infectionsData = {
      "categories": [
        {
          "id": "cns",
          "name": "Central Nervous System (CNS)",
          "description": "Infections affecting the brain, meninges, and spinal cord",
          "empiricLogic": "For suspected acute bacterial meningitis (e.g. fever + neck stiffness or altered mental status), recommend ceftriaxone + vancomycin. If patient is >50 years or immunocompromised, add ampicillin for Listeria coverage. Consider adding acyclovir for encephalitis until HSV is ruled out.",
          "conditions": [
            {
              "id": "meningitis",
              "name": "Bacterial Meningitis",
              "description": "Inflammation of the meninges due to bacterial infection",
              "notes": [
                "Administer dexamethasone for pneumococcal meningitis",
                "Obtain urgent LP before antibiotics if possible",
                "Adjust therapy based on CSF results and cultures"
              ],
              "references": [
                "Bugs & Drugs guide to antimicrobial therapy",
                "Canadian Pediatric Society guidelines"
              ]
            },
            {
              "id": "encephalitis",
              "name": "Encephalitis",
              "description": "Inflammation of the brain parenchyma",
              "notes": [
                "Consider HSV as a common cause",
                "Empiric therapy should include acyclovir until HSV PCR results"
              ],
              "references": [
                "Bugs & Drugs guide to antimicrobial therapy",
                "Sanford Guide Canada"
              ]
            },
            {
              "id": "brain-abscess",
              "name": "Brain Abscess",
              "description": "Focal collection of pus within the brain parenchyma",
              "notes": [
                "Neurosurgical consultation for possible drainage",
                "Extended duration of therapy typically required (4-8 weeks)"
              ],
              "references": [
                "Bugs & Drugs guide to antimicrobial therapy"
              ]
            }
          ]
        },
        {
          "id": "respiratory",
          "name": "Respiratory",
          "description": "Infections affecting the respiratory tract including lungs, bronchi, and upper airways",
          "empiricLogic": "For community-acquired pneumonia in a previously healthy adult, first-line is high-dose amoxicillin (to cover pneumococcus); add a macrolide (azithromycin) or use doxycycline to cover atypicals if needed. Comorbid patients or inpatient CAP require β-lactam + macrolide or a respiratory fluoroquinolone (reserved for beta-lactam allergy or second-line).",
          "conditions": [
            {
              "id": "pneumonia-cap",
              "name": "Community-Acquired Pneumonia",
              "description": "Pneumonia acquired outside of healthcare settings",
              "notes": [
                "Duration is typically 5 days if clinically stable",
                "Reserve fluoroquinolones as last-line therapy",
                "Consider severity assessment using CURB-65 or PSI"
              ],
              "references": [
                "Bugs & Drugs guide to antimicrobial therapy",
                "Choosing Wisely Canada"
              ]
            },
            {
              "id": "pneumonia-hap",
              "name": "Hospital-Acquired Pneumonia",
              "description": "Pneumonia developing 48+ hours after hospital admission",
              "notes": [
                "Consider local antibiogram for empiric therapy",
                "Assess risk for multidrug-resistant organisms",
                "De-escalate therapy based on culture results"
              ],
              "references": [
                "Bugs & Drugs guide to antimicrobial therapy",
                "Sanford Guide Canada"
              ]
            },
            {
              "id": "pneumonia-aspiration",
              "name": "Aspiration Pneumonia",
              "description": "Pneumonia resulting from inhalation of oropharyngeal or gastric contents",
              "notes": [
                "Cover oral anaerobes (e.g. amoxicillin-clavulanate or clindamycin)",
                "Consider risk factors for resistant organisms"
              ],
              "references": [
                "Bugs & Drugs guide to antimicrobial therapy"
              ]
            },
            {
              "id": "resp-pharyngitis",
              "name": "Streptococcal Pharyngitis",
              "description": "Pharyngitis caused by Group A Streptococcus",
              "notes": [
                "Confirm with rapid strep test or throat culture when possible",
                "Penicillin or amoxicillin for 10 days is first-line",
                "Macrolides if penicillin-allergic"
              ],
              "references": [
                "Canadian Pediatric Society guidelines",
                "Choosing Wisely Canada"
              ]
            },
            {
              "id": "resp-sinusitis",
              "name": "Acute Bacterial Sinusitis",
              "description": "Bacterial infection of the paranasal sinuses",
              "notes": [
                "Most cases are viral and do not require antibiotics",
                "Consider antibiotics if symptoms >10 days, severe symptoms, or worsening pattern"
              ],
              "references": [
                "Choosing Wisely Canada",
                "Bugs & Drugs guide to antimicrobial therapy"
              ]
            },
            {
              "id": "resp-otitis",
              "name": "Acute Otitis Media",
              "description": "Middle ear infection, common in children",
              "notes": [
                "Don't prescribe antibiotics in vaccinated children >6 months and adults unless specific criteria are met",
                "Duration: 10 days for <2 years old, 5 days for ≥2 years old"
              ],
              "references": [
                "Canadian Pediatric Society guidelines",
                "Choosing Wisely Canada"
              ]
            }
          ]
        },
        {
          "id": "gu",
          "name": "Genitourinary (GU)",
          "description": "Infections affecting the urinary tract, kidneys, and genital organs",
          "empiricLogic": "For uncomplicated UTI (cystitis) in a non-pregnant female, first-line options are nitrofurantoin (5 days), TMP-SMX (3 days), or fosfomycin (single dose). Avoid fluoroquinolones for uncomplicated cystitis to reduce resistance. Pyelonephritis or complicated UTI warrants fluoroquinolone or IV ceftriaxone, with 7–10 days total therapy.",
          "conditions": [
            {
              "id": "uti-cystitis",
              "name": "Uncomplicated Cystitis",
              "description": "Lower urinary tract infection in non-pregnant women with normal urinary tract",
              "notes": [
                "Nitrofurantoin contraindicated if CrCl <30 mL/min",
                "TMP-SMX should be avoided if local E. coli resistance >20%",
                "Avoid fluoroquinolones for uncomplicated UTI"
              ],
              "references": [
                "Bugs & Drugs guide to antimicrobial therapy",
                "Choosing Wisely Canada"
              ]
            },
            {
              "id": "uti-pyelonephritis",
              "name": "Acute Pyelonephritis",
              "description": "Infection of the kidney and renal pelvis",
              "notes": [
                "Consider outpatient management for mild cases",
                "Hospitalize if severe illness, inability to tolerate oral intake, or complicating factors",
                "Adjust therapy based on urine culture results"
              ],
              "references": [
                "Bugs & Drugs guide to antimicrobial therapy"
              ]
            },
            {
              "id": "uti-complicated",
              "name": "Complicated UTI",
              "description": "UTI in patients with functional or anatomical abnormalities of the urinary tract",
              "notes": [
                "Includes UTI in males, pregnant women, and patients with catheters or abnormal urinary tract",
                "Broader spectrum coverage often required",
                "Longer duration of therapy (7-14 days)"
              ],
              "references": [
                "Bugs & Drugs guide to antimicrobial therapy",
                "Sanford Guide Canada"
              ]
            },
            {
              "id": "gu-prostatitis",
              "name": "Acute Bacterial Prostatitis",
              "description": "Acute infection of the prostate gland",
              "notes": [
                "Requires antibiotics with good prostate penetration",
                "Extended duration of therapy (2-4 weeks)",
                "Consider urologic evaluation for complications"
              ],
              "references": [
                "Bugs & Drugs guide to antimicrobial therapy"
              ]
            }
          ]
        },
        {
          "id": "skin",
          "name": "Skin & Soft Tissue",
          "description": "Infections affecting the skin, subcutaneous tissue, fascia, and muscles",
          "empiricLogic": "For cellulitis (non-purulent): first-line cephalexin or cloxacillin (PO) targeting streptococci; if purulent or MRSA risk, use TMP-SMX or doxycycline (outpatient) or vancomycin IV (inpatient). Duration is ~5 days for uncomplicated cases.",
          "conditions": [
            {
              "id": "skin-cellulitis",
              "name": "Cellulitis",
              "description": "Infection of the skin and subcutaneous tissue",
              "notes": [
                "Non-purulent cellulitis is usually caused by streptococci",
                "Purulent cellulitis may indicate S. aureus (including MRSA)",
                "Duration typically 5-7 days for uncomplicated cases"
              ],
              "references": [
                "Bugs & Drugs guide to antimicrobial therapy"
              ]
            },
            {
              "id": "skin-abscess",
              "name": "Cutaneous Abscess",
              "description": "Localized collection of pus within the dermis and deeper skin tissues",
              "notes": [
                "Incision and drainage is primary therapy",
                "Antibiotics indicated for systemic symptoms, extensive disease, or high-risk location",
                "Consider MRSA coverage if prevalent in community"
              ],
              "references": [
                "Bugs & Drugs guide to antimicrobial therapy",
                "Choosing Wisely Canada"
              ]
            },
            {
              "id": "skin-impetigo",
              "name": "Impetigo",
              "description": "Superficial skin infection, common in children",
              "notes": [
                "Topical mupirocin for limited disease",
                "Oral antibiotics for extensive or systemic disease",
                "Group A streptococci and S. aureus are common pathogens"
              ],
              "references": [
                "Canadian Pediatric Society guidelines"
              ]
            },
            {
              "id": "skin-necrotizing",
              "name": "Necrotizing Fasciitis",
              "description": "Severe infection of the fascia with rapid tissue destruction",
              "notes": [
                "Surgical emergency requiring immediate debridement",
                "Broad-spectrum antibiotics including clindamycin for toxin suppression",
                "High mortality if treatment delayed"
              ],
              "references": [
                "Bugs & Drugs guide to antimicrobial therapy",
                "Sanford Guide Canada"
              ]
            },
            {
              "id": "skin-diabetic-foot",
              "name": "Diabetic Foot Infection",
              "description": "Infection in a foot wound in a patient with diabetes",
              "notes": [
                "Classify by severity (mild, moderate, severe)",
                "Consider osteomyelitis if bone exposed or probe-to-bone test positive",
                "Multidisciplinary approach recommended"
              ],
              "references": [
                "Bugs & Drugs guide to antimicrobial therapy"
              ]
            }
          ]
        },
        {
          "id": "gi",
          "name": "Gastrointestinal (GI)",
          "description": "Infections affecting the gastrointestinal tract and intra-abdominal organs",
          "empiricLogic": "For intra-abdominal sepsis (e.g. perforated appendicitis), use broad anaerobic and Gram-negative coverage such as piperacillin-tazobactam or meropenem (if critically ill). For community mild/moderate intra-abdominal infections, a combination like ceftriaxone + metronidazole is first-line.",
          "conditions": [
            {
              "id": "gi-appendicitis",
              "name": "Appendicitis",
              "description": "Inflammation of the appendix, often due to infection",
              "notes": [
                "Surgical management is primary therapy",
                "Antibiotics as adjunct to surgery or for conservative management",
                "Duration ≤7 days after source control"
              ],
              "references": [
                "Bugs & Drugs guide to antimicrobial therapy"
              ]
            },
            {
              "id": "gi-diverticulitis",
              "name": "Diverticulitis",
              "description": "Inflammation of diverticula in the colon",
              "notes": [
                "Uncomplicated cases may be managed with oral antibiotics",
                "Complicated cases (abscess, perforation) require IV antibiotics and possible intervention",
                "Cover enteric gram-negative bacilli and anaerobes"
              ],
              "references": [
                "Bugs & Drugs guide to antimicrobial therapy"
              ]
            },
            {
              "id": "gi-cholangitis",
              "name": "Acute Cholangitis",
              "description": "Infection of the biliary tract with potential systemic toxicity",
              "notes": [
                "Biliary drainage is essential (ERCP, percutaneous, surgical)",
                "Empiric antibiotics should cover enteric gram-negatives and anaerobes",
                "Adjust therapy based on blood and bile cultures"
              ],
              "references": [
                "Bugs & Drugs guide to antimicrobial therapy",
                "Sanford Guide Canada"
              ]
            },
            {
              "id": "gi-cdiff",
              "name": "C. difficile Infection",
              "description": "Infection of the colon caused by Clostridioides difficile",
              "notes": [
                "First-line: oral vancomycin or fidaxomicin",
                "Metronidazole reserved for mild cases if other options unavailable",
                "Avoid unnecessary antibiotics to prevent recurrence"
              ],
              "reference
(Content truncated due to size limit. Use line ranges to read in chunks)