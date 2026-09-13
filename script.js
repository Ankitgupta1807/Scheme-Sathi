/**
 * Scheme Sathi - Core Vanilla JavaScript Application
 * "The Right Scheme, For The Right Person."
 * 
 * B.Tech College Capstone Project
 * 100% Client-Side Single Page Application Architecture
 */

// ==========================================================================
// 1. COMPREHENSIVE DATASET OF 28 AUTHENTIC REAL INDIAN GOVERNMENT SCHEMES
// ==========================================================================
const SCHEMES_DATA = [
    {
        id: 'pm-kisan',
        name: 'PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)',
        slug: 'pm-kisan-samman-nidhi',
        category: 'Agriculture',
        categoryColor: '#10b981',
        icon: '🌾',
        department: 'Department of Agriculture & Farmers Welfare',
        ministry: 'Ministry of Agriculture and Farmers Welfare',
        shortDescription: 'Direct income support of ₹6,000 per year in three equal installments to landholding farmer families across India.',
        detailedDescription: 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) is a central sector scheme with 100% funding from the Government of India. It aims to augment the income of all landholding farmer families to enable them to procure agricultural inputs such as seeds, fertilizers, and equipment, and to support other domestic needs.',
        benefitsSummary: '₹6,000 / year (₹2,000 every 4 months directly via DBT)',
        detailedBenefits: [
            '₹6,000 per year paid in three equal 4-monthly installments of ₹2,000.',
            'Direct Benefit Transfer (DBT) directly into Aadhaar-seeded bank accounts.',
            'Cashless and hassle-free central income guarantee for rural agricultural families.'
        ],
        minAge: 18,
        maxAge: 100,
        incomeLimit: 1000000, // Up to ₹10 Lakhs
        states: ['All'],
        occupations: ['Farmer', 'Self Employed'],
        genders: ['All'],
        education: ['All'],
        disabilityRequired: false,
        minorityRequired: false,
        farmerOnly: true,
        documents: [
            'Aadhaar Card (Aadhaar linked with Mobile)',
            'Landholding Record / RoR / Khasra-Khatauni',
            'Active Bank Passbook (Aadhaar Seeded & NPCI Mapped)',
            'Citizenship Proof / Ration Card'
        ],
        applicationProcess: [
            'Visit the official portal pmkisan.gov.in or your nearest Common Services Centre (CSC).',
            'Click on "New Farmer Registration" and verify your identity using your Aadhaar number.',
            'Select your state, district, sub-district, block, and village, and enter your land survey details.',
            'Complete mandatory e-KYC via Aadhaar OTP or biometric fingerprint scan at any CSC.',
            'Submit the form to generate your Farmer Application Reference Number.'
        ],
        officialLink: 'https://pmkisan.gov.in/',
        portalName: 'PM-KISAN Portal',
        deadline: 'Open Throughout The Year'
    },
    {
        id: 'pmfby',
        name: 'PM Fasal Bima Yojana (PMFBY)',
        slug: 'pm-fasal-bima-yojana',
        category: 'Agriculture',
        categoryColor: '#10b981',
        icon: '🌱',
        department: 'Department of Agriculture & Farmers Welfare',
        ministry: 'Ministry of Agriculture and Farmers Welfare',
        shortDescription: 'Comprehensive low-premium crop insurance against natural calamities, pests, droughts, floods, and unseasonal rainfall.',
        detailedDescription: 'PMFBY provides comprehensive crop insurance from pre-sowing to post-harvest against non-preventable natural risks. Farmers pay a uniform minimal premium of only 2% for Kharif crops, 1.5% for Rabi crops, and 5% for annual commercial/horticultural crops, with the remaining premium heavily subsidized by the government.',
        benefitsSummary: 'Up to 100% Crop Loss Compensation at 1.5% - 2% Premium',
        detailedBenefits: [
            'Full sum insured payout for complete crop failure due to drought, floods, hailstorms, or cyclones.',
            'Post-harvest loss coverage for up to 14 days for crops kept in ‘cut and spread’ condition.',
            'Localized calamity assistance for landslides, hailstorms, and inundation within 72 hours of intimation.'
        ],
        minAge: 18,
        maxAge: 100,
        incomeLimit: 99999999,
        states: ['All'],
        occupations: ['Farmer'],
        genders: ['All'],
        education: ['All'],
        disabilityRequired: false,
        minorityRequired: false,
        farmerOnly: true,
        documents: [
            'Aadhaar Card',
            'Land Possession Certificate (LPC) or Record of Rights (RoR)',
            'Sowing Certificate / Declaration issued by Patwari or Village Officer',
            'Cancelled Cheque / Bank Passbook Copy',
            'Tenant Farmer Agreement (if applicable)'
        ],
        applicationProcess: [
            'Access pmfby.gov.in or apply through your local bank branch / primary agriculture cooperative.',
            'Select your crop season (Kharif / Rabi), state, and district.',
            'Upload your land title details and sowing certificate.',
            'Pay the nominal farmer share premium online or at the bank counter.',
            'Obtain your insurance policy certificate for tracking claim status.'
        ],
        officialLink: 'https://pmfby.gov.in/',
        portalName: 'PMFBY National Crop Insurance Portal',
        deadline: 'Seasonal (July 31 for Kharif / Dec 31 for Rabi)'
    },
    {
        id: 'kcc',
        name: 'Kisan Credit Card (KCC) Scheme',
        slug: 'kisan-credit-card',
        category: 'Agriculture',
        categoryColor: '#10b981',
        icon: '💳',
        department: 'Department of Financial Services / NABARD',
        ministry: 'Ministry of Finance & Agriculture',
        shortDescription: 'Adequate and timely institutional credit up to ₹3 Lakh for cultivation, post-harvest expenses, and allied dairy/fisheries.',
        detailedDescription: 'The Kisan Credit Card scheme provides simple, single-window credit to farmers for their cultivation needs, purchase of seeds, fertilizers, pesticides, and allied activities such as animal husbandry and fisheries at an effective concessional interest rate of only 4% per annum upon timely repayment.',
        benefitsSummary: 'Concessional Credit up to ₹3 Lakh @ 4% Interest Rate',
        detailedBenefits: [
            'Revolving cash credit with ATM-enabled RuPay Kisan Card for easy withdrawals.',
            'No collateral required for loans up to ₹1.60 Lakh.',
            '7% base interest rate with 3% prompt repayment incentive, reducing net interest to 4% p.a.'
        ],
        minAge: 18,
        maxAge: 75,
        incomeLimit: 99999999,
        states: ['All'],
        occupations: ['Farmer', 'Self Employed', 'Worker'],
        genders: ['All'],
        education: ['All'],
        disabilityRequired: false,
        minorityRequired: false,
        farmerOnly: true,
        documents: [
            'Aadhaar Card / Voter ID Card',
            'Land Records / Khatauni / Village Revenue Records',
            'Declaration of crops sown and proposed acreage',
            'PAN Card / Form 60',
            'Passport size photographs'
        ],
        applicationProcess: [
            'Download the 1-page KCC application form from any nationalized bank or agricoop.nic.in.',
            'Attach copies of your land records and Aadhaar card.',
            'Submit to your nearest public sector bank, regional rural bank, or cooperative society.',
            'Card approval and RuPay KCC card dispatch takes approximately 14 working days.'
        ],
        officialLink: 'https://agricoop.nic.in/',
        portalName: 'Department of Agriculture & Farmers Welfare',
        deadline: 'Open Throughout The Year'
    },
    {
        id: 'pm-kusum',
        name: 'PM-KUSUM (Pradhan Mantri Kisan Urja Suraksha)',
        slug: 'pm-kusum-solar-pump',
        category: 'Agriculture',
        categoryColor: '#10b981',
        icon: '☀️',
        department: 'Ministry of New and Renewable Energy',
        ministry: 'Ministry of New and Renewable Energy (MNRE)',
        shortDescription: 'Up to 60% government subsidy to install standalone off-grid and grid-connected solar agricultural water pumps.',
        detailedDescription: 'PM-KUSUM empowers farmers to generate solar energy on their barren or cultivable land, replace diesel-powered water pumps with solar pumps, and sell surplus clean electricity back to state power DISCOMs to earn extra annual income.',
        benefitsSummary: '60% Solar Pump Subsidy + Clean Power Income',
        detailedBenefits: [
            '30% Central Subsidy + 30% State Subsidy for Standalone Solar Pumps (Farmer pays only 40%, with bank loan options up to 30%).',
            'Zero recurring diesel fuel costs for irrigation.',
            'Opportunity to sell surplus solar electricity to DISCOMs under Component-A.'
        ],
        minAge: 18,
        maxAge: 80,
        incomeLimit: 99999999,
        states: ['All'],
        occupations: ['Farmer', 'Self Employed'],
        genders: ['All'],
        education: ['All'],
        disabilityRequired: false,
        minorityRequired: false,
        farmerOnly: true,
        documents: [
            'Aadhaar Card',
            'Land Revenue Records / Jamabandi',
            'Bank Account Details',
            'Electricity Bill / No Objection Certificate from DISCOM (for grid solar)'
        ],
        applicationProcess: [
            'Visit the official state renewable energy agency portal or pmkusum.mnre.gov.in.',
            'Register as an individual farmer or group of farmers.',
            'Select pump capacity (3 HP, 5 HP, 7.5 HP) and pump vendor.',
            'Deposit farmer contribution (approx 10-20% upfront) upon allocation.'
        ],
        officialLink: 'https://pmkusum.mnre.gov.in/',
        portalName: 'PM-KUSUM National Portal',
        deadline: 'Rolling State Allotment'
    },
    {
        id: 'pmmsy',
        name: 'PM Matsya Sampada Yojana (PMMSY)',
        slug: 'pm-matsya-sampada-yojana',
        category: 'Agriculture',
        categoryColor: '#10b981',
        icon: '🐟',
        department: 'Department of Fisheries',
        ministry: 'Ministry of Fisheries, Animal Husbandry and Dairying',
        shortDescription: 'Up to 60% financial assistance for setting up fish farms, hatcheries, biofloc systems, and cold storage units.',
        detailedDescription: 'PMMSY is a flagship scheme designed to address critical gaps in fish production, productivity, post-harvest infrastructure, and modernization across coastal and inland states. Subsidies reach up to 60% for SC, ST, and Women beneficiaries, and 40% for General categories.',
        benefitsSummary: '40% - 60% Capital Subsidy for Aquaculture & Fisheries',
        detailedBenefits: [
            'Capital subsidies for freshwater fish farming, shrimp hatcheries, and Recirculatory Aquaculture Systems (RAS).',
            'Assistance for purchasing motorized fishing vessels, deep-sea boats, and safety equipment.',
            'Free livelihood insurance coverage for active fishers.'
        ],
        minAge: 18,
        maxAge: 70,
        incomeLimit: 1000000,
        states: ['All'],
        occupations: ['Farmer', 'Worker', 'Self Employed'],
        genders: ['All'],
        education: ['All'],
        disabilityRequired: false,
        minorityRequired: false,
        farmerOnly: false,
        documents: [
            'Aadhaar Card',
            'Land / Pond Ownership or Minimum 7-Year Lease Agreement',
            'Bank Account Passbook',
            'Detailed Project Report (DPR) / Cost Estimation',
            'Caste / Category Certificate (for 60% affirmative subsidy)'
        ],
        applicationProcess: [
            'Visit pmmsy.dof.gov.in or submit your DPR to the District Fisheries Officer (DFO).',
            'Select beneficiary category and project type.',
            'Scrutiny by District Level Committee and State Fisheries Department.',
            'Sanction letter issued with phased DBT subsidy release.'
        ],
        officialLink: 'https://pmmsy.dof.gov.in/',
        portalName: 'PMMSY Official Portal',
        deadline: 'Open Throughout The Year'
    },
    {
        id: 'post-matric-scholarship',
        name: 'Post-Matric Scholarship for SC/ST/OBC Students',
        slug: 'post-matric-scholarship-sc-st-obc',
        category: 'Education',
        categoryColor: '#2563eb',
        icon: '🎓',
        department: 'Department of Social Justice and Empowerment',
        ministry: 'Ministry of Social Justice and Empowerment',
        shortDescription: 'Full tuition fee reimbursement and maintenance allowance for higher education after Class 10.',
        detailedDescription: 'This flagship centrally sponsored scholarship supports Scheduled Caste, Scheduled Tribe, and Other Backward Class students pursuing post-matriculation courses (Class 11, 12, ITI, Diploma, Undergraduate, Postgraduate, and Professional degrees) with complete tuition reimbursement and monthly maintenance stipends.',
        benefitsSummary: '100% Tuition Fee Waiver + Up to ₹20,000/year Allowance',
        detailedBenefits: [
            '100% compulsory tuition and examination fee waiver for government and approved private universities.',
            'Monthly maintenance allowance ranging from ₹550 to ₹1,200 per month depending on degree level.',
            'Special allowance for hostel residents and disabled students.'
        ],
        minAge: 15,
        maxAge: 35,
        incomeLimit: 250000, // ₹2.5 Lakh per annum
        states: ['All'],
        occupations: ['Student', 'Job Seeker'],
        genders: ['All'],
        education: ['School 10th/12th', 'Diploma/ITI', 'Undergraduate', 'Postgraduate', 'PhD'],
        disabilityRequired: false,
        minorityRequired: false,
        farmerOnly: false,
        documents: [
            'Aadhaar Card',
            'Caste Certificate issued by Competent Authority (Tehsildar/SDM)',
            'Annual Family Income Certificate (< ₹2.5 Lakh)',
            'Previous Year Marksheet / Passing Certificate',
            'Current Academic Year Fee Receipt & College Bonafide Certificate',
            'Bank Account Passbook (Aadhaar linked)'
        ],
        applicationProcess: [
            'Visit the National Scholarship Portal (scholarships.gov.in) or state scholarship portal.',
            'Create an NSP OTR (One Time Registration) using Aadhaar and mobile number.',
            'Select "Post-Matric Scholarship" and enter academic roll number and college fee structure.',
            'Upload scanned certificates and submit online.',
            'Institute Nodal Officer (INO) and District Nodal Officer (DNO) verify and release funds via PFMS.'
        ],
        officialLink: 'https://scholarships.gov.in/',
        portalName: 'National Scholarship Portal (NSP)',
        deadline: '31st October (Annual)'
    },
    {
        id: 'csss-scholarship',
        name: 'Central Sector Scheme of Scholarship for College Students',
        slug: 'central-sector-scholarship-college',
        category: 'Education',
        categoryColor: '#2563eb',
        icon: '📚',
        department: 'Department of Higher Education',
        ministry: 'Ministry of Education',
        shortDescription: 'Merit-cum-means scholarship of ₹12,000 to ₹20,000 per year for students in top 20th percentile of Class 12.',
        detailedDescription: 'The Central Sector Scheme of Scholarship for College and University Students aims to provide financial assistance to meritorious students from low-income families to meet day-to-day expenses while pursuing regular undergraduate and postgraduate courses in recognized colleges/universities across India.',
        benefitsSummary: '₹12,000/yr (UG) & ₹20,000/yr (PG) Merit Financial Aid',
        detailedBenefits: [
            '₹12,000 per annum for the first 3 years of Undergraduate study.',
            '₹20,000 per annum for Postgraduate study and 4th/5th year of integrated professional courses.',
            '82,000 fresh scholarships awarded every year equally divided among boys and girls.'
        ],
        minAge: 17,
        maxAge: 25,
        incomeLimit: 450000, // ₹4.5 Lakh per annum
        states: ['All'],
        occupations: ['Student'],
        genders: ['All'],
        education: ['Undergraduate', 'Postgraduate'],
        disabilityRequired: false,
        minorityRequired: false,
        farmerOnly: false,
        documents: [
            'Aadhaar Card',
            'Class 12 Passing Certificate & Marksheet (Top 20th Percentile)',
            'Annual Family Income Certificate (< ₹4.5 Lakhs)',
            'College Admission Confirmation / Fee Receipt',
            'Bank Account Passbook (Aadhaar seeded)'
        ],
        applicationProcess: [
            'Apply online via the National Scholarship Portal at scholarships.gov.in.',
            'Verify candidate board roll number and year of passing Class 12.',
            'Provide bank account details and college affiliation code.',
            'Track your application status using NSP Application ID.'
        ],
        officialLink: 'https://scholarships.gov.in/',
        portalName: 'National Scholarship Portal (NSP)',
        deadline: '30th November (Annual)'
    },
    {
        id: 'aicte-pragati',
        name: 'AICTE Pragati Scholarship Scheme for Girls',
        slug: 'aicte-pragati-scholarship-girls',
        category: 'Education',
        categoryColor: '#2563eb',
        icon: '👩‍🎓',
        department: 'All India Council for Technical Education',
        ministry: 'Ministry of Education',
        shortDescription: '₹50,000 per year grant to support female students pursuing technical degree or diploma courses.',
        detailedDescription: 'AICTE Pragati Scholarship is a pioneering scheme aimed at providing assistance to female students to empower them to pursue technical education (B.Tech, B.E., B.Arch, or Polytechnic Diploma). Up to two girls per family are eligible for ₹50,000 annual aid.',
        benefitsSummary: '₹50,000 per year towards tuition & laptop/books',
        detailedBenefits: [
            '₹50,000 per annum for every year of technical study (up to 4 years for Degree, 3 years for Diploma).',
            'May be utilized towards tuition fee, purchase of laptop, software, books, and competitive exam fees.',
            '10,000 scholarships awarded annually across AICTE-approved institutions.'
        ],
        minAge: 16,
        maxAge: 28,
        incomeLimit: 800000, // ₹8 Lakh per annum
        states: ['All'],
        occupations: ['Student'],
        genders: ['Female'],
        education: ['Diploma/ITI', 'Undergraduate'],
        disabilityRequired: false,
        minorityRequired: false,
        farmerOnly: false,
        documents: [
            'Aadhaar Card',
            'Class 10th and 12th / ITI Marksheet',
            'Annual Family Income Certificate (< ₹8 Lakhs p.a.)',
            'Admission Letter from AICTE-approved Technical College',
            'Tuition Fee Receipt for current academic year',
            'Parent Declaration regarding family children count'
        ],
        applicationProcess: [
            'Register on the National Scholarship Portal (NSP) under AICTE schemes.',
            'Fill academic and bank credentials.',
            'College verification followed by AICTE approval.',
            'Disbursement directly into Aadhaar-linked savings account via PFMS.'
        ],
        officialLink: 'https://www.aicte-india.org/',
        portalName: 'AICTE / NSP Portal',
        deadline: '31st December (Annual)'
    },
    {
        id: 'begum-hazrat-mahal',
        name: 'Begum Hazrat Mahal National Scholarship',
        slug: 'begum-hazrat-mahal-scholarship',
        category: 'Education',
        categoryColor: '#2563eb',
        icon: '🧕',
        department: 'Maulana Azad Education Foundation',
        ministry: 'Ministry of Minority Affairs',
        shortDescription: 'Direct financial scholarship for meritorious minority schoolgirl students studying in Classes 9 to 12.',
        detailedDescription: 'This scholarship encourages minority girl students belonging to Muslim, Christian, Sikh, Buddhist, Jain, and Parsi communities who have secured at least 50% marks in the aggregate in previous exams to continue their schooling and avoid dropout.',
        benefitsSummary: '₹6,000 (Class 9-10) to ₹12,000 (Class 11-12) Stipend',
        detailedBenefits: [
            '₹6,000 per annum for Class 9 and 10 girl students.',
            '₹12,000 per annum for Class 11 and 12 girl students.',
            '100% direct bank transfer with zero deductions.'
        ],
        minAge: 13,
        maxAge: 20,
        incomeLimit: 200000,
        states: ['All'],
        occupations: ['Student'],
        genders: ['Female'],
        education: ['School 10th/12th'],
        disabilityRequired: false,
        minorityRequired: true,
        farmerOnly: false,
        documents: [
            'Aadhaar Card of Student',
            'Self-Declaration of Minority Community',
            'Annual Family Income Certificate (< ₹2 Lakhs)',
            'Previous Class Marksheet with at least 50% marks',
            'School Verification Bonafide Certificate'
        ],
        applicationProcess: [
            'Access scholarships.gov.in under Ministry of Minority Affairs section.',
            'Fill student details and select school name from UDISE directory.',
            'Submit verification form signed by school headmaster/principal.'
        ],
        officialLink: 'https://scholarships.gov.in/',
        portalName: 'National Scholarship Portal (NSP)',
        deadline: '31st October (Annual)'
    },
    {
        id: 'pm-svanidhi',
        name: 'PM SVANidhi (Street Vendor\'s AtmaNirbhar Nidhi)',
        slug: 'pm-svanidhi-scheme',
        category: 'Employment',
        categoryColor: '#059669',
        icon: '🛒',
        department: 'Ministry of Housing and Urban Affairs',
        ministry: 'Ministry of Housing and Urban Affairs (MoHUA)',
        shortDescription: 'Collateral-free micro-credit working capital loans from ₹10,000 up to ₹50,000 with 7% interest subsidy.',
        detailedDescription: 'PM SVANidhi is a special micro-credit facility for urban and semi-urban street vendors and hawkers to resume their livelihoods. It offers an initial loan of ₹10,000, which increases to ₹20,000 and ₹50,000 on timely repayments, along with digital cashback incentives up to ₹1,200 annually.',
        benefitsSummary: 'Collateral-Free Loan up to ₹50,000 + 7% Interest Subsidy',
        detailedBenefits: [
            'Tranche 1: ₹10,000 loan (1 year tenure); Tranche 2: ₹20,000 loan; Tranche 3: ₹50,000 loan.',
            '7% interest subsidy credited directly to bank account on a quarterly basis.',
            'Monthly digital transaction cashback incentives up to ₹100 per month (₹1,200 per year).'
        ],
        minAge: 18,
        maxAge: 65,
        incomeLimit: 500000,
        states: ['All'],
        occupations: ['Worker', 'Self Employed', 'Other'],
        genders: ['All'],
        education: ['All'],
        disabilityRequired: false,
        minorityRequired: false,
        farmerOnly: false,
        documents: [
            'Aadhaar Card',
            'Vending Certificate / Identity Card issued by Urban Local Body (ULB)',
            'Letter of Recommendation (LoR) from Town Vending Committee (if ID is not available)',
            'Bank Passbook Copy'
        ],
        applicationProcess: [
            'Apply online at pmsvanidhi.mohua.gov.in or through any CSC / bank branch.',
            'Verify Aadhaar number with OTP and select your preferred lending institution.',
            'Lender sanctions loan within 7-10 days with direct credit into savings account.'
        ],
        officialLink: 'https://pmsvanidhi.mohua.gov.in/',
        portalName: 'PM SVANidhi Official Portal',
        deadline: 'Open Throughout The Year'
    },
    {
        id: 'pm-mudra',
        name: 'Pradhan Mantri MUDRA Yojana (PMMY)',
        slug: 'pm-mudra-yojana',
        category: 'Business',
        categoryColor: '#ea580c',
        icon: '🏪',
        department: 'Department of Financial Services',
        ministry: 'Ministry of Finance',
        shortDescription: 'Collateral-free institutional loans up to ₹10 Lakhs for micro and small enterprises under Shishu, Kishore, and Tarun.',
        detailedDescription: 'PMMY enables non-corporate, non-farm small/micro enterprises to access credit from commercial banks, RRBs, Small Finance Banks, and NBFCs. The scheme categorizes loans into Shishu (up to ₹50,000), Kishore (₹50,000 to ₹5 Lakh), and Tarun (₹5 Lakh to ₹10 Lakh).',
        benefitsSummary: 'Collateral-Free Business Loan up to ₹10 Lakhs',
        detailedBenefits: [
            'Zero collateral or third-party guarantee required.',
            'Shishu tier: Loans up to ₹50,000 for initial startup equipment & stock.',
            'Kishore tier: Loans ₹50,000 to ₹5 Lakh for business expansion.',
            'Tarun tier: Loans ₹5 Lakh to ₹10 Lakh for mature scaling ventures.'
        ],
        minAge: 18,
        maxAge: 65,
        incomeLimit: 99999999,
        states: ['All'],
        occupations: ['Business Owner', 'Self Employed', 'Job Seeker', 'Homemaker'],
        genders: ['All'],
        education: ['All'],
        disabilityRequired: false,
        minorityRequired: false,
        farmerOnly: false,
        documents: [
            'Aadhaar Card / Voter ID',
            'PAN Card',
            'Proof of Business Address / Trade License / Udyam Registration',
            'Bank Statement for past 6 months',
            'Business Plan / Quotation of Machinery or Stock to be purchased'
        ],
        applicationProcess: [
            'Visit the Udyamimitra portal (udyamimitra.in) or any commercial bank branch.',
            'Submit standard MUDRA application form with quotation of items to purchase.',
            'Bank evaluates business viability and disburses credit via MUDRA RuPay Debit Card.'
        ],
        officialLink: 'https://www.mudra.org.in/',
        portalName: 'MUDRA Official Portal',
        deadline: 'Open Throughout The Year'
    },
    {
        id: 'stand-up-india',
        name: 'Stand-Up India Scheme',
        slug: 'stand-up-india-scheme',
        category: 'Business',
        categoryColor: '#ea580c',
        icon: '🚀',
        department: 'Department of Financial Services / SIDBI',
        ministry: 'Ministry of Finance',
        shortDescription: 'Bank loans between ₹10 Lakh and ₹1 Crore to Scheduled Caste, Scheduled Tribe, and Women entrepreneurs for greenfield ventures.',
        detailedDescription: 'Stand-Up India facilitates bank loans between ₹10 Lakh and ₹1 Crore to at least one SC or ST borrower and at least one woman borrower per bank branch for setting up a greenfield enterprise in manufacturing, services, agri-allied activities, or the trading sector.',
        benefitsSummary: '₹10 Lakh to ₹1 Crore Bank Loan for SC/ST & Women',
        detailedBenefits: [
            'Composite loan covering both Term Loan and Working Capital needs.',
            'Government credit guarantee cover via NCGTC.',
            'Handholding support from SIDBI for pre-loan and post-loan guidance.'
        ],
        minAge: 18,
        maxAge: 65,
        incomeLimit: 99999999,
        states: ['All'],
        occupations: ['Business Owner', 'Self Employed', 'Homemaker'],
        genders: ['Female', 'Male'], // Females of all categories, Males if SC/ST
        education: ['All'],
        disabilityRequired: false,
        minorityRequired: false,
        farmerOnly: false,
        documents: [
            'Aadhaar Card & PAN Card',
            'Caste Certificate (for SC/ST applicants)',
            'Comprehensive Project Feasibility Report (DPR)',
            'Udyam Registration Certificate',
            'Pollution Control Clearance / Municipal NOC (if applicable)'
        ],
        applicationProcess: [
            'Apply through the Stand-Up Mitra portal at standupmitra.in.',
            'Connect with Lead District Managers (LDM) or preferred commercial bank branch.',
            'Participate in credit committee evaluation and project sanction.'
        ],
        officialLink: 'https://www.standupmitra.in/',
        portalName: 'Stand-Up Mitra Portal',
        deadline: 'Open Throughout The Year'
    },
    {
        id: 'pmegp',
        name: 'Prime Minister\'s Employment Generation Programme (PMEGP)',
        slug: 'pmegp-subsidy-scheme',
        category: 'Business',
        categoryColor: '#ea580c',
        icon: '🏭',
        department: 'Khadi and Village Industries Commission (KVIC)',
        ministry: 'Ministry of Micro, Small and Medium Enterprises (MSME)',
        shortDescription: 'Credit-linked capital subsidy of up to 35% on project costs up to ₹50 Lakh for manufacturing and ₹20 Lakh for services.',
        detailedDescription: 'PMEGP is a major credit-linked subsidy program aimed at generating self-employment opportunities through establishment of micro-enterprises in non-farm sectors. Beneficiaries contribute only 5-10% margin money, while the government provides up to 35% subsidy.',
        benefitsSummary: 'Up to 35% Government Subsidy on Loans up to ₹50 Lakh',
        detailedBenefits: [
            'Maximum project cost: ₹50 Lakh for manufacturing units, ₹20 Lakh for service enterprises.',
            'Urban subsidy: 15% (General) and 25% (Special Categories: SC/ST/OBC/Women/Ex-Servicemen).',
            'Rural subsidy: 25% (General) and 35% (Special Categories).',
            'Second loan up to ₹1 Crore with 15% subsidy for existing successful PMEGP units.'
        ],
        minAge: 18,
        maxAge: 65,
        incomeLimit: 99999999,
        states: ['All'],
        occupations: ['Business Owner', 'Job Seeker', 'Self Employed'],
        genders: ['All'],
        education: ['School 10th/12th', 'Diploma/ITI', 'Undergraduate', 'Postgraduate', 'PhD'],
        disabilityRequired: false,
        minorityRequired: false,
        farmerOnly: false,
        documents: [
            'Aadhaar Card and PAN Card',
            'Minimum 8th Pass Certificate (for projects >₹10L in manufacturing / >₹5L in services)',
            'Detailed Project Report (DPR) with financial cash flow analysis',
            'Special Category / Caste Certificate (for 25-35% subsidy rate)',
            'Rural Area Certificate issued by Gram Panchayat (if claiming rural subsidy)'
        ],
        applicationProcess: [
            'Submit online application on the KVIC e-portal at kviconline.gov.in.',
            'Application is scrutinized by District Level Task Force Committee (DLTFC).',
            'Sanctioned file is forwarded to financing bank branch for disbursement.',
            'Mandatory 5-10 days Entrepreneurship Development Programme (EDP) training.'
        ],
        officialLink: 'https://www.kviconline.gov.in/pmegpeportal/',
        portalName: 'KVIC PMEGP Portal',
        deadline: 'Open Throughout The Year'
    },
    {
        id: 'pm-vishwakarma',
        name: 'PM Vishwakarma Scheme',
        slug: 'pm-vishwakarma-yojana',
        category: 'Skill Development',
        categoryColor: '#d97706',
        icon: '🛠️',
        department: 'Ministry of MSME & Skill Development',
        ministry: 'Ministry of MSME & Skill Development',
        shortDescription: '₹15,000 modern toolkit incentive, certified skill training with ₹500/day stipend, and subsidized loans up to ₹3 Lakh @ 5%.',
        detailedDescription: 'PM Vishwakarma provides holistic end-to-end support to traditional artisans and craftspeople working across 18 traditional trades (Carpenters, Blacksmiths, Potters, Sculptors, Cobblers, Tailors, Masons, etc.). It offers recognition via Vishwakarma ID, modern tools grant, and collateral-free enterprise credit.',
        benefitsSummary: '₹15,000 Free Toolkit Grant + ₹3 Lakh Loan @ 5% Concessional Interest',
        detailedBenefits: [
            'PM Vishwakarma Certificate and Digital Identity Card recognition.',
            'Basic training (5-7 days) and Advanced training (15 days) with a stipend of ₹500/day.',
            '₹15,000 e-voucher grant for purchasing modern professional toolkits.',
            'Enterprise loans: 1st tranche up to ₹1 Lakh (18 months), 2nd tranche up to ₹2 Lakh (30 months) at 5% interest.'
        ],
        minAge: 18,
        maxAge: 70,
        incomeLimit: 600000,
        states: ['All'],
        occupations: ['Worker', 'Self Employed', 'Job Seeker', 'Other'],
        genders: ['All'],
        education: ['All'],
        disabilityRequired: false,
        minorityRequired: false,
        farmerOnly: false,
        documents: [
            'Aadhaar Card and Aadhaar-linked Mobile Number',
            'Ration Card / Family Composition Details',
            'Bank Account Passbook Details',
            'Trade declaration of practicing one of 18 traditional craftsmanship trades'
        ],
        applicationProcess: [
            'Visit any Common Services Centre (CSC) with Aadhaar card and Ration card.',
            'Complete biometric fingerprint verification and trade profile creation.',
            'Stage 1 Gram Panchayat / Urban Local Body verification, followed by District Committee approval.',
            'Receive digital PM Vishwakarma ID and toolkit e-voucher code on mobile.'
        ],
        officialLink: 'https://pmvishwakarma.gov.in/',
        portalName: 'PM Vishwakarma Portal',
        deadline: 'Open Throughout The Year'
    },
    {
        id: 'pmkvy',
        name: 'Pradhan Mantri Kaushal Vikas Yojana (PMKVY 4.0)',
        slug: 'pmkvy-skill-development',
        category: 'Skill Development',
        categoryColor: '#d97706',
        icon: '⚙️',
        department: 'National Skill Development Corporation (NSDC)',
        ministry: 'Ministry of Skill Development and Entrepreneurship',
        shortDescription: 'Free industry-certified vocational training in modern job roles with monetary reward, toolkit aid, and placement support.',
        detailedDescription: 'PMKVY 4.0 focuses on on-demand industry skilling including futuristic skills such as Coding, AI, Robotics, Mechatronics, IoT, 3D Printing, Drones, and Green Hydrogen. Training is 100% free with government assessment and recognized NSDC certification.',
        benefitsSummary: '100% Free Government Skill Certification + Placement Support',
        detailedBenefits: [
            'Zero course fees for high-demand technical and service sector courses.',
            'Accredited Government Skill India Certificate valid nationally and abroad.',
            'Direct placement fairs (Rozgar Melas) and apprenticeship matching.'
        ],
        minAge: 15,
        maxAge: 45,
        incomeLimit: 99999999,
        states: ['All'],
        occupations: ['Job Seeker', 'Student', 'Worker', 'Other'],
        genders: ['All'],
        education: ['All'],
        disabilityRequired: false,
        minorityRequired: false,
        farmerOnly: false,
        documents: [
            'Aadhaar Card / Voter ID',
            'Educational Marksheet / School Leaving Certificate',
            'Bank Account Details',
            'Passport Size Photographs'
        ],
        applicationProcess: [
            'Visit skillindiadigital.gov.in or nearest PMKVY Skill Training Centre.',
            'Enroll in your preferred course module (Short Term Training / Recognition of Prior Learning).',
            'Complete hands-on classroom and lab training.',
            'Appear for assessment and download Skill India digital credential.'
        ],
        officialLink: 'https://www.pmkvyofficial.org/',
        portalName: 'Skill India Digital Hub',
        deadline: 'Open Throughout The Year'
    },
    {
        id: 'naps',
        name: 'National Apprenticeship Promotion Scheme (NAPS)',
        slug: 'national-apprenticeship-promotion-scheme',
        category: 'Skill Development',
        categoryColor: '#d97706',
        icon: '👨‍🔧',
        department: 'Directorate General of Training (DGT)',
        ministry: 'Ministry of Skill Development and Entrepreneurship',
        shortDescription: 'Paid industrial on-the-job training with government co-funded stipend up to ₹1,500/month.',
        detailedDescription: 'NAPS connects youth with top private and public industrial enterprises for paid practical apprenticeships. The Government reimburses 25% of the prescribed monthly stipend (up to ₹1,500 per month) directly to the apprentice via DBT.',
        benefitsSummary: 'Direct Monthly Government Stipend Support + Industry Experience',
        detailedBenefits: [
            'Monthly stipend paid directly into your bank account during apprenticeship.',
            'Hands-on technical experience with leading manufacturing and IT companies.',
            'National Apprenticeship Certificate (NAC) upon completion.'
        ],
        minAge: 16,
        maxAge: 35,
        incomeLimit: 99999999,
        states: ['All'],
        occupations: ['Student', 'Job Seeker', 'Worker'],
        genders: ['All'],
        education: ['Diploma/ITI', 'Undergraduate', 'School 10th/12th'],
        disabilityRequired: false,
        minorityRequired: false,
        farmerOnly: false,
        documents: [
            'Aadhaar Card',
            'Educational Certificate (10th/12th/ITI/Diploma/Degree)',
            'Bank Account Details (Aadhaar linked for DBT stipend)',
            'Updated Resume / Bio-data'
        ],
        applicationProcess: [
            'Register candidate profile on apprenticeshipindia.gov.in.',
            'Search and apply for active apprenticeship vacancies across companies.',
            'Sign digital apprenticeship contract online upon selection.'
        ],
        officialLink: 'https://www.apprenticeshipindia.gov.in/',
        portalName: 'Apprenticeship India Portal',
        deadline: 'Open Throughout The Year'
    },
    {
        id: 'pm-jay',
        name: 'Ayushman Bharat PM-JAY',
        slug: 'ayushman-bharat-pmjay',
        category: 'Healthcare',
        categoryColor: '#0284c7',
        icon: '🏥',
        department: 'National Health Authority (NHA)',
        ministry: 'Ministry of Health and Family Welfare',
        shortDescription: 'Cashless free health insurance cover of ₹5 Lakh per family per year for secondary and tertiary hospital care.',
        detailedDescription: 'Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (PM-JAY) is the world’s largest government-funded health assurance scheme. It provides a health cover of ₹5,00,000 per family per year across over 27,000 empanelled public and private hospitals nationwide, covering all pre-existing conditions from Day 1.',
        benefitsSummary: '₹5,00,000 / Year Free Cashless Hospital Treatment',
        detailedBenefits: [
            '₹5 Lakh cover per family per year with no restriction on family size, age, or gender.',
            'Covers 1,949 medical and surgical procedures including oncology, cardiology, neurosurgery, and intensive care.',
            'All medical examination, treatment, consultation, medicines, and post-hospitalization expenses (15 days) included.'
        ],
        minAge: 0,
        maxAge: 100,
        incomeLimit: 250000,
        states: ['All'],
        occupations: ['All'],
        genders: ['All'],
        education: ['All'],
        disabilityRequired: false,
        minorityRequired: false,
        farmerOnly: false,
        documents: [
            'Aadhaar Card',
            'Ration Card / NFSA Proof / SECC Database Match',
            'Active Mobile Number for e-KYC'
        ],
        applicationProcess: [
            'Check eligibility online at beneficiary.nha.gov.in using your mobile number or Ration card.',
            'Complete instant e-KYC using Aadhaar OTP or facial recognition on the Ayushman App.',
            'Download and print your PVC Ayushman Card for cashless hospital admission.'
        ],
        officialLink: 'https://pmjay.gov.in/',
        portalName: 'National Health Authority Portal',
        deadline: 'Open Throughout The Year'
    },
    {
        id: 'pmay-u',
        name: 'Pradhan Mantri Awas Yojana - Urban (PMAY-U)',
        slug: 'pmay-urban-housing',
        category: 'Housing',
        categoryColor: '#6366f1',
        icon: '🏢',
        department: 'Ministry of Housing and Urban Affairs',
        ministry: 'Ministry of Housing and Urban Affairs',
        shortDescription: 'Up to ₹2.67 Lakh upfront interest subsidy on home loans for building, purchasing, or renovating urban houses.',
        detailedDescription: 'PMAY-U addresses urban housing shortage among EWS, LIG, and MIG categories. Under the Credit Linked Subsidy Scheme (CLSS) and Beneficiary Led Construction (BLC), eligible urban families receive significant upfront central subsidies to ensure a pucca house with clean tap water, toilet, and electricity.',
        benefitsSummary: 'Up to ₹2.67 Lakh Upfront Home Loan Interest Subsidy',
        detailedBenefits: [
            'Interest subsidy of 6.5% for EWS/LIG loans up to ₹6 Lakh for a 20-year tenure.',
            'Direct central financial grant of ₹1.5 Lakh for building a home on self-owned land under BLC.',
            'Mandatory female ownership or co-ownership to promote women empowerment.'
        ],
        minAge: 18,
        maxAge: 70,
        incomeLimit: 1000000,
        states: ['All'],
        occupations: ['All'],
        genders: ['All'],
        education: ['All'],
        disabilityRequired: false,
        minorityRequired: false,
        farmerOnly: false,
        documents: [
            'Aadhaar Card of all family members',
            'Income Certificate / Form 16 / Salary Slips',
            'Bank Statement for past 6 months',
            'Affidavit certifying that no family member owns a pucca house in India',
            'Property Documents / Registered Agreement of Sale'
        ],
        applicationProcess: [
            'Apply through your home lending bank (SBI, HDFC, PNB, etc.) or visit pmaymis.gov.in.',
            'Select "Citizen Assessment" and verify Aadhaar.',
            'Enter monthly household income and property details.',
            'Subsidy is credited directly into your loan account, reducing monthly EMI.'
        ],
        officialLink: 'https://pmay-urban.gov.in/',
        portalName: 'PMAY Urban Official Portal',
        deadline: 'Open Throughout The Year'
    },
    {
        id: 'pmay-g',
        name: 'Pradhan Mantri Awas Yojana - Gramin (PMAY-G)',
        slug: 'pmay-gramin-housing',
        category: 'Housing',
        categoryColor: '#6366f1',
        icon: '🏡',
        department: 'Department of Rural Development',
        ministry: 'Ministry of Rural Development',
        shortDescription: 'Direct financial assistance of ₹1.20 Lakh to ₹1.30 Lakh for rural homeless families to construct a pucca house.',
        detailedDescription: 'PMAY-G aims to provide a pucca house with basic amenities to all rural families living in kutcha or dilapidated houses. Beneficiaries are identified using SECC data and Gram Sabha verification, receiving funds directly in installments linked to geotagged construction progress.',
        benefitsSummary: '₹1,20,000 - ₹1,30,000 Direct Construction Grant',
        detailedBenefits: [
            '₹1,20,000 in plain areas and ₹1,30,000 in hilly/Himalayan states and difficult districts.',
            'Additional ₹12,000 financial support for building a household toilet under Swachh Bharat Mission (Gramin).',
            '90 to 95 days of unskilled labor wages under MGNREGA (approx ₹20,000 extra).'
        ],
        minAge: 18,
        maxAge: 100,
        incomeLimit: 150000,
        states: ['All'],
        occupations: ['Worker', 'Farmer', 'Homemaker', 'Other'],
        genders: ['All'],
        education: ['All'],
        disabilityRequired: false,
        minorityRequired: false,
        farmerOnly: false,
        documents: [
            'Aadhaar Card',
            'MGNREGA Job Card Number',
            'Bank Account Passbook (Aadhaar linked)',
            'Gram Sabha Selection Resolution / BPL Certificate'
        ],
        applicationProcess: [
            'Beneficiary names are drawn from the Awaas+ rural priority list verified by Gram Sabha.',
            'Contact your Gram Panchayat Secretary or Block Development Officer (BDO).',
            'Geo-tagged photographs of existing house and each construction stage uploaded on AwaasSoft.',
            'Direct installment release via PFMS upon physical inspection.'
        ],
        officialLink: 'https://pmayg.nic.in/',
        portalName: 'PMAY Gramin Portal',
        deadline: 'Open Throughout The Year'
    },
    {
        id: 'pm-ujjwala',
        name: 'Pradhan Mantri Ujjwala Yojana (PMUY 2.0)',
        slug: 'pm-ujjwala-lpg-scheme',
        category: 'Women & Child',
        categoryColor: '#ec4899',
        icon: '🔥',
        department: 'Ministry of Petroleum and Natural Gas',
        ministry: 'Ministry of Petroleum and Natural Gas',
        shortDescription: 'Free deposit-free LPG gas connection with first cylinder refill and gas stove provided free to adult women of poor households.',
        detailedDescription: 'Ujjwala 2.0 provides clean cooking fuel to rural and deprived women who previously used hazardous fossil fuels. It offers a free LPG connection with no security deposit, along with a free first cylinder and hotplate stove, plus an ongoing ₹300 subsidy per refill cylinder.',
        benefitsSummary: '100% Free LPG Gas Connection + Free Stove & First Refill',
        detailedBenefits: [
            'Zero deposit fee for cylinder, regulator, safety hose, and blue booklet.',
            'First 14.2 kg LPG cylinder refill and double-burner hotplate gas stove completely free of charge.',
            'Targeted subsidy of ₹300 per cylinder for up to 12 refills per year credited directly to bank account.'
        ],
        minAge: 18,
        maxAge: 90,
        incomeLimit: 250000,
        states: ['All'],
        occupations: ['Homemaker', 'Worker', 'Other'],
        genders: ['Female'],
        education: ['All'],
        disabilityRequired: false,
        minorityRequired: false,
        farmerOnly: false,
        documents: [
            'Aadhaar Card of adult female applicant',
            'Ration Card issued by State Government / 14-point declaration',
            'Aadhaar of all adult family members residing in household',
            'Bank Account Passbook Copy'
        ],
        applicationProcess: [
            'Apply online at pmuy.gov.in or visit your nearest LPG distributor (Indane, BharatGas, HP Gas).',
            'Submit 1-page Ujjwala 2.0 application form with ration card and Aadhaar copies.',
            'Distributor performs de-duplication check through NIC/OMC database.',
            'Collect your new gas connection and gas stove from the agency.'
        ],
        officialLink: 'https://www.pmuy.gov.in/',
        portalName: 'PM Ujjwala Official Portal',
        deadline: 'Open Throughout The Year'
    },
    {
        id: 'ssy',
        name: 'Sukanya Samriddhi Yojana (SSY)',
        slug: 'sukanya-samriddhi-yojana',
        category: 'Women & Child',
        categoryColor: '#ec4899',
        icon: '👧',
        department: 'Department of Economic Affairs / India Post',
        ministry: 'Ministry of Finance & Women and Child Development',
        shortDescription: 'High-interest sovereign savings scheme offering 8.2% tax-free returns for the higher education and marriage of the girl child.',
        detailedDescription: 'Sukanya Samriddhi Yojana is a government-backed small savings scheme under "Beti Bachao, Beti Padhao". It can be opened for any girl child from birth up to 10 years of age with a minimum deposit of only ₹250 per year, featuring triple tax exemption (EEE) under Section 80C.',
        benefitsSummary: '8.2% Sovereign Annual Interest + 100% Triple Tax Exemption',
        detailedBenefits: [
            'Guaranteed 8.2% annual interest compounded yearly (highest among government savings schemes).',
            'Complete tax exemption under Section 80C on deposit amount, accrued interest, and maturity withdrawal.',
            'Partial withdrawal of up to 50% allowed for girl child higher education after she turns 18 or passes Class 10.'
        ],
        minAge: 0,
        maxAge: 10,
        incomeLimit: 99999999,
        states: ['All'],
        occupations: ['All'],
        genders: ['Female'],
        education: ['All'],
        disabilityRequired: false,
        minorityRequired: false,
        farmerOnly: false,
        documents: [
            'Birth Certificate of Girl Child',
            'Aadhaar Card and PAN Card of Parent / Legal Guardian',
            'Proof of Residence of Parent/Guardian',
            'Passport-size photographs of daughter and parent'
        ],
        applicationProcess: [
            'Visit any Post Office branch or authorized public/private commercial bank (SBI, PNB, BoB, etc.).',
            'Fill account opening Form SSA-1.',
            'Submit daughter birth certificate and guardian Aadhaar.',
            'Deposit initial amount (min ₹250) and collect official SSY Passbook.'
        ],
        officialLink: 'https://www.indiapost.gov.in/',
        portalName: 'India Post Portal',
        deadline: 'Open Throughout The Year'
    },
    {
        id: 'pmmvy',
        name: 'Pradhan Mantri Matru Vandana Yojana (PMMVY)',
        slug: 'pm-matru-vandana-yojana',
        category: 'Women & Child',
        categoryColor: '#ec4899',
        icon: '🤰',
        department: 'Ministry of Women and Child Development',
        ministry: 'Ministry of Women and Child Development (MoWCD)',
        shortDescription: 'Maternity cash benefit of ₹5,000 to ₹6,000 for pregnant women and lactating mothers for improved health and nutrition.',
        detailedDescription: 'PMMVY provides partial wage compensation and nutritional cash incentives directly into the bank accounts of pregnant women and lactating mothers. For the first child, ₹5,000 is provided in two installments; for a second girl child, an incentive of ₹6,000 is provided in a single installment.',
        benefitsSummary: '₹5,000 - ₹6,000 Direct Cash Transfer for Mothers',
        detailedBenefits: [
            '₹5,000 for first child upon early registration of pregnancy and institutional child immunization.',
            '₹6,000 lump sum for second child if the newborn is a girl child.',
            'Promotes institutional delivery and infant vaccination.'
        ],
        minAge: 19,
        maxAge: 45,
        incomeLimit: 800000,
        states: ['All'],
        occupations: ['Homemaker', 'Worker', 'Self Employed', 'Other'],
        genders: ['Female'],
        education: ['All'],
        disabilityRequired: false,
        minorityRequired: false,
        farmerOnly: false,
        documents: [
            'Aadhaar Card of Mother & Husband',
            'Mother and Child Protection (MCP) Card issued by Anganwadi / Health Centre',
            'Bank Account Passbook of Mother (Aadhaar seeded)',
            'Child Birth Registration Certificate'
        ],
        applicationProcess: [
            'Register at your local Anganwadi Centre (AWC) or visit pmmvy.wcd.gov.in.',
            'Submit Form 1A with MCP card details within 570 days of Last Menstrual Period (LMP).',
            'Payment is released directly via DBT upon completing health checkups.'
        ],
        officialLink: 'https://pmmvy.wcd.gov.in/',
        portalName: 'PMMVY Official Portal',
        deadline: 'Within 570 days of pregnancy'
    },
    {
        id: 'lakhpati-didi',
        name: 'Lakhpati Didi Initiative',
        slug: 'lakhpati-didi-initiative',
        category: 'Women & Child',
        categoryColor: '#ec4899',
        icon: '💎',
        department: 'Deendayal Antyodaya Yojana - NRLM',
        ministry: 'Ministry of Rural Development',
        shortDescription: 'Empowering women in Self-Help Groups (SHGs) with micro-credit, business skills, and market access to earn ₹1 Lakh+ annually.',
        detailedDescription: 'The Lakhpati Didi initiative aims to enable 3 Crore rural women in Self-Help Groups to earn a sustainable annual income of at least ₹1,00,000. Beneficiaries receive entrepreneurship training, drone piloting skills (Drone Didi), digital financial tools, and easy credit linkages.',
        benefitsSummary: 'SHG Micro-Credit Linkage + Training to Earn ₹1 Lakh+/Year',
        detailedBenefits: [
            'Access to Community Investment Funds and collateral-free bank loans through SHG federation.',
            'Specialized skill modules in organic farming, dairy, food processing, LED bulb making, and drone operations.',
            'E-commerce onboarding on GeM and ONDC portals for selling handmade rural products.'
        ],
        minAge: 18,
        maxAge: 60,
        incomeLimit: 300000,
        states: ['All'],
        occupations: ['Homemaker', 'Self Employed', 'Worker'],
        genders: ['Female'],
        education: ['All'],
        disabilityRequired: false,
        minorityRequired: false,
        farmerOnly: false,
        documents: [
            'Aadhaar Card',
            'SHG Membership Proof / SHG Passbook Copy',
            'Bank Account Passbook (Aadhaar linked)',
            'Residence Certificate from Gram Panchayat'
        ],
        applicationProcess: [
            'Contact your village Gram Sangathan / Village Organization (VO) or Block Mission Management Unit (BMMU).',
            'Enroll in your Self Help Group livelihood plan.',
            'Participate in block level vocational training and credit sanctioning.'
        ],
        officialLink: 'https://aajeevika.gov.in/',
        portalName: 'DAY-NRLM Portal',
        deadline: 'Open Throughout The Year'
    },
    {
        id: 'apy',
        name: 'Atal Pension Yojana (APY)',
        slug: 'atal-pension-yojana',
        category: 'Senior Citizens',
        categoryColor: '#8b5cf6',
        icon: '👴',
        department: 'Pension Fund Regulatory and Development Authority (PFRDA)',
        ministry: 'Ministry of Finance',
        shortDescription: 'Government-guaranteed monthly pension of ₹1,000 to ₹5,000 per month from age 60 for unorganized sector workers.',
        detailedDescription: 'Atal Pension Yojana is a flagship social security scheme open to all Indian citizens aged 18 to 40. Under APY, subscribers receive a guaranteed monthly pension of ₹1,000, ₹2,000, ₹3,000, ₹4,000, or ₹5,000 from the age of 60 years based on nominal monthly contributions.',
        benefitsSummary: 'Guaranteed Monthly Pension of ₹1,000 to ₹5,000 for Life',
        detailedBenefits: [
            'Sovereign guaranteed monthly pension backed by the Central Government.',
            'Upon demise of subscriber, pension continues to spouse for life; full pension corpus returned to nominee.',
            'Low monthly contribution: starting as low as ₹42/month for an 18-year-old for ₹1,000 monthly pension.'
        ],
        minAge: 18,
        maxAge: 40,
        incomeLimit: 99999999, // Non-income tax payers
        states: ['All'],
        occupations: ['Worker', 'Self Employed', 'Farmer', 'Homemaker', 'Other'],
        genders: ['All'],
        education: ['All'],
        disabilityRequired: false,
        minorityRequired: false,
        farmerOnly: false,
        documents: [
            'Aadhaar Card',
            'Active Savings Bank Account or Post Office Account',
            'Aadhaar-linked Mobile Number for auto-debit consent'
        ],
        applicationProcess: [
            'Visit the bank or post office branch where you hold your savings account, or enroll via NetBanking.',
            'Fill out the APY subscriber registration form and choose pension amount (₹1k to ₹5k).',
            'Enable auto-debit authorization for monthly, quarterly, or half-yearly contributions.',
            'Download Permanent Retirement Account Number (PRAN) e-card from npscra.nsdl.co.in.'
        ],
        officialLink: 'https://www.npscra.nsdl.co.in/scheme-details.php',
        portalName: 'PFRDA / Protean Portal',
        deadline: 'Open Throughout The Year'
    },
    {
        id: 'nsap-oap',
        name: 'National Social Assistance Programme (NSAP - Old Age Pension)',
        slug: 'nsap-indira-gandhi-old-age-pension',
        category: 'Senior Citizens',
        categoryColor: '#8b5cf6',
        icon: '👵',
        department: 'Ministry of Rural Development',
        ministry: 'Ministry of Rural Development',
        shortDescription: 'Monthly social security non-contributory pension for elderly citizens living below the poverty line.',
        detailedDescription: 'The Indira Gandhi National Old Age Pension Scheme (IGNOAPS) provides monthly non-contributory pensions to senior citizens aged 60 and above belonging to Below Poverty Line (BPL) households, co-funded by the Central and respective State governments.',
        benefitsSummary: 'Monthly Direct Pension of ₹500 to ₹2,500 via DBT',
        detailedBenefits: [
            'Direct monthly pension paid directly into the senior citizen’s bank or post office account.',
            'Central contribution supplemented by state government additions (totaling ₹500 to ₹2,500/month depending on state).',
            'Higher pension rate for super-senior citizens aged 80 and above.'
        ],
        minAge: 60,
        maxAge: 100,
        incomeLimit: 100000,
        states: ['All'],
        occupations: ['Senior Citizen', 'Other'],
        genders: ['All'],
        education: ['All'],
        disabilityRequired: false,
        minorityRequired: false,
        farmerOnly: false,
        documents: [
            'Aadhaar Card',
            'Age Proof (Voter ID / Birth Certificate / Matriculation Certificate)',
            'BPL Ration Card or Socio-Economic Caste Census (SECC) proof',
            'Bank Account Passbook (Aadhaar seeded)'
        ],
        applicationProcess: [
            'Apply online via nsap.nic.in or at the office of your local Block Development Officer (BDO) / Municipal Corporation.',
            'Submit proof of age and BPL card copy.',
            'Verification by Social Welfare Inspector and sanction by Sub-Divisional Magistrate (SDM).'
        ],
        officialLink: 'https://nsap.nic.in/',
        portalName: 'NSAP National Portal',
        deadline: 'Open Throughout The Year'
    },
    {
        id: 'rvy',
        name: 'Rashtriya Vayoshri Yojana (RVY)',
        slug: 'rashtriya-vayoshri-yojana',
        category: 'Senior Citizens',
        categoryColor: '#8b5cf6',
        icon: '🦯',
        department: 'Department of Social Justice and Empowerment',
        ministry: 'Ministry of Social Justice and Empowerment',
        shortDescription: 'Free physical assisted-living aids and assistive devices for senior citizens with age-related disabilities or infirmities.',
        detailedDescription: 'Rashtriya Vayoshri Yojana provides free assistive devices to senior citizens belonging to the BPL category or earning under ₹15,000 per month who suffer from age-related disabilities such as low vision, hearing impairment, tooth loss, or locomotor issues.',
        benefitsSummary: '100% Free Wheelchairs, Hearing Aids, Dentures & Glasses',
        detailedBenefits: [
            'Free distribution of motorized tricycles, wheelchairs, walking sticks, and elbow crutches.',
            'Advanced digital hearing aids, spectacles, tripod walking sticks, and dental dentures.',
            'Organized through specialized district-level health assessment camps.'
        ],
        minAge: 60,
        maxAge: 100,
        incomeLimit: 180000,
        states: ['All'],
        occupations: ['Senior Citizen', 'Other'],
        genders: ['All'],
        education: ['All'],
        disabilityRequired: false,
        minorityRequired: false,
        farmerOnly: false,
        documents: [
            'Aadhaar Card / Senior Citizen Card',
            'BPL Ration Card or Monthly Income Certificate (< ₹15,000/month)',
            'Medical Disability or Impairment Certificate from Government Hospital Doctor'
        ],
        applicationProcess: [
            'Register at ALIMCO assessment camps or through the District Social Welfare Officer (DSWO).',
            'Undergo physical screening by a panel of government doctors.',
            'Receive customized assistive equipment at the public distribution ceremony.'
        ],
        officialLink: 'https://socialjustice.gov.in/',
        portalName: 'ALIMCO / Social Justice Portal',
        deadline: 'Open Throughout The Year'
    },
    {
        id: 'adip-disability',
        name: 'ADIP Scheme (Assistance to Disabled Persons)',
        slug: 'adip-scheme-disabled-persons',
        category: 'Disability Support',
        categoryColor: '#0ea5e9',
        icon: '♿',
        department: 'Department of Empowerment of Persons with Disabilities',
        ministry: 'Ministry of Social Justice and Empowerment',
        shortDescription: 'Free sophisticated aids, motorized tricycles, braille kits, hearing implants, and smart canes for persons with disabilities.',
        detailedDescription: 'The ADIP Scheme assists needy persons with disabilities in procuring durable, sophisticated, and scientifically manufactured aids and appliances to promote their physical, social, and psychological rehabilitation and enhance their economic potential.',
        benefitsSummary: '100% Free Motorized Tricycles, Hearing Implants & Braille Kits',
        detailedBenefits: [
            'Motorized tricycles (worth up to ₹42,000) provided free to severely locomotor-impaired individuals.',
            'Cochlear implant surgery aid up to ₹6 Lakh for hearing-impaired children up to 5 years.',
            'Smart canes, Daisy players, and screen-reading laptops for visually impaired beneficiaries.'
        ],
        minAge: 0,
        maxAge: 100,
        incomeLimit: 250000,
        states: ['All'],
        occupations: ['All'],
        genders: ['All'],
        education: ['All'],
        disabilityRequired: true,
        minorityRequired: false,
        farmerOnly: false,
        documents: [
            'UDID Card (Unique Disability ID) or Disability Certificate (min 40% benchmark disability)',
            'Aadhaar Card',
            'Income Certificate of Family (< ₹2.5 Lakh per annum for 100% grant)',
            'Passport-size photo showing physical disability'
        ],
        applicationProcess: [
            'Apply online on the ALIMCO portal at alimco.in or through the District Disability Rehabilitation Centre (DDRC).',
            'Submit UDID card and doctor requisition for the assistive appliance.',
            'Collection from district distribution camp or registered disability welfare society.'
        ],
        officialLink: 'https://alimco.in/',
        portalName: 'ALIMCO Official Portal',
        deadline: 'Open Throughout The Year'
    },
    {
        id: 'ndfdc-loans',
        name: 'NDFDC Concessional Loans for Divyangjan',
        slug: 'ndfdc-disability-concessional-loans',
        category: 'Disability Support',
        categoryColor: '#0ea5e9',
        icon: '💼',
        department: 'National Divyangjan Finance and Development Corporation',
        ministry: 'Ministry of Social Justice and Empowerment',
        shortDescription: 'Concessional interest rate business and education loans from ₹50,000 up to ₹25 Lakhs for persons with disabilities.',
        detailedDescription: 'NDFDC provides concessional finance to Divyangjan (persons with disability of 40% or more) for setting up self-employment ventures, pursuing professional higher education, or purchasing adapted commercial vehicles at concessional interest rates of 4% to 8% p.a.',
        benefitsSummary: 'Concessional Business Loans up to ₹25 Lakh @ 4% - 8% Interest',
        detailedBenefits: [
            'Loan limits: Micro-finance up to ₹60,000; Self-employment ventures up to ₹25 Lakh; Higher education up to ₹20 Lakh.',
            'Very low interest rate: 4% for loans up to ₹50,000; 5-6% for loans up to ₹5 Lakh.',
            '1% rebate on prompt repayment, plus an additional 0.5% interest rebate for women with disabilities.'
        ],
        minAge: 18,
        maxAge: 65,
        incomeLimit: 99999999,
        states: ['All'],
        occupations: ['Job Seeker', 'Business Owner', 'Self Employed', 'Student'],
        genders: ['All'],
        education: ['All'],
        disabilityRequired: true,
        minorityRequired: false,
        farmerOnly: false,
        documents: [
            'UDID Card or Disability Certificate (40% or more disability)',
            'Aadhaar Card and PAN Card',
            'Viable Business Proposal / DPR / College Admission Letter',
            'Bank Statement for past 6 months'
        ],
        applicationProcess: [
            'Submit application through State Channelizing Agencies (SCAs), Public Sector Banks, or nhfdc.nic.in.',
            'Project evaluation by SCA committee.',
            'Disbursement directly into borrower commercial bank account.'
        ],
        officialLink: 'https://www.nhfdc.nic.in/',
        portalName: 'NDFDC Portal',
        deadline: 'Open Throughout The Year'
    }
];

