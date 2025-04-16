# Canadian Antibiotic Recommendation Tool - Wireframes

## Mobile View Wireframes

### Home Screen / Category Selection
```
+----------------------------------+
|  Canadian Antibiotic Guide       |
+----------------------------------+
| [Adult] | [Pediatric]            |
+----------------------------------+
| Search: [                    🔍] |
+----------------------------------+
| INFECTION CATEGORIES             |
|                                  |
| [CNS] [RESP] [GU] [SKIN] [GI]    |
| [BONE] [CARDIO] [STI] [SEPSIS]   |
|                                  |
+----------------------------------+
| QUICK ACCESS                     |
|                                  |
| • Community Acquired Pneumonia   |
| • Urinary Tract Infection        |
| • Cellulitis                     |
| • Otitis Media                   |
| • Pharyngitis                    |
|                                  |
+----------------------------------+
| ABOUT                            |
| Based on Canadian Guidelines     |
| Last updated: April 2025         |
+----------------------------------+
```

### Category View (e.g., Respiratory)
```
+----------------------------------+
|  Canadian Antibiotic Guide       |
+----------------------------------+
| [Adult] | [Pediatric]     [Back] |
+----------------------------------+
| RESPIRATORY INFECTIONS           |
|                                  |
| • Community Acquired Pneumonia   |
| • Hospital Acquired Pneumonia    |
| • Aspiration Pneumonia           |
| • Acute Bronchitis               |
| • Pharyngitis                    |
| • Sinusitis                      |
| • Otitis Media                   |
|                                  |
+----------------------------------+
| EMPIRIC COVERAGE                 |
| For undifferentiated respiratory |
| infection with fever:            |
|                                  |
| First-line: Amoxicillin          |
| (high-dose)                      |
|                                  |
| If atypical coverage needed:     |
| Add Azithromycin                 |
+----------------------------------+
```

### Condition View (e.g., Community Acquired Pneumonia)
```
+----------------------------------+
|  Canadian Antibiotic Guide       |
+----------------------------------+
| [Adult] | [Pediatric]     [Back] |
+----------------------------------+
| COMMUNITY ACQUIRED PNEUMONIA     |
+----------------------------------+
| PATIENT FACTORS:                 |
| [Age] [Allergies] [Comorbid]     |
+----------------------------------+
| FIRST-LINE THERAPY               |
|                                  |
| Outpatient (healthy):            |
| • Amoxicillin 1g PO TID          |
|   Duration: 5 days               |
|                                  |
| Outpatient (comorbid):           |
| • Amoxicillin 1g PO TID +        |
|   Azithromycin 500mg PO day 1,   |
|   then 250mg PO daily x4 days    |
|   Duration: 5 days               |
|                                  |
| Inpatient (non-ICU):             |
| • Ampicillin 2g IV q6h +         |
|   Azithromycin 500mg IV daily    |
|   Duration: 5 days               |
|                                  |
| [Show Second-Line Options]       |
+----------------------------------+
| NOTES                            |
| • Switch to oral when clinically |
|   stable                         |
| • Consider respiratory           |
|   fluoroquinolone only for       |
|   beta-lactam allergy            |
+----------------------------------+
| REFERENCES                       |
| • CPS Guidelines 2023            |
| • Bugs & Drugs                   |
+----------------------------------+
```

### Antibiotic Details View
```
+----------------------------------+
|  Canadian Antibiotic Guide       |
+----------------------------------+
| [Adult] | [Pediatric]     [Back] |
+----------------------------------+
| AMOXICILLIN                      |
+----------------------------------+
| CLASS: Penicillin                |
| SPECTRUM: Gram+ and some Gram-   |
+----------------------------------+
| ADULT DOSING                     |
| • Standard: 500mg PO TID         |
| • High-dose: 1g PO TID           |
| • Max daily: 3g                  |
|                                  |
| PEDIATRIC DOSING                 |
| • Standard: 40-50mg/kg/day ÷ TID |
| • High-dose: 75-90mg/kg/day ÷ TID|
| • Max daily: Based on weight     |
|                                  |
| CALCULATOR                       |
| Weight: [    ] kg                |
| Calculated dose: ___ mg          |
+----------------------------------+
| SPECIAL CONSIDERATIONS           |
| • Pregnancy: Safe                |
| • Renal: Adjust if CrCl <30      |
| • Common side effects: Diarrhea, |
|   rash                           |
+----------------------------------+
```

## Desktop View Wireframes

