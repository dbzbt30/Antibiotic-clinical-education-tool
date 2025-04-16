/**
 * Canadian Antibiotic Recommendation Tool
 * Bone Infections Data Module
 * Based on Canadian guidelines including Bugs & Drugs and Sanford Guide Canada
 */

const boneInfectionsData = {
  "id": "bone",
  "name": "Bone & Joint",
  "description": "Infections affecting bones, joints, and prosthetic implants",
  "empiricLogic": "For suspected osteomyelitis, empiric therapy should target Staphylococcus aureus (including MRSA consideration in high-risk patients) and aerobic gram-negative bacilli. For diabetic foot osteomyelitis, broader coverage including anaerobes is often needed. Definitive therapy should be guided by bone culture results whenever possible.",
  "conditions": [
    {
      "id": "osteomyelitis",
      "name": "Osteomyelitis",
      "description": "Infection of bone tissue, which may be acute or chronic",
      "notes": [
        "Obtain bone culture before starting antibiotics when possible",
        "Surgical debridement often necessary for chronic osteomyelitis",
        "Extended duration of therapy typically required (4-6 weeks minimum)",
        "Consider infectious disease consultation for complex cases"
      ],
      "references": [
        "Bugs & Drugs guide to antimicrobial therapy",
        "Sanford Guide Canada",
        "Canadian Infectious Diseases Society guidelines"
      ]
    },
    {
      "id": "septic-arthritis",
      "name": "Septic Arthritis",
      "description": "Infection of a joint space, often presenting with acute monoarticular arthritis",
      "notes": [
        "Joint aspiration for culture and synovial fluid analysis is essential",
        "Prompt joint drainage (arthrocentesis or surgical) is critical",
        "Empiric therapy should cover S. aureus and age-appropriate pathogens",
        "Consider gonococcal infection in sexually active young adults"
      ],
      "references": [
        "Bugs & Drugs guide to antimicrobial therapy",
        "Sanford Guide Canada",
        "Canadian Rheumatology Association guidelines"
      ]
    },
    {
      "id": "prosthetic-joint",
      "name": "Prosthetic Joint Infection",
      "description": "Infection involving a prosthetic joint implant",
      "notes": [
        "Multidisciplinary approach involving orthopedics and infectious diseases",
        "Classification by timing: early (<3 months), delayed (3-12 months), or late (>12 months)",
        "Biofilm formation complicates treatment and often requires implant removal",
        "Extended antibiotic courses typically required (6-12 weeks)"
      ],
      "references": [
        "Bugs & Drugs guide to antimicrobial therapy",
        "Sanford Guide Canada",
        "Canadian Orthopedic Association guidelines"
      ]
    }
  ]
};

