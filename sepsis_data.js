/**
 * Canadian Antibiotic Recommendation Tool
 * Sepsis Data Module
 * Based on Canadian guidelines including Bugs & Drugs and Sanford Guide Canada
 */

const sepsisInfectionsData = {
  "id": "sepsis",
  "name": "Sepsis",
  "description": "Systemic infections and sepsis syndromes",
  "empiricLogic": "For sepsis of unknown origin, empiric therapy should be broad-spectrum covering gram-positive, gram-negative, and anaerobic organisms based on the most likely source. For neutropenic fever, anti-pseudomonal coverage is essential. De-escalate therapy based on culture results and clinical response.",
  "conditions": [
    {
      "id": "neutropenic-fever",
      "name": "Neutropenic Fever",
      "description": "Fever in a patient with neutropenia (ANC <500 cells/μL)",
      "notes": [
        "Obtain blood cultures before starting antibiotics",
        "Empiric therapy should include anti-pseudomonal coverage",
        "Risk stratification (high vs. low risk) guides management",
        "Consider antifungal therapy if fever persists >4-7 days",
        "De-escalate based on culture results and clinical response"
      ],
      "references": [
        "Bugs & Drugs guide to antimicrobial therapy",
        "Sanford Guide Canada",
        "Canadian Infectious Diseases Society guidelines"
      ]
    },
    {
      "id": "sepsis-unknown",
      "name": "Sepsis of Unknown Origin",
      "description": "Sepsis without a clear source of infection",
      "notes": [
        "Obtain cultures from all potential sources before starting antibiotics",
        "Empiric therapy should be broad-spectrum based on local resistance patterns",
        "Thorough evaluation to identify source is essential",
        "De-escalate therapy based on culture results and clinical response",
        "Consider infectious disease consultation for complex cases"
      ],
      "references": [
        "Bugs & Drugs guide to antimicrobial therapy",
        "Sanford Guide Canada",
        "Surviving Sepsis Campaign guidelines"
      ]
    },
    {
      "id": "crbsi",
      "name": "Catheter-Related Bloodstream Infection",
      "description": "Bloodstream infection associated with an intravascular catheter",
      "notes": [
        "Obtain paired blood cultures (peripheral and through catheter)",
        "Consider catheter removal, especially for certain pathogens",
        "Duration of therapy depends on pathogen and whether catheter is removed",
        "Antibiotic lock therapy may be considered for salvage of long-term catheters",
        "Infectious disease consultation recommended for complex cases"
      ],
      "references": [
        "Bugs & Drugs guide to antimicrobial therapy",
        "Sanford Guide Canada",
        "Canadian Vascular Access Association guidelines"
      ]
    }
  ]
};