// All 28 States & 8 Union Territories of India
const INDIAN_STATES = [
    'Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam',
    'Bihar', 'Chandigarh', 'Chhattisgarh', 'Dadra and Nagar Haveli and Daman and Diu',
    'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir',
    'Jharkhand', 'Karnataka', 'Kerala', 'Ladakh', 'Lakshadweep', 'Madhya Pradesh',
    'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha',
    'Puducherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana',
    'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
];

// ==========================================================================
// 2. MULTI-LANGUAGE TRANSLATION DICTIONARIES (EN, HI, PA)
// ==========================================================================
const TRANSLATIONS = {
    en: {
        topBarText: 'Digital Public Service Initiative • Direct Citizen Scheme Discovery',
        verifiedInfo: 'Verified Sources',
        helpCenter: 'Help & FAQs',
        brandTagline: 'The Right Scheme, For The Right Person.',
        navHome: 'Home',
        navFind: 'Find Schemes',
        navCategories: 'Categories',
        navRecommended: 'Recommended',
        navDashboard: 'Dashboard',
        navSaved: 'Saved',
        navTracker: 'Tracker',
        navAbout: 'About Us',
        ctaFindMyScheme: 'Find My Scheme',
        notifTitle: 'Notifications & Alerts',
        markAllRead: 'Mark all read',
        heroBadge: "India's Scheme Discovery Assistant",
        heroTitle1: 'Find Government Schemes',
        heroTitle2: 'Made For You.',
        heroDesc: 'Discover government schemes and benefits based on your age, occupation, income, location and personal needs. Fast, intelligent, and completely free.',
        heroBtnFind: 'Find My Schemes',
        heroBtnExplore: 'Explore Categories',
        checkPoint1: 'Personalized recommendations',
        checkPoint2: 'Simple eligibility checking',
        checkPoint3: 'Multiple categories',
        liveMatchTag: 'Live Match Engine',
        scoreMatchLbl: 'Match',
        excellentMatch: 'Excellent Match',
        goodMatch: 'Good Match',
        possibleMatch: 'Possible Match',
        checkOwnScore: 'Calculate Your Score',
        statSchemes: 'Government Schemes',
        statCategories: 'Beneficiary Categories',
        statFree: 'Free & Open Access',
        statPersonalized: 'Personalized Recommendations',
        howItWorksTag: 'Fast & Transparent Process',
        howItWorksTitle: 'Find the Right Scheme in 4 Simple Steps',
        howItWorksDesc: 'Our intelligent discovery system matches your verified profile with official eligibility guidelines in seconds.',
        step1Title: 'Tell Us About Yourself',
        step1Desc: 'Share your age, state, occupation, and basic household details in a quick 1-minute guided form.',
        step2Title: 'Check Your Eligibility',
        step2Desc: 'Our smart algorithm evaluates criteria across central ministries and state government portals.',
        step3Title: 'Get Personalized Matches',
        step3Desc: 'Review ranked scheme cards with match percentages, exact benefits, and eligibility explanations.',
        step4Title: 'Apply Through Official Source',
        step4Desc: 'Use our document checklist, prepare requirements, and navigate directly to official government portals.',
        wizardBadge: 'Smart Eligibility Checker',
        labelAge: 'Your Age',
        hintAge: 'Enter your current age (between 10 and 100).',
        labelGender: 'Gender',
        hintGender: 'Some schemes are specially reserved for female or transgender citizens.',
        labelState: 'State / Union Territory',
        hintState: 'Select your state of domicile/residence.',
        labelDistrict: 'District / City',
        hintDistrict: 'District helps find localized district-level benefits.',
        labelAreaType: 'Area of Residence',
        labelOccupation: 'What best describes your current occupation?',
        occStudent: 'Student',
        occFarmer: 'Farmer',
        occJobSeeker: 'Job Seeker',
        occBusiness: 'Business Owner',
        occSelfEmployed: 'Self Employed',
        occWorker: 'Worker / Artisan',
        occHomemaker: 'Homemaker',
        occSenior: 'Senior Citizen',
        occOther: 'Other Citizen',
        labelIncome: 'Annual Family Income',
        labelSocialCategory: 'Social Category / Reservation',
        hintSocialCategory: 'Certain affirmative action schemes are reserved for specific social categories.',
        labelEducationLevel: 'Current Education Level',
        labelLandHolding: 'Land Ownership / Holding Size',
        labelBusinessType: 'Business Type / Scale',
        btnBack: 'Back',
        btnContinue: 'Continue',
        btnFindSchemes: 'Find My Schemes ✨',
        categoriesTag: 'Browse by Focus Area',
        categoriesTitle: 'Explore Schemes By Category',
        categoriesDesc: 'Find support designed for different needs, occupations, and stages of life.',
        catEducation: 'Education',
        catAgriculture: 'Agriculture',
        catWomen: 'Women & Child',
        catEmployment: 'Employment',
        catBusiness: 'Business & MSME',
        catSenior: 'Senior Citizens',
        catHousing: 'Housing',
        catHealthcare: 'Healthcare',
        catDisability: 'Disability Support',
        catSkill: 'Skill Development',
        profileActiveTitle: 'Active Discovery Profile',
        btnEditProfile: 'Edit Profile',
        recommendedHeading: 'Your Recommended Schemes',
        sortLbl: 'Sort:',
        emptySchemesTitle: 'No Matching Schemes Found',
        emptySchemesDesc: 'Try loosening your search keywords, switching categories, or editing your profile details.',
        btnResetFilters: 'Reset Filters',
        btnRetakeWizard: 'Update Profile',
        savedTag: 'Bookmarked Benefits',
        savedHeading: 'Saved Schemes',
        savedDesc: 'Quickly access schemes you have shortlisted for application or reference.',
        savedEmptyTitle: 'No Saved Schemes Yet',
        savedEmptyDesc: 'Explore recommended schemes and click the heart icon to save benefits you want to apply for later.',
        btnExploreRecommendations: 'Explore Schemes',
        trackerTag: 'Status & Lifecycle Tracker',
        trackerHeading: 'Application Tracker',
        trackerDesc: 'Monitor and organize your scheme application pipeline from documents to final sanction.',
        btnTrackScheme: 'Track a Scheme',
        trackerEmptyTitle: 'No Applications Tracked Yet',
        trackerEmptyDesc: 'Start tracking a scheme to record your application reference number, document readiness, and approval progress.',
        btnAddFirstApp: 'Add First Scheme to Tracker',
        dashWelcome: 'Welcome back',
        dashWelcomeDesc: 'Here is a centralized summary of your personalized schemes, applications, and latest government updates.',
        btnUpdateProfile: 'Update Profile',
        dashStatSaved: 'Saved Schemes',
        dashStatRecommended: 'Recommended',
        dashStatApplications: 'Applications',
        dashStatCompleted: 'Completed',
        dashWidgetRecTitle: 'Recommended For You',
        btnViewAll: 'View all',
        dashWidgetTrackerTitle: 'Application Tracker',
        btnManage: 'Manage',
        dashWidgetAlertsTitle: 'Recent Alerts',
        faqTag: 'Clarifications & Guidance',
        faqTitle: 'Frequently Asked Questions',
        faqDesc: 'Everything you need to know about discovering, qualifying, and applying for government schemes with Scheme Sathi.',
        faqQ1: 'What is Scheme Sathi?',
        faqA1: 'Scheme Sathi is an intelligent, personalized government scheme discovery platform built to help Indian citizens find relevant central and state welfare programs, scholarships, subsidies, and pensions without scouring dozens of separate government portals.',
        faqQ2: 'How does the eligibility checker work?',
        faqA2: 'Our 5-step wizard captures your verified demographic data—including age, state of residence, occupation, family income bracket, and category. Our client-side algorithm compares your parameters directly against official ministry guidelines in real time.',
        faqQ3: 'How is my match score calculated?',
        faqA3: 'Every scheme is evaluated on a 100-point scale: Occupation criteria (40 pts), Age criteria (15 pts), Annual Family Income criteria (20 pts), State of residence (15 pts), Gender suitability (5 pts), and Specialized conditions (5 pts). Scores between 80–100% are flagged as \'Excellent Matches\'.',
        faqQ4: 'Can I save schemes and track applications?',
        faqA4: 'Yes! You can bookmark any scheme to your \'Saved Schemes\' library. In addition, our \'Application Tracker\' allows you to manage workflow statuses from \'Interested\' and \'Documents Pending\' to \'Under Review\' and \'Approved\', safely stored in your browser\'s localStorage.',
        faqQ5: 'Where do I actually submit my application?',
        faqA5: 'Scheme Sathi provides direct links to authenticated official government portals (such as NSP, PM-KISAN, PMFBY, PMAY, and state scholarship portals) where official applications are submitted. We also provide a document readiness checklist before you apply.',
        faqQ6: 'Is Scheme Sathi completely free?',
        faqA6: 'Yes, 100% free forever. There are zero fees, no subscription requirements, and no paywalls. It is developed as an educational digital public infrastructure initiative to empower citizens.',
        aboutTag: 'Our Vision & Purpose',
        aboutTitle: 'Making Government Schemes Easier To Discover',
        aboutDesc1: 'Scheme Sathi is a student-built engineering project created to bridge the information divide between welfare policies and the everyday citizens who qualify for them.',
        aboutDesc2: 'Every year, thousands of crores in public benefits remain unclaimed simply because citizens are unaware of their eligibility or are intimidated by complex documentation requirements. Scheme Sathi provides a clean, transparent, and user-centric pathway to discovery.',
        pillar1Title: 'Personalized',
        pillar1Desc: 'Algorithms tailored to individual demographic & economic circumstances.',
        pillar2Title: 'Simple',
        pillar2Desc: 'Clean multi-step wizard without bureaucratic legal jargon.',
        pillar3Title: 'Accessible',
        pillar3Desc: 'Supports English, Hindi, and Punjabi with dark & light modes.',
        pillar4Title: '100% Free',
        pillar4Desc: 'Non-profit educational public service project.',
        footerTagline: '"The Right Scheme, For The Right Person."',
        footerDesc: 'A personalized digital discovery platform empowering students, farmers, women, workers, and entrepreneurs across India.',
        footerQuickLinks: 'Quick Links',
        footerCategories: 'Categories',
        footerOfficialGov: 'Official Portals',
        disclaimerTitle: 'Educational Project Disclaimer:',
        footerDisclaimer: 'Scheme Sathi is an educational college project. Scheme information is provided for informational purposes only. Users should verify the latest eligibility, benefits and application procedures through official government sources.',
        keyBenefitLbl: 'Key Scheme Benefit',
        tabOverview: 'Overview',
        tabEligibility: 'Eligibility',
        tabDocuments: 'Document Checklist',
        tabHowToApply: 'How To Apply',
        headingOverview: 'Scheme Overview & Objectives',
        headingEligibility: 'Who Can Apply?',
        headingDocs: 'Documents You May Need',
        subheadingDocs: 'Check off the documents you have ready. Your progress is saved automatically.',
        headingApply: 'Step-by-Step Application Process',
        modalDisclaimer: 'Please verify the latest eligibility criteria and application details on the official government website before applying.',
        btnSaveScheme: 'Save Scheme',
        btnApplyOfficial: 'Apply on Official Website'
    },
    hi: {
        topBarText: 'डिजिटल जन सेवा पहल • नागरिकों के लिए सीधी सरकारी योजना खोज',
        verifiedInfo: 'सत्यापित स्रोत',
        helpCenter: 'सहायता एवं प्रश्न',
        brandTagline: 'सही व्यक्ति के लिए, सही योजना।',
        navHome: 'होम',
        navFind: 'योजनाएं खोजें',
        navCategories: 'श्रेणियां',
        navRecommended: 'अनुशंसित',
        navDashboard: 'डैशबोर्ड',
        navSaved: 'सहेजी गई',
        navTracker: 'ट्रैकर',
        navAbout: 'हमारे बारे में',
        ctaFindMyScheme: 'मेरी योजना खोजें',
        notifTitle: 'सूचनाएं एवं अलर्ट',
        markAllRead: 'सभी पढ़े गए चिह्नित करें',
        heroBadge: 'भारत का स्मार्ट योजना खोज सहायक',
        heroTitle1: 'सरकारी योजनाएं खोजें',
        heroTitle2: 'जो आपके लिए बनी हैं।',
        heroDesc: 'अपनी उम्र, व्यवसाय, आय, राज्य और व्यक्तिगत जरूरतों के अनुसार सही सरकारी योजनाओं और लाभों की तुरंत खोज करें। 100% निःशुल्क और सुरक्षित।',
        heroBtnFind: 'मेरी योजनाएं खोजें',
        heroBtnExplore: 'श्रेणियां देखें',
        checkPoint1: 'व्यक्तिगत सिफारिशें',
        checkPoint2: 'सरल पात्रता जांच',
        checkPoint3: 'अनेक श्रेणियां उपलब्ध',
        liveMatchTag: 'लाइव मैच इंजन',
        scoreMatchLbl: 'मैच',
        excellentMatch: 'उत्कृष्ट मैच',
        goodMatch: 'अच्छा मैच',
        possibleMatch: 'संभावित मैच',
        checkOwnScore: 'अपना स्कोर जांचें',
        statSchemes: 'सरकारी योजनाएं',
        statCategories: 'लाभार्थी श्रेणियां',
        statFree: '100% निःशुल्क एवं खुली पहुंच',
        statPersonalized: 'व्यक्तिगत सिफारिशें',
        howItWorksTag: 'सरल एवं पारदर्शी प्रक्रिया',
        howItWorksTitle: '4 आसान चरणों में सही योजना खोजें',
        howItWorksDesc: 'हमारा स्मार्ट इंजन आपके विवरणों की तुलना आधिकारिक सरकारी दिशानिर्देशों से सेकंडों में करता है।',
        step1Title: 'अपने बारे में बताएं',
        step1Desc: '1 मिनट के आसान फॉर्म में अपनी उम्र, राज्य, व्यवसाय और पारिवारिक आय दर्ज करें।',
        step2Title: 'पात्रता की जांच करें',
        step2Desc: 'हमारा एल्गोरिदम केंद्र और राज्य सरकारों के आधिकारिक नियमों के आधार पर जांच करता है।',
        step3Title: 'सटीक परिणाम पाएं',
        step3Desc: 'मैच स्कोर और विस्तृत लाभों के साथ अपनी पात्र योजनाओं की सूची देखें।',
        step4Title: 'आधिकारिक पोर्टल पर आवेदन करें',
        step4Desc: 'दस्तावेज़ चेकलिस्ट तैयार करें और सीधे आधिकारिक पोर्टल पर जाकर आवेदन करें।',
        wizardBadge: 'स्मार्ट पात्रता चेकर',
        labelAge: 'आपकी उम्र',
        hintAge: 'अपनी वर्तमान उम्र दर्ज करें (10 से 100 वर्ष के बीच)।',
        labelGender: 'लिंग',
        hintGender: 'कुछ योजनाएं विशेष रूप से महिलाओं या ट्रांसजेंडर नागरिकों के लिए हैं।',
        labelState: 'राज्य / केंद्र शासित प्रदेश',
        hintState: 'अपने निवास का राज्य चुनें।',
        labelDistrict: 'ज़िला / शहर',
        hintDistrict: 'ज़िले के अनुसार स्थानीय लाभों की खोज में मदद मिलती है।',
        labelAreaType: 'निवास क्षेत्र',
        labelOccupation: 'आपका वर्तमान व्यवसाय क्या है?',
        occStudent: 'विद्यार्थी',
        occFarmer: 'किसान',
        occJobSeeker: 'नौकरी चाहने वाले',
        occBusiness: 'व्यवसायी / व्यापारी',
        occSelfEmployed: 'स्व-नियोजित',
        occWorker: 'मज़दूर / कारीगर',
        occHomemaker: 'गृहिणी',
        occSenior: 'वरिष्ठ नागरिक',
        occOther: 'अन्य नागरिक',
        labelIncome: 'वार्षिक पारिवारिक आय',
        labelSocialCategory: 'सामाजिक वर्ग / आरक्षण',
        hintSocialCategory: 'कुछ योजनाएं विशिष्ट सामाजिक वर्गों के लिए आरक्षित हैं।',
        labelEducationLevel: 'वर्तमान शिक्षा का स्तर',
        labelLandHolding: 'भूमि स्वामित्व / जोत का आकार',
        labelBusinessType: 'व्यापार का प्रकार / पैमाना',
        btnBack: 'पीछे',
        btnContinue: 'आगे बढ़ें',
        btnFindSchemes: 'मेरी योजनाएं खोजें ✨',
        categoriesTag: 'श्रेणी अनुसार खोजें',
        categoriesTitle: 'श्रेणी के अनुसार योजनाएं देखें',
        categoriesDesc: 'जीवन के विभिन्न पड़ावों और जरूरतों के लिए तैयार सरकारी सहायता पाएं।',
        catEducation: 'शिक्षा',
        catAgriculture: 'कृषि',
        catWomen: 'महिला एवं बाल',
        catEmployment: 'रोजगार',
        catBusiness: 'व्यापार एवं एमएसएमई',
        catSenior: 'वरिष्ठ नागरिक',
        catHousing: 'आवास',
        catHealthcare: 'स्वास्थ्य सेवा',
        catDisability: 'दिव्यांग सहायता',
        catSkill: 'कौशल विकास',
        profileActiveTitle: 'सक्रिय खोज प्रोफ़ाइल',
        btnEditProfile: 'प्रोफ़ाइल बदलें',
        recommendedHeading: 'आपकी अनुशंसित योजनाएं',
        sortLbl: 'क्रमबद्ध:',
        emptySchemesTitle: 'कोई मेल खाती योजना नहीं मिली',
        emptySchemesDesc: 'कृपया खोज शब्द बदलें, अन्य श्रेणी चुनें या प्रोफ़ाइल विवरण अपडेट करें।',
        btnResetFilters: 'फ़िल्टर रीसेट करें',
        btnRetakeWizard: 'प्रोफ़ाइल अपडेट करें',
        savedTag: 'सहेजी गई योजनाएं',
        savedHeading: 'आपकी सहेजी गई योजनाएं',
        savedDesc: 'अपनी पसंदीदा योजनाओं तक तुरंत पहुंचें और बाद में आवेदन करें।',
        savedEmptyTitle: 'अभी तक कोई योजना सहेजी नहीं गई',
        savedEmptyDesc: 'अनुशंसित योजनाएं देखें और दिल के आइकन पर क्लिक करके योजनाओं को सहेजें।',
        btnExploreRecommendations: 'योजनाएं देखें',
        trackerTag: 'आवेदन स्थिति ट्रैकर',
        trackerHeading: 'आवेदन ट्रैकर',
        trackerDesc: 'दस्तावेज़ों से लेकर अंतिम स्वीकृति तक अपने आवेदनों की प्रगति ट्रैक करें।',
        btnTrackScheme: 'योजना ट्रैक करें',
        trackerEmptyTitle: 'कोई आवेदन ट्रैक नहीं किया गया',
        trackerEmptyDesc: 'अपनी आवेदन संदर्भ संख्या और दस्तावेज़ों की स्थिति ट्रैक करने के लिए योजना जोड़ें।',
        btnAddFirstApp: 'पहला आवेदन जोड़ें',
        dashWelcome: 'स्वागत है',
        dashWelcomeDesc: 'यहाँ आपकी व्यक्तिगत योजनाओं, आवेदनों और सरकारी सूचनाओं का संपूर्ण सारांश है।',
        btnUpdateProfile: 'प्रोफ़ाइल अपडेट करें',
        dashStatSaved: 'सहेजी गई योजनाएं',
        dashStatRecommended: 'अनुशंसित योजनाएं',
        dashStatApplications: 'सक्रिय आवेदन',
        dashStatCompleted: 'स्वीकृत / पूर्ण',
        dashWidgetRecTitle: 'आपके लिए अनुशंसित',
        btnViewAll: 'सभी देखें',
        dashWidgetTrackerTitle: 'आवेदन ट्रैकर',
        btnManage: 'प्रबंधन करें',
        dashWidgetAlertsTitle: 'ताज़ा सरकारी अलर्ट',
        faqTag: 'मार्गदर्शन एवं सहायता',
        faqTitle: 'अक्सर पूछे जाने वाले प्रश्न (FAQ)',
        faqDesc: 'स्कीम साथी के माध्यम से सरकारी योजनाओं की खोज और आवेदन से जुड़े सभी सवालों के जवाब।',
        faqQ1: 'स्कीम साथी (Scheme Sathi) क्या है?',
        faqA1: 'स्कीम साथी एक बुद्धिमान और व्यक्तिगत सरकारी योजना खोज मंच है, जो भारतीय नागरिकों को दर्जनों सरकारी वेबसाइटों पर भटके बिना उनके अनुकूल कल्याणकारी योजनाएं खोजने में मदद करता है।',
        faqQ2: 'पात्रता चेकर कैसे काम करता है?',
        faqA2: 'हमारा 5-चरणीय विज़ार्ड आपकी उम्र, राज्य, व्यवसाय और आय एकत्र करता है। हमारा एल्गोरिदम आधिकारिक सरकारी नियमों के अनुसार तुरंत पात्रता की जांच करता है।',
        faqQ3: 'मैच स्कोर कैसे निर्धारित होता है?',
        faqA3: 'प्रत्येक योजना 100 अंकों के पैमाने पर मापी जाती है: व्यवसाय (40 अंक), उम्र (15 अंक), आय (20 अंक), राज्य (15 अंक), लिंग (5 अंक), और अतिरिक्त शर्तें (5 अंक)।',
        faqQ4: 'क्या मैं योजनाएं सहेज और ट्रैक कर सकता हूँ?',
        faqA4: 'हाँ! आप किसी भी योजना को बुकमार्क कर सकते हैं और आवेदन ट्रैकर में स्थिति अपडेट कर सकते हैं। यह डेटा आपके ब्राउज़र में सुरक्षित रहता है।',
        faqQ5: 'आवेदन कहाँ जमा करना होता है?',
        faqA5: 'स्कीम साथी आपको आधिकारिक सरकारी पोर्टलों के सीधे लिंक प्रदान करता है जहाँ आधिकारिक आवेदन जमा किए जाते हैं।',
        faqQ6: 'क्या स्कीम साथी पूरी तरह निःशुल्क है?',
        faqA6: 'हाँ, यह मंच 100% निःशुल्क है। यह एक शैक्षणिक जनसेवा इंजीनियरिंग परियोजना है।',
        aboutTag: 'हमारा उद्देश्य',
        aboutTitle: 'सरकारी योजनाओं की खोज को सरल बनाना',
        aboutDesc1: 'स्कीम साथी एक छात्र-निर्मित कॉलेज प्रोजेक्ट है जिसका उद्देश्य नागरिकों और सरकारी योजनाओं के बीच की दूरी को मिटाना है।',
        aboutDesc2: 'हर साल जागरूकता की कमी और जटिल नियमों के कारण हजारों करोड़ रुपये के लाभ लोगों तक नहीं पहुँच पाते। स्कीम साथी इसे पूरी तरह पारदर्शी बनाता है।',
        pillar1Title: 'व्यक्तिगत',
        pillar1Desc: 'आपकी वास्तविक आर्थिक और सामाजिक स्थिति के अनुसार सटीक सुझाव।',
        pillar2Title: 'सरल',
        pillar2Desc: 'जटिल कानूनी भाषा से मुक्त साफ़ और आसान फॉर्म।',
        pillar3Title: 'सुलभ',
        pillar3Desc: 'अंग्रेजी, हिंदी और पंजाबी में डार्क और लाइट मोड के साथ।',
        pillar4Title: '100% निःशुल्क',
        pillar4Desc: 'नागरिक सशक्तिकरण हेतु गैर-लाभकारी शैक्षणिक परियोजना।',
        footerTagline: '"सही व्यक्ति के लिए, सही योजना।"',
        footerDesc: 'भारत भर के छात्रों, किसानों, महिलाओं, कामगारों और उद्यमियों को सशक्त बनाने वाला डिजिटल मंच।',
        footerQuickLinks: 'त्वरित लिंक',
        footerCategories: 'श्रेणियां',
        footerOfficialGov: 'सरकारी पोर्टल',
        disclaimerTitle: 'शैक्षणिक परियोजना अस्वीकरण:',
        footerDisclaimer: 'स्कीम साथी एक शैक्षणिक कॉलेज प्रोजेक्ट है। योजना की जानकारी केवल सूचनात्मक उद्देश्यों के लिए है। उपयोगकर्ता आधिकारिक स्रोतों से नवीनतम जानकारी सत्यापित करें।',
        keyBenefitLbl: 'मुख्य योजना लाभ',
        tabOverview: 'अवलोकन',
        tabEligibility: 'पात्रता',
        tabDocuments: 'दस्तावेज़ चेकलिस्ट',
        tabHowToApply: 'आवेदन कैसे करें',
        headingOverview: 'योजना अवलोकन एवं उद्देश्य',
        headingEligibility: 'कौन आवेदन कर सकता है?',
        headingDocs: 'ज़रूरी दस्तावेज़',
        subheadingDocs: 'तैयार दस्तावेज़ों पर टिक लगाएं। आपकी प्रगति स्वचालित रूप से सहेजी जाती है।',
        headingApply: 'चरण-दर-चरण आवेदन प्रक्रिया',
        modalDisclaimer: 'कृपया आवेदन करने से पहले आधिकारिक सरकारी वेबसाइट पर नवीनतम पात्रता और विवरण सत्यापित करें।',
        btnSaveScheme: 'योजना सहेजें',
        btnApplyOfficial: 'आधिकारिक वेबसाइट पर जाएं'
    },
    pa: {
        topBarText: 'ਡਿਜੀਟਲ ਲੋਕ ਸੇਵਾ ਪਹਿਲ • ਨਾਗਰਿਕਾਂ ਲਈ ਸਿੱਧੀ ਸਰਕਾਰੀ ਸਕੀਮ ਖੋਜ',
        verifiedInfo: 'ਪ੍ਰਮਾਣਿਤ ਸਰੋਤ',
        helpCenter: 'ਮਦਦ ਅਤੇ ਸਵਾਲ',
        brandTagline: 'ਸਹੀ ਵਿਅਕਤੀ ਲਈ, ਸਹੀ ਸਕੀਮ।',
        navHome: 'ਮੁੱਖ ਪੰਨਾ',
        navFind: 'ਸਕੀਮਾਂ ਖੋਜੋ',
        navCategories: 'ਸ਼੍ਰੇਣੀਆਂ',
        navRecommended: 'ਸਿਫਾਰਸ਼ ਕੀਤੀਆਂ',
        navDashboard: 'ਡੈਸ਼ਬੋਰਡ',
        navSaved: 'ਸੰਭਾਲੀਆਂ',
        navTracker: 'ਟਰੈਕਰ',
        navAbout: 'ਸਾਡੇ ਬਾਰੇ',
        ctaFindMyScheme: 'ਮੇਰੀ ਸਕੀਮ ਲੱਭੋ',
        notifTitle: 'ਸੂਚਨਾਵਾਂ ਅਤੇ ਅਲਰਟ',
        markAllRead: 'ਸਾਰੇ ਪੜ੍ਹੇ ਵਜੋਂ ਚਿੰਨ੍ਹਿਤ ਕਰੋ',
        heroBadge: 'ਭਾਰਤ ਦਾ ਸਕੀਮ ਖੋਜ ਸਹਾਇਕ',
        heroTitle1: 'ਸਰਕਾਰੀ ਸਕੀਮਾਂ ਲੱਭੋ',
        heroTitle2: 'ਜੋ ਤੁਹਾਡੇ ਲਈ ਬਣੀਆਂ ਹਨ।',
        heroDesc: 'ਆਪਣੀ ਉਮਰ, ਕਿੱਤੇ, ਆਮਦਨ, ਸੂਬੇ ਅਤੇ ਨਿੱਜੀ ਲੋੜਾਂ ਅਨੁਸਾਰ ਸਹੀ ਸਰਕਾਰੀ ਸਕੀਮਾਂ ਅਤੇ ਲਾਭਾਂ ਦੀ ਖੋਜ ਕਰੋ। ਪੂਰੀ ਤਰ੍ਹਾਂ ਮੁਫ਼ਤ ਅਤੇ ਸਰਲ।',
        heroBtnFind: 'ਮੇਰੀਆਂ ਸਕੀਮਾਂ ਲੱਭੋ',
        heroBtnExplore: 'ਸ਼੍ਰੇਣੀਆਂ ਵੇਖੋ',
        checkPoint1: 'ਨਿੱਜੀ ਸਿਫਾਰਸ਼ਾਂ',
        checkPoint2: 'ਸਧਾਰਨ ਯੋਗਤਾ ਜਾਂਚ',
        checkPoint3: 'ਕਈ ਸ਼੍ਰੇਣੀਆਂ ਉਪਲਬਧ',
        liveMatchTag: 'ਲਾਈਵ ਮੈਚ ਇੰਜਨ',
        scoreMatchLbl: 'ਮੈਚ',
        excellentMatch: 'ਬਿਹਤਰੀਨ ਮੈਚ',
        goodMatch: 'ਵਧੀਆ ਮੈਚ',
        possibleMatch: 'ਸੰਭਾਵੀ ਮੈਚ',
        checkOwnScore: 'ਆਪਣਾ ਸਕੋਰ ਦੇਖੋ',
        statSchemes: 'ਸਰਕਾਰੀ ਸਕੀਮਾਂ',
        statCategories: 'ਲਾਭਪਾਤਰੀ ਸ਼੍ਰੇਣੀਆਂ',
        statFree: '100% ਮੁਫ਼ਤ ਅਤੇ ਖੁੱਲ੍ਹੀ ਪਹੁੰਚ',
        statPersonalized: 'ਨਿੱਜੀ ਸਿਫਾਰਸ਼ਾਂ',
        howItWorksTag: 'ਸਰਲ ਅਤੇ ਪਾਰਦਰਸ਼ੀ ਤਰੀਕਾ',
        howItWorksTitle: '4 ਆਸਾਨ ਕਦਮਾਂ ਵਿੱਚ ਸਹੀ ਸਕੀਮ ਲੱਭੋ',
        howItWorksDesc: 'ਸਾਡਾ ਸਮਾਰਟ ਸਿਸਟਮ ਤੁਹਾਡੀ ਪ੍ਰੋਫਾਈਲ ਨੂੰ ਸਰਕਾਰੀ ਨਿਯਮਾਂ ਨਾਲ ਸਕਿੰਟਾਂ ਵਿੱਚ ਮਿਲਾਉਂਦਾ ਹੈ।',
        step1Title: 'ਆਪਣੇ ਬਾਰੇ ਦੱਸੋ',
        step1Desc: '1 ਮਿੰਟ ਦੇ ਫਾਰਮ ਵਿੱਚ ਆਪਣੀ ਉਮਰ, ਸੂਬਾ, ਕੰਮ ਅਤੇ ਆਮਦਨ ਦਰਜ ਕਰੋ।',
        step2Title: 'ਯੋਗਤਾ ਦੀ ਜਾਂਚ ਕਰੋ',
        step2Desc: 'ਸਾਡਾ ਐਲਗੋਰਿਦਮ ਕੇਂਦਰੀ ਅਤੇ ਸੂਬਾ ਸਰਕਾਰ ਦੇ ਨਿਯਮਾਂ ਅਨੁਸਾਰ ਜਾਂਚ ਕਰਦਾ ਹੈ।',
        step3Title: 'ਨਿੱਜੀ ਨਤੀਜੇ ਪ੍ਰਾਪਤ ਕਰੋ',
        step3Desc: 'ਮੈਚ ਸਕੋਰ ਅਤੇ ਪੂਰੇ ਲਾਭਾਂ ਨਾਲ ਆਪਣੀਆਂ ਸਕੀਮਾਂ ਦੀ ਸੂਚੀ ਵੇਖੋ।',
        step4Title: 'ਸਰਕਾਰੀ ਪੋਰਟਲ \'ਤੇ ਅਪਲਾਈ ਕਰੋ',
        step4Desc: 'ਦਸਤਾਵੇਜ਼ ਚੈੱਕਲਿਸਟ ਤਿਆਰ ਕਰੋ ਅਤੇ ਸਿੱਧਾ ਅਧਿਕਾਰਤ ਪੋਰਟਲ \'ਤੇ ਅਪਲਾਈ ਕਰੋ।',
        wizardBadge: 'ਸਮਾਰਟ ਯੋਗਤਾ ਚੈਕਰ',
        labelAge: 'ਤੁਹਾਡੀ ਉਮਰ',
        hintAge: 'ਆਪਣੀ ਮੌਜੂਦਾ ਉਮਰ ਦਰਜ ਕਰੋ (10 ਤੋਂ 100 ਸਾਲ ਦੇ ਵਿਚਕਾਰ)।',
        labelGender: 'ਲਿੰਗ',
        hintGender: 'ਕੁਝ ਸਕੀਮਾਂ ਖਾਸ ਤੌਰ \'ਤੇ ਔਰਤਾਂ ਲਈ ਰਾਖਵੀਆਂ ਹਨ।',
        labelState: 'ਸੂਬਾ / ਕੇਂਦਰ ਸ਼ਾਸਤ ਪ੍ਰਦੇਸ਼',
        hintState: 'ਆਪਣਾ ਰਿਹਾਇਸ਼ੀ ਸੂਬਾ ਚੁਣੋ।',
        labelDistrict: 'ਜ਼ਿਲ੍ਹਾ / ਸ਼ਹਿਰ',
        hintDistrict: 'ਜ਼ਿਲ੍ਹੇ ਅਨੁਸਾਰ ਸਥਾਨਕ ਲਾਭ ਲੱਭਣ ਵਿੱਚ ਮਦਦ ਮਿਲਦੀ ਹੈ।',
        labelAreaType: 'ਰਿਹਾਇਸ਼ੀ ਖੇਤਰ',
        labelOccupation: 'ਤੁਹਾਡਾ ਮੌਜੂਦਾ ਕੰਮ-ਧੰਦਾ ਕੀ ਹੈ?',
        occStudent: 'ਵਿਦਿਆਰਥੀ',
        occFarmer: 'ਕਿਸਾਨ',
        occJobSeeker: 'ਨੌਕਰੀ ਦੇ ਚਾਹਵਾਨ',
        occBusiness: 'ਕਾਰੋਬਾਰੀ / ਵਪਾਰੀ',
        occSelfEmployed: 'ਸਵੈ-ਰੁਜ਼ਗਾਰ',
        occWorker: 'ਮਜ਼ਦੂਰ / ਕਾਰੀਗਰ',
        occHomemaker: 'ਘਰੇਲੂ ਔਰਤ',
        occSenior: 'ਬਜ਼ੁਰਗ ਨਾਗਰਿਕ',
        occOther: 'ਹੋਰ ਨਾਗਰਿਕ',
        labelIncome: 'ਸਾਲਾਨਾ ਪਰਿਵਾਰਕ ਆਮਦਨ',
        labelSocialCategory: 'ਸਮਾਜਿਕ ਸ਼੍ਰੇਣੀ / ਰਾਖਵਾਂਕਰਨ',
        hintSocialCategory: 'ਕੁਝ ਸਕੀਮਾਂ ਵਿਸ਼ੇਸ਼ ਸਮਾਜਿਕ ਸ਼੍ਰੇਣੀਆਂ ਲਈ ਰਾਖਵੀਆਂ ਹਨ।',
        labelEducationLevel: 'ਮੌਜੂਦਾ ਪੜ੍ਹਾਈ ਦਾ ਪੱਧਰ',
        labelLandHolding: 'ਜ਼ਮੀਨ ਦੀ ਮਲਕੀਅਤ / ਰਕਬਾ',
        labelBusinessType: 'ਕਾਰੋਬਾਰ ਦੀ ਕਿਸਮ',
        btnBack: 'ਪਿੱਛੇ',
        btnContinue: 'ਅੱਗੇ ਵਧੋ',
        btnFindSchemes: 'ਮੇਰੀਆਂ ਸਕੀਮਾਂ ਲੱਭੋ ✨',
        categoriesTag: 'ਸ਼੍ਰੇਣੀ ਅਨੁਸਾਰ ਖੋਜੋ',
        categoriesTitle: 'ਸ਼੍ਰੇਣੀ ਅਨੁਸਾਰ ਸਕੀਮਾਂ ਵੇਖੋ',
        categoriesDesc: 'ਜ਼ਿੰਦਗੀ ਦੇ ਹਰ ਪੜਾਅ ਅਤੇ ਲੋੜ ਲਈ ਤਿਆਰ ਸਰਕਾਰੀ ਸਹਾਇਤਾ ਪ੍ਰਾਪਤ ਕਰੋ।',
        catEducation: 'ਸਿੱਖਿਆ',
        catAgriculture: 'ਖੇਤੀਬਾੜੀ',
        catWomen: 'ਔਰਤਾਂ ਅਤੇ ਬੱਚੇ',
        catEmployment: 'ਰੁਜ਼ਗਾਰ',
        catBusiness: 'ਕਾਰੋਬਾਰ ਅਤੇ ਐਮਐਸਐਮਈ',
        catSenior: 'ਬਜ਼ੁਰਗ ਨਾਗਰਿਕ',
        catHousing: 'ਰਿਹਾਇਸ਼',
        catHealthcare: 'ਸਿਹਤ ਸੇਵਾਵਾਂ',
        catDisability: 'ਦਿਵਿਆਂਗ ਸਹਾਇਤਾ',
        catSkill: 'ਹੁਨਰ ਵਿਕਾਸ',
        profileActiveTitle: 'ਸਰਗਰਮ ਪ੍ਰੋਫਾਈਲ',
        btnEditProfile: 'ਪ੍ਰੋਫਾਈਲ ਬਦਲੋ',
        recommendedHeading: 'ਤੁਹਾਡੀਆਂ ਸਿਫਾਰਸ਼ ਕੀਤੀਆਂ ਸਕੀਮਾਂ',
        sortLbl: 'ਤਰਤੀਬ:',
        emptySchemesTitle: 'ਕੋਈ ਮੇਲ ਖਾਂਦੀ ਸਕੀਮ ਨਹੀਂ ਮਿਲੀ',
        emptySchemesDesc: 'ਖੋਜ ਸ਼ਬਦ ਬਦਲੋ ਜਾਂ ਆਪਣੀ ਪ੍ਰੋਫਾਈਲ ਅਪਡੇਟ ਕਰੋ।',
        btnResetFilters: 'ਫਿਲਟਰ ਰੀਸੈੱਟ ਕਰੋ',
        btnRetakeWizard: 'ਪ੍ਰੋਫਾਈਲ ਅਪਡੇਟ ਕਰੋ',
        savedTag: 'ਸੰਭਾਲੀਆਂ ਸਕੀਮਾਂ',
        savedHeading: 'ਤੁਹਾਡੀਆਂ ਸੰਭਾਲੀਆਂ ਸਕੀਮਾਂ',
        savedDesc: 'ਆਪਣੀਆਂ ਮਨਪਸੰਦ ਸਕੀਮਾਂ ਨੂੰ ਤੁਰੰਤ ਵੇਖੋ ਅਤੇ ਬਾਅਦ ਵਿੱਚ ਅਪਲਾਈ ਕਰੋ।',
        savedEmptyTitle: 'ਹਾਲੇ ਕੋਈ ਸਕੀਮ ਨਹੀਂ ਸੰਭਾਲੀ',
        savedEmptyDesc: 'ਸਕੀਮਾਂ ਵੇਖੋ ਅਤੇ ਦਿਲ ਦੇ ਨਿਸ਼ਾਨ \'ਤੇ ਕਲਿੱਕ ਕਰਕੇ ਸਕੀਮਾਂ ਨੂੰ ਸੰਭਾਲੋ।',
        btnExploreRecommendations: 'ਸਕੀਮਾਂ ਵੇਖੋ',
        trackerTag: 'ਸਥਿਤੀ ਟਰੈਕਰ',
        trackerHeading: 'ਅਰਜ਼ੀ ਟਰੈਕਰ',
        trackerDesc: 'ਦਸਤਾਵੇਜ਼ਾਂ ਤੋਂ ਲੈ ਕੇ ਮਨਜ਼ੂਰੀ ਤੱਕ ਆਪਣੀਆਂ ਅਰਜ਼ੀਆਂ ਦੀ ਸਥਿਤੀ ਟਰੈਕ ਕਰੋ।',
        btnTrackScheme: 'ਸਕੀਮ ਟਰੈਕ ਕਰੋ',
        trackerEmptyTitle: 'ਕੋਈ ਅਰਜ਼ੀ ਟਰੈਕ ਨਹੀਂ ਕੀਤੀ ਗਈ',
        trackerEmptyDesc: 'ਆਪਣੀ ਅਰਜ਼ੀ ਰੈਫਰੈਂਸ ਨੰਬਰ ਅਤੇ ਦਸਤਾਵੇਜ਼ਾਂ ਦੀ ਸਥਿਤੀ ਟਰੈਕ ਕਰਨ ਲਈ ਸਕੀਮ ਸ਼ਾਮਲ ਕਰੋ।',
        btnAddFirstApp: 'ਪਹਿਲੀ ਅਰਜ਼ੀ ਸ਼ਾਮਲ ਕਰੋ',
        dashWelcome: 'ਜੀ ਆਇਆਂ ਨੂੰ',
        dashWelcomeDesc: 'ਇੱਥੇ ਤੁਹਾਡੀਆਂ ਸਕੀਮਾਂ, ਅਰਜ਼ੀਆਂ ਅਤੇ ਤਾਜ਼ਾ ਸਰਕਾਰੀ ਅਪਡੇਟਾਂ ਦਾ ਵੇਰਵਾ ਹੈ।',
        btnUpdateProfile: 'ਪ੍ਰੋਫਾਈਲ ਅਪਡੇਟ ਕਰੋ',
        dashStatSaved: 'ਸੰਭਾਲੀਆਂ ਸਕੀਮਾਂ',
        dashStatRecommended: 'ਸਿਫਾਰਸ਼ ਕੀਤੀਆਂ',
        dashStatApplications: 'ਅਰਜ਼ੀਆਂ',
        dashStatCompleted: 'ਮੁਕੰਮਲ / ਮਨਜ਼ੂਰ',
        dashWidgetRecTitle: 'ਤੁਹਾਡੇ ਲਈ ਸਿਫਾਰਸ਼ ਕੀਤੀਆਂ',
        btnViewAll: 'ਸਾਰੇ ਵੇਖੋ',
        dashWidgetTrackerTitle: 'ਅਰਜ਼ੀ ਟਰੈਕਰ',
        btnManage: 'ਪ੍ਰਬੰਧ ਕਰੋ',
        dashWidgetAlertsTitle: 'ਤਾਜ਼ਾ ਸਰਕਾਰੀ ਅਲਰਟ',
        faqTag: 'ਅਗਵਾਈ ਅਤੇ ਮਦਦ',
        faqTitle: 'ਅਕਸਰ ਪੁੱਛੇ ਜਾਂਦੇ ਸਵਾਲ (FAQ)',
        faqDesc: 'ਸਕੀਮ ਸਾਥੀ ਦੀ ਵਰਤੋਂ ਅਤੇ ਸਰਕਾਰੀ ਸਕੀਮਾਂ ਸੰਬੰਧੀ ਸਵਾਲਾਂ ਦੇ ਜਵਾਬ।',
        faqQ1: 'ਸਕੀਮ ਸਾਥੀ (Scheme Sathi) ਕੀ ਹੈ?',
        faqA1: 'ਸਕੀਮ ਸਾਥੀ ਇੱਕ ਬੁੱਧੀਮਾਨ ਪਲੇਟਫਾਰਮ ਹੈ ਜੋ ਨਾਗਰਿਕਾਂ ਨੂੰ ਉਹਨਾਂ ਦੇ ਅਨੁਕੂਲ ਸਰਕਾਰੀ ਸਕੀਮਾਂ ਆਸਾਨੀ ਨਾਲ ਲੱਭਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।',
        faqQ2: 'ਯੋਗਤਾ ਚੈਕਰ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ?',
        faqA2: 'ਸਾਡਾ 5 ਕਦਮਾਂ ਵਾਲਾ ਫਾਰਮ ਤੁਹਾਡੀ ਉਮਰ, ਸੂਬਾ, ਕੰਮ ਅਤੇ ਆਮਦਨ ਅਨੁਸਾਰ ਅਸਲ ਸਮੇਂ ਵਿੱਚ ਸਰਕਾਰੀ ਨਿਯਮਾਂ ਨਾਲ ਮਿਲਾਉਂਦਾ ਹੈ।',
        faqQ3: 'ਮੈਚ ਸਕੋਰ ਕਿਵੇਂ ਬਣਦਾ ਹੈ?',
        faqA3: 'ਹਰ ਸਕੀਮ 100 ਅੰਕਾਂ \'ਤੇ ਮਾਪੀ ਜਾਂਦੀ ਹੈ: ਕਿੱਤਾ (40), ਉਮਰ (15), ਆਮਦਨ (20), ਸੂਬਾ (15), ਲਿੰਗ (5), ਅਤੇ ਹੋਰ ਸ਼ਰਤਾਂ (5)।',
        faqQ4: 'ਕੀ ਮੈਂ ਸਕੀਮਾਂ ਸੰਭਾਲ ਅਤੇ ਟਰੈਕ ਕਰ ਸਕਦਾ ਹਾਂ?',
        faqA4: 'ਹਾਂ, ਤੁਸੀਂ ਸਕੀਮਾਂ ਨੂੰ ਬੁੱਕਮਾਰਕ ਕਰ ਸਕਦੇ ਹੋ ਅਤੇ ਅਰਜ਼ੀ ਟਰੈਕਰ ਵਿੱਚ ਸਥਿਤੀ ਅਪਡੇਟ ਕਰ ਸਕਦੇ ਹੋ।',
        faqQ5: 'ਅਰਜ਼ੀ ਕਿੱਥੇ ਜਮ੍ਹਾਂ ਹੁੰਦੀ ਹੈ?',
        faqA5: 'ਸਕੀਮ ਸਾਥੀ ਤੁਹਾਨੂੰ ਅਧਿਕਾਰਤ ਸਰਕਾਰੀ ਵੈੱਬਸਾਈਟਾਂ ਦੇ ਸਿੱਧੇ ਲਿੰਕ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।',
        faqQ6: 'ਕੀ ਸਕੀਮ ਸਾਥੀ ਮੁਫ਼ਤ ਹੈ?',
        faqA6: 'ਹਾਂ, ਇਹ 100% ਮੁਫ਼ਤ ਵਿੱਦਿਅਕ ਪ੍ਰੋਜੈਕਟ ਹੈ।',
        aboutTag: 'ਸਾਡਾ ਮਕਸਦ',
        aboutTitle: 'ਸਰਕਾਰੀ ਸਕੀਮਾਂ ਦੀ ਖੋਜ ਨੂੰ ਸਰਲ ਬਣਾਉਣਾ',
        aboutDesc1: 'ਸਕੀਮ ਸਾਥੀ ਇੱਕ ਵਿਦਿਆਰਥੀ-ਨਿਰਮਿਤ ਪ੍ਰੋਜੈਕਟ ਹੈ ਜੋ ਆਮ ਨਾਗਰਿਕਾਂ ਤੱਕ ਸਰਕਾਰੀ ਲਾਭ ਪਹੁੰਚਾਉਣ ਲਈ ਬਣਾਇਆ ਗਿਆ ਹੈ।',
        aboutDesc2: 'ਹਰ ਸਾਲ ਜਾਣਕਾਰੀ ਦੀ ਘਾਟ ਕਾਰਨ ਹਜ਼ਾਰਾਂ ਕਰੋੜ ਰੁਪਏ ਦੇ ਸਰਕਾਰੀ ਲਾਭ ਬਿਨਾਂ ਵਰਤੇ ਰਹਿ ਜਾਂਦੇ ਹਨ। ਸਕੀਮ ਸਾਥੀ ਇਸ ਨੂੰ ਸਰਲ ਬਣਾਉਂਦਾ ਹੈ।',
        pillar1Title: 'ਨਿੱਜੀ',
        pillar1Desc: 'ਤੁਹਾਡੀ ਆਰਥਿਕ ਅਤੇ ਸਮਾਜਿਕ ਸਥਿਤੀ ਅਨੁਸਾਰ ਸਹੀ ਸਿਫਾਰਸ਼ਾਂ।',
        pillar2Title: 'ਸਰਲ',
        pillar2Desc: 'ਔਖੀ ਕਾਨੂੰਨੀ ਸ਼ਬਦਾਵਲੀ ਤੋਂ ਬਿਨਾਂ ਆਸਾਨ ਫਾਰਮ।',
        pillar3Title: 'ਸੁਲਭ',
        pillar3Desc: 'ਅੰਗਰੇਜ਼ੀ, ਹਿੰਦੀ ਅਤੇ ਪੰਜਾਬੀ ਵਿੱਚ ਡਾਰਕ ਤੇ ਲਾਈਟ ਮੋਡ ਨਾਲ।',
        pillar4Title: '100% ਮੁਫ਼ਤ',
        pillar4Desc: 'ਸਮਾਜਿਕ ਭਲਾਈ ਲਈ ਗੈਰ-ਮੁਨਾਫ਼ਾ ਵਿੱਦਿਅਕ ਪ੍ਰੋਜੈਕਟ।',
        footerTagline: '"ਸਹੀ ਵਿਅਕਤੀ ਲਈ, ਸਹੀ ਸਕੀਮ।"',
        footerDesc: 'ਵਿਦਿਆਰਥੀਆਂ, ਕਿਸਾਨਾਂ, ਔਰਤਾਂ ਅਤੇ ਕਾਰੋਬਾਰੀਆਂ ਨੂੰ ਸ਼ਕਤੀਸ਼ਾਲੀ ਬਣਾਉਣ ਵਾਲਾ ਡਿਜੀਟਲ ਪਲੇਟਫਾਰਮ।',
        footerQuickLinks: 'ਮੁੱਖ ਲਿੰਕ',
        footerCategories: 'ਸ਼੍ਰੇਣੀਆਂ',
        footerOfficialGov: 'ਸਰਕਾਰੀ ਪੋਰਟਲ',
        disclaimerTitle: 'ਵਿੱਦਿਅਕ ਪ੍ਰੋਜੈਕਟ ਬੇਦਾਅਵਾ:',
        footerDisclaimer: 'ਸਕੀਮ ਸਾਥੀ ਇੱਕ ਵਿੱਦਿਅਕ ਕਾਲਜ ਪ੍ਰੋਜੈਕਟ ਹੈ। ਜਾਣਕਾਰੀ ਕੇਵਲ ਜਾਣਕਾਰੀ ਦੇ ਮਕਸਦ ਲਈ ਹੈ। ਵਰਤੋਂਕਾਰ ਅਧਿਕਾਰਤ ਸਰਕਾਰੀ ਸਰੋਤਾਂ ਤੋਂ ਵੇਰਵੇ ਜ਼ਰੂਰ ਤਸਦੀਕ ਕਰਨ।',
        keyBenefitLbl: 'ਮੁੱਖ ਸਕੀਮ ਲਾਭ',
        tabOverview: 'ਵੇਰਵਾ',
        tabEligibility: 'ਯੋਗਤਾ',
        tabDocuments: 'ਦਸਤਾਵੇਜ਼ ਚੈੱਕਲਿਸਟ',
        tabHowToApply: 'ਅਪਲਾਈ ਕਿਵੇਂ ਕਰੀਏ',
        headingOverview: 'ਸਕੀਮ ਵੇਰਵਾ ਅਤੇ ਉਦੇਸ਼',
        headingEligibility: 'ਕੌਣ ਅਪਲਾਈ ਕਰ ਸਕਦਾ ਹੈ?',
        headingDocs: 'ਲੋੜੀਂਦੇ ਦਸਤਾਵੇਜ਼',
        subheadingDocs: 'ਤਿਆਰ ਦਸਤਾਵੇਜ਼ਾਂ \'ਤੇ ਨਿਸ਼ਾਨ ਲਗਾਓ। ਤੁਹਾਡੀ ਪ੍ਰਗਤੀ ਆਪਣੇ-ਆਪ ਸੰਭਾਲੀ ਜਾਂਦੀ ਹੈ।',
        headingApply: 'ਕਦਮ-ਦਰ-ਕਦਮ ਅਪਲਾਈ ਕਰਨ ਦਾ ਤਰੀਕਾ',
        modalDisclaimer: 'ਕਿਰਪਾ ਕਰਕੇ ਅਪਲਾਈ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਸਰਕਾਰੀ ਵੈੱਬਸਾਈਟ \'ਤੇ ਨਵੀਨਤਮ ਜਾਣਕਾਰੀ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ।',
        btnSaveScheme: 'ਸਕੀਮ ਸੰਭਾਲੋ',
        btnApplyOfficial: 'ਸਰਕਾਰੀ ਵੈੱਬਸਾਈਟ \'ਤੇ ਜਾਓ'
    }
};