const boneTreatmentsData = [
  {
    "condition_id": "osteomyelitis",
    "first_line": {
      "adult": {
        "acute_hematogenous": {
          "regimen": "Cefazolin",
          "dosing": "2g IV q8h",
          "duration": "4-6 weeks",
          "notes": "For acute hematogenous osteomyelitis without risk factors for MRSA or gram-negative organisms"
        },
        "post_traumatic": {
          "regimen": "Cefazolin + Ciprofloxacin",
          "dosing": "Cefazolin 2g IV q8h + Ciprofloxacin 750mg PO/400mg IV q12h",
          "duration": "4-6 weeks",
          "notes": "For post-traumatic osteomyelitis to cover S. aureus and gram-negative organisms"
        },
        "diabetic_foot": {
          "regimen": "Ertapenem or Piperacillin-Tazobactam",
          "dosing": "Ertapenem 1g IV daily OR Piperacillin-Tazobactam 4.5g IV q6h",
          "duration": "6 weeks total (2 weeks IV followed by 4 weeks oral step-down therapy if possible)",
          "notes": "For diabetic foot osteomyelitis requiring broad-spectrum coverage including anaerobes"
        },
        "mrsa_risk": {
          "regimen": "Vancomycin",
          "dosing": "15-20mg/kg IV q12h (adjust based on levels)",
          "duration": "4-6 weeks",
          "notes": "For patients with MRSA risk factors or confirmed MRSA infection"
        },
        "oral_step_down": {
          "regimen": "Clindamycin or TMP-SMX + Rifampin",
          "dosing": "Clindamycin 300-450mg PO q6h OR TMP-SMX 1-2 DS tablets PO q12h + Rifampin 300mg PO q12h",
          "duration": "To complete 4-6 weeks total therapy",
          "notes": "Oral step-down after clinical improvement and at least 2 weeks of IV therapy"
        }
      },
      "pediatric": {
        "acute_hematogenous": {
          "regimen": "Cefazolin",
          "dosing": "150mg/kg/day IV divided q8h (max 6g/day)",
          "duration": "4-6 weeks (consider oral step-down after 7-10 days if good clinical response)",
          "notes": "For acute hematogenous osteomyelitis without risk factors for MRSA"
        },
        "mrsa_risk": {
          "regimen": "Vancomycin",
          "dosing": "60mg/kg/day IV divided q6h (max 4g/day)",
          "duration": "4-6 weeks (consider oral step-down after 7-10 days if good clinical response)",
          "notes": "For patients with MRSA risk factors or confirmed MRSA infection"
        },
        "oral_step_down": {
          "regimen": "Cephalexin or Clindamycin",
          "dosing": "Cephalexin 100mg/kg/day PO divided q6h (max 4g/day) OR Clindamycin 30-40mg/kg/day PO divided q6h (max 1.8g/day)",
          "duration": "To complete 4-6 weeks total therapy",
          "notes": "Oral step-down after clinical improvement and normalization of CRP"
        }
      }
    },
    "second_line": {
      "adult": {
        "penicillin_allergy_non_anaphylactic": {
          "regimen": "Ceftriaxone",
          "dosing": "2g IV daily",
          "duration": "4-6 weeks",
          "notes": "For non-anaphylactic penicillin allergy"
        },
        "penicillin_allergy_anaphylactic": {
          "regimen": "Vancomycin + Ciprofloxacin",
          "dosing": "Vancomycin 15-20mg/kg IV q12h + Ciprofloxacin 750mg PO/400mg IV q12h",
          "duration": "4-6 weeks",
          "notes": "For anaphylactic penicillin allergy"
        },
        "gram_negative": {
          "regimen": "Ceftazidime or Cefepime",
          "dosing": "Ceftazidime 2g IV q8h OR Cefepime 2g IV q8h",
          "duration": "4-6 weeks",
          "notes": "For confirmed gram-negative osteomyelitis"
        },
        "pseudomonas": {
          "regimen": "Ceftazidime + Ciprofloxacin",
          "dosing": "Ceftazidime 2g IV q8h + Ciprofloxacin 750mg PO/400mg IV q12h",
          "duration": "6 weeks",
          "notes": "For confirmed Pseudomonas osteomyelitis"
        }
      },
      "pediatric": {
        "penicillin_allergy_non_anaphylactic": {
          "regimen": "Ceftriaxone",
          "dosing": "100mg/kg/day IV divided q24h (max 4g/day)",
          "duration": "4-6 weeks",
          "notes": "For non-anaphylactic penicillin allergy"
        },
        "penicillin_allergy_anaphylactic": {
          "regimen": "Vancomycin + Ciprofloxacin",
          "dosing": "Vancomycin 60mg/kg/day IV divided q6h (max 4g/day) + Ciprofloxacin 30mg/kg/day PO/IV divided q12h (max 1.5g/day)",
          "duration": "4-6 weeks",
          "notes": "For anaphylactic penicillin allergy in children >8 years"
        },
        "gram_negative": {
          "regimen": "Ceftazidime",
          "dosing": "150mg/kg/day IV divided q8h (max 6g/day)",
          "duration": "4-6 weeks",
          "notes": "For confirmed gram-negative osteomyelitis"
        }
      }
    },
    "third_line": {
      "adult": {
        "multidrug_resistant": {
          "regimen": "Linezolid or Daptomycin",
          "dosing": "Linezolid 600mg PO/IV q12h OR Daptomycin 6-8mg/kg IV daily",
          "duration": "6 weeks",
          "notes": "For MRSA with vancomycin failure or intolerance. Monitor for toxicity with prolonged linezolid use."
        },
        "refractory": {
          "regimen": "Meropenem + Vancomycin",
          "dosing": "Meropenem 1g IV q8h + Vancomycin 15-20mg/kg IV q12h",
          "duration": "6-8 weeks",
          "notes": "For refractory polymicrobial osteomyelitis"
        }
      },
      "pediatric": {
        "multidrug_resistant": {
          "regimen": "Linezolid",
          "dosing": "<12 years: 10mg/kg PO/IV q8h (max 600mg/dose); ≥12 years: 600mg PO/IV q12h",
          "duration": "6 weeks",
          "notes": "For MRSA with vancomycin failure or intolerance. Monitor CBC weekly due to risk of myelosuppression."
        },
        "refractory": {
          "regimen": "Meropenem + Vancomycin",
          "dosing": "Meropenem 60mg/kg/day IV divided q8h (max 3g/day) + Vancomycin 60mg/kg/day IV divided q6h (max 4g/day)",
          "duration": "6-8 weeks",
          "notes": "For refractory polymicrobial osteomyelitis"
        }
      }
    }
  },
  {
    "condition_id": "septic-arthritis",
    "first_line": {
      "adult": {
        "standard": {
          "regimen": "Cefazolin",
          "dosing": "2g IV q8h",
          "duration": "2-4 weeks (consider oral step-down after 7-14 days if good clinical response)",
          "notes": "For non-gonococcal septic arthritis without risk factors for MRSA"
        },
        "mrsa_risk": {
          "regimen": "Vancomycin",
          "dosing": "15-20mg/kg IV q12h (adjust based on levels)",
          "duration": "2-4 weeks",
          "notes": "For patients with MRSA risk factors or confirmed MRSA infection"
        },
        "gonococcal": {
          "regimen": "Ceftriaxone",
          "dosing": "1g IV/IM daily",
          "duration": "7-14 days",
          "notes": "For suspected or confirmed gonococcal arthritis. Test for other STIs and treat partners."
        },
        "gram_negative": {
          "regimen": "Ceftriaxone",
          "dosing": "2g IV daily",
          "duration": "2-4 weeks",
          "notes": "For suspected or confirmed gram-negative septic arthritis"
        }
      },
      "pediatric": {
        "standard": {
          "regimen": "Cefazolin",
          "dosing": "150mg/kg/day IV divided q8h (max 6g/day)",
          "duration": "2-4 weeks (consider oral step-down after 7 days if good clinical response)",
          "notes": "For non-gonococcal septic arthritis without risk factors for MRSA"
        },
        "mrsa_risk": {
          "regimen": "Vancomycin",
          "dosing": "60mg/kg/day IV divided q6h (max 4g/day)",
          "duration": "2-4 weeks",
          "notes": "For patients with MRSA risk factors or confirmed MRSA infection"
        },
        "infant": {
          "regimen": "Cefazolin + Gentamicin",
          "dosing": "Cefazolin 150mg/kg/day IV divided q8h (max 6g/day) + Gentamicin 7.5mg/kg/day IV divided q8h",
          "duration": "2-4 weeks",
          "notes": "For infants <3 months to cover S. aureus, group B streptococci, and gram-negative bacilli"
        }
      }
    },
    "second_line": {
      "adult": {
        "penicillin_allergy_non_anaphylactic": {
          "regimen": "Ceftriaxone",
          "dosing": "2g IV daily",
          "duration": "2-4 weeks",
          "notes": "For non-anaphylactic penicillin allergy"
        },
        "penicillin_allergy_anaphylactic": {
          "regimen": "Vancomycin",
          "dosing": "15-20mg/kg IV q12h (adjust based on levels)",
          "duration": "2-4 weeks",
          "notes": "For anaphylactic penicillin allergy"
        },
        "oral_step_down": {
          "regimen": "Clindamycin or Levofloxacin",
          "dosing": "Clindamycin 300-450mg PO q6h OR Levofloxacin 750mg PO daily",
          "duration": "To complete 2-4 weeks total therapy",
          "notes": "Oral step-down after clinical improvement and at least 7-14 days of IV therapy"
        }
      },
      "pediatric": {
        "penicillin_allergy_non_anaphylactic": {
          "regimen": "Ceftriaxone",
          "dosing": "100mg/kg/day IV divided q24h (max 4g/day)",
          "duration": "2-4 weeks",
          "notes": "For non-anaphylactic penicillin allergy"
        },
        "penicillin_allergy_anaphylactic": {
          "regimen": "Vancomycin",
          "dosing": "60mg/kg/day IV divided q6h (max 4g/day)",
          "duration": "2-4 weeks",
          "notes": "For anaphylactic penicillin allergy"
        },
        "oral_step_down": {
          "regimen": "Cephalexin or Clindamycin",
          "dosing": "Cephalexin 100mg/kg/day PO divided q6h (max 4g/day) OR Clindamycin 30-40mg/kg/day PO divided q6h (max 1.8g/day)",
          "duration": "To complete 2-4 weeks total therapy",
          "notes": "Oral step-down after clinical improvement and normalization of CRP"
        }
      }
    },
    "third_line": {
      "adult": {
        "multidrug_resistant": {
          "regimen": "Linezolid or Daptomycin",
          "dosing": "Linezolid 600mg PO/IV q12h OR Daptomycin 6-8mg/kg IV daily",
          "duration": "2-4 weeks",
          "notes": "For MRSA with vancomycin failure or intolerance"
        },
        "polymicrobial": {
          "regimen": "Piperacillin-Tazobactam",
          "dosing": "4.5g IV q6h",
          "duration": "2-4 weeks",
          "notes": "For polymicrobial septic arthritis"
        }
      },
      "pediatric": {
        "multidrug_resistant": {
          "regimen": "Linezolid",
          "dosing": "<12 years: 10mg/kg PO/IV q8h (max 600mg/dose); ≥12 years: 600mg PO/IV q12h",
          "duration": "2-4 weeks",
          "notes": "For MRSA with vancomycin failure or intolerance. Monitor CBC weekly."
        },
        "polymicrobial": {
          "regimen": "Piperacillin-Tazobactam",
          "dosing": "300mg/kg/day IV divided q6h (max 16g/day)",
          "duration": "2-4 weeks",
          "notes": "For polymicrobial septic arthritis"
        }
      }
    }
  },
  {
    "condition_id": "prosthetic-joint",
    "first_line": {
      "adult": {
        "early_acute": {
          "regimen": "Vancomycin + Ceftazidime",
          "dosing": "Vancomycin 15-20mg/kg IV q12h + Ceftazidime 2g IV q8h",
          "duration": "6 weeks minimum (often with surgical intervention)",
          "notes": "For early (<3 months) prosthetic joint infection. Covers MRSA and gram-negative organisms including Pseudomonas."
        },
        "delayed_chronic": {
          "regimen": "Vancomycin + Cefepime",
          "dosing": "Vancomycin 15-20mg/kg IV q12h + Cefepime 2g IV q8h",
          "duration": "6 weeks minimum (often with surgical intervention)",
          "notes": "For delayed (3-12 months) or chronic (>12 months) prosthetic joint infection"
        },
        "staphylococcal_rifampin": {
          "regimen": "Vancomycin or Cefazolin + Rifampin",
          "dosing": "Vancomycin 15-20mg/kg IV q12h OR Cefazolin 2g IV q8h + Rifampin 300mg PO q12h",
          "duration": "6 weeks minimum",
          "notes": "For confirmed staphylococcal infection. Add rifampin only after surgical debridement and when bacteremia has cleared."
        },
        "oral_suppression": {
          "regimen": "TMP-SMX or Doxycycline or Clindamycin",
          "dosing": "TMP-SMX 1 DS tablet PO BID OR Doxycycline 100mg PO BID OR Clindamycin 300mg PO TID",
          "duration": "Indefinite (for retained prosthesis)",
          "notes": "For chronic suppression when prosthesis retention is necessary"
        }
      },
      "pediatric": {
        "standard": {
          "regimen": "Vancomycin + Cefepime",
          "dosing": "Vancomycin 60mg/kg/day IV divided q6h (max 4g/day) + Cefepime 150mg/kg/day IV divided q8h (max 6g/day)",
          "duration": "6 weeks minimum (often with surgical intervention)",
          "notes": "For prosthetic joint infection in children"
        }
      }
    },
    "second_line": {
      "adult": {
        "penicillin_allergy": {
          "regimen": "Vancomycin + Aztreonam",
          "dosing": "Vancomycin 15-20mg/kg IV q12h + Aztreonam 2g IV q8h",
          "duration": "6 weeks minimum",
          "notes": "For patients with severe beta-lactam allergy"
        },
        "enterococcal": {
          "regimen": "Ampicillin + Gentamic
(Content truncated due to size limit. Use line ranges to read in chunks)