const sepsisTreatmentsData = [
  {
    "condition_id": "neutropenic-fever",
    "first_line": {
      "adult": {
        "high_risk": {
          "regimen": "Piperacillin-Tazobactam or Cefepime",
          "dosing": "Piperacillin-Tazobactam 4.5g IV q6h OR Cefepime 2g IV q8h",
          "duration": "Until neutrophil recovery and at least 7 days; longer if documented infection",
          "notes": "For high-risk patients (prolonged neutropenia >7 days, ANC <100 cells/μL, significant comorbidities, or clinically unstable)"
        },
        "high_risk_septic_shock": {
          "regimen": "Piperacillin-Tazobactam or Meropenem + Vancomycin ± Amikacin",
          "dosing": "Piperacillin-Tazobactam 4.5g IV q6h OR Meropenem 1g IV q8h + Vancomycin 15-20mg/kg IV q12h (adjust based on levels) ± Amikacin 15mg/kg IV daily",
          "duration": "Until neutrophil recovery and at least 7 days; longer if documented infection",
          "notes": "For high-risk patients with septic shock or suspected resistant pathogens"
        },
        "low_risk": {
          "regimen": "Ceftriaxone + Amoxicillin-Clavulanate",
          "dosing": "Ceftriaxone 2g IV daily + Amoxicillin-Clavulanate 875/125mg PO BID",
          "duration": "Until neutrophil recovery and at least 7 days; consider step-down to oral therapy if stable",
          "notes": "For low-risk patients (expected neutropenia <7 days, no significant comorbidities, clinically stable)"
        },
        "persistent_fever": {
          "regimen": "Add Caspofungin or Liposomal Amphotericin B",
          "dosing": "Caspofungin 70mg IV loading dose, then 50mg IV daily OR Liposomal Amphotericin B 3mg/kg IV daily",
          "duration": "Until neutrophil recovery and resolution of symptoms",
          "notes": "Consider adding empiric antifungal therapy if fever persists >4-7 days despite antibiotics"
        }
      },
      "pediatric": {
        "standard": {
          "regimen": "Piperacillin-Tazobactam or Cefepime",
          "dosing": "Piperacillin-Tazobactam 100mg/kg IV q6h (max 4.5g/dose) OR Cefepime 50mg/kg IV q8h (max 2g/dose)",
          "duration": "Until neutrophil recovery and at least 7 days; longer if documented infection",
          "notes": "For pediatric neutropenic fever"
        },
        "high_risk": {
          "regimen": "Piperacillin-Tazobactam or Meropenem + Vancomycin",
          "dosing": "Piperacillin-Tazobactam 100mg/kg IV q6h (max 4.5g/dose) OR Meropenem 20mg/kg IV q8h (max 1g/dose) + Vancomycin 15mg/kg IV q6h (adjust based on levels)",
          "duration": "Until neutrophil recovery and at least 7 days; longer if documented infection",
          "notes": "For high-risk pediatric patients or those with septic shock"
        },
        "persistent_fever": {
          "regimen": "Add Caspofungin or Liposomal Amphotericin B",
          "dosing": "Caspofungin 70mg/m² IV loading dose (max 70mg), then 50mg/m² IV daily (max 70mg) OR Liposomal Amphotericin B 3mg/kg IV daily",
          "duration": "Until neutrophil recovery and resolution of symptoms",
          "notes": "Consider adding empiric antifungal therapy if fever persists >4-7 days despite antibiotics"
        }
      }
    },
    "second_line": {
      "adult": {
        "penicillin_allergy_non_anaphylactic": {
          "regimen": "Cefepime",
          "dosing": "2g IV q8h",
          "duration": "Until neutrophil recovery and at least 7 days; longer if documented infection",
          "notes": "For patients with non-anaphylactic penicillin allergy"
        },
        "penicillin_allergy_anaphylactic": {
          "regimen": "Aztreonam + Vancomycin",
          "dosing": "Aztreonam 2g IV q8h + Vancomycin 15-20mg/kg IV q12h (adjust based on levels)",
          "duration": "Until neutrophil recovery and at least 7 days; longer if documented infection",
          "notes": "For patients with anaphylactic penicillin allergy"
        },
        "colonization_with_resistant_organisms": {
          "regimen": "Meropenem + Vancomycin",
          "dosing": "Meropenem 1g IV q8h + Vancomycin 15-20mg/kg IV q12h (adjust based on levels)",
          "duration": "Until neutrophil recovery and at least 7 days; longer if documented infection",
          "notes": "For patients colonized with resistant gram-negative organisms"
        }
      },
      "pediatric": {
        "penicillin_allergy_non_anaphylactic": {
          "regimen": "Cefepime",
          "dosing": "50mg/kg IV q8h (max 2g/dose)",
          "duration": "Until neutrophil recovery and at least 7 days; longer if documented infection",
          "notes": "For pediatric patients with non-anaphylactic penicillin allergy"
        },
        "penicillin_allergy_anaphylactic": {
          "regimen": "Aztreonam + Vancomycin",
          "dosing": "Aztreonam 30mg/kg IV q6-8h (max 2g/dose) + Vancomycin 15mg/kg IV q6h (adjust based on levels)",
          "duration": "Until neutrophil recovery and at least 7 days; longer if documented infection",
          "notes": "For pediatric patients with anaphylactic penicillin allergy"
        }
      }
    },
    "third_line": {
      "adult": {
        "multidrug_resistant_organisms": {
          "regimen": "Meropenem + Amikacin + Vancomycin",
          "dosing": "Meropenem 1g IV q8h + Amikacin 15mg/kg IV daily + Vancomycin 15-20mg/kg IV q12h (adjust based on levels)",
          "duration": "Until neutrophil recovery and at least 7 days; longer if documented infection",
          "notes": "For suspected multidrug-resistant organisms"
        },
        "invasive_fungal_infection": {
          "regimen": "Voriconazole or Isavuconazole",
          "dosing": "Voriconazole 6mg/kg IV q12h for 2 doses, then 4mg/kg IV q12h OR Isavuconazole 200mg IV q8h for 6 doses, then 200mg IV daily",
          "duration": "Until neutrophil recovery and resolution of infection (typically weeks to months)",
          "notes": "For suspected or proven invasive aspergillosis"
        }
      },
      "pediatric": {
        "multidrug_resistant_organisms": {
          "regimen": "Meropenem + Amikacin + Vancomycin",
          "dosing": "Meropenem 20mg/kg IV q8h (max 1g/dose) + Amikacin 15mg/kg IV daily + Vancomycin 15mg/kg IV q6h (adjust based on levels)",
          "duration": "Until neutrophil recovery and at least 7 days; longer if documented infection",
          "notes": "For suspected multidrug-resistant organisms in pediatric patients"
        },
        "invasive_fungal_infection": {
          "regimen": "Voriconazole or Liposomal Amphotericin B",
          "dosing": "Voriconazole 9mg/kg IV q12h for 2 doses, then 8mg/kg IV q12h OR Liposomal Amphotericin B 3-5mg/kg IV daily",
          "duration": "Until neutrophil recovery and resolution of infection (typically weeks to months)",
          "notes": "For suspected or proven invasive fungal infection in pediatric patients"
        }
      }
    }
  },
  {
    "condition_id": "sepsis-unknown",
    "first_line": {
      "adult": {
        "community_acquired": {
          "regimen": "Piperacillin-Tazobactam",
          "dosing": "4.5g IV q6h",
          "duration": "7-10 days depending on source and clinical response",
          "notes": "For community-acquired sepsis of unknown origin"
        },
        "healthcare_associated": {
          "regimen": "Piperacillin-Tazobactam + Vancomycin",
          "dosing": "Piperacillin-Tazobactam 4.5g IV q6h + Vancomycin 15-20mg/kg IV q12h (adjust based on levels)",
          "duration": "7-10 days depending on source and clinical response",
          "notes": "For healthcare-associated sepsis of unknown origin"
        },
        "septic_shock": {
          "regimen": "Meropenem + Vancomycin ± Amikacin",
          "dosing": "Meropenem 1g IV q8h + Vancomycin 15-20mg/kg IV q12h (adjust based on levels) ± Amikacin 15mg/kg IV daily",
          "duration": "7-10 days depending on source and clinical response",
          "notes": "For septic shock of unknown origin"
        },
        "immunocompromised": {
          "regimen": "Meropenem + Vancomycin",
          "dosing": "Meropenem 1g IV q8h + Vancomycin 15-20mg/kg IV q12h (adjust based on levels)",
          "duration": "7-14 days depending on source and clinical response",
          "notes": "For immunocompromised patients with sepsis of unknown origin"
        }
      },
      "pediatric": {
        "community_acquired": {
          "regimen": "Ceftriaxone + Vancomycin",
          "dosing": "Ceftriaxone 100mg/kg IV daily (max 2g) + Vancomycin 15mg/kg IV q6h (adjust based on levels)",
          "duration": "7-10 days depending on source and clinical response",
          "notes": "For community-acquired sepsis of unknown origin in children"
        },
        "healthcare_associated": {
          "regimen": "Piperacillin-Tazobactam + Vancomycin",
          "dosing": "Piperacillin-Tazobactam 100mg/kg IV q6h (max 4.5g/dose) + Vancomycin 15mg/kg IV q6h (adjust based on levels)",
          "duration": "7-10 days depending on source and clinical response",
          "notes": "For healthcare-associated sepsis of unknown origin in children"
        },
        "septic_shock": {
          "regimen": "Meropenem + Vancomycin",
          "dosing": "Meropenem 20mg/kg IV q8h (max 1g/dose) + Vancomycin 15mg/kg IV q6h (adjust based on levels)",
          "duration": "7-10 days depending on source and clinical response",
          "notes": "For septic shock of unknown origin in children"
        },
        "neonatal": {
          "regimen": "Ampicillin + Gentamicin",
          "dosing": "Ampicillin 50mg/kg IV q6h + Gentamicin 4-5mg/kg IV q24h",
          "duration": "7-10 days depending on source and clinical response",
          "notes": "For neonatal sepsis of unknown origin"
        }
      }
    },
    "second_line": {
      "adult": {
        "penicillin_allergy_non_anaphylactic": {
          "regimen": "Cefepime + Vancomycin",
          "dosing": "Cefepime 2g IV q8h + Vancomycin 15-20mg/kg IV q12h (adjust based on levels)",
          "duration": "7-10 days depending on source and clinical response",
          "notes": "For patients with non-anaphylactic penicillin allergy"
        },
        "penicillin_allergy_anaphylactic": {
          "regimen": "Aztreonam + Vancomycin + Metronidazole",
          "dosing": "Aztreonam 2g IV q8h + Vancomycin 15-20mg/kg IV q12h (adjust based on levels) + Metronidazole 500mg IV q8h",
          "duration": "7-10 days depending on source and clinical response",
          "notes": "For patients with anaphylactic penicillin allergy"
        },
        "renal_dysfunction": {
          "regimen": "Ceftriaxone + Vancomycin + Metronidazole",
          "dosing": "Ceftriaxone 2g IV daily + Vancomycin 15-20mg/kg IV q24-48h (adjust based on levels) + Metronidazole 500mg IV q8h",
          "duration": "7-10 days depending on source and clinical response",
          "notes": "For patients with significant renal dysfunction"
        }
      },
      "pediatric": {
        "penicillin_allergy_non_anaphylactic": {
          "regimen": "Cefepime + Vancomycin",
          "dosing": "Cefepime 50mg/kg IV q8h (max 2g/dose) + Vancomycin 15mg/kg IV q6h (adjust based on levels)",
          "duration": "7-10 days depending on source and clinical response",
          "notes": "For pediatric patients with non-anaphylactic penicillin allergy"
        },
        "penicillin_allergy_anaphylactic": {
          "regimen": "Aztreonam + Vancomycin + Metronidazole",
          "dosing": "Aztreonam 30mg/kg IV q6-8h (max 2g/dose) + Vancomycin 15mg/kg IV q6h (adjust based on levels) + Metronidazole 10mg/kg IV q8h (max 500mg/dose)",
          "duration": "7-10 days depending on source and clinical response",
          "notes": "For pediatric patients with anaphylactic penicillin allergy"
        }
      }
    },
    "third_line": {
      "adult": {
        "multidrug_resistant_organisms": {
          "regimen": "Meropenem + Polymyxin B or Colistin + Vancomycin",
          "dosing": "Meropenem 1g IV q8h + Polymyxin B 1.5-2.5mg/kg/day IV divided q12h OR Colistin 5mg/kg IV loading dose, then 2.5mg/kg IV q12h + Vancomycin 15-20mg/kg IV q12h (adjust based on levels)",
          "duration": "7-14 days depending on source and clinical response",
          "notes": "For suspected extensively drug-resistant organisms"
        },
        "fungal_sepsis": {
          "regimen": "Anidulafungin or Micafungin + Antibacterial therapy",
          "dosing": "Anidulafungin 200mg IV loading dose, then 100mg IV daily OR Micafungin 100mg IV daily + Appropriate antibacterial therapy",
          "duration": "14 days for candidemia; longer for deep-seated infections",
          "notes": "For suspected invasive candidiasis or candidemia"
        }
      },
      "pediatric": {
        "multidrug_resistant_organisms": {
          "regimen": "Meropenem + Amikacin + Vancomycin",
          "dosing": "Meropenem 20mg/kg IV q8h (max 1g/dose) + Amikacin 15mg/kg IV daily + Vancomycin 15mg/kg IV q6h (adjust based on levels)",
          "duration": "7-14 days depending on source and clinical response",
          "notes": "For suspected multidrug-resistant organisms in pediatric pati
(Content truncated due to size limit. Use line ranges to read in chunks)