// ==========================================================================
// 3. APPLICATION STATE MANAGEMENT & CITIZEN USER STORE
// ==========================================================================
const DEFAULT_PROFILE = {
    age: 21,
    gender: 'Male',
    state: 'Maharashtra',
    district: 'Pune',
    areaType: 'Urban',
    occupation: 'Student',
    incomeBracket: '1-2.5L',
    socialCategory: 'OBC',
    education: 'Undergraduate',
    landHolding: 'Small',
    businessType: 'Micro',
    hasDisability: false,
    isMinority: false
};

/**
 * Pre-seeded JavaScript Object of Registered Citizens & Faculty Evaluation Demo Accounts
 */
const DEFAULT_USERS = {
    'citizen@example.com': {
        name: 'Aarav Sharma',
        email: 'citizen@example.com',
        password: 'User@123',
        phone: '+91 98765 43210',
        role: 'Citizen (Student)',
        avatarColor: '#2563eb',
        profile: {
            age: 21,
            gender: 'Male',
            state: 'Maharashtra',
            district: 'Pune',
            areaType: 'Urban',
            occupation: 'Student',
            incomeBracket: '1-2.5L',
            socialCategory: 'OBC',
            education: 'Undergraduate',
            landHolding: 'None',
            businessType: 'None',
            hasDisability: false,
            isMinority: false
        },
        savedSchemeIds: ['post-matric-scholarship', 'aicte-pragati', 'skill-india'],
        registeredAt: '2026-08-15'
    },
    'farmer@example.com': {
        name: 'Rajinder Singh',
        email: 'farmer@example.com',
        password: 'Farmer@123',
        phone: '+91 98123 45678',
        role: 'Citizen (Farmer)',
        avatarColor: '#059669',
        profile: {
            age: 48,
            gender: 'Male',
            state: 'Punjab',
            district: 'Ludhiana',
            areaType: 'Rural',
            occupation: 'Farmer',
            incomeBracket: '1-2.5L',
            socialCategory: 'General',
            education: '10th Pass',
            landHolding: 'Small',
            businessType: 'None',
            hasDisability: false,
            isMinority: false
        },
        savedSchemeIds: ['pm-kisan', 'pmfby', 'pm-kusum', 'kcc'],
        registeredAt: '2026-08-20'
    },
    'admin@schemesathi.gov.in': {
        name: 'Official Admin (Seva Kendra)',
        email: 'admin@schemesathi.gov.in',
        password: 'Admin@123',
        phone: '+91 91234 56789',
        role: 'Administrator',
        avatarColor: '#ea580c',
        profile: {
            age: 35,
            gender: 'Female',
            state: 'Delhi',
            district: 'New Delhi',
            areaType: 'Urban',
            occupation: 'Employed (Govt)',
            incomeBracket: '5-10L',
            socialCategory: 'General',
            education: 'Postgraduate',
            landHolding: 'None',
            businessType: 'None',
            hasDisability: false,
            isMinority: false
        },
        savedSchemeIds: ['ayushman-bharat-pm-jay', 'atal-pension-yojana', 'digital-india-bhashini'],
        registeredAt: '2026-08-01'
    }
};

