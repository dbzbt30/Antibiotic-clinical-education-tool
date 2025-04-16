/**
 * Canadian Antibiotic Recommendation Tool
 * Cardiovascular Infections Data Module
 * Based on Canadian guidelines including Bugs & Drugs and Sanford Guide Canada
 */

const cardiovascularInfectionsData = {
  "id": "cardio",
  "name": "Cardiovascular",
  "description": "Infections affecting the heart, endocardium, and blood vessels",
  "empiricLogic": "For suspected infective endocarditis, empiric therapy should target the most likely pathogens based on risk factors: viridans streptococci in native valve endocarditis, S. aureus in injection drug users, and coagulase-negative staphylococci in prosthetic valve endocarditis. Blood cultures (at least 3 sets) should be obtained before starting antibiotics whenever possible.",
  "conditions": [
    {
      "id": "endocarditis",
      "name": "Infective Endocarditis",
      "description": "Infection of the endocardial surface of the heart, including heart valves",
      "notes": [
        "Obtain at least 3 sets of blood cultures before starting antibiotics",
        "Echocardiography (preferably TEE) is essential for diagnosis",
        "Extended duration of therapy typically required (4-6 weeks)",
        "Infectious disease and cardiology consultation recommended",
        "Consider early surgical intervention for specific indications"
      ],
      "references": [
        "Bugs & Drugs guide to antimicrobial therapy",
        "Sanford Guide Canada",
        "Canadian Cardiovascular Society guidelines"
      ]
    },
    {
      "id": "myocarditis",
      "name": "Myocarditis",
      "description": "Inflammation of the myocardium, often due to viral infection but occasionally bacterial",
      "notes": [
        "Most cases are viral and do not require antibiotics",
        "Bacterial myocarditis is rare but requires aggressive treatment",
        "Supportive care is the mainstay of treatment for viral myocarditis",
        "Consider endomyocardial biopsy in selected cases"
      ],
      "references": [
        "Bugs & Drugs guide to antimicrobial therapy",
        "Canadian Cardiovascular Society guidelines",
        "Canadian Infectious Diseases Society guidelines"
      ]
    }
  ]
};

