// ── Service / Condition Data ───────────────────────────────
export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  seoTitle: string;
  seoDescription: string;
  heroLine: string;
  overview: string;
  symptoms: string[];
  whenToSeeDoctor: string[];
  consultationProcess: string[];
  faqs: ServiceFAQ[];
  relatedSlugs: string[];
  icon: string; // emoji used as quick icon
}

export const services: Service[] = [
  {
    slug: "diabetes",
    name: "Diabetes Management",
    shortName: "Diabetes",
    seoTitle: "Diabetes Treatment in Kasaragod | Dr. Jijo Jose M",
    seoDescription:
      "Expert diabetes management near Pulikunnu, Kasaragod. Dr. Jijo Jose M (MD General Medicine) offers personalised treatment plans for Type 1, Type 2 & gestational diabetes.",
    heroLine: "Personalised diabetes care for a healthier life",
    overview:
      "Diabetes is a chronic condition where blood sugar levels remain higher than normal. Left unmanaged, it can affect the heart, kidneys, eyes, and nerves. With the right treatment plan — medication, diet guidance, and regular monitoring — most patients lead full, active lives. Dr. Jijo Jose M provides evidence-based diabetes care tailored to each patient's lifestyle and needs.",
    symptoms: [
      "Increased thirst and frequent urination",
      "Unexplained weight loss or gain",
      "Fatigue and weakness",
      "Blurred vision",
      "Slow-healing wounds or frequent infections",
      "Numbness or tingling in hands or feet",
    ],
    whenToSeeDoctor: [
      "Your fasting blood sugar is consistently above 126 mg/dL",
      "You experience sudden, unexplained weight loss",
      "You have a family history of diabetes and notice early symptoms",
      "Your existing treatment doesn't seem to control sugar levels",
      "You are pregnant and have been advised glucose screening",
    ],
    consultationProcess: [
      "Detailed history of symptoms, diet, and family background",
      "Review of recent blood sugar reports (HbA1c, fasting, post-prandial)",
      "Personalised medication and lifestyle plan",
      "Guidance on home glucose monitoring and follow-up schedule",
    ],
    faqs: [
      {
        question: "Can diabetes be cured completely?",
        answer:
          "Type 2 diabetes can often be managed effectively with medication, diet, and exercise. While remission is possible in some early cases, ongoing monitoring is essential. Your doctor will create a plan suited to your specific condition.",
      },
      {
        question: "How often should I check my blood sugar?",
        answer:
          "It depends on your treatment plan. Some patients check daily; others may need testing only during follow-ups. Dr. Jijo will advise a monitoring schedule based on your condition.",
      },
      {
        question: "Do I need to stop eating rice if I have diabetes?",
        answer:
          "You don't have to eliminate rice, but portion control and choosing less-polished varieties can help. Diet advice is always tailored to your preferences and cultural habits.",
      },
      {
        question: "Is insulin always necessary for diabetes?",
        answer:
          "Not always. Many patients manage well with oral medications and lifestyle changes. Insulin is recommended when oral medications alone are insufficient to maintain target sugar levels.",
      },
      {
        question: "What tests are done during a diabetes check-up?",
        answer:
          "Common tests include fasting blood glucose, HbA1c (3-month average), lipid profile, kidney function tests, and a urine examination. The doctor may recommend additional tests depending on your case.",
      },
    ],
    relatedSlugs: [
      "high-cholesterol",
      "hypertension",
      "thyroid-disorders",
      "lifestyle-disorders",
    ],
    icon: "🩸",
  },
  {
    slug: "hypertension",
    name: "Hypertension (High Blood Pressure)",
    shortName: "Hypertension",
    seoTitle: "High Blood Pressure Doctor in Kasaragod | Dr. Jijo Jose M",
    seoDescription:
      "Get expert hypertension management in Kasaragod. Dr. Jijo Jose M offers careful blood pressure evaluation and treatment near Pulikunnu.",
    heroLine: "Keep your blood pressure in check with expert care",
    overview:
      "Hypertension, or high blood pressure, often has no symptoms but silently damages the heart, brain, and kidneys over time. Regular monitoring and proper medication can prevent serious complications such as heart attack and stroke. Dr. Jijo Jose M provides thorough blood pressure evaluation and long-term management plans.",
    symptoms: [
      "Frequent headaches, especially in the morning",
      "Dizziness or light-headedness",
      "Blurred vision",
      "Shortness of breath during mild activity",
      "Chest discomfort",
      "Often no symptoms at all (silent condition)",
    ],
    whenToSeeDoctor: [
      "Your BP reading is consistently above 140/90 mmHg",
      "You have headaches, dizziness, or chest discomfort",
      "You have a family history of hypertension or heart disease",
      "You are overweight, smoke, or have a sedentary lifestyle",
      "You are already on BP medication but readings remain high",
    ],
    consultationProcess: [
      "Accurate blood pressure measurement and history review",
      "Assessment of risk factors — weight, diet, stress, family history",
      "Blood tests to check for kidney or thyroid-related causes",
      "Personalised medication and lifestyle modification plan",
    ],
    faqs: [
      {
        question: "Can I stop BP medicine once my readings are normal?",
        answer:
          "Never stop medication without consulting your doctor. Normal readings usually mean the medicine is working. Stopping suddenly can cause a dangerous spike in blood pressure.",
      },
      {
        question: "Is high blood pressure hereditary?",
        answer:
          "Family history increases risk, but lifestyle factors like diet, exercise, and stress play a significant role. Early monitoring can help prevent complications.",
      },
      {
        question: "How often should I check my blood pressure?",
        answer:
          "If you're on medication, check as advised by your doctor — often daily or a few times a week. If you're healthy, an annual check-up is a good practice.",
      },
      {
        question: "Does reducing salt really help?",
        answer:
          "Yes. Reducing salt intake is one of the most effective non-medication strategies for lowering blood pressure. Your doctor can guide you on safe daily limits.",
      },
      {
        question: "Can young people get hypertension?",
        answer:
          "Yes. Hypertension can affect people in their 20s and 30s, especially with stress, poor diet, and sedentary habits. Regular screening is recommended for all adults.",
      },
    ],
    relatedSlugs: [
      "diabetes",
      "high-cholesterol",
      "lifestyle-disorders",
      "health-checkup",
    ],
    icon: "❤️",
  },
  {
    slug: "high-cholesterol",
    name: "High Cholesterol (Dyslipidemia)",
    shortName: "High Cholesterol",
    seoTitle: "Cholesterol Treatment in Kasaragod | Dr. Jijo Jose M",
    seoDescription:
      "Expert high cholesterol management near Pulikunnu, Kasaragod. Dr. Jijo Jose M provides lipid profile evaluation and personalised treatment plans.",
    heroLine: "Manage your cholesterol before it manages you",
    overview:
      "High cholesterol builds up silently in blood vessels and increases the risk of heart attacks and strokes. A simple lipid profile test can detect it early. With the right combination of dietary changes, exercise, and medication when needed, cholesterol can be managed effectively. Dr. Jijo Jose M helps patients understand their lipid levels and creates targeted treatment plans.",
    symptoms: [
      "Usually no symptoms — detected through blood tests",
      "Yellowish deposits around the eyes (xanthelasma)",
      "Fatty lumps under the skin (xanthomas)",
      "Chest pain or discomfort (if arteries are affected)",
    ],
    whenToSeeDoctor: [
      "Your total cholesterol or LDL is above normal range",
      "You have a family history of heart disease or high cholesterol",
      "You are overweight, diabetic, or have high blood pressure",
      "You are above 40 and haven't had a lipid profile check",
    ],
    consultationProcess: [
      "Review of lipid profile and related blood reports",
      "Assessment of cardiovascular risk factors",
      "Dietary guidance tailored to Kerala food habits",
      "Medication plan (statins, etc.) if lifestyle changes are insufficient",
    ],
    faqs: [
      {
        question: "Is coconut oil bad for cholesterol?",
        answer:
          "Coconut oil is part of Kerala cuisine. Moderation is key. Your doctor will advise on how much is appropriate based on your lipid levels and overall health.",
      },
      {
        question: "How often should I get a lipid profile test?",
        answer:
          "If your levels are normal, every 3–5 years for adults. If you're on treatment or have risk factors, your doctor may recommend testing every 3–6 months.",
      },
      {
        question: "Can exercise alone reduce cholesterol?",
        answer:
          "Regular exercise helps raise HDL (good cholesterol) and lower LDL. However, some patients need medication along with lifestyle changes to reach healthy levels.",
      },
      {
        question: "Do statins have side effects?",
        answer:
          "Some people experience mild muscle pain. Serious side effects are rare. Your doctor will monitor you and adjust the medication if needed.",
      },
      {
        question: "At what age should cholesterol screening start?",
        answer:
          "Screening is recommended from age 20 for those with risk factors. For others, starting at age 35–40 is advisable. Ask your doctor during your next health check-up.",
      },
    ],
    relatedSlugs: [
      "diabetes",
      "hypertension",
      "lifestyle-disorders",
      "health-checkup",
    ],
    icon: "🫀",
  },
  {
    slug: "thyroid-disorders",
    name: "Thyroid Disorders",
    shortName: "Thyroid",
    seoTitle: "Thyroid Doctor in Kasaragod | Dr. Jijo Jose M",
    seoDescription:
      "Expert thyroid disorder management in Kasaragod. Dr. Jijo Jose M treats hypothyroidism, hyperthyroidism, and thyroid nodules near Pulikunnu.",
    heroLine: "Expert thyroid care for balanced health",
    overview:
      "The thyroid gland controls metabolism, energy, and many body functions. Disorders like hypothyroidism (underactive) and hyperthyroidism (overactive) are common, especially among women. Early diagnosis and proper medication can restore normal thyroid function. Dr. Jijo Jose M evaluates thyroid conditions thoroughly and monitors patients through regular follow-ups.",
    symptoms: [
      "Unexplained weight gain or weight loss",
      "Fatigue and sluggishness",
      "Feeling excessively cold or warm",
      "Hair loss and dry skin",
      "Irregular menstrual cycles",
      "Mood changes — anxiety or depression",
      "Swelling in the neck (goitre)",
    ],
    whenToSeeDoctor: [
      "You have persistent fatigue with unexplained weight changes",
      "You notice a swelling or lump in your neck",
      "You have a family history of thyroid conditions",
      "Your menstrual cycle has become irregular",
      "You feel constantly anxious or have heart palpitations",
    ],
    consultationProcess: [
      "Detailed symptom review and neck examination",
      "Thyroid function tests (TSH, T3, T4) review",
      "Ultrasound recommendation if nodules are suspected",
      "Medication plan and follow-up schedule for monitoring",
    ],
    faqs: [
      {
        question: "Is thyroid disease lifelong?",
        answer:
          "Many thyroid conditions require long-term medication, but with proper treatment, patients live completely normal lives. Regular monitoring ensures optimal thyroid levels.",
      },
      {
        question: "Can thyroid problems cause weight gain?",
        answer:
          "Yes. An underactive thyroid (hypothyroidism) slows metabolism and can cause weight gain. Once treated, weight management becomes easier with diet and exercise.",
      },
      {
        question: "Should I avoid certain foods with thyroid problems?",
        answer:
          "Some foods (like raw cruciferous vegetables in large amounts) may interfere with thyroid function. Your doctor will provide dietary guidance specific to your condition.",
      },
      {
        question: "How often should thyroid levels be checked?",
        answer:
          "Typically every 6–8 weeks after starting or adjusting medication, then every 6–12 months once stable. Your doctor will set the right schedule for you.",
      },
      {
        question: "Can thyroid problems affect pregnancy?",
        answer:
          "Yes. Untreated thyroid disorders can affect fertility and pregnancy outcomes. It's important to have thyroid levels checked before and during pregnancy.",
      },
    ],
    relatedSlugs: [
      "lifestyle-disorders",
      "anemia",
      "health-checkup",
      "diabetes",
    ],
    icon: "🦋",
  },
  {
    slug: "lifestyle-disorders",
    name: "Lifestyle Disorders",
    shortName: "Lifestyle Disorders",
    seoTitle: "Lifestyle Disease Treatment in Kasaragod | Dr. Jijo Jose M",
    seoDescription:
      "Comprehensive lifestyle disease management in Kasaragod. Dr. Jijo Jose M helps manage obesity, metabolic syndrome, and stress-related conditions near Pulikunnu.",
    heroLine: "Small lifestyle changes, big health improvements",
    overview:
      "Modern lifestyles — sedentary work, processed food, stress, and poor sleep — lead to conditions like obesity, metabolic syndrome, fatty liver, and chronic fatigue. These are often interconnected and worsen if ignored. Dr. Jijo Jose M takes a holistic approach, combining medication with practical lifestyle modifications that fit into your daily routine.",
    symptoms: [
      "Gradual, persistent weight gain",
      "Constant fatigue despite adequate sleep",
      "Frequent acidity or digestive issues",
      "Difficulty sleeping or poor sleep quality",
      "High sugar, cholesterol, or blood pressure detected during routine tests",
      "Stress, anxiety, or mood swings",
    ],
    whenToSeeDoctor: [
      "You have gained significant weight over the past year",
      "You feel tired all the time without an obvious reason",
      "Routine blood tests show borderline or abnormal values",
      "You want guidance on healthier habits tailored to your situation",
    ],
    consultationProcess: [
      "Comprehensive health assessment including BMI and vitals",
      "Blood work review (sugar, lipids, liver, kidney function)",
      "Personalised diet and activity plan suited to your schedule",
      "Medication if conditions like fatty liver or metabolic syndrome are present",
    ],
    faqs: [
      {
        question: "Is fatty liver disease serious?",
        answer:
          "Non-alcoholic fatty liver disease is common and can progress to liver damage if ignored. Lifestyle changes and regular monitoring can reverse early-stage fatty liver.",
      },
      {
        question: "How do I know if I have metabolic syndrome?",
        answer:
          "If you have three or more of: high blood pressure, high sugar, high triglycerides, low HDL cholesterol, or a large waist circumference — you may have metabolic syndrome. A doctor can confirm.",
      },
      {
        question: "Can lifestyle changes replace medication?",
        answer:
          "In early stages, lifestyle changes alone may be sufficient. However, if values are significantly abnormal, medication alongside lifestyle modification gives the best results.",
      },
      {
        question: "What kind of exercise is recommended?",
        answer:
          "Brisk walking for 30–45 minutes most days is a good start. Your doctor can suggest modifications based on your fitness level and any existing conditions.",
      },
      {
        question: "Do I need to follow a strict diet?",
        answer:
          "Not necessarily. The goal is sustainable changes — reducing processed foods, controlling portions, and eating more whole foods. Your plan will be adapted to Kerala cuisine.",
      },
    ],
    relatedSlugs: [
      "diabetes",
      "hypertension",
      "high-cholesterol",
      "health-checkup",
    ],
    icon: "🏃",
  },
  {
    slug: "anemia",
    name: "Anemia",
    shortName: "Anemia",
    seoTitle: "Anemia Treatment in Kasaragod | Dr. Jijo Jose M",
    seoDescription:
      "Expert anaemia diagnosis and treatment in Kasaragod. Dr. Jijo Jose M evaluates iron deficiency and other causes of low haemoglobin near Pulikunnu.",
    heroLine: "Feeling tired all the time? It could be anaemia",
    overview:
      "Anaemia occurs when your body doesn't have enough healthy red blood cells to carry adequate oxygen to tissues. Iron deficiency is the most common cause, but vitamin B12 deficiency, chronic diseases, and other conditions can also lead to anaemia. Dr. Jijo Jose M identifies the root cause and provides targeted treatment.",
    symptoms: [
      "Persistent fatigue and weakness",
      "Pale skin, nails, or inner eyelids",
      "Shortness of breath on mild exertion",
      "Dizziness or light-headedness",
      "Cold hands and feet",
      "Brittle nails or hair loss",
    ],
    whenToSeeDoctor: [
      "You feel constantly tired despite adequate rest",
      "You look noticeably pale",
      "You have heavy menstrual periods",
      "You follow a vegetarian diet and feel fatigued",
      "A routine blood test shows low haemoglobin",
    ],
    consultationProcess: [
      "Complete blood count (CBC) and iron studies review",
      "Assessment for underlying causes — diet, absorption, chronic disease",
      "Supplementation plan (iron, B12, folic acid as needed)",
      "Follow-up blood tests to track recovery",
    ],
    faqs: [
      {
        question: "How long does it take to correct anaemia?",
        answer:
          "With proper treatment, haemoglobin levels usually improve within 6–8 weeks. Complete iron store replenishment may take 3–6 months. Regular follow-up ensures recovery stays on track.",
      },
      {
        question: "Is anaemia common in women?",
        answer:
          "Yes, especially in women of reproductive age due to menstrual blood loss and dietary factors. Regular screening is recommended.",
      },
      {
        question: "Can vegetarians get enough iron?",
        answer:
          "Yes, with proper planning. Green leafy vegetables, lentils, and fortified foods provide iron. Vitamin C-rich foods improve absorption. Your doctor may recommend supplements.",
      },
      {
        question: "Are iron supplements safe?",
        answer:
          "When taken as prescribed, iron supplements are safe. Some people may experience mild stomach upset, which can be managed by taking them with food or adjusting the type.",
      },
      {
        question: "Can anaemia be a sign of something serious?",
        answer:
          "Sometimes anaemia indicates an underlying condition like chronic kidney disease or gastrointestinal bleeding. A thorough evaluation helps rule out or treat any underlying cause.",
      },
    ],
    relatedSlugs: [
      "thyroid-disorders",
      "gastrointestinal-diseases",
      "health-checkup",
      "infectious-diseases",
    ],
    icon: "💉",
  },
  {
    slug: "fever",
    name: "Fever & Acute Infections",
    shortName: "Fever",
    seoTitle: "Fever Treatment in Kasaragod | Dr. Jijo Jose M",
    seoDescription:
      "Expert diagnosis and treatment of fever, dengue, typhoid, and acute infections in Kasaragod by Dr. Jijo Jose M near Pulikunnu.",
    heroLine: "Accurate diagnosis and effective treatment for fever",
    overview:
      "Fever is the body's response to infection — viral, bacterial, or parasitic. In Kasaragod and Kerala, conditions like dengue, chikungunya, typhoid, malaria, and viral fevers are common, especially during monsoon season. Timely diagnosis is crucial to avoid complications. Dr. Jijo Jose M carefully evaluates fever cases to identify the cause and provide the right treatment.",
    symptoms: [
      "Elevated body temperature (above 100.4°F / 38°C)",
      "Body aches and headache",
      "Chills and sweating",
      "Fatigue and loss of appetite",
      "Joint pain or skin rash",
      "Sore throat, cough, or nasal congestion",
    ],
    whenToSeeDoctor: [
      "Fever lasts more than 2–3 days without improvement",
      "Temperature exceeds 103°F (39.4°C)",
      "You have a severe headache, rash, or joint pain alongside fever",
      "You experience vomiting, diarrhoea, or difficulty breathing",
      "You have recently travelled to a malaria-endemic area",
    ],
    consultationProcess: [
      "Detailed history — duration, pattern, travel, and contact exposure",
      "Clinical examination and relevant blood tests (CBC, dengue NS1, Widal, etc.)",
      "Diagnosis-specific treatment — antibiotics, antivirals, or supportive care",
      "Advice on warning signs that need immediate hospital attention",
    ],
    faqs: [
      {
        question: "How do I know if my fever is dengue?",
        answer:
          "Dengue fever often presents with high fever, severe body/joint pain, headache, and sometimes a rash. A blood test (NS1 antigen or dengue antibodies) can confirm. Seek medical attention early.",
      },
      {
        question: "Should I take antibiotics for every fever?",
        answer:
          "No. Most fevers are viral and do not respond to antibiotics. Taking antibiotics unnecessarily can cause resistance. Let your doctor determine the appropriate treatment.",
      },
      {
        question: "When is fever an emergency?",
        answer:
          "Seek immediate medical attention for very high fever (above 104°F), fever with bleeding, severe vomiting, confusion, difficulty breathing, or if a child under 3 months has any fever.",
      },
      {
        question: "Are monsoon fevers preventable?",
        answer:
          "Many can be prevented by avoiding stagnant water (mosquito breeding), using mosquito repellent, drinking clean water, and maintaining good hand hygiene.",
      },
      {
        question: "How long does viral fever usually last?",
        answer:
          "Most viral fevers resolve within 5–7 days with rest and supportive care. If fever persists or worsens, consult a doctor to rule out complications.",
      },
    ],
    relatedSlugs: [
      "infectious-diseases",
      "respiratory-tract-infections",
      "gastrointestinal-diseases",
      "health-checkup",
    ],
    icon: "🌡️",
  },
  {
    slug: "infectious-diseases",
    name: "Infectious Diseases",
    shortName: "Infections",
    seoTitle: "Infectious Disease Treatment Kasaragod | Dr. Jijo Jose M",
    seoDescription:
      "Expert treatment for dengue, typhoid, UTI, and other infectious diseases in Kasaragod. Dr. Jijo Jose M provides accurate diagnosis near Pulikunnu.",
    heroLine: "Timely diagnosis and treatment of infections",
    overview:
      "Infectious diseases — caused by bacteria, viruses, fungi, or parasites — range from common conditions like urinary tract infections and skin infections to more serious ones like dengue, typhoid, tuberculosis, and hepatitis. In a tropical climate like Kasaragod's, timely and accurate diagnosis is especially important. Dr. Jijo Jose M provides careful clinical evaluation and evidence-based treatment.",
    symptoms: [
      "Fever with or without chills",
      "Painful or burning urination (UTI)",
      "Skin redness, swelling, or pus",
      "Persistent cough or sputum production",
      "Diarrhoea, nausea, or abdominal pain",
      "Enlarged lymph nodes or unexplained weight loss",
    ],
    whenToSeeDoctor: [
      "Fever doesn't improve after 3 days of home treatment",
      "You have painful urination or blood in urine",
      "A wound is not healing or shows signs of spreading infection",
      "You have persistent cough lasting more than 2 weeks",
      "You suspect exposure to tuberculosis or hepatitis",
    ],
    consultationProcess: [
      "Clinical examination and symptom-based history",
      "Targeted investigations — blood culture, urine culture, imaging",
      "Appropriate antibiotic or antiviral prescription",
      "Follow-up to ensure infection resolution and prevent recurrence",
    ],
    faqs: [
      {
        question: "How can I tell if an infection is bacterial or viral?",
        answer:
          "It's difficult to tell without tests. Bacterial infections often cause localised symptoms (e.g., pus, specific organ symptoms) and may need antibiotics. Your doctor will determine the type through clinical evaluation and tests.",
      },
      {
        question: "Are UTIs common?",
        answer:
          "Yes, especially in women. Drinking adequate water, maintaining hygiene, and seeking prompt treatment can prevent recurring UTIs.",
      },
      {
        question: "Should I complete the full course of antibiotics?",
        answer:
          "Always. Stopping antibiotics early — even if you feel better — can lead to antibiotic resistance and recurrence of infection.",
      },
      {
        question: "Can infections be prevented?",
        answer:
          "Many infections are preventable through good hygiene, safe water, proper food handling, vaccination, and avoiding mosquito bites. Your doctor can advise on specific preventive measures.",
      },
      {
        question: "Is tuberculosis (TB) still common in India?",
        answer:
          "Yes. India has a significant TB burden. If you have a persistent cough lasting more than 2 weeks, unexplained weight loss, or night sweats, consult a doctor for evaluation.",
      },
    ],
    relatedSlugs: [
      "fever",
      "respiratory-tract-infections",
      "gastrointestinal-diseases",
      "health-checkup",
    ],
    icon: "🦠",
  },
  {
    slug: "gastrointestinal-diseases",
    name: "Gastrointestinal Diseases",
    shortName: "GI Diseases",
    seoTitle: "Gastric & Digestive Treatment Kasaragod | Dr. Jijo Jose M",
    seoDescription:
      "Expert treatment for acidity, gastritis, IBS, and digestive disorders in Kasaragod by Dr. Jijo Jose M near Pulikunnu.",
    heroLine: "Effective care for digestive and stomach problems",
    overview:
      "Gastrointestinal (GI) problems — acidity, gastritis, irritable bowel syndrome (IBS), peptic ulcers, and functional dyspepsia — are among the most common reasons people visit a doctor. Dietary habits, stress, and infections (like H. pylori) are common triggers. Dr. Jijo Jose M provides thorough evaluation and practical treatment plans.",
    symptoms: [
      "Burning sensation in the chest or upper abdomen (acidity)",
      "Bloating, gas, or abdominal discomfort",
      "Nausea or vomiting",
      "Alternating diarrhoea and constipation",
      "Loss of appetite or unintended weight loss",
      "Blood in stools (requires urgent evaluation)",
    ],
    whenToSeeDoctor: [
      "Acidity or heartburn persists despite over-the-counter medication",
      "You have abdominal pain lasting more than a week",
      "You notice blood in your stools or black/tarry stools",
      "You have unexplained weight loss with digestive symptoms",
      "Symptoms significantly affect your daily life or sleep",
    ],
    consultationProcess: [
      "Detailed dietary and symptom history",
      "Relevant tests — stool examination, H. pylori test, ultrasound",
      "Diet modification plan alongside medication",
      "Referral for endoscopy if red-flag symptoms are present",
    ],
    faqs: [
      {
        question: "Is acidity a serious problem?",
        answer:
          "Occasional acidity is common and usually manageable with diet changes. However, persistent acidity can indicate gastritis, ulcers, or GERD that need proper treatment.",
      },
      {
        question: "What is IBS?",
        answer:
          "Irritable Bowel Syndrome is a functional disorder causing abdominal pain, bloating, and altered bowel habits. It's managed with diet changes, stress management, and medication.",
      },
      {
        question: "Should I avoid spicy food entirely?",
        answer:
          "Not necessarily. Moderation is key. Your doctor will identify your specific triggers and help you create a practical diet plan.",
      },
      {
        question: "When should I worry about blood in stools?",
        answer:
          "Any blood in stools should be evaluated by a doctor. While common causes include piles (haemorrhoids), it's important to rule out more serious conditions.",
      },
      {
        question: "Can stress cause stomach problems?",
        answer:
          "Yes. Stress is a well-known trigger for acidity, IBS symptoms, and functional dyspepsia. Managing stress through relaxation techniques can significantly improve symptoms.",
      },
    ],
    relatedSlugs: [
      "lifestyle-disorders",
      "infectious-diseases",
      "fever",
      "health-checkup",
    ],
    icon: "🫃",
  },
  {
    slug: "respiratory-tract-infections",
    name: "Respiratory Tract Infections",
    shortName: "Respiratory Infections",
    seoTitle: "Cough & Cold Treatment in Kasaragod | Dr. Jijo Jose M",
    seoDescription:
      "Expert treatment for cough, cold, bronchitis, pneumonia, and asthma in Kasaragod by Dr. Jijo Jose M near Pulikunnu.",
    heroLine: "Breathe easier with the right treatment",
    overview:
      "Respiratory tract infections — from the common cold and sinusitis to bronchitis, pneumonia, and asthma exacerbations — are extremely common in Kerala's humid climate. While most upper respiratory infections are mild, lower respiratory infections like pneumonia need prompt medical attention. Dr. Jijo Jose M evaluates respiratory symptoms carefully and provides appropriate treatment.",
    symptoms: [
      "Persistent cough — dry or with phlegm",
      "Sore throat and nasal congestion",
      "Wheezing or difficulty breathing",
      "Chest tightness or pain while breathing",
      "Fever with cough and sputum",
      "Fatigue and body aches",
    ],
    whenToSeeDoctor: [
      "Cough persists for more than 2 weeks",
      "You experience difficulty breathing or wheezing",
      "You cough up blood or coloured sputum",
      "Fever accompanies cough and doesn't improve in 3 days",
      "You have asthma and your inhaler isn't providing relief",
    ],
    consultationProcess: [
      "Clinical examination — chest auscultation, throat examination",
      "Chest X-ray or blood tests if pneumonia or TB is suspected",
      "Appropriate treatment — antibiotics, inhalers, or supportive care",
      "Guidance on preventing recurrence — hygiene, vaccination",
    ],
    faqs: [
      {
        question: "How do I know if my cough is serious?",
        answer:
          "A cough lasting more than 2 weeks, coughing up blood, significant breathlessness, or fever that doesn't resolve should be evaluated by a doctor.",
      },
      {
        question: "Is it safe to use cough syrup without a prescription?",
        answer:
          "Over-the-counter cough syrups provide temporary relief but don't treat the underlying cause. If symptoms persist, consult a doctor for proper diagnosis.",
      },
      {
        question: "Can I prevent respiratory infections?",
        answer:
          "Good hand hygiene, avoiding close contact with sick people, staying hydrated, and getting vaccinated (flu, pneumonia) help reduce risk.",
      },
      {
        question: "What's the difference between bronchitis and pneumonia?",
        answer:
          "Bronchitis is inflammation of the airways and is usually viral. Pneumonia is a lung infection that can be more serious and often requires antibiotics. A chest X-ray helps differentiate.",
      },
      {
        question: "Should I get a flu vaccine?",
        answer:
          "The flu vaccine is recommended annually, especially for the elderly, children, pregnant women, and people with chronic conditions. Ask your doctor about it during your visit.",
      },
    ],
    relatedSlugs: [
      "fever",
      "infectious-diseases",
      "health-checkup",
      "anemia",
    ],
    icon: "🫁",
  },
  {
    slug: "health-checkup",
    name: "Preventive Health Check-up",
    shortName: "Health Checkup",
    seoTitle: "Health Checkup in Kasaragod | Dr. Jijo Jose M",
    seoDescription:
      "Comprehensive preventive health check-ups in Kasaragod. Dr. Jijo Jose M provides thorough evaluation and screening near Pulikunnu.",
    heroLine: "Prevent health problems before they start",
    overview:
      "A regular health check-up helps catch conditions like diabetes, hypertension, high cholesterol, thyroid disorders, and anaemia early — when they are easiest to treat. Many serious health problems develop silently without symptoms. Dr. Jijo Jose M conducts comprehensive evaluations based on your age, risk factors, and family history.",
    symptoms: [
      "No symptoms needed — preventive screening",
      "Family history of diabetes, heart disease, or cancer",
      "Sedentary lifestyle or changing dietary habits",
      "Age above 35–40 with no recent health screening",
      "Starting a new exercise programme or diet plan",
    ],
    whenToSeeDoctor: [
      "You haven't had a health check-up in over a year",
      "You are above 35 with a family history of chronic diseases",
      "You want baseline health data before lifestyle changes",
      "You feel generally fine but want peace of mind",
    ],
    consultationProcess: [
      "Review of personal and family medical history",
      "Basic vitals — blood pressure, BMI, general examination",
      "Blood tests — sugar, lipids, thyroid, kidney, liver, CBC",
      "Personalised health advice and follow-up recommendations",
    ],
    faqs: [
      {
        question: "How often should I get a health check-up?",
        answer:
          "For healthy adults under 40, every 2–3 years is reasonable. Above 40 or with risk factors, an annual check-up is recommended. Your doctor will advise based on your profile.",
      },
      {
        question: "What tests are included in a basic check-up?",
        answer:
          "Typically: complete blood count, fasting blood sugar, HbA1c, lipid profile, thyroid function, liver and kidney function tests, and urine examination.",
      },
      {
        question: "Do I need to fast before a health check-up?",
        answer:
          "Yes, for accurate results on fasting blood sugar and lipid profile. A 10–12 hour overnight fast is usually recommended. You can drink water.",
      },
      {
        question: "Is a health check-up worth it if I feel healthy?",
        answer:
          "Absolutely. Many conditions like hypertension, diabetes, and high cholesterol develop without symptoms. Early detection allows for simpler and more effective treatment.",
      },
      {
        question: "Can I bring old reports to compare?",
        answer:
          "Yes, please do. Comparing current and previous results helps track trends and catch early changes that might need attention.",
      },
    ],
    relatedSlugs: [
      "diabetes",
      "hypertension",
      "high-cholesterol",
      "thyroid-disorders",
    ],
    icon: "🩺",
  },
];

/** Utility: look up a service by slug */
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

/** Utility: get related services for a given slug */
export function getRelatedServices(slug: string): Service[] {
  const service = getServiceBySlug(slug);
  if (!service) return [];
  return service.relatedSlugs
    .map((rs) => getServiceBySlug(rs))
    .filter((s): s is Service => s !== undefined);
}