/**
 * Retrieve the active user database from localStorage with fallback to DEFAULT_USERS object
 */
function getUsersDatabase() {
    try {
        const stored = localStorage.getItem('scheme_sathi_users_db');
        if (stored) {
            const parsed = JSON.parse(stored);
            return Object.assign({}, DEFAULT_USERS, parsed);
        }
    } catch (e) {
        console.error('Error loading users database:', e);
    }
    saveUsersDatabase(DEFAULT_USERS);
    return Object.assign({}, DEFAULT_USERS);
}

/**
 * Persist the active user database to localStorage
 */
function saveUsersDatabase(usersDb) {
    try {
        localStorage.setItem('scheme_sathi_users_db', JSON.stringify(usersDb));
    } catch (e) {
        console.error('Error persisting users database:', e);
    }
}

const DEFAULT_ALERTS = [
    {
        id: 'alt-1',
        title: 'PM-KISAN: 17th Direct Installment Credited',
        time: '2 hours ago',
        unread: true,
        category: 'Agriculture'
    },
    {
        id: 'alt-2',
        title: 'National Scholarship Portal: Extended Deadline for Post-Matric Applications',
        time: 'Yesterday',
        unread: true,
        category: 'Education'
    },
    {
        id: 'alt-3',
        title: 'Ayushman Bharat: Free Healthcare Expanded to All Citizens Aged 70+',
        time: '3 days ago',
        unread: true,
        category: 'Healthcare'
    }
];