const cardiovascularTreatmentsData = [
  {
    "condition_id": "endocarditis",
    "first_line": {
      "adult": {
        "native_valve_empiric": {
          "regimen": "Vancomycin + Ceftriaxone",
          "dosing": "Vancomycin 15-20mg/kg IV q12h (adjust based on levels) + Ceftriaxone 2g IV q12h",
          "duration": "4-6 weeks",
          "notes": "Empiric therapy for native valve endocarditis pending blood culture results"
        },
        "native_valve_streptococcal": {
          "regimen": "Penicillin G or Ceftriaxone",
          "dosing": "Penicillin G 4 million units IV q4h OR Ceftriaxone 2g IV q24h",
          "duration": "4 weeks (6 weeks if symptoms >3 months)",
          "notes": "For viridans streptococci or S. bovis with MIC ≤0.1 μg/mL"
        },
        "native_valve_staphylococcal_mssa": {
          "regimen": "Cloxacillin",
          "dosing": "2g IV q4h",
          "duration": "4-6 weeks",
          "notes": "For methicillin-susceptible S. aureus (MSSA) native valve endocarditis"
        },
        "native_valve_staphylococcal_mrsa": {
          "regimen": "Vancomycin",
          "dosing": "15-20mg/kg IV q12h (adjust based on levels, target trough 15-20 μg/mL)",
          "duration": "6 weeks",
          "notes": "For methicillin-resistant S. aureus (MRSA) native valve endocarditis"
        },
        "prosthetic_valve_empiric": {
          "regimen": "Vancomycin + Gentamicin + Rifampin",
          "dosing": "Vancomycin 15-20mg/kg IV q12h + Gentamicin 1mg/kg IV q8h + Rifampin 300mg PO q8h",
          "duration": "6 weeks (gentamicin for first 2 weeks only)",
          "notes": "Empiric therapy for prosthetic valve endocarditis pending blood culture results"
        },
        "prosthetic_valve_staphylococcal": {
          "regimen": "Vancomycin + Rifampin + Gentamicin",
          "dosing": "Vancomycin 15-20mg/kg IV q12h + Rifampin 300mg PO q8h + Gentamicin 1mg/kg IV q8h",
          "duration": "≥6 weeks (gentamicin for first 2 weeks only)",
          "notes": "For staphylococcal prosthetic valve endocarditis"
        },
        "enterococcal": {
          "regimen": "Ampicillin + Gentamicin",
          "dosing": "Ampicillin 2g IV q4h + Gentamicin 1mg/kg IV q8h",
          "duration": "4-6 weeks",
          "notes": "For susceptible enterococcal endocarditis"
        }
      },
      "pediatric": {
        "native_valve_empiric": {
          "regimen": "Vancomycin + Ceftriaxone",
          "dosing": "Vancomycin 60mg/kg/day IV divided q6h (max 4g/day) + Ceftriaxone 100mg/kg/day IV divided q12h (max 4g/day)",
          "duration": "4-6 weeks",
          "notes": "Empiric therapy for native valve endocarditis pending blood culture results"
        },
        "native_valve_streptococcal": {
          "regimen": "Penicillin G or Ceftriaxone",
          "dosing": "Penicillin G 200,000-300,000 units/kg/day IV divided q4h (max 24 million units/day) OR Ceftriaxone 100mg/kg/day IV daily (max 4g/day)",
          "duration": "4 weeks",
          "notes": "For viridans streptococci or S. bovis with MIC ≤0.1 μg/mL"
        },
        "native_valve_staphylococcal_mssa": {
          "regimen": "Cloxacillin",
          "dosing": "200mg/kg/day IV divided q6h (max 12g/day)",
          "duration": "4-6 weeks",
          "notes": "For methicillin-susceptible S. aureus (MSSA) native valve endocarditis"
        },
        "native_valve_staphylococcal_mrsa": {
          "regimen": "Vancomycin",
          "dosing": "60mg/kg/day IV divided q6h (max 4g/day)",
          "duration": "6 weeks",
          "notes": "For methicillin-resistant S. aureus (MRSA) native valve endocarditis"
        }
      }
    },
    "second_line": {
      "adult": {
        "penicillin_allergy_non_anaphylactic": {
          "regimen": "Ceftriaxone",
          "dosing": "2g IV q12h",
          "duration": "4-6 weeks",
          "notes": "For non-anaphylactic penicillin allergy"
        },
        "penicillin_allergy_anaphylactic": {
          "regimen": "Vancomycin",
          "dosing": "15-20mg/kg IV q12h (adjust based on levels)",
          "duration": "4-6 weeks",
          "notes": "For anaphylactic penicillin allergy"
        },
        "enterococcal_resistant": {
          "regimen": "Linezolid or Daptomycin",
          "dosing": "Linezolid 600mg IV/PO q12h OR Daptomycin 8-10mg/kg IV daily",
          "duration": "6 weeks",
          "notes": "For vancomycin-resistant enterococci (VRE) or high-level aminoglycoside resistance"
        },
        "hacek_organisms": {
          "regimen": "Ceftriaxone",
          "dosing": "2g IV daily",
          "duration": "4 weeks",
          "notes": "For HACEK organisms (Haemophilus, Aggregatibacter, Cardiobacterium, Eikenella, Kingella)"
        }
      },
      "pediatric": {
        "penicillin_allergy_non_anaphylactic": {
          "regimen": "Ceftriaxone",
          "dosing": "100mg/kg/day IV divided q12h (max 4g/day)",
          "duration": "4-6 weeks",
          "notes": "For non-anaphylactic penicillin allergy"
        },
        "penicillin_allergy_anaphylactic": {
          "regimen": "Vancomycin",
          "dosing": "60mg/kg/day IV divided q6h (max 4g/day)",
          "duration": "4-6 weeks",
          "notes": "For anaphylactic penicillin allergy"
        },
        "hacek_organisms": {
          "regimen": "Ceftriaxone",
          "dosing": "100mg/kg/day IV daily (max 4g/day)",
          "duration": "4 weeks",
          "notes": "For HACEK organisms"
        }
      }
    },
    "third_line": {
      "adult": {
        "daptomycin_resistant_mrsa": {
          "regimen": "Ceftaroline + Vancomycin",
          "dosing": "Ceftaroline 600mg IV q8h + Vancomycin 15-20mg/kg IV q12h",
          "duration": "6 weeks",
          "notes": "For resistant MRSA endocarditis"
        },
        "fungal_endocarditis": {
          "regimen": "Liposomal Amphotericin B ± Flucytosine",
          "dosing": "Liposomal Amphotericin B 5mg/kg IV daily ± Flucytosine 25mg/kg PO q6h",
          "duration": "6-8 weeks followed by long-term suppression",
          "notes": "For fungal endocarditis. Early surgical intervention is usually necessary."
        },
        "culture_negative": {
          "regimen": "Vancomycin + Ceftriaxone + Doxycycline",
          "dosing": "Vancomycin 15-20mg/kg IV q12h + Ceftriaxone 2g IV q12h + Doxycycline 100mg IV/PO q12h",
          "duration": "4-6 weeks",
          "notes": "For culture-negative endocarditis with no response to first-line therapy"
        }
      },
      "pediatric": {
        "resistant_organisms": {
          "regimen": "Linezolid + Rifampin",
          "dosing": "<12 years: Linezolid 10mg/kg PO/IV q8h (max 600mg/dose); ≥12 years: 600mg PO/IV q12h + Rifampin 20mg/kg/day PO divided q12h (max 600mg/day)",
          "duration": "6 weeks",
          "notes": "For resistant organisms in children"
        },
        "fungal_endocarditis": {
          "regimen": "Liposomal Amphotericin B ± Flucytosine",
          "dosing": "Liposomal Amphotericin B 5mg/kg IV daily ± Flucytosine 100mg/kg/day PO divided q6h",
          "duration": "6-8 weeks followed by long-term suppression",
          "notes": "For fungal endocarditis. Early surgical intervention is usually necessary."
        }
      }
    }
  },
  {
    "condition_id": "myocarditis",
    "first_line": {
      "adult": {
        "viral": {
          "regimen": "Supportive care only",
          "dosing": "N/A",
          "duration": "N/A",
          "notes": "Most cases are viral and do not require antibiotics. Supportive care is the mainstay of treatment."
        },
        "bacterial_empiric": {
          "regimen": "Vancomycin + Ceftriaxone",
          "dosing": "Vancomycin 15-20mg/kg IV q12h + Ceftriaxone 2g IV q12h",
          "duration": "4-6 weeks",
          "notes": "For suspected bacterial myocarditis pending culture results"
        },
        "lyme_disease": {
          "regimen": "Ceftriaxone",
          "dosing": "2g IV daily",
          "duration": "14-21 days",
          "notes": "For Lyme carditis with high-grade AV block or other severe manifestations"
        },
        "diphtheria": {
          "regimen": "Penicillin G or Erythromycin + Diphtheria Antitoxin",
          "dosing": "Penicillin G 2-4 million units IV q4h OR Erythromycin 500mg IV q6h + Diphtheria Antitoxin (dose based on severity and duration)",
          "duration": "14 days",
          "notes": "For diphtheria myocarditis. Antitoxin should be administered as soon as diphtheria is suspected."
        }
      },
      "pediatric": {
        "viral": {
          "regimen": "Supportive care only",
          "dosing": "N/A",
          "duration": "N/A",
          "notes": "Most cases are viral and do not require antibiotics. Supportive care is the mainstay of treatment."
        },
        "bacterial_empiric": {
          "regimen": "Vancomycin + Ceftriaxone",
          "dosing": "Vancomycin 60mg/kg/day IV divided q6h (max 4g/day) + Ceftriaxone 100mg/kg/day IV divided q12h (max 4g/day)",
          "duration": "4-6 weeks",
          "notes": "For suspected bacterial myocarditis pending culture results"
        },
        "lyme_disease": {
          "regimen": "Ceftriaxone",
          "dosing": "100mg/kg/day IV daily (max 2g/day)",
          "duration": "14-21 days",
          "notes": "For Lyme carditis with high-grade AV block or other severe manifestations"
        }
      }
    },
    "second_line": {
      "adult": {
        "penicillin_allergy_non_anaphylactic": {
          "regimen": "Ceftriaxone",
          "dosing": "2g IV q12h",
          "duration": "4-6 weeks",
          "notes": "For non-anaphylactic penicillin allergy"
        },
        "penicillin_allergy_anaphylactic": {
          "regimen": "Vancomycin",
          "dosing": "15-20mg/kg IV q12h (adjust based on levels)",
          "duration": "4-6 weeks",
          "notes": "For anaphylactic penicillin allergy"
        },
        "lyme_disease_alternative": {
          "regimen": "Doxycycline",
          "dosing": "100mg PO BID",
          "duration": "21 days",
          "notes": "Alternative for Lyme carditis without high-grade AV block"
        }
      },
      "pediatric": {
        "penicillin_allergy_non_anaphylactic": {
          "regimen": "Ceftriaxone",
          "dosing": "100mg/kg/day IV divided q12h (max 4g/day)",
          "duration": "4-6 weeks",
          "notes": "For non-anaphylactic penicillin allergy"
        },
        "penicillin_allergy_anaphylactic": {
          "regimen": "Vancomycin",
          "dosing": "60mg/kg/day IV divided q6h (max 4g/day)",
          "duration": "4-6 weeks",
          "notes": "For anaphylactic penicillin allergy"
        },
        "lyme_disease_alternative": {
          "regimen": "Doxycycline (>8 years old)",
          "dosing": "4mg/kg/day PO divided BID (max 100mg/dose)",
          "duration": "21 days",
          "notes": "Alternative for Lyme carditis without high-grade AV block in children >8 years old"
        }
      }
    },
    "third_line": {
      "adult": {
        "refractory_bacterial": {
          "regimen": "Meropenem + Linezolid",
          "dosing": "Meropenem 1g IV q8h + Linezolid 600mg IV/PO q12h",
          "duration": "4-6 weeks",
          "notes": "For refractory bacterial myocarditis not responding to first-line therapy"
        },
        "tuberculous": {
          "regimen": "Isoniazid + Rifampin + Pyrazinamide + Ethambutol",
          "dosing": "Isoniazid 5mg/kg PO daily (max 300mg) + Rifampin 10mg/kg PO daily (max 600mg) + Pyrazinamide 15-30mg/kg PO daily (max 2g) + Ethambutol 15-25mg/kg PO daily",
          "duration": "2 months of 4-drug therapy, followed by 4-7 months of Isoniazid + Rifampin",
          "notes": "For tuberculous myocarditis. Consult infectious diseases."
        }
      },
      "pediatric": {
        "refractory_bacterial": {
          "regimen": "Meropenem + Linezolid",
          "dosing": "Meropenem 60mg/kg/day IV divided q8h (max 3g/day) + Linezolid <12 years: 10mg/kg PO/IV q8h (max 600mg/dose); ≥12 years: 600mg PO/IV q12h",
          "duration": "4-6 weeks",
          "notes": "For refractory bacterial myocarditis not responding to first-line therapy"
        },
        "tuberculous": {
          "regimen": "Isoniazid + Rifampin + Pyrazinamide + Ethambutol",
          "dosing": "Isoniazid 10-15mg/kg PO daily (max 300mg) + Rifampin 10-20mg/kg PO daily (max 600mg) + Pyrazinamide 30-40mg/kg PO daily (max 2g) + Ethambutol 15-25mg/kg PO daily",
          "duration": "2 months of 4-drug therapy, followed by 4-7 months of Isoniazid + Rifampin",
          "notes": "For tuberculous myocarditis. Consult pediatric infectious diseases."
        }
      }
    }
  }
];