### Home Screen
```
+----------------------------------------------------------------------+
|  Canadian Antibiotic Recommendation Tool                  [A] | [P]  |
+----------------------------------------------------------------------+
| Search: [                                                        🔍]  |
+----------------------------------------------------------------------+
|                                                                      |
| INFECTION CATEGORIES                                                 |
|                                                                      |
| [CNS] [RESPIRATORY] [GU] [SKIN/SOFT TISSUE] [GI] [BONE/JOINT]       |
| [CARDIOVASCULAR] [STI] [SEPSIS/IMMUNOCOMPROMISED]                   |
|                                                                      |
+----------------------------------------------------------------------+
|                                                                      |
| QUICK ACCESS                         | ABOUT                         |
|                                      |                               |
| • Community Acquired Pneumonia       | This tool provides Canadian   |
| • Urinary Tract Infection            | guideline-based antibiotic    |
| • Cellulitis                         | recommendations for resident  |
| • Otitis Media                       | physicians.                   |
| • Pharyngitis                        |                               |
| • Intra-abdominal Infection          | Based on:                     |
| • Meningitis                         | • Bugs & Drugs                |
|                                      | • CPS Guidelines              |
|                                      | • Sanford Guide Canada        |
|                                      | • Choosing Wisely Canada      |
|                                      |                               |
|                                      | Last updated: April 2025      |
+----------------------------------------------------------------------+
```

### Category and Condition View (Desktop)
```
+----------------------------------------------------------------------+
|  Canadian Antibiotic Recommendation Tool                  [A] | [P]  |
+----------------------------------------------------------------------+
| [CNS] [RESPIRATORY] [GU] [SKIN] [GI] [BONE] [CARDIO] [STI] [SEPSIS] |
+----------------------------------------------------------------------+
|                              |                                       |
| RESPIRATORY INFECTIONS       | COMMUNITY ACQUIRED PNEUMONIA          |
|                              |                                       |
| • Community Acquired         | PATIENT FACTORS:                      |
|   Pneumonia                  | [Age] [Allergies] [Comorbidities]     |
| • Hospital Acquired          |                                       |
|   Pneumonia                  | FIRST-LINE THERAPY                    |
| • Aspiration Pneumonia       |                                       |
| • Acute Bronchitis           | Outpatient (healthy):                 |
| • Pharyngitis                | • Amoxicillin 1g PO TID               |
| • Sinusitis                  |   Duration: 5 days                    |
| • Otitis Media               |                                       |
|                              | Outpatient (comorbid):                |
| EMPIRIC COVERAGE             | • Amoxicillin 1g PO TID +             |
| For undifferentiated         |   Azithromycin 500mg PO day 1,        |
| respiratory infection:       |   then 250mg PO daily x4 days         |
|                              |   Duration: 5 days                    |
| First-line: Amoxicillin      |                                       |
| (high-dose)                  | Inpatient (non-ICU):                  |
|                              | • Ampicillin 2g IV q6h +              |
| If atypical coverage needed: |   Azithromycin 500mg IV daily         |
| Add Azithromycin             |   Duration: 5 days                    |
|                              |                                       |
|                              | [First-Line] [Second-Line] [Third-Line]|
|                              |                                       |
|                              | NOTES                                 |
|                              | • Switch to oral when clinically stable|
|                              | • Consider respiratory fluoroquinolone |
|                              |   only for beta-lactam allergy        |
|                              |                                       |
|                              | REFERENCES                            |
|                              | • CPS Guidelines 2023                 |
|                              | • Bugs & Drugs                        |
+------------------------------+---------------------------------------+
```

## Interactive Elements

### Filter Panel
```
+----------------------------------+
| FILTER BY PATIENT FACTORS        |
+----------------------------------+
| Age:                             |
| [Child <2] [Child 2-18] [Adult]  |
|                                  |
| Allergies:                       |
| [None] [Penicillin] [Sulfa]      |
|                                  |
| Special Populations:             |
| [Pregnancy] [Renal Impairment]   |
| [Immunocompromised]              |
|                                  |
| Setting:                         |
| [Outpatient] [Inpatient] [ICU]   |
+----------------------------------+
```

### Dosing Calculator
```
+----------------------------------+
| PEDIATRIC DOSING CALCULATOR      |
+----------------------------------+
| Patient weight: [      ] kg      |
|                                  |
| Selected antibiotic: Amoxicillin |
| Dosing regimen: High-dose        |
|                                  |
| Calculated dose:                 |
| 75-90 mg/kg/day                  |
| = 450-540 mg/day for 6kg child   |
|                                  |
| Recommended administration:      |
| 150-180 mg PO TID                |
|                                  |
| Available formulations:          |
| • 250mg/5mL suspension           |
| • 3-3.6 mL TID                   |
+----------------------------------+
```

### Toggle Between Adult and Pediatric
```
+----------------------------------+
| [ADULT] | [PEDIATRIC]            |
+----------------------------------+
```

### Expandable Information Sections
```
+----------------------------------+
| FIRST-LINE THERAPY       [▼]     |
+----------------------------------+
| Content visible when expanded    |
+----------------------------------+
| SECOND-LINE THERAPY      [▶]     |
+----------------------------------+
| THIRD-LINE THERAPY       [▶]     |
+----------------------------------+
```