const DEFAULT_TRACKER = [
    {
        id: 'trk-1',
        schemeId: 'post-matric-scholarship',
        schemeName: 'Post-Matric Scholarship for SC/ST/OBC Students',
        category: 'Education',
        status: 'Under Review',
        refNo: 'NSP-2026-98124',
        notes: 'Submitted verification documents to college nodal officer.',
        updatedAt: '2026-09-02'
    },
    {
        id: 'trk-2',
        schemeId: 'pm-kisan',
        schemeName: 'PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)',
        category: 'Agriculture',
        status: 'Approved',
        refNo: 'PMK-MH-44021',
        notes: 'Aadhaar e-KYC verified successfully at CSC.',
        updatedAt: '2026-08-28'
    }
];

// Initialize current user session from localStorage if present
const savedCurrentUser = JSON.parse(localStorage.getItem('scheme_sathi_current_user')) || null;

const APP_STATE = {
    currentLanguage: localStorage.getItem('scheme_sathi_lang') || 'en',
    currentTheme: localStorage.getItem('scheme_sathi_theme') || 'light',
    currentUser: savedCurrentUser,
    userProfile: (savedCurrentUser && savedCurrentUser.profile) ? savedCurrentUser.profile : (JSON.parse(localStorage.getItem('scheme_sathi_profile')) || DEFAULT_PROFILE),
    savedSchemeIds: JSON.parse(localStorage.getItem('scheme_sathi_saved')) || (savedCurrentUser && savedCurrentUser.savedSchemeIds ? savedCurrentUser.savedSchemeIds : ['pm-kisan', 'post-matric-scholarship', 'ayushman-bharat-pm-jay']),
    trackerApplications: JSON.parse(localStorage.getItem('scheme_sathi_applications')) || DEFAULT_TRACKER,
    notifications: JSON.parse(localStorage.getItem('scheme_sathi_notifications')) || DEFAULT_ALERTS,
    currentWizardStep: 1,
    activeCategoryFilter: 'All',
    searchQuery: '',
    sortBy: 'bestMatch',
    selectedSchemeForModal: null,
    activeModalTab: 'tabOverview'
};

