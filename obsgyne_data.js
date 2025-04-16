/**
 * Canadian Antibiotic Recommendation Tool
 * Obs/Gyne Infections Data Module
 * Based on Canadian guidelines including Bugs & Drugs and Sanford Guide Canada
 */

const obsgyneInfectionsData = {
  "id": "sti",
  "name": "Obs/Gyne & STIs",
  "description": "Infections affecting the reproductive tract and sexually transmitted infections",
  "empiricLogic": "For suspected pelvic inflammatory disease (PID), empiric therapy should cover Neisseria gonorrhoeae, Chlamydia trachomatis, and anaerobes. For suspected STIs, consider dual coverage for gonorrhea and chlamydia pending test results. Partner treatment is essential for STI management.",
  "conditions": [
    {
      "id": "gonorrhea",
      "name": "Gonorrhea",
      "description": "Sexually transmitted infection caused by Neisseria gonorrhoeae",
      "notes": [
        "Test for concurrent chlamydia, syphilis, and HIV",
        "Partner notification and treatment is essential",
        "Follow-up testing to confirm cure is recommended in certain situations",
        "Increasing resistance to antibiotics is a concern; follow current guidelines",
        "Report to public health authorities"
      ],
      "references": [
        "Canadian STI Guidelines",
        "Bugs & Drugs guide to antimicrobial therapy",
        "Public Health Agency of Canada"
      ]
    },
    {
      "id": "chlamydia",
      "name": "Chlamydia",
      "description": "Sexually transmitted infection caused by Chlamydia trachomatis",
      "notes": [
        "Test for concurrent gonorrhea, syphilis, and HIV",
        "Partner notification and treatment is essential",
        "Often asymptomatic, especially in women",
        "Report to public health authorities"
      ],
      "references": [
        "Canadian STI Guidelines",
        "Bugs & Drugs guide to antimicrobial therapy",
        "Public Health Agency of Canada"
      ]
    },
    {
      "id": "pid",
      "name": "Pelvic Inflammatory Disease",
      "description": "Infection of the upper female genital tract, including the uterus, fallopian tubes, and ovaries",
      "notes": [
        "Test for gonorrhea and chlamydia",
        "Consider hospitalization for severe cases or pregnancy",
        "Partner treatment is essential",
        "Long-term complications include infertility and ectopic pregnancy"
      ],
      "references": [
        "Canadian STI Guidelines",
        "Bugs & Drugs guide to antimicrobial therapy",
        "Society of Obstetricians and Gynaecologists of Canada"
      ]
    },
    {
      "id": "syphilis",
      "name": "Syphilis",
      "description": "Sexually transmitted infection caused by Treponema pallidum",
      "notes": [
        "Staging is critical for determining treatment duration",
        "Test for concurrent gonorrhea, chlamydia, and HIV",
        "Partner notification and treatment is essential",
        "Follow-up serologic testing is required to ensure adequate response",
        "Report to public health authorities"
      ],
      "references": [
        "Canadian STI Guidelines",
        "Bugs & Drugs guide to antimicrobial therapy",
        "Public Health Agency of Canada"
      ]
    }
  ]
};

