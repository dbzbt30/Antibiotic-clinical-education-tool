# Canadian Antibiotic Recommendation Tool - Architecture Design

## Overview

This document outlines the architecture for a lightning-fast, one-page diagnostic web tool that delivers Canadian guideline-based antibiotic recommendations to resident physicians. The tool prioritizes empiric coverage in partially localized infections while providing detailed condition-specific therapy options.

## Design Principles

1. **Mobile-first, responsive design**: Optimized for all device sizes with priority on mobile usability
2. **Speed**: Deliver recommendations in <10 seconds
3. **Clarity**: Clear, concise presentation of medical information
4. **Evidence-based**: Adherence to Canadian guidelines (Bugs & Drugs, CPS, Sanford Guide, Choosing Wisely)
5. **Minimal clicks**: Access information with as few interactions as possible

## Application Architecture

### Frontend Architecture

- **Single Page Application (SPA)**: All content loaded on a single page to minimize loading times
- **Progressive Web App (PWA)** capabilities for offline access
- **Responsive Framework**: Using modern CSS framework for responsive design
- **No backend server required**: Static site with client-side processing

### Data Structure

```
/
├── index.html           # Main HTML file
├── css/                 # Styling
│   ├── styles.css       # Main stylesheet
│   └── responsive.css   # Responsive design rules
├── js/                  # JavaScript
│   ├── main.js          # Main application logic
│   ├── filters.js       # Filtering functionality
│   └── data.js          # Antibiotic recommendation data
├── data/                # JSON data files
│   ├── infections.json  # Infection categories and conditions
│   ├── antibiotics.json # Antibiotic details
│   └── guidelines.json  # Guideline references
└── assets/              # Images and icons
    └── icons/           # UI icons
```

### Data Model

#### Infection Categories

```json
{
  "categories": [
    {
      "id": "cns",
      "name": "Central Nervous System (CNS)",
      "conditions": [
        {
          "id": "meningitis",
          "name": "Bacterial Meningitis",
          "empiricLogic": [
            {
              "criteria": "default",
              "recommendation": "ceftriaxone + vancomycin"
            },
            {
              "criteria": "age > 50 OR immunocompromised",
              "recommendation": "ceftriaxone + vancomycin + ampicillin"
            }
          ]
        }
      ]
    }
  ]
}
```

#### Antibiotics

```json
{
  "antibiotics": [
    {
      "id": "amoxicillin",
      "name": "Amoxicillin",
      "class": "Penicillin",
      "spectrum": "Gram-positive, some Gram-negative",
      "formulations": [
        {
          "form": "oral",
          "strengths": ["250mg", "500mg"]
        }
      ],
      "adult_dosing": {
        "standard": "500mg PO TID",
        "high_dose": "1g PO TID",
        "max_daily": "3g"
      },
      "pediatric_dosing": {
        "standard": "20-30mg/kg/dose PO TID",
        "high_dose": "75-90mg/kg/day divided TID",
        "max_daily": "Based on weight"
      },
      "special_considerations": [
        "Pregnancy category B",
        "Adjust for severe renal impairment"
      ]
    }
  ]
}
```

#### Treatment Recommendations

```json
{
  "treatments": [
    {
      "condition_id": "meningitis",
      "first_line": {
        "adult": {
          "regimen": "ceftriaxone + vancomycin",
          "dosing": "Ceftriaxone 2g IV q12h + Vancomycin 15-20mg/kg IV q8-12h",
          "duration": "10-14 days",
          "notes": "Add ampicillin 2g IV q4h if >50 years or immunocompromised"
        },
        "pediatric": {
          "regimen": "ceftriaxone + vancomycin",
          "dosing": "Ceftriaxone 100mg/kg/day IV divided q12h + Vancomycin 60mg/kg/day IV divided q6h",
          "duration": "10-14 days",
          "notes": "Add ampicillin 300mg/kg/day IV divided q6h if <3 months"
        }
      },
      "second_line": {
        "adult": {
          "regimen": "meropenem",
          "dosing": "2g IV q8h",
          "duration": "10-14 days",
          "notes": "For penicillin allergy or healthcare-associated meningitis"
        },
        "pediatric": {
          "regimen": "meropenem",
          "dosing": "120mg/kg/day IV divided q8h",
          "duration": "10-14 days",
          "notes": "For penicillin allergy or healthcare-associated meningitis"
        }
      }
    }
  ]
}
```

## User Interface Components

### Navigation

1. **Top Navigation Bar**:
   - Fixed position for easy access
   - Horizontal scrolling buttons for infection categories (CNS, Respiratory, GU, etc.)
   - Toggle between adult/pediatric dosing

2. **Filter Panel**:
   - Quick filters for patient factors (age, allergies, pregnancy, renal function)
   - Collapsible for space efficiency on mobile

### Main Content Area

1. **Infection Category Section**:
   - Expandable/collapsible sections for each anatomical category
   - Quick-select buttons for common conditions within each category

2. **Condition-Specific Panel**:
   - Tabbed interface for first-line, second-line, and third-line therapies
   - Structured display of antibiotic regimens with dosing information
   - Visual indicators for preferred options
   - Special considerations and notes

3. **Antibiotic Details**:
   - Expandable sections for detailed antibiotic information
   - Dosing calculator based on patient weight (for pediatrics)
   - Duration recommendations
   - Side effects and monitoring requirements

### Interactive Features

1. **Decision Support Logic**:
   - Interactive questionnaire for refining recommendations
   - Conditional display of options based on patient factors
   - Warning alerts for contraindications

2. **Search Functionality**:
   - Quick search for specific infections or antibiotics
   - Autocomplete suggestions

3. **References Panel**:
   - Expandable section with guideline references
   - Links to source documents

## Responsive Design Approach

### Mobile View (Primary Design Target)

- Single column layout
- Touch-friendly large buttons
- Collapsible sections to conserve space
- Bottom navigation for thumb accessibility
- Minimal text entry requirements

### Tablet View

- Two-column layout where appropriate
- Sidebar navigation
- Expanded information display

### Desktop View

- Multi-column layout
- Persistent navigation sidebar
- Expanded information display with more details visible simultaneously

## Performance Optimization

1. **Asset Optimization**:
   - Minified CSS and JavaScript
   - Optimized images and icons
   - Lazy loading of non-critical resources

2. **Caching Strategy**:
   - Local storage for application data
   - Service worker for offline functionality
   - Cache API for resource caching

3. **Rendering Optimization**:
   - Minimal DOM manipulation
   - Efficient event delegation
   - Virtual scrolling for long lists

## Implementation Technologies

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Core application logic
- **Framework**: Lightweight framework like Alpine.js or vanilla JS
- **Build Tools**: Webpack for bundling and optimization

## Accessibility Considerations

- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- Sufficient color contrast
- Text resizing support

## Next Steps

1. Create detailed wireframes for mobile and desktop views
2. Develop UI component prototypes
3. Build the data structure for antibiotic recommendations
4. Implement core functionality
5. Test with sample clinical scenarios