// ==========================================================================
// 4. SMART MATCHING ENGINE & ELIGIBILITY ALGORITHM
// ==========================================================================

/**
 * Numeric income converter helper
 */
function getIncomeNumericValue(bracket) {
    switch (bracket) {
        case '<1L': return 100000;
        case '1-2.5L': return 250000;
        case '2.5-5L': return 500000;
        case '5-10L': return 1000000;
        case '>10L': return 1500000;
        default: return 250000;
    }
}

/**
 * Calculates Match Score (0 - 100 points) based on User Profile
 * Points Breakdown:
 * - Occupation: 40 points
 * - Age: 15 points
 * - Income: 20 points
 * - State: 15 points
 * - Gender: 5 points
 * - Education / Special criteria: 5 points
 */
function calculateMatchScore(scheme, profile) {
    let score = 0;
    const reasons = [];

    // 1. Occupation Match (40 points)
    if (scheme.occupations.includes('All') || scheme.occupations.includes(profile.occupation)) {
        score += 40;
        reasons.push({ label: `Occupation matches (${profile.occupation})`, points: 40, match: true });
    } else {
        reasons.push({ label: `Occupation criteria (${scheme.occupations.join('/')})`, points: 0, match: false });
    }

    // 2. Age Match (15 points)
    const userAge = parseInt(profile.age, 10) || 0;
    if (userAge >= scheme.minAge && userAge <= scheme.maxAge) {
        score += 15;
        reasons.push({ label: `Age eligible (${userAge} yrs within ${scheme.minAge}-${scheme.maxAge})`, points: 15, match: true });
    } else if (Math.abs(userAge - scheme.minAge) <= 3 || Math.abs(userAge - scheme.maxAge) <= 3) {
        score += 8;
        reasons.push({ label: `Age marginally close to ${scheme.minAge}-${scheme.maxAge}`, points: 8, match: true });
    } else {
        reasons.push({ label: `Age outside range (${scheme.minAge}-${scheme.maxAge})`, points: 0, match: false });
    }

    // 3. Family Income Match (20 points)
    const userIncomeNum = getIncomeNumericValue(profile.incomeBracket);
    if (userIncomeNum <= scheme.incomeLimit) {
        score += 20;
        reasons.push({ label: `Income criteria satisfied (≤ ₹${(scheme.incomeLimit >= 99999999 ? 'No Limit' : scheme.incomeLimit.toLocaleString('en-IN'))})`, points: 20, match: true });
    } else if (userIncomeNum <= scheme.incomeLimit * 1.25) {
        score += 10;
        reasons.push({ label: 'Income marginally above standard limit', points: 10, match: true });
    } else {
        reasons.push({ label: 'Exceeds scheme income ceiling', points: 0, match: false });
    }

    // 4. State / Domicile Match (15 points)
    if (scheme.states.includes('All') || scheme.states.includes(profile.state)) {
        score += 15;
        reasons.push({ label: `State eligible (${profile.state || 'Pan-India'})`, points: 15, match: true });
    } else {
        reasons.push({ label: `Not available in ${profile.state}`, points: 0, match: false });
    }

    // 5. Gender Match (5 points)
    if (scheme.genders.includes('All') || scheme.genders.includes(profile.gender)) {
        score += 5;
        reasons.push({ label: `Gender eligible (${profile.gender})`, points: 5, match: true });
    } else {
        reasons.push({ label: `Specifically reserved for ${scheme.genders.join('/')}`, points: 0, match: false });
    }

    // 6. Education / Special Conditions (5 points)
    let addlMatch = true;
    let addlReason = 'Special criteria satisfied';

    if (scheme.disabilityRequired && !profile.hasDisability) {
        addlMatch = false;
        addlReason = 'Requires benchmark disability certificate (UDID)';
    } else if (scheme.minorityRequired && !profile.isMinority) {
        addlMatch = false;
        addlReason = 'Requires notification from Minority community';
    } else if (scheme.farmerOnly && profile.occupation !== 'Farmer') {
        addlMatch = false;
        addlReason = 'Agricultural landholding records required';
    } else if (scheme.education && scheme.education.length > 0 && !scheme.education.includes('All')) {
        if (profile.education && !scheme.education.includes(profile.education)) {
            addlMatch = false;
            addlReason = `Education level requires: ${scheme.education.join(', ')}`;
        }
    }

    if (addlMatch) {
        score += 5;
        reasons.push({ label: addlReason, points: 5, match: true });
    } else {
        reasons.push({ label: addlReason, points: 0, match: false });
    }

    // Classify score level
    let matchLevel = 'Possible Match';
    let matchClass = 'possible';
    if (score >= 80) {
        matchLevel = 'Excellent Match';
        matchClass = 'excellent';
    } else if (score >= 60) {
        matchLevel = 'Good Match';
        matchClass = 'good';
    }

    return {
        score: Math.min(100, Math.max(0, score)),
        level: matchLevel,
        levelClass: matchClass,
        reasons: reasons
    };
}

/**
 * Returns all schemes evaluated with match score, sorted by highest score
 */
function getRecommendedSchemes(profile) {
    const scoredList = SCHEMES_DATA.map(scheme => {
        const matchResult = calculateMatchScore(scheme, profile);
        return {
            ...scheme,
            matchResult
        };
    });

    // Sort by match score descending
    scoredList.sort((a, b) => b.matchResult.score - a.matchResult.score);
    return scoredList;
}

// ==========================================================================
// 5. UI RENDERING ENGINES (Schemes, Dashboard, Saved, Tracker)
// ==========================================================================

/**
 * Renders the Recommended Schemes grid according to search, category, and sort filters
 */
function renderSchemes() {
    const grid = document.getElementById('schemesGridContainer');
    const emptyState = document.getElementById('schemesEmptyState');
    if (!grid) return;

    let schemes = getRecommendedSchemes(APP_STATE.userProfile);

    // Apply category filter
    if (APP_STATE.activeCategoryFilter && APP_STATE.activeCategoryFilter !== 'All') {
        schemes = schemes.filter(s => s.category.toLowerCase().includes(APP_STATE.activeCategoryFilter.toLowerCase()));
    }

    // Apply search filter
    if (APP_STATE.searchQuery.trim() !== '') {
        const q = APP_STATE.searchQuery.toLowerCase().trim();
        schemes = schemes.filter(s => 
            s.name.toLowerCase().includes(q) ||
            s.category.toLowerCase().includes(q) ||
            s.shortDescription.toLowerCase().includes(q) ||
            s.benefitsSummary.toLowerCase().includes(q) ||
            s.ministry.toLowerCase().includes(q)
        );
    }

    // Apply sorting
    if (APP_STATE.sortBy === 'nameAsc') {
        schemes.sort((a, b) => a.name.localeCompare(b.name));
    } else if (APP_STATE.sortBy === 'category') {
        schemes.sort((a, b) => a.category.localeCompare(b.category));
    } else {
        // default: bestMatch
        schemes.sort((a, b) => b.matchResult.score - a.matchResult.score);
    }

    // Update results count label
    const subheading = document.getElementById('recommendedSubheading');
    if (subheading) {
        subheading.textContent = `We found ${schemes.length} schemes matching your profile criteria.`;
    }

    if (schemes.length === 0) {
        grid.innerHTML = '';
        if (emptyState) emptyState.style.display = 'block';
        return;
    }

    if (emptyState) emptyState.style.display = 'none';
    grid.innerHTML = schemes.map(scheme => renderSchemeCard(scheme, scheme.matchResult)).join('');
}

/**
 * Generates the HTML for a single Scheme Card
 */
function renderSchemeCard(scheme, matchResult) {
    const isSaved = APP_STATE.savedSchemeIds.includes(scheme.id);
    const score = matchResult ? matchResult.score : 85;
    const level = matchResult ? matchResult.level : 'Good Match';
    const levelClass = matchResult ? matchResult.levelClass : 'good';

    // Extract 3 positive reasons
    const topReasons = matchResult ? matchResult.reasons.filter(r => r.match).slice(0, 3) : [];

    return `
        <article class="scheme-card">
            <div class="scheme-card-top">
                <span class="category-badge">${escapeHtml(scheme.category)}</span>
                <button class="card-save-btn ${isSaved ? 'saved' : ''}" onclick="toggleSaveScheme('${scheme.id}')" title="${isSaved ? 'Remove from Saved' : 'Save Scheme'}" aria-label="Save ${escapeHtml(scheme.name)}">
                    <i class="fa-${isSaved ? 'solid' : 'regular'} fa-heart"></i>
                </button>
            </div>

            <h3 class="scheme-card-title" title="${escapeHtml(scheme.name)}">${escapeHtml(scheme.name)}</h3>
            <div class="scheme-card-dept">${escapeHtml(scheme.ministry || scheme.department)}</div>
            <p class="scheme-card-desc">${escapeHtml(scheme.shortDescription)}</p>

            <div class="scheme-benefit-strip">
                <i class="fa-solid fa-coins"></i>
                <span class="benefit-strip-text">${escapeHtml(scheme.benefitsSummary)}</span>
            </div>

            <div class="card-match-section">
                <div class="match-score-header">
                    <span class="match-lbl"><span class="match-rating-badge ${levelClass}">${level}</span></span>
                    <span class="match-percentage">${score}%</span>
                </div>
                <div class="match-track">
                    <div class="match-fill ${levelClass}" style="width: ${score}%;"></div>
                </div>
            </div>

            <div class="eligibility-highlights-list">
                ${topReasons.map(r => `
                    <div class="highlight-row">
                        <i class="fa-solid fa-circle-check"></i>
                        <span>${escapeHtml(r.label)}</span>
                    </div>
                `).join('')}
            </div>

            <div class="scheme-card-footer">
                <button class="btn btn-sm btn-primary w-100" onclick="showSchemeDetails('${scheme.id}')">
                    <i class="fa-solid fa-file-lines"></i> View Details
                </button>
                <button class="btn btn-sm btn-secondary" onclick="toggleSaveScheme('${scheme.id}')">
                    <i class="fa-${isSaved ? 'solid' : 'regular'} fa-heart" style="${isSaved ? 'color:#ef4444;' : ''}"></i>
                    ${isSaved ? 'Saved' : 'Save'}
                </button>
            </div>
        </article>
    `;
}

/**
 * Renders the Saved Schemes View
 */
function renderSavedSchemes() {
    const container = document.getElementById('savedSchemesContainer');
    const emptyState = document.getElementById('savedEmptyState');
    if (!container) return;

    const savedSchemes = SCHEMES_DATA.filter(s => APP_STATE.savedSchemeIds.includes(s.id));

    // Update navbar badge
    const badge = document.getElementById('savedCountBadge');
    if (badge) {
        badge.textContent = savedSchemes.length;
        badge.style.display = savedSchemes.length > 0 ? 'inline-flex' : 'none';
    }

    // Update dashboard saved count
    const dashSaved = document.getElementById('dashSavedCount');
    if (dashSaved) dashSaved.textContent = savedSchemes.length;

    if (savedSchemes.length === 0) {
        container.innerHTML = '';
        if (emptyState) emptyState.style.display = 'block';
        return;
    }

    if (emptyState) emptyState.style.display = 'none';
    container.innerHTML = savedSchemes.map(scheme => {
        const matchResult = calculateMatchScore(scheme, APP_STATE.userProfile);
        return renderSchemeCard(scheme, matchResult);
    }).join('');
}

/**
 * Renders the Application Tracker View
 */