const obsgyneTreatmentsData = [
  {
    "condition_id": "gonorrhea",
    "first_line": {
      "adult": {
        "uncomplicated": {
          "regimen": "Ceftriaxone + Azithromycin",
          "dosing": "Ceftriaxone 500mg IM single dose + Azithromycin 1g PO single dose",
          "duration": "Single dose",
          "notes": "Dual therapy recommended due to increasing resistance and to treat possible co-infection with chlamydia"
        },
        "pharyngeal": {
          "regimen": "Ceftriaxone + Azithromycin",
          "dosing": "Ceftriaxone 500mg IM single dose + Azithromycin 1g PO single dose",
          "duration": "Single dose",
          "notes": "Pharyngeal infections are more difficult to eradicate; test of cure recommended"
        },
        "disseminated": {
          "regimen": "Ceftriaxone",
          "dosing": "1-2g IV/IM daily",
          "duration": "7-14 days (minimum 7 days)",
          "notes": "For disseminated gonococcal infection (DGI). Switch to oral therapy guided by susceptibilities when improved."
        },
        "pregnancy": {
          "regimen": "Ceftriaxone",
          "dosing": "500mg IM single dose",
          "duration": "Single dose",
          "notes": "Azithromycin 1g PO single dose can be added if chlamydia not ruled out. Doxycycline contraindicated in pregnancy."
        }
      },
      "pediatric": {
        "neonatal_ophthalmia": {
          "regimen": "Ceftriaxone",
          "dosing": "25-50mg/kg IV/IM (max 125mg)",
          "duration": "Single dose",
          "notes": "For gonococcal ophthalmia neonatorum. Saline irrigation of eyes also recommended."
        },
        "children_under_45kg": {
          "regimen": "Ceftriaxone",
          "dosing": "50mg/kg IM (max 500mg)",
          "duration": "Single dose",
          "notes": "For children <45kg. Add azithromycin 20mg/kg (max 1g) PO single dose if chlamydia not ruled out."
        },
        "children_over_45kg": {
          "regimen": "Ceftriaxone + Azithromycin",
          "dosing": "Ceftriaxone 500mg IM single dose + Azithromycin 1g PO single dose",
          "duration": "Single dose",
          "notes": "Adult dosing for children ≥45kg"
        }
      }
    },
    "second_line": {
      "adult": {
        "cephalosporin_allergy": {
          "regimen": "Gentamicin + Azithromycin",
          "dosing": "Gentamicin 240mg IM single dose + Azithromycin 2g PO single dose",
          "duration": "Single dose",
          "notes": "For patients with severe cephalosporin allergy"
        },
        "alternative": {
          "regimen": "Azithromycin",
          "dosing": "2g PO",
          "duration": "Single dose",
          "notes": "Only if ceftriaxone unavailable and susceptibility confirmed. Not recommended as routine due to resistance concerns."
        }
      },
      "pediatric": {
        "cephalosporin_allergy": {
          "regimen": "Azithromycin",
          "dosing": "20mg/kg (max 2g) PO",
          "duration": "Single dose",
          "notes": "For children with severe cephalosporin allergy. Consult pediatric infectious diseases."
        }
      }
    },
    "third_line": {
      "adult": {
        "multidrug_resistant": {
          "regimen": "Ertapenem",
          "dosing": "1g IM/IV daily",
          "duration": "7 days",
          "notes": "For suspected ceftriaxone-resistant gonorrhea. Consult infectious diseases."
        },
        "extensive_resistance": {
          "regimen": "Based on susceptibility testing",
          "dosing": "Varies based on agent",
          "duration": "7-14 days",
          "notes": "For extensively drug-resistant gonorrhea. Consult infectious diseases. May require combination therapy."
        }
      },
      "pediatric": {
        "multidrug_resistant": {
          "regimen": "Based on susceptibility testing",
          "dosing": "Varies based on agent",
          "duration": "7-14 days",
          "notes": "For suspected resistant gonorrhea in children. Consult pediatric infectious diseases."
        }
      }
    }
  },
  {
    "condition_id": "chlamydia",
    "first_line": {
      "adult": {
        "uncomplicated": {
          "regimen": "Doxycycline",
          "dosing": "100mg PO BID",
          "duration": "7 days",
          "notes": "First-line for uncomplicated urogenital, rectal, or pharyngeal chlamydia"
        },
        "alternative": {
          "regimen": "Azithromycin",
          "dosing": "1g PO",
          "duration": "Single dose",
          "notes": "Alternative if doxycycline contraindicated or adherence concerns"
        },
        "pregnancy": {
          "regimen": "Azithromycin",
          "dosing": "1g PO",
          "duration": "Single dose",
          "notes": "Preferred in pregnancy as doxycycline is contraindicated"
        },
        "lymphogranuloma_venereum": {
          "regimen": "Doxycycline",
          "dosing": "100mg PO BID",
          "duration": "21 days",
          "notes": "For lymphogranuloma venereum (LGV)"
        }
      },
      "pediatric": {
        "neonatal_conjunctivitis": {
          "regimen": "Erythromycin",
          "dosing": "50mg/kg/day PO divided QID (max 2g/day)",
          "duration": "14 days",
          "notes": "For chlamydial conjunctivitis in neonates"
        },
        "neonatal_pneumonia": {
          "regimen": "Erythromycin",
          "dosing": "50mg/kg/day PO divided QID (max 2g/day)",
          "duration": "14 days",
          "notes": "For chlamydial pneumonia in neonates"
        },
        "children_under_45kg": {
          "regimen": "Erythromycin",
          "dosing": "50mg/kg/day PO divided QID (max 2g/day)",
          "duration": "7 days",
          "notes": "For children <45kg and <8 years old"
        },
        "children_over_8_years": {
          "regimen": "Doxycycline",
          "dosing": "For children ≥8 years: 4mg/kg/day PO divided BID (max 100mg/dose)",
          "duration": "7 days",
          "notes": "For children ≥8 years old"
        }
      }
    },
    "second_line": {
      "adult": {
        "doxycycline_intolerance": {
          "regimen": "Levofloxacin",
          "dosing": "500mg PO daily",
          "duration": "7 days",
          "notes": "For patients who cannot tolerate doxycycline (not in pregnancy)"
        },
        "azithromycin_failure": {
          "regimen": "Doxycycline",
          "dosing": "100mg PO BID",
          "duration": "7 days",
          "notes": "For treatment failure with azithromycin"
        },
        "pregnancy_alternative": {
          "regimen": "Amoxicillin",
          "dosing": "500mg PO TID",
          "duration": "7 days",
          "notes": "Alternative in pregnancy if azithromycin contraindicated"
        }
      },
      "pediatric": {
        "erythromycin_intolerance": {
          "regimen": "Azithromycin",
          "dosing": "10mg/kg (max 1g) PO",
          "duration": "Single dose",
          "notes": "For children who cannot tolerate erythromycin"
        },
        "children_over_8_alternative": {
          "regimen": "Azithromycin",
          "dosing": "10mg/kg (max 1g) PO",
          "duration": "Single dose",
          "notes": "Alternative for children ≥8 years if doxycycline not tolerated"
        }
      }
    },
    "third_line": {
      "adult": {
        "multiple_drug_intolerance": {
          "regimen": "Ofloxacin",
          "dosing": "300mg PO BID",
          "duration": "7 days",
          "notes": "For patients who cannot tolerate first and second-line options"
        },
        "persistent_infection": {
          "regimen": "Doxycycline followed by Azithromycin",
          "dosing": "Doxycycline 100mg PO BID for 7 days, followed by Azithromycin 1g PO single dose",
          "duration": "7 days + single dose",
          "notes": "For persistent infection after standard therapy. Consider resistance testing."
        }
      },
      "pediatric": {
        "treatment_failure": {
          "regimen": "Consult pediatric infectious diseases",
          "dosing": "Varies based on recommendation",
          "duration": "Varies based on recommendation",
          "notes": "For treatment failure in children. Consider resistance testing."
        }
      }
    }
  },
  {
    "condition_id": "pid",
    "first_line": {
      "adult": {
        "outpatient_mild_moderate": {
          "regimen": "Ceftriaxone + Doxycycline ± Metronidazole",
          "dosing": "Ceftriaxone 500mg IM single dose + Doxycycline 100mg PO BID ± Metronidazole 500mg PO BID",
          "duration": "14 days (doxycycline and metronidazole)",
          "notes": "For mild to moderate PID managed as outpatient. Metronidazole added if BV present or risk of anaerobic infection."
        },
        "inpatient": {
          "regimen": "Ceftriaxone + Doxycycline ± Metronidazole",
          "dosing": "Ceftriaxone 2g IV daily + Doxycycline 100mg PO/IV BID ± Metronidazole 500mg IV/PO q8h",
          "duration": "14 days total (IV until improved, then complete with oral therapy)",
          "notes": "For severe PID requiring hospitalization"
        },
        "alternative_inpatient": {
          "regimen": "Ampicillin-Sulbactam + Doxycycline",
          "dosing": "Ampicillin-Sulbactam 3g IV q6h + Doxycycline 100mg PO/IV BID",
          "duration": "14 days total (IV until improved, then complete with oral therapy)",
          "notes": "Alternative regimen for hospitalized patients"
        }
      },
      "pediatric": {
        "adolescent_outpatient": {
          "regimen": "Ceftriaxone + Doxycycline ± Metronidazole",
          "dosing": "Ceftriaxone 50mg/kg IM (max 500mg) single dose + Doxycycline 100mg PO BID ± Metronidazole 500mg PO BID",
          "duration": "14 days (doxycycline and metronidazole)",
          "notes": "For adolescents ≥8 years with mild to moderate PID"
        },
        "adolescent_inpatient": {
          "regimen": "Ceftriaxone + Doxycycline ± Metronidazole",
          "dosing": "Ceftriaxone 50mg/kg IV daily (max 2g) + Doxycycline 100mg PO/IV BID ± Metronidazole 10mg/kg IV/PO q8h (max 500mg/dose)",
          "duration": "14 days total (IV until improved, then complete with oral therapy)",
          "notes": "For adolescents with severe PID requiring hospitalization"
        }
      }
    },
    "second_line": {
      "adult": {
        "cephalosporin_allergy_outpatient": {
          "regimen": "Levofloxacin + Metronidazole",
          "dosing": "Levofloxacin 500mg PO daily + Metronidazole 500mg PO BID",
          "duration": "14 days",
          "notes": "For outpatient treatment in patients with cephalosporin allergy"
        },
        "cephalosporin_allergy_inpatient": {
          "regimen": "Clindamycin + Gentamicin",
          "dosing": "Clindamycin 900mg IV q8h + Gentamicin 2mg/kg IV loading dose, then 1.5mg/kg IV q8h or 5mg/kg IV daily",
          "duration": "14 days total (IV until improved, then complete with oral clindamycin 450mg PO QID)",
          "notes": "For inpatient treatment in patients with cephalosporin allergy"
        }
      },
      "pediatric": {
        "cephalosporin_allergy": {
          "regimen": "Clindamycin + Gentamicin",
          "dosing": "Clindamycin 10mg/kg IV q6h (max 900mg/dose) + Gentamicin 2.5mg/kg IV q8h",
          "duration": "14 days total (IV until improved, then complete with oral therapy)",
          "notes": "For adolescents with cephalosporin allergy"
        },
        "under_8_years": {
          "regimen": "Clindamycin + Gentamicin",
          "dosing": "Clindamycin 10mg/kg IV q6h (max 900mg/dose) + Gentamicin 2.5mg/kg IV q8h",
          "duration": "14 days total (IV until improved, then complete with oral therapy)",
          "notes": "For children <8 years (avoid doxycycline)"
        }
      }
    },
    "third_line": {
      "adult": {
        "complex_cases": {
          "regimen": "Meropenem + Doxycycline",
          "dosing": "Meropenem 1g IV q8h + Doxycycline 100mg PO/IV BID",
          "duration": "14 days total (IV until improved, then complete with oral therapy)",
          "notes": "For complex cases with suspected multidrug-resistant organisms"
        },
        "tubo_ovarian_abscess": {
          "regimen": "Piperacillin-Tazobactam + Doxycycline",
          "dosing": "Piperacillin-Tazobactam 4.5g IV q6h + Doxycycline 100mg PO/IV BID",
          "duration": "14-21 days total (IV until improved, then complete with oral therapy)",
          "notes": "For tubo-ovarian abscess. May require drainage procedure."
        }
      },
      "pediatric": {
        "complex_cases": {
          "regimen": "Piperacillin-Tazobactam + Clindamycin",
          "dosing": "Piperacillin-Tazobactam 100mg/kg IV q6h (max 4.5g/dose) + Clindamycin 10mg/kg IV q6h (max 900mg/dose)",
          "duration": "14-21 days total (IV until improve
(Content truncated due to size limit. Use line ranges to read in chunks)