function renderTracker() {
    const container = document.getElementById('applicationsListContainer');
    const emptyState = document.getElementById('trackerEmptyState');
    if (!container) return;

    const apps = APP_STATE.trackerApplications;

    // Update metrics
    const inProgress = apps.filter(a => ['Interested', 'Documents Pending', 'Applied'].includes(a.status)).length;
    const underReview = apps.filter(a => a.status === 'Under Review').length;
    const approved = apps.filter(a => ['Approved', 'Completed'].includes(a.status)).length;

    const ipEl = document.getElementById('trackerInProgressCount');
    const urEl = document.getElementById('trackerUnderReviewCount');
    const apEl = document.getElementById('trackerApprovedCount');
    const ttEl = document.getElementById('trackerTotalCount');
    if (ipEl) ipEl.textContent = inProgress;
    if (urEl) urEl.textContent = underReview;
    if (apEl) apEl.textContent = approved;
    if (ttEl) ttEl.textContent = apps.length;

    // Update Dashboard Tracker count
    const dashApp = document.getElementById('dashApplicationsCount');
    const dashComp = document.getElementById('dashCompletedCount');
    if (dashApp) dashApp.textContent = inProgress + underReview;
    if (dashComp) dashComp.textContent = approved;

    if (apps.length === 0) {
        container.innerHTML = '';
        if (emptyState) emptyState.style.display = 'block';
        return;
    }

    if (emptyState) emptyState.style.display = 'none';

    // 5 Stages of the visual tracking pipeline
    const stages = ['Interested', 'Documents Pending', 'Applied', 'Under Review', 'Approved'];

    container.innerHTML = apps.map(app => {
        const currentStageIdx = stages.indexOf(app.status);
        const statusClass = 'status-' + app.status.toLowerCase().replace(/\s+/g, '-');

        return `
            <div class="app-track-card">
                <div class="app-card-header">
                    <div>
                        <span class="category-badge mb-2">${escapeHtml(app.category)}</span>
                        <h3 class="app-scheme-name">${escapeHtml(app.schemeName)}</h3>
                    </div>
                    <span class="app-status-badge ${statusClass}">${escapeHtml(app.status)}</span>
                </div>

                <!-- Visual Interactive Pipeline -->
                <div class="app-pipeline-container">
                    <div class="pipeline-track-line"></div>
                    ${stages.map((stage, idx) => {
                        const isCompleted = currentStageIdx >= idx;
                        const isCurrent = currentStageIdx === idx;
                        return `
                            <div class="pipeline-stage ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''}" onclick="updateApplicationStatus('${app.id}', '${stage}')" title="Set status to ${stage}">
                                <div class="stage-dot">
                                    ${isCompleted && !isCurrent ? '<i class="fa-solid fa-check"></i>' : (idx + 1)}
                                </div>
                                <span class="stage-label">${stage}</span>
                            </div>
                        `;
                    }).join('')}
                </div>

                <div class="app-card-footer">
                    <div class="app-meta-details">
                        ${app.refNo ? `<strong>Ack No:</strong> ${escapeHtml(app.refNo)} &bull; ` : ''}
                        <span><strong>Notes:</strong> ${escapeHtml(app.notes || 'No notes added')}</span>
                    </div>

                    <div class="app-actions">
                        <select class="form-control" style="width: auto; padding: 6px 12px; font-size: 0.85rem;" onchange="updateApplicationStatus('${app.id}', this.value)">
                            <option value="Interested" ${app.status === 'Interested' ? 'selected' : ''}>Interested</option>
                            <option value="Documents Pending" ${app.status === 'Documents Pending' ? 'selected' : ''}>Documents Pending</option>
                            <option value="Applied" ${app.status === 'Applied' ? 'selected' : ''}>Applied</option>
                            <option value="Under Review" ${app.status === 'Under Review' ? 'selected' : ''}>Under Review</option>
                            <option value="Approved" ${app.status === 'Approved' ? 'selected' : ''}>Approved</option>
                            <option value="Rejected" ${app.status === 'Rejected' ? 'selected' : ''}>Rejected</option>
                            <option value="Completed" ${app.status === 'Completed' ? 'selected' : ''}>Completed</option>
                        </select>
                        <button class="btn btn-sm btn-secondary" onclick="showSchemeDetails('${app.schemeId}')" title="View Details">
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </button>
                        <button class="btn btn-sm btn-secondary" onclick="deleteTrackerItem('${app.id}')" title="Remove tracking">
                            <i class="fa-solid fa-trash-can" style="color: var(--danger);"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

/**
 * Updates application status in tracker
 */
function updateApplicationStatus(appId, newStatus) {
    const app = APP_STATE.trackerApplications.find(a => a.id === appId);
    if (app) {
        app.status = newStatus;
        app.updatedAt = new Date().toISOString().split('T')[0];
        localStorage.setItem('scheme_sathi_applications', JSON.stringify(APP_STATE.trackerApplications));
        renderTracker();
        renderDashboard();
        showToast(`Application status updated to "${newStatus}"`, 'info');
    }
}

/**
 * Removes an application from the tracker
 */
function deleteTrackerItem(appId) {
    APP_STATE.trackerApplications = APP_STATE.trackerApplications.filter(a => a.id !== appId);
    localStorage.setItem('scheme_sathi_applications', JSON.stringify(APP_STATE.trackerApplications));
    renderTracker();
    renderDashboard();
    showToast('Application removed from tracker', 'info');
}

/**
 * Renders the User Dashboard View
 */
function renderDashboard() {
    const user = APP_STATE.userProfile;

    // Update header chips
    const occEl = document.getElementById('dashUserOcc');
    const ageEl = document.getElementById('dashUserAge');
    const stateEl = document.getElementById('dashUserState');
    const incEl = document.getElementById('dashUserIncome');
    if (occEl) occEl.textContent = user.occupation;
    if (ageEl) ageEl.textContent = `${user.age} yrs`;
    if (stateEl) stateEl.textContent = user.state;
    if (incEl) incEl.textContent = user.incomeBracket;

    // Profile summary card in Recommendations
    const sumOcc = document.getElementById('summaryOccupation');
    const sumAge = document.getElementById('summaryAge');
    const sumGender = document.getElementById('summaryGender');
    const sumState = document.getElementById('summaryState');
    const sumIncome = document.getElementById('summaryIncome');
    if (sumOcc) sumOcc.textContent = user.occupation;
    if (sumAge) sumAge.textContent = `${user.age} Years`;
    if (sumGender) sumGender.textContent = user.gender;
    if (sumState) sumState.textContent = user.state;
    if (sumIncome) sumIncome.textContent = user.incomeBracket;

    // Recommended Count
    const recommendedList = getRecommendedSchemes(user);
    const recCountEl = document.getElementById('dashRecommendedCount');
    if (recCountEl) recCountEl.textContent = recommendedList.length;

    // Render Dashboard Mini-Recommendations (Top 4)
    const dashRecList = document.getElementById('dashRecList');
    if (dashRecList) {
        const top4 = recommendedList.slice(0, 4);
        dashRecList.innerHTML = top4.map(s => `
            <div style="display:flex; justify-content:space-between; align-items:center; padding:12px 0; border-bottom:1px solid var(--border-subtle); gap:12px;">
                <div style="display:flex; align-items:center; gap:12px;">
                    <div style="font-size:1.4rem; width:36px; height:36px; border-radius:var(--radius-sm); background-color:var(--bg-subtle); display:flex; align-items:center; justify-content:center;">${s.icon || '🏛️'}</div>
                    <div>
                        <strong style="font-size:0.92rem; display:block; cursor:pointer;" onclick="showSchemeDetails('${s.id}')">${escapeHtml(s.name)}</strong>
                        <span style="font-size:0.75rem; color:var(--text-muted);">${escapeHtml(s.category)} &bull; ${escapeHtml(s.benefitsSummary)}</span>
                    </div>
                </div>
                <div style="text-align:right; flex-shrink:0;">
                    <span class="match-rating-badge ${s.matchResult.levelClass}" style="display:inline-block; font-size:0.72rem;">${s.matchResult.score}%</span>
                    <button class="text-btn" onclick="showSchemeDetails('${s.id}')" style="display:block; margin-top:2px;">Details</button>
                </div>
            </div>
        `).join('');
    }

    // Render Dashboard Tracker Snippet
    const dashTrackerList = document.getElementById('dashTrackerList');
    if (dashTrackerList) {
        if (APP_STATE.trackerApplications.length === 0) {
            dashTrackerList.innerHTML = `
                <div style="text-align:center; padding:20px; color:var(--text-muted);">
                    <p style="font-size:0.88rem;">No schemes tracked yet.</p>
                    <button class="text-btn mt-2" onclick="openAddToTrackerModal()">+ Track your first application</button>
                </div>
            `;
        } else {
            dashTrackerList.innerHTML = APP_STATE.trackerApplications.slice(0, 3).map(app => `
                <div style="display:flex; justify-content:space-between; align-items:center; padding:10px 0; border-bottom:1px solid var(--border-subtle);">
                    <div>
                        <strong style="font-size:0.88rem; display:block;">${escapeHtml(app.schemeName)}</strong>
                        <small style="color:var(--text-muted);">${app.refNo ? 'Ref: ' + escapeHtml(app.refNo) : 'Status updated'}</small>
                    </div>
                    <span class="app-status-badge status-${app.status.toLowerCase().replace(/\s+/g, '-')}" style="font-size:0.72rem;">${escapeHtml(app.status)}</span>
                </div>
            `).join('');
        }
    }

    // Render Dashboard Recent Alerts
    const dashAlertsList = document.getElementById('dashAlertsList');
    if (dashAlertsList) {
        dashAlertsList.innerHTML = APP_STATE.notifications.slice(0, 3).map(alt => `
            <div style="display:flex; gap:10px; padding:10px 0; border-bottom:1px solid var(--border-subtle); align-items:flex-start;">
                <i class="fa-solid fa-bell" style="color:var(--accent-500); margin-top:3px; font-size:0.85rem;"></i>
                <div style="flex:1;">
                    <p style="font-size:0.85rem; font-weight:600; line-height:1.35; margin-bottom:2px;">${escapeHtml(alt.title)}</p>
                    <small style="color:var(--text-muted); font-size:0.72rem;">${escapeHtml(alt.time)}</small>
                </div>
            </div>
        `).join('');
    }
}

// ==========================================================================
// 6. SCHEME DETAILS MODAL & INTERACTIVE DOCUMENT CHECKLIST
// ==========================================================================

/**
 * Displays the scheme details modal with all rich metadata & document checklist
 */
function showSchemeDetails(schemeId) {
    const scheme = SCHEMES_DATA.find(s => s.id === schemeId);
    if (!scheme) return;

    APP_STATE.selectedSchemeForModal = scheme;
    const matchResult = calculateMatchScore(scheme, APP_STATE.userProfile);

    // Update Modal Headers
    const modal = document.getElementById('schemeModalBackdrop');
    const catBadge = document.getElementById('modalCategoryBadge');
    const matchBadge = document.getElementById('modalMatchBadge');
    const title = document.getElementById('modalSchemeTitle');
    const shortDesc = document.getElementById('modalShortDesc');
    const benefitVal = document.getElementById('modalBenefitValue');

    if (catBadge) catBadge.textContent = scheme.category;
    if (matchBadge) {
        matchBadge.className = `match-rating-badge ${matchResult.levelClass}`;
        matchBadge.textContent = `${matchResult.score}% Match • ${matchResult.level}`;
    }
    if (title) title.textContent = scheme.name;
    if (shortDesc) shortDesc.textContent = scheme.shortDescription;
    if (benefitVal) benefitVal.textContent = scheme.benefitsSummary;

    // Match Reasons Breakdown
    const breakdown = document.getElementById('modalMatchBreakdown');
    if (breakdown) {
        breakdown.innerHTML = `
            <h5><i class="fa-solid fa-chart-simple" style="color:var(--primary-600);"></i> Eligibility Score Breakdown (${matchResult.score}/100)</h5>
            <div class="breakdown-chips-wrap">
                ${matchResult.reasons.map(r => `
                    <span class="breakdown-chip ${r.match ? 'matched' : 'unmatched'}">
                        <i class="fa-solid fa-${r.match ? 'check' : 'xmark'}"></i>
                        ${escapeHtml(r.label)} (+${r.points} pts)
                    </span>
                `).join('')}
            </div>
        `;
    }

    // Tab 1: Overview
    const detailedDesc = document.getElementById('modalDetailedDesc');
    if (detailedDesc) detailedDesc.textContent = scheme.detailedDescription;

    const quickAttrs = document.getElementById('modalQuickAttrs');
    if (quickAttrs) {
        quickAttrs.innerHTML = `
            <div class="attr-box"><span class="attr-lbl">Ministry</span><span class="attr-val">${escapeHtml(scheme.ministry || 'Government of India')}</span></div>
            <div class="attr-box"><span class="attr-lbl">Department</span><span class="attr-val">${escapeHtml(scheme.department || 'Central Government')}</span></div>
            <div class="attr-box"><span class="attr-lbl">Age Group</span><span class="attr-val">${scheme.minAge} to ${scheme.maxAge} Years</span></div>
            <div class="attr-box"><span class="attr-lbl">Application Deadline</span><span class="attr-val">${escapeHtml(scheme.deadline || 'Open Throughout The Year')}</span></div>
        `;
    }

    // Tab 2: Eligibility
    const eligList = document.getElementById('modalEligibilityList');
    if (eligList) {
        eligList.innerHTML = `
            <li><i class="fa-solid fa-circle-check"></i> <strong>Occupations:</strong> ${scheme.occupations.join(', ')}</li>
            <li><i class="fa-solid fa-circle-check"></i> <strong>Age Limit:</strong> Between ${scheme.minAge} and ${scheme.maxAge} years</li>
            <li><i class="fa-solid fa-circle-check"></i> <strong>Income Limit:</strong> ${scheme.incomeLimit >= 99999999 ? 'No specific ceiling' : 'Up to ₹' + scheme.incomeLimit.toLocaleString('en-IN') + ' per year'}</li>
            <li><i class="fa-solid fa-circle-check"></i> <strong>Applicable States:</strong> ${scheme.states.join(', ')}</li>
            <li><i class="fa-solid fa-circle-check"></i> <strong>Gender:</strong> ${scheme.genders.join(', ')}</li>
        `;
    }

    // Tab 3: Interactive Document Checklist
    renderDocumentChecklist(scheme);

    // Tab 4: Application Process
    const processSteps = document.getElementById('modalProcessSteps');
    if (processSteps) {
        processSteps.innerHTML = scheme.applicationProcess.map((step, idx) => `
            <div class="process-step-item">
                <div class="step-order-badge">${idx + 1}</div>
                <div class="step-order-text">${escapeHtml(step)}</div>
            </div>
        `).join('');
    }

    // Official Website Link
    const officialBtn = document.getElementById('modalOfficialLinkBtn');
    if (officialBtn) {
        officialBtn.href = scheme.officialLink;
        officialBtn.innerHTML = `Apply on ${escapeHtml(scheme.portalName || 'Official Website')} <i class="fa-solid fa-arrow-up-right-from-square"></i>`;
    }

    // Save button state in modal
    updateModalSaveButton(scheme.id);

    // Default to Overview tab
    switchModalTab('tabOverview');

    // Open Modal
    if (modal) {
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
}

/**
 * Renders the interactive document checklist inside the modal
 */
function renderDocumentChecklist(scheme) {
    const listContainer = document.getElementById('modalChecklistItems');
    if (!listContainer) return;

    // Retrieve saved checked states from localStorage
    const storageKey = `scheme_checklist_${scheme.id}`;
    const savedStates = JSON.parse(localStorage.getItem(storageKey)) || {};

    listContainer.innerHTML = scheme.documents.map((doc, idx) => {
        const isChecked = !!savedStates[idx];
        return `
            <label class="doc-check-item ${isChecked ? 'checked' : ''}" onclick="toggleDocumentItem('${scheme.id}', ${idx})">
                <input type="checkbox" class="doc-checkbox" ${isChecked ? 'checked' : ''} onchange="event.stopPropagation()">
                <span class="doc-name">${escapeHtml(doc)}</span>
            </label>
        `;
    }).join('');

    updateDocumentChecklistProgress(scheme);
}

/**
 * Toggles a document checked state and saves in localStorage
 */
function toggleDocumentItem(schemeId, docIndex) {
    const scheme = SCHEMES_DATA.find(s => s.id === schemeId);
    if (!scheme) return;

    const storageKey = `scheme_checklist_${schemeId}`;
    const savedStates = JSON.parse(localStorage.getItem(storageKey)) || {};

    // Toggle
    savedStates[docIndex] = !savedStates[docIndex];
    localStorage.setItem(storageKey, JSON.stringify(savedStates));

    renderDocumentChecklist(scheme);
}

/**
 * Updates the document checklist progress bar and badge
 */
function updateDocumentChecklistProgress(scheme) {
    const storageKey = `scheme_checklist_${scheme.id}`;
    const savedStates = JSON.parse(localStorage.getItem(storageKey)) || {};

    const total = scheme.documents.length;
    let checkedCount = 0;
    for (let i = 0; i < total; i++) {
        if (savedStates[i]) checkedCount++;
    }

    const pct = total > 0 ? Math.round((checkedCount / total) * 100) : 0;

    const badge = document.getElementById('checklistStatusBadge');
    const fill = document.getElementById('checklistProgressFill');
    if (badge) badge.textContent = `${checkedCount} / ${total} Ready (${pct}%)`;
    if (fill) fill.style.width = `${pct}%`;
}

/**
 * Switches tab panels in the Scheme Details Modal
 */
function switchModalTab(tabId) {
    APP_STATE.activeModalTab = tabId;

    // Update buttons
    const buttons = document.querySelectorAll('.modal-tab-btn');
    buttons.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
    });

    // Update panels
    const panels = document.querySelectorAll('.tab-panel');
    panels.forEach(p => {
        p.classList.toggle('active', p.id === tabId);
    });
}

/**
 * Closes the Scheme Details Modal
 */
function closeSchemeModal(event) {
    if (event && event.target && event.target.id !== 'schemeModalBackdrop') return;
    const modal = document.getElementById('schemeModalBackdrop');
    if (modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }
}

/**
 * Updates the save button text and heart in the details modal
 */
function updateModalSaveButton(schemeId) {
    const btn = document.getElementById('modalSaveBtn');
    if (!btn) return;

    const isSaved = APP_STATE.savedSchemeIds.includes(schemeId);
    btn.innerHTML = `<i class="fa-${isSaved ? 'solid' : 'regular'} fa-heart" style="${isSaved ? 'color:#ef4444;' : ''}"></i> ${isSaved ? 'Saved' : 'Save Scheme'}`;
}

/**
 * Toggles save from inside the details modal
 */
function toggleSaveFromModal() {
    if (APP_STATE.selectedSchemeForModal) {
        toggleSaveScheme(APP_STATE.selectedSchemeForModal.id);
        updateModalSaveButton(APP_STATE.selectedSchemeForModal.id);
    }
}

/**
 * Adds the scheme currently in the modal to the tracker
 */
function trackFromModal() {
    if (APP_STATE.selectedSchemeForModal) {
        const s = APP_STATE.selectedSchemeForModal;
        closeSchemeModal();
        openAddToTrackerModal(s.id);
    }
}

// ==========================================================================
// 7. SAVED SCHEMES MANAGEMENT (Save, Remove, Toggle)
// ==========================================================================

function toggleSaveScheme(schemeId) {
    const idx = APP_STATE.savedSchemeIds.indexOf(schemeId);
    if (idx > -1) {
        APP_STATE.savedSchemeIds.splice(idx, 1);
        showToast('Scheme removed from saved', 'info');
    } else {
        APP_STATE.savedSchemeIds.push(schemeId);
        showToast('Scheme saved successfully!', 'success');
    }

    localStorage.setItem('scheme_sathi_saved', JSON.stringify(APP_STATE.savedSchemeIds));

    // If a citizen is logged in, sync saved schemes to their user account record
    if (APP_STATE.currentUser) {
        APP_STATE.currentUser.savedSchemeIds = [...APP_STATE.savedSchemeIds];
        localStorage.setItem('scheme_sathi_current_user', JSON.stringify(APP_STATE.currentUser));
        const usersDb = getUsersDatabase();
        if (usersDb[APP_STATE.currentUser.email]) {
            usersDb[APP_STATE.currentUser.email].savedSchemeIds = [...APP_STATE.savedSchemeIds];
            saveUsersDatabase(usersDb);
        }
    }

    renderSchemes();
    renderSavedSchemes();
    renderDashboard();
    renderUserAuth();
}

// ==========================================================================
// 8. APPLICATION TRACKER MODAL & ACTIONS
// ==========================================================================

function openAddToTrackerModal(presetSchemeId = null) {
    const modal = document.getElementById('trackerModalBackdrop');
    const select = document.getElementById('trackerSchemeSelect');
    if (select) {
        select.innerHTML = SCHEMES_DATA.map(s => `
            <option value="${s.id}" ${presetSchemeId === s.id ? 'selected' : ''}>${escapeHtml(s.name)}</option>
        `).join('');
    }

    if (modal) {
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
}

function closeTrackerModal(event) {
    if (event && event.target && event.target.id !== 'trackerModalBackdrop') return;
    const modal = document.getElementById('trackerModalBackdrop');
    if (modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }
}

function handleSaveTrackerItem(e) {
    e.preventDefault();
    const schemeId = document.getElementById('trackerSchemeSelect').value;
    const status = document.getElementById('trackerStatusSelect').value;
    const refNo = document.getElementById('trackerRefInput').value.trim();
    const notes = document.getElementById('trackerNotesInput').value.trim();

    const scheme = SCHEMES_DATA.find(s => s.id === schemeId);
    if (!scheme) return;

    // Check if already in tracker
    const existingIndex = APP_STATE.trackerApplications.findIndex(a => a.schemeId === schemeId);
    if (existingIndex > -1) {
        APP_STATE.trackerApplications[existingIndex].status = status;
        if (refNo) APP_STATE.trackerApplications[existingIndex].refNo = refNo;
        if (notes) APP_STATE.trackerApplications[existingIndex].notes = notes;
        APP_STATE.trackerApplications[existingIndex].updatedAt = new Date().toISOString().split('T')[0];
        showToast('Tracker entry updated', 'info');
    } else {
        APP_STATE.trackerApplications.push({
            id: 'trk-' + Date.now(),
            schemeId: scheme.id,
            schemeName: scheme.name,
            category: scheme.category,
            status: status,
            refNo: refNo,
            notes: notes,
            updatedAt: new Date().toISOString().split('T')[0]
        });
        showToast('Scheme added to Application Tracker!', 'success');
    }

    localStorage.setItem('scheme_sathi_applications', JSON.stringify(APP_STATE.trackerApplications));
    closeTrackerModal();
    renderTracker();
    renderDashboard();
    navigateTo('tracker');
}

// ==========================================================================
// 9. MULTI-STEP WIZARD ENGINE ("Find My Scheme")
// ==========================================================================

function startEligibilityWizard() {
    navigateTo('wizard');
    setWizardStep(1);
}

function setWizardStep(stepNum) {
    APP_STATE.currentWizardStep = stepNum;

    // Update panel visibility
    for (let i = 1; i <= 5; i++) {
        const panel = document.getElementById(`wizardStep${i}`);
        if (panel) {
            panel.classList.toggle('active', i === stepNum);
        }
    }

    // Update progress bar & counter
    const pct = (stepNum / 5) * 100;
    const bar = document.getElementById('wizardProgressBar');
    const counter = document.getElementById('wizardStepIndicator');
    const title = document.getElementById('wizardStepTitle');
    const subtitle = document.getElementById('wizardStepSubtitle');

    if (bar) bar.style.width = `${pct}%`;
    if (counter) counter.textContent = `Step ${stepNum} of 5`;

    const titles = {
        1: { t: 'Tell us about yourself', s: 'Enter basic personal demographic details to begin filtering schemes.' },
        2: { t: 'Where are you from?', s: 'Location determines both Central and State-specific government welfare programs.' },
        3: { t: 'What best describes you?', s: 'Select your active occupation or social engagement.' },
        4: { t: 'Financial Information', s: 'Annual family income and category help find targeted reservations and grants.' },
        5: { t: 'Additional Information', s: 'Tailored criteria such as education, landholding, or enterprise details.' }
    };

    if (title && titles[stepNum]) title.textContent = titles[stepNum].t;
    if (subtitle && titles[stepNum]) subtitle.textContent = titles[stepNum].s;

    // Manage Prev/Next/Submit button visibility
    const prevBtn = document.getElementById('wizardPrevBtn');
    const nextBtn = document.getElementById('wizardNextBtn');
    const submitBtn = document.getElementById('wizardSubmitBtn');

    if (prevBtn) prevBtn.style.display = stepNum > 1 ? 'inline-flex' : 'none';
    if (nextBtn) nextBtn.style.display = stepNum < 5 ? 'inline-flex' : 'none';
    if (submitBtn) submitBtn.style.display = stepNum === 5 ? 'inline-flex' : 'none';
}

function navigateWizard(direction) {
    const current = APP_STATE.currentWizardStep;

    // Validate Step 1
    if (current === 1 && direction > 0) {
        const ageInput = document.getElementById('inputAge');
        const ageVal = parseInt(ageInput ? ageInput.value : 0, 10);
        const ageErr = document.getElementById('ageError');
        if (isNaN(ageVal) || ageVal < 10 || ageVal > 100) {
            if (ageErr) ageErr.style.display = 'block';
            if (ageInput) ageInput.focus();
            return;
        }
        if (ageErr) ageErr.style.display = 'none';
    }

    // Validate Step 2
    if (current === 2 && direction > 0) {
        const stateSelect = document.getElementById('selectState');
        const stateErr = document.getElementById('stateError');
        if (!stateSelect || !stateSelect.value) {
            if (stateErr) stateErr.style.display = 'block';
            return;
        }
        if (stateErr) stateErr.style.display = 'none';
    }

    const next = current + direction;
    if (next >= 1 && next <= 5) {
        setWizardStep(next);
    }
}

function handleStateChange() {
    const stateSelect = document.getElementById('selectState');
    const stateErr = document.getElementById('stateError');
    if (stateSelect && stateSelect.value) {
        if (stateErr) stateErr.style.display = 'none';
        APP_STATE.userProfile.state = stateSelect.value;
    }
}

function handleOccupationChange() {
    const checked = document.querySelector('input[name="occupation"]:checked');
    const occ = checked ? checked.value : 'Student';

    // Show/hide conditional fields in Step 5
    const studentGroup = document.getElementById('condStudentGroup');
    const farmerGroup = document.getElementById('condFarmerGroup');
    const bizGroup = document.getElementById('condBusinessGroup');

    if (studentGroup) studentGroup.style.display = (occ === 'Student' || occ === 'Job Seeker') ? 'block' : 'none';
    if (farmerGroup) farmerGroup.style.display = (occ === 'Farmer') ? 'block' : 'none';
    if (bizGroup) bizGroup.style.display = (occ === 'Business Owner' || occ === 'Self Employed') ? 'block' : 'none';
}

function handleWizardSubmit(e) {
    e.preventDefault();

    // Gather values
    const age = parseInt(document.getElementById('inputAge').value, 10) || 21;
    const gender = (document.querySelector('input[name="gender"]:checked') || {}).value || 'Male';
    const state = document.getElementById('selectState').value || 'Maharashtra';
    const district = document.getElementById('inputDistrict').value.trim() || 'General';
    const areaType = (document.querySelector('input[name="areaType"]:checked') || {}).value || 'Urban';
    const occupation = (document.querySelector('input[name="occupation"]:checked') || {}).value || 'Student';
    const incomeBracket = (document.querySelector('input[name="incomeBracket"]:checked') || {}).value || '1-2.5L';
    const socialCategory = document.getElementById('selectSocialCategory').value || 'General';
    const education = document.getElementById('selectEducationLevel').value || 'Undergraduate';
    const landHolding = document.getElementById('selectLandHolding').value || 'Small';
    const businessType = document.getElementById('selectBusinessType').value || 'Micro';
    const hasDisability = document.getElementById('checkDisability').checked;
    const isMinority = document.getElementById('checkMinority').checked;

    // Update state
    APP_STATE.userProfile = {
        age, gender, state, district, areaType, occupation,
        incomeBracket, socialCategory, education, landHolding,
        businessType, hasDisability, isMinority
    };

    localStorage.setItem('scheme_sathi_profile', JSON.stringify(APP_STATE.userProfile));

    // If citizen is logged in, sync updated profile to their account in the JavaScript object store
    if (APP_STATE.currentUser) {
        APP_STATE.currentUser.profile = { ...APP_STATE.userProfile };
        localStorage.setItem('scheme_sathi_current_user', JSON.stringify(APP_STATE.currentUser));
        const usersDb = getUsersDatabase();
        if (usersDb[APP_STATE.currentUser.email]) {
            usersDb[APP_STATE.currentUser.email].profile = { ...APP_STATE.userProfile };
            saveUsersDatabase(usersDb);
        }
        renderUserAuth();
    }

    showToast('Profile updated & schemes calculated!', 'success');
    renderSchemes();
    renderDashboard();
    navigateTo('recommendations');
}

// ==========================================================================
// 10. SEARCH, FILTER & SORT CONTROLS
// ==========================================================================

function handleSearchInput(e) {
    APP_STATE.searchQuery = e.target.value;
    const clearBtn = document.getElementById('clearSearchBtn');
    if (clearBtn) clearBtn.style.display = APP_STATE.searchQuery ? 'block' : 'none';
    renderSchemes();
}

function clearSearch() {
    const input = document.getElementById('schemeSearchInput');
    if (input) input.value = '';
    APP_STATE.searchQuery = '';
    const clearBtn = document.getElementById('clearSearchBtn');
    if (clearBtn) clearBtn.style.display = 'none';
    renderSchemes();
}

function handleSortChange() {
    const select = document.getElementById('schemeSortSelect');
    if (select) {
        APP_STATE.sortBy = select.value;
        renderSchemes();
    }
}

function filterByCatPill(catName) {
    APP_STATE.activeCategoryFilter = catName;

    // Update active pill
    const pills = document.querySelectorAll('.filter-pill');
    pills.forEach(p => {
        p.classList.toggle('active', p.getAttribute('data-cat') === catName);
    });

    renderSchemes();
}

function filterByCategory(catName) {
    APP_STATE.activeCategoryFilter = catName;
    navigateTo('recommendations');

    const pills = document.querySelectorAll('.filter-pill');
    pills.forEach(p => {
        p.classList.toggle('active', p.getAttribute('data-cat') === catName);
    });

    renderSchemes();
}

function resetFilters() {
    APP_STATE.searchQuery = '';
    APP_STATE.activeCategoryFilter = 'All';
    APP_STATE.sortBy = 'bestMatch';

    const input = document.getElementById('schemeSearchInput');
    if (input) input.value = '';
    const sortSelect = document.getElementById('schemeSortSelect');
    if (sortSelect) sortSelect.value = 'bestMatch';

    const pills = document.querySelectorAll('.filter-pill');
    pills.forEach(p => p.classList.toggle('active', p.getAttribute('data-cat') === 'All'));

    renderSchemes();
}

// ==========================================================================
// 11. NAVIGATION & SPA ROUTER
// ==========================================================================

function navigateTo(sectionId) {
    // Map section IDs to element IDs
    const sectionMap = {
        'home': 'homeSection',
        'wizard': 'wizardSection',
        'categories': 'categoriesSection',
        'recommendations': 'recommendationsSection',
        'dashboard': 'dashboardSection',
        'saved': 'savedSection',
        'tracker': 'trackerSection',
        'faq': 'faqSection'
    };

    const targetElId = sectionMap[sectionId] || sectionId;
    const targetEl = document.getElementById(targetElId);

    if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
    }

    // Update nav active link
    const links = document.querySelectorAll('.nav-link');
    links.forEach(l => {
        l.classList.toggle('active', l.getAttribute('data-nav') === sectionId);
    });

    closeMobileMenu();
}

function mobileNavigateTo(sectionId) {
    navigateTo(sectionId);
    closeMobileMenu();
}

function toggleMobileMenu() {
    const drawer = document.getElementById('mobileDrawer');
    const overlay = document.getElementById('mobileOverlay');
    if (drawer && overlay) {
        drawer.classList.toggle('open');
        overlay.classList.toggle('open');
    }
}

function closeMobileMenu() {
    const drawer = document.getElementById('mobileDrawer');
    const overlay = document.getElementById('mobileOverlay');
    if (drawer) drawer.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
}

// ==========================================================================
// 12. NOTIFICATIONS & ALERTS CENTER
// ==========================================================================

function toggleNotificationPanel() {
    const panel = document.getElementById('notifPanel');
    if (panel) {
        panel.classList.toggle('open');
        closeLangMenu();
    }
}

function renderNotifications() {
    const list = document.getElementById('notifList');
    const badge = document.getElementById('notifBadge');
    if (!list) return;

    const unreadCount = APP_STATE.notifications.filter(n => n.unread).length;
    if (badge) {
        badge.textContent = unreadCount;
        badge.style.display = unreadCount > 0 ? 'flex' : 'none';
    }

    list.innerHTML = APP_STATE.notifications.map(n => `
        <div class="notif-item ${n.unread ? 'unread' : ''}" onclick="markNotificationRead('${n.id}')">
            <div class="notif-item-icon">
                <i class="fa-solid fa-${n.unread ? 'bell' : 'envelope-open'}"></i>
            </div>
            <div class="notif-item-text">
                <div class="notif-item-title">${escapeHtml(n.title)}</div>
                <div class="notif-item-time">${escapeHtml(n.time)}</div>
            </div>
        </div>
    `).join('');
}

function markNotificationRead(notifId) {
    const notif = APP_STATE.notifications.find(n => n.id === notifId);
    if (notif) {
        notif.unread = false;
        localStorage.setItem('scheme_sathi_notifications', JSON.stringify(APP_STATE.notifications));
        renderNotifications();
    }
}

function markAllNotificationsRead() {
    APP_STATE.notifications.forEach(n => n.unread = false);
    localStorage.setItem('scheme_sathi_notifications', JSON.stringify(APP_STATE.notifications));
    renderNotifications();
    showToast('All notifications marked as read', 'info');
}

// ==========================================================================
// 13. MULTI-LANGUAGE ENGINE
// ==========================================================================

function toggleLangMenu() {
    const menu = document.getElementById('langMenu');
    if (menu) {
        menu.classList.toggle('open');
        const notifPanel = document.getElementById('notifPanel');
        if (notifPanel) notifPanel.classList.remove('open');
    }
}

function closeLangMenu() {
    const menu = document.getElementById('langMenu');
    if (menu) menu.classList.remove('open');
}

function setLanguage(langCode) {
    if (!TRANSLATIONS[langCode]) return;
    APP_STATE.currentLanguage = langCode;
    localStorage.setItem('scheme_sathi_lang', langCode);

    // Update label in navbar
    const lbl = document.getElementById('currentLangLabel');
    if (lbl) lbl.textContent = langCode.toUpperCase();

    // Update active class in menu
    const opts = document.querySelectorAll('.lang-opt');
    opts.forEach(o => {
        o.classList.toggle('active', o.getAttribute('onclick').includes(langCode));
    });

    closeLangMenu();
    applyLanguageTranslations(langCode);
    showToast(`Language changed to ${langCode === 'hi' ? 'हिन्दी' : langCode === 'pa' ? 'ਪੰਜਾਬੀ' : 'English'}`, 'info');
}

function applyLanguageTranslations(langCode) {
    const dict = TRANSLATIONS[langCode] || TRANSLATIONS['en'];

    // Update elements with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.innerHTML = dict[key];
        }
    });

    // Re-render dynamic lists so they reflect language changes
    renderSchemes();
    renderSavedSchemes();
    renderTracker();
    renderDashboard();
}

// ==========================================================================
// 14. DARK / LIGHT THEME TOGGLE
// ==========================================================================

function toggleTheme() {
    const newTheme = APP_STATE.currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

function setTheme(theme) {
    APP_STATE.currentTheme = theme;
    localStorage.setItem('scheme_sathi_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);

    const icon = document.getElementById('themeIcon');
    if (icon) {
        icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }

    showToast(`Switched to ${theme === 'dark' ? 'Dark' : 'Light'} Mode`, 'info');
}

// ==========================================================================
// 15. FAQ ACCORDION & TOAST NOTIFICATIONS
// ==========================================================================

function toggleFaq(buttonEl) {
    const item = buttonEl.closest('.faq-item');
    if (!item) return;

    const isActive = item.classList.contains('active');

    // Close others
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

    // Toggle current
    if (!isActive) {
        item.classList.add('active');
    }
}

/**
 * Toast Notification System
 */
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast-item';

    const iconClass = type === 'success' ? 'fa-circle-check success' : type === 'warn' ? 'fa-triangle-exclamation warn' : 'fa-circle-info info';

    toast.innerHTML = `
        <i class="fa-solid ${iconClass} toast-icon"></i>
        <span>${escapeHtml(message)}</span>
    `;

    container.appendChild(toast);

    // Auto remove after 3.2 seconds
    setTimeout(() => {
        toast.classList.add('hide');
        setTimeout(() => toast.remove(), 300);
    }, 3200);
}

/**
 * Safe HTML escaping helper
 */
function escapeHtml(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// ==========================================================================
// 16. CITIZEN AUTHENTICATION & CLIENT-SIDE USER STORE
// ==========================================================================

/**
 * Extract 2-letter initials from citizen full name
 */
function getInitials(name) {
    if (!name) return 'U';
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/**
 * Open Citizen Authentication Modal
 * @param {'login'|'register'} defaultTab
 */
function openAuthModal(defaultTab = 'login') {
    const backdrop = document.getElementById('authModalBackdrop');
    if (!backdrop) return;
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
    switchAuthTab(defaultTab);
    hideAuthAlert();
}

/**
 * Close Citizen Authentication Modal
 */
function closeAuthModal(event) {
    if (event && event.target !== event.currentTarget) return;
    const backdrop = document.getElementById('authModalBackdrop');
    if (backdrop) {
        backdrop.classList.remove('open');
        document.body.style.overflow = '';
    }
    hideAuthAlert();
}

/**
 * Switch between Login and Registration tabs
 * @param {'login'|'register'} tab
 */
function switchAuthTab(tab) {
    const loginTabBtn = document.getElementById('authLoginTabBtn');
    const regTabBtn = document.getElementById('authRegisterTabBtn');
    const loginPanel = document.getElementById('authLoginPanel');
    const regPanel = document.getElementById('authRegisterPanel');

    if (tab === 'login') {
        if (loginTabBtn) loginTabBtn.classList.add('active');
        if (regTabBtn) regTabBtn.classList.remove('active');
        if (loginPanel) loginPanel.classList.add('active');
        if (regPanel) regPanel.classList.remove('active');
    } else {
        if (regTabBtn) regTabBtn.classList.add('active');
        if (loginTabBtn) loginTabBtn.classList.remove('active');
        if (regPanel) regPanel.classList.add('active');
        if (loginPanel) loginPanel.classList.remove('active');

        // Populate registration state dropdown if not yet populated
        const regStateSelect = document.getElementById('regState');
        if (regStateSelect && regStateSelect.children.length <= 1) {
            regStateSelect.innerHTML = '';
            INDIAN_STATES.forEach(st => {
                const opt = document.createElement('option');
                opt.value = st;
                opt.textContent = st;
                if (st === 'Maharashtra') opt.selected = true;
                regStateSelect.appendChild(opt);
            });
        }
    }
    hideAuthAlert();
}

/**
 * Display alert banner inside Auth modal
 */
function showAuthAlert(message, type = 'error') {
    const alertBox = document.getElementById('authAlertBox');
    if (!alertBox) return;
    alertBox.style.display = 'flex';
    alertBox.className = `auth-alert ${type}`;
    const icon = type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation';
    alertBox.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${escapeHtml(message)}</span>`;
}

/**
 * Hide alert banner inside Auth modal
 */
function hideAuthAlert() {
    const alertBox = document.getElementById('authAlertBox');
    if (alertBox) {
        alertBox.style.display = 'none';
        alertBox.innerHTML = '';
    }
}

/**
 * Toggle password reveal
 */
function togglePasswordVisibility(inputId, btnEl) {
    const input = document.getElementById(inputId);
    if (!input) return;
    const isPass = input.type === 'password';
    input.type = isPass ? 'text' : 'password';
    const icon = btnEl ? btnEl.querySelector('i') : null;
    if (icon) {
        icon.className = isPass ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye';
    }
}

/**
 * Quick 1-Click Fill Demo Accounts (For Faculty Evaluation)
 * @param {'citizen'|'farmer'|'admin'} role
 */
function quickFillDemo(role) {
    const emailInput = document.getElementById('loginEmail');
    const passInput = document.getElementById('loginPassword');
    if (!emailInput || !passInput) return;

    if (role === 'citizen') {
        emailInput.value = 'citizen@example.com';
        passInput.value = 'User@123';
    } else if (role === 'farmer') {
        emailInput.value = 'farmer@example.com';
        passInput.value = 'Farmer@123';
    } else if (role === 'admin') {
        emailInput.value = 'admin@schemesathi.gov.in';
        passInput.value = 'Admin@123';
    }

    // Instantly authenticate for seamless demonstration
    handleLoginSubmit();
}

/**
 * Handle Citizen Sign In
 */
function handleLoginSubmit(event) {
    if (event) event.preventDefault();

    const emailInput = document.getElementById('loginEmail');
    const passInput = document.getElementById('loginPassword');
    const rememberMe = document.getElementById('rememberMeCheckbox');

    if (!emailInput || !passInput) return;

    const email = emailInput.value.trim().toLowerCase();
    const password = passInput.value;

    if (!email || !password) {
        showAuthAlert('Please enter both email address and password to sign in.');
        return;
    }

    // 1. Check against client-side JavaScript user database
    const usersDb = getUsersDatabase();
    const user = usersDb[email];

    if (!user) {
        showAuthAlert(`No citizen account found for "${email}". Click "Register Citizen" to create an account, or try a 1-Click Demo account.`);
        return;
    }

    if (user.password !== password) {
        showAuthAlert('Incorrect password entered. Please check your password or choose a demo account.');
        return;
    }

    // 2. Authentication successful -> update active state session
    APP_STATE.currentUser = {
        name: user.name,
        email: user.email,
        role: user.role,
        phone: user.phone || '',
        avatarColor: user.avatarColor || '#2563eb',
        profile: user.profile || { ...DEFAULT_PROFILE },
        savedSchemeIds: user.savedSchemeIds || []
    };

    // Save session in localStorage
    if (!rememberMe || rememberMe.checked) {
        localStorage.setItem('scheme_sathi_current_user', JSON.stringify(APP_STATE.currentUser));
    }

    // Synchronize citizen demographic profile to matching engine
    APP_STATE.userProfile = { ...user.profile };
    localStorage.setItem('scheme_sathi_profile', JSON.stringify(APP_STATE.userProfile));

    if (user.savedSchemeIds && user.savedSchemeIds.length > 0) {
        APP_STATE.savedSchemeIds = [...user.savedSchemeIds];
        localStorage.setItem('scheme_sathi_saved', JSON.stringify(APP_STATE.savedSchemeIds));
    }

    // 3. Sync wizard input controls to reflect new user's profile
    syncWizardInputsFromProfile();

    // 4. Update UI displays
    renderUserAuth();
    renderSchemes();
    renderSavedSchemes();
    renderDashboard();

    // 5. Close dialog and notify
    closeAuthModal();
    showToast(`Welcome back, ${user.name}! Personalized schemes updated.`, 'success');
}

/**
 * Handle Citizen Registration
 */
function handleRegisterSubmit(event) {
    if (event) event.preventDefault();

    const fullNameInput = document.getElementById('regFullName');
    const emailInput = document.getElementById('regEmail');
    const passInput = document.getElementById('regPassword');
    const confPassInput = document.getElementById('regConfirmPassword');
    const ageInput = document.getElementById('regAge');
    const genderSelect = document.getElementById('regGender');
    const stateSelect = document.getElementById('regState');
    const distInput = document.getElementById('regDistrict');
    const occSelect = document.getElementById('regOccupation');
    const incSelect = document.getElementById('regIncome');
    const catSelect = document.getElementById('regCategory');

    const fullName = fullNameInput ? fullNameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim().toLowerCase() : '';
    const password = passInput ? passInput.value : '';
    const confirmPass = confPassInput ? confPassInput.value : '';
    const age = parseInt(ageInput ? ageInput.value : 0, 10);
    const gender = genderSelect ? genderSelect.value : 'Male';
    const state = stateSelect ? stateSelect.value : 'Maharashtra';
    const district = distInput ? distInput.value.trim() : '';
    const occupation = occSelect ? occSelect.value : 'Student';
    const incomeBracket = incSelect ? incSelect.value : '1-2.5L';
    const socialCategory = catSelect ? catSelect.value : 'General';

    // Validation
    if (!fullName || fullName.length < 2) {
        showAuthAlert('Please enter your valid Full Name.');
        return;
    }
    if (!email || !email.includes('@') || !email.includes('.')) {
        showAuthAlert('Please enter a valid email address.');
        return;
    }
    if (!password || password.length < 6) {
        showAuthAlert('Password must be at least 6 characters long.');
        return;
    }
    if (password !== confirmPass) {
        showAuthAlert('Password and Confirmation do not match.');
        return;
    }
    if (isNaN(age) || age < 10 || age > 100) {
        showAuthAlert('Please enter a valid age between 10 and 100.');
        return;
    }
    if (!state) {
        showAuthAlert('Please select your home State or Union Territory.');
        return;
    }

    // Check if email already exists in JS object / localStorage database
    const usersDb = getUsersDatabase();
    if (usersDb[email]) {
        showAuthAlert(`An account with email "${email}" already exists. Please switch to Sign In.`);
        return;
    }

    // Generate random avatar color
    const palette = ['#2563eb', '#059669', '#7c3aed', '#d97706', '#db2777', '#0891b2'];
    const avatarColor = palette[Math.floor(Math.random() * palette.length)];

    // Create new citizen record
    const newUser = {
        name: fullName,
        email: email,
        password: password,
        phone: '',
        role: `Citizen (${occupation})`,
        avatarColor: avatarColor,
        profile: {
            age: age,
            gender: gender,
            state: state,
            district: district || 'All',
            areaType: 'Rural',
            occupation: occupation,
            incomeBracket: incomeBracket,
            socialCategory: socialCategory,
            education: occupation === 'Student' ? 'Undergraduate' : '10th Pass',
            landHolding: occupation === 'Farmer' ? 'Small' : 'None',
            businessType: (occupation === 'Business Owner' || occupation === 'Self Employed') ? 'Micro' : 'None',
            hasDisability: false,
            isMinority: false
        },
        savedSchemeIds: [],
        registeredAt: new Date().toISOString().split('T')[0]
    };

    // Store in JavaScript object database & localStorage
    usersDb[email] = newUser;
    saveUsersDatabase(usersDb);

    // Auto sign-in new citizen
    APP_STATE.currentUser = {
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        phone: newUser.phone,
        avatarColor: newUser.avatarColor,
        profile: newUser.profile,
        savedSchemeIds: []
    };
    localStorage.setItem('scheme_sathi_current_user', JSON.stringify(APP_STATE.currentUser));

    // Sync profile to matching engine
    APP_STATE.userProfile = { ...newUser.profile };
    localStorage.setItem('scheme_sathi_profile', JSON.stringify(APP_STATE.userProfile));

    // Sync wizard form inputs
    syncWizardInputsFromProfile();

    // Re-render UI
    renderUserAuth();
    renderSchemes();
    renderSavedSchemes();
    renderDashboard();

    // Reset registration form
    const regForm = document.getElementById('registerForm');
    if (regForm) regForm.reset();

    closeAuthModal();
    showToast(`Account created! Welcome, ${newUser.name}. Showing your eligible schemes.`, 'success');
    navigateTo('recommendations');
}

/**
 * Handle Citizen Sign Out
 */
function logoutUser() {
    closeUserProfileDropdown();
    APP_STATE.currentUser = null;
    localStorage.removeItem('scheme_sathi_current_user');

    // Reset profile to default
    APP_STATE.userProfile = { ...DEFAULT_PROFILE };
    localStorage.setItem('scheme_sathi_profile', JSON.stringify(APP_STATE.userProfile));

    syncWizardInputsFromProfile();
    renderUserAuth();
    renderSchemes();
    renderSavedSchemes();
    renderDashboard();

    showToast('Signed out successfully. Guest mode restored.', 'info');
}

/**
 * Toggle User Profile Dropdown
 */
function toggleUserProfileDropdown(event) {
    if (event) event.stopPropagation();
    const container = document.getElementById('userProfileMenuWrap');
    if (container) {
        container.classList.toggle('open');
    }
}

/**
 * Close User Profile Dropdown
 */
function closeUserProfileDropdown() {
    const container = document.getElementById('userProfileMenuWrap');
    if (container) {
        container.classList.remove('open');
    }
}

/**
 * Sync wizard form inputs with current user profile
 */
function syncWizardInputsFromProfile() {
    const prof = APP_STATE.userProfile || DEFAULT_PROFILE;

    const ageInput = document.getElementById('inputAge');
    if (ageInput) ageInput.value = prof.age || 21;

    const genderRadios = document.querySelectorAll('input[name="gender"]');
    genderRadios.forEach(r => {
        r.checked = (r.value === prof.gender);
    });

    const occRadios = document.querySelectorAll('input[name="occupation"]');
    occRadios.forEach(r => {
        r.checked = (r.value === prof.occupation);
    });

    const incRadios = document.querySelectorAll('input[name="incomeBracket"]');
    incRadios.forEach(r => {
        r.checked = (r.value === prof.incomeBracket);
    });

    const areaRadios = document.querySelectorAll('input[name="areaType"]');
    areaRadios.forEach(r => {
        r.checked = (r.value === prof.areaType);
    });

    const stateSelect = document.getElementById('selectState');
    if (stateSelect && prof.state) stateSelect.value = prof.state;

    const distInput = document.getElementById('inputDistrict');
    if (distInput) distInput.value = prof.district || '';

    const socialSelect = document.getElementById('selectSocialCategory');
    if (socialSelect && prof.socialCategory) socialSelect.value = prof.socialCategory;

    const eduSelect = document.getElementById('selectEducationLevel');
    if (eduSelect && prof.education) eduSelect.value = prof.education;

    const disCheck = document.getElementById('checkDisability');
    if (disCheck) disCheck.checked = !!prof.hasDisability;

    const minCheck = document.getElementById('checkMinority');
    if (minCheck) minCheck.checked = !!prof.isMinority;

    handleOccupationChange();
}

/**
 * Render Authentication Buttons / User Profile Dropdown in Desktop Navbar & Mobile Drawer
 */
function renderUserAuth() {
    const desktopWrapper = document.getElementById('userAuthWrapper');
    const mobileWrapper = document.getElementById('mobileAuthContainer');

    const user = APP_STATE.currentUser;

    if (user) {
        // Desktop Logged In UI
        if (desktopWrapper) {
            desktopWrapper.innerHTML = `
                <div class="user-profile-menu-container" id="userProfileMenuWrap">
                    <button type="button" class="user-profile-trigger-btn" onclick="toggleUserProfileDropdown(event)" aria-haspopup="true" aria-expanded="false" title="Account Menu">
                        <span class="user-avatar-badge" style="background-color: ${user.avatarColor || 'var(--primary-600)'}">
                            ${escapeHtml(getInitials(user.name))}
                        </span>
                        <div class="user-nav-details">
                            <span class="user-nav-name">${escapeHtml(user.name)}</span>
                            <span class="user-nav-role">${escapeHtml(user.role || 'Citizen')}</span>
                        </div>
                        <i class="fa-solid fa-chevron-down user-chevron"></i>
                    </button>
                    <div class="user-profile-dropdown" id="userProfileDropdown">
                        <div class="dropdown-header">
                            <div class="dropdown-user-info">
                                <strong>${escapeHtml(user.name)}</strong>
                                <span class="user-email-text">${escapeHtml(user.email)}</span>
                                <span class="user-badge-pill">${escapeHtml(user.role || 'Citizen')}</span>
                            </div>
                        </div>
                        <div class="dropdown-body">
                            <div class="dropdown-profile-summary">
                                <div class="profile-summary-item">
                                    <span class="lbl">State:</span>
                                    <span class="val">${escapeHtml(user.profile?.state || 'All')}</span>
                                </div>
                                <div class="profile-summary-item">
                                    <span class="lbl">Occupation:</span>
                                    <span class="val">${escapeHtml(user.profile?.occupation || 'General')}</span>
                                </div>
                                <div class="profile-summary-item">
                                    <span class="lbl">Income:</span>
                                    <span class="val">${escapeHtml(user.profile?.incomeBracket || 'N/A')}</span>
                                </div>
                            </div>
                            <div class="dropdown-divider"></div>
                            <button type="button" class="dropdown-item-btn" onclick="navigateTo('wizard'); closeUserProfileDropdown();">
                                <i class="fa-solid fa-user-pen"></i> <span>Edit Eligibility Profile</span>
                            </button>
                            <button type="button" class="dropdown-item-btn" onclick="navigateTo('saved'); closeUserProfileDropdown();">
                                <i class="fa-solid fa-bookmark"></i> <span>Saved Schemes (${APP_STATE.savedSchemeIds.length})</span>
                            </button>
                            <button type="button" class="dropdown-item-btn" onclick="navigateTo('tracker'); closeUserProfileDropdown();">
                                <i class="fa-solid fa-list-check"></i> <span>My Applications (${APP_STATE.trackerApplications.length})</span>
                            </button>
                            <div class="dropdown-divider"></div>
                            <a href="login.html" class="dropdown-item-btn" style="text-decoration: none;">
                                <i class="fa-solid fa-users-gear"></i> <span>Switch Account / Sign In Page</span>
                            </a>
                            <button type="button" class="dropdown-item-btn text-danger" onclick="logoutUser()">
                                <i class="fa-solid fa-arrow-right-from-bracket"></i> <span>Sign Out</span>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }

        // Mobile Drawer Logged In UI
        if (mobileWrapper) {
            mobileWrapper.innerHTML = `
                <div class="mobile-user-card">
                    <div class="d-flex align-items-center gap-2">
                        <span class="user-avatar-badge" style="background-color: ${user.avatarColor || 'var(--primary-600)'}">
                            ${escapeHtml(getInitials(user.name))}
                        </span>
                        <div>
                            <div style="font-weight: 700; font-size: 0.92rem; color: var(--text-primary);">${escapeHtml(user.name)}</div>
                            <div style="font-size: 0.75rem; color: var(--primary-600); font-weight: 600;">${escapeHtml(user.role || 'Citizen')}</div>
                        </div>
                    </div>
                    <div class="d-flex gap-2 mt-2">
                        <a href="login.html" class="btn btn-outline w-100 btn-sm text-center">
                            <i class="fa-solid fa-users-gear"></i> Switch
                        </a>
                        <button type="button" class="btn btn-outline text-danger w-100 btn-sm" onclick="closeMobileDrawer(); logoutUser();">
                            <i class="fa-solid fa-arrow-right-from-bracket"></i> Sign Out
                        </button>
                    </div>
                </div>
            `;
        }
    } else {
        // Desktop Guest UI - Direct access to dedicated Login & Register pages
        if (desktopWrapper) {
            desktopWrapper.innerHTML = `
                <div class="d-flex align-items-center gap-2">
                    <a href="login.html" class="btn btn-outline btn-auth-trigger shadow-sm" title="Citizen Sign In">
                        <i class="fa-solid fa-arrow-right-to-bracket"></i> <span>Sign In</span>
                    </a>
                    <a href="register.html" class="btn btn-primary btn-auth-reg-nav shadow-sm" title="Create Citizen Account">
                        <i class="fa-solid fa-user-plus"></i> <span>Register</span>
                    </a>
                </div>
            `;
        }

        // Mobile Drawer Guest UI
        if (mobileWrapper) {
            mobileWrapper.innerHTML = `
                <div class="d-flex flex-column gap-2 w-100">
                    <a href="login.html" class="btn btn-outline w-100 text-center">
                        <i class="fa-solid fa-arrow-right-to-bracket"></i> Sign In
                    </a>
                    <a href="register.html" class="btn btn-primary w-100 text-center">
                        <i class="fa-solid fa-user-plus"></i> Register Citizen
                    </a>
                </div>
            `;
        }
    }
}

// ==========================================================================
// 17. INITIALIZATION & DOM READY
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Populate Indian States dropdowns (Wizard & Registration)
    const stateSelect = document.getElementById('selectState');
    if (stateSelect) {
        INDIAN_STATES.forEach(st => {
            const opt = document.createElement('option');
            opt.value = st;
            opt.textContent = st;
            if (st === APP_STATE.userProfile.state) opt.selected = true;
            stateSelect.appendChild(opt);
        });
    }

    const regStateSelect = document.getElementById('regState');
    if (regStateSelect) {
        INDIAN_STATES.forEach(st => {
            const opt = document.createElement('option');
            opt.value = st;
            opt.textContent = st;
            if (st === 'Maharashtra') opt.selected = true;
            regStateSelect.appendChild(opt);
        });
    }

    // 2. Pre-fill Wizard Form with saved profile values
    syncWizardInputsFromProfile();

    // 3. Initialize Theme
    document.documentElement.setAttribute('data-theme', APP_STATE.currentTheme);
    const themeIcon = document.getElementById('themeIcon');
    if (themeIcon) {
        themeIcon.className = APP_STATE.currentTheme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }

    // 4. Initialize Language
    if (APP_STATE.currentLanguage !== 'en') {
        const langLbl = document.getElementById('currentLangLabel');
        if (langLbl) langLbl.textContent = APP_STATE.currentLanguage.toUpperCase();
        applyLanguageTranslations(APP_STATE.currentLanguage);
    }

    // 5. Initial Renderings
    renderUserAuth();
    renderSchemes();
    renderSavedSchemes();
    renderTracker();
    renderDashboard();
    renderNotifications();

    // 6. Close dropdowns on outside click
    document.addEventListener('click', (e) => {
        const notifBtn = document.getElementById('notifBellBtn');
        const notifPanel = document.getElementById('notifPanel');
        if (notifPanel && notifBtn && !notifPanel.contains(e.target) && !notifBtn.contains(e.target)) {
            notifPanel.classList.remove('open');
        }

        const langBtn = document.getElementById('langSelectorBtn');
        const langMenu = document.getElementById('langMenu');
        if (langMenu && langBtn && !langMenu.contains(e.target) && !langBtn.contains(e.target)) {
            langMenu.classList.remove('open');
        }

        const profileWrap = document.getElementById('userProfileMenuWrap');
        if (profileWrap && !profileWrap.contains(e.target)) {
            profileWrap.classList.remove('open');
        }
    });

    // 7. Check for authentication redirect parameters
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const authStatus = urlParams.get('auth');
        if (authStatus === 'login' && APP_STATE.currentUser) {
            showToast(`Welcome back, ${APP_STATE.currentUser.name}! Your personalized schemes are updated.`, 'success');
            window.history.replaceState({}, document.title, window.location.pathname + window.location.hash);
        } else if (authStatus === 'registered' && APP_STATE.currentUser) {
            showToast(`Registration successful! Welcome to Scheme Sathi, ${APP_STATE.currentUser.name}!`, 'success');
            window.history.replaceState({}, document.title, window.location.pathname + window.location.hash);
        }
    } catch (e) {
        console.error('Error checking auth URL params:', e);
    }

    console.log('🏛️ Scheme Sathi initialized successfully. Total Schemes Loaded:', SCHEMES_DATA.length);
});
