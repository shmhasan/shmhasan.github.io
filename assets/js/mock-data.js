/* ============================================================
   UMMAH PLATFORM — Mock Data
   mock-data.js — All fake data for the prototype
   ============================================================ */

/* ---- ORGANIZATIONS ---- */
const ORGANIZATIONS = [
  {
    id: 'org-001',
    name: 'Sylhet Welfare Trust',
    slug: 'sylhet-welfare-trust',
    type: 'Welfare Association',
    country: 'United Kingdom',
    city: 'Birmingham',
    founded: '2014',
    memberCount: 214,
    activeCount: 198,
    description: 'A community-led welfare trust serving the Sylheti diaspora in the UK. We provide emergency financial support, death assistance, and educational grants to registered members and their families.',
    logo: '🕌',
    status: 'active',
    verified: true,
    admin: 'Rahim Ahmed',
    treasurer: 'Imran Hossain',
    totalCollected: 485200,
    totalDisbursed: 412800,
    activeCauses: 4,
    pendingRequests: 7,
    createdAt: '2014-03-15',
  },
  {
    id: 'org-002',
    name: 'Dhaka Community Support Circle',
    slug: 'dhaka-community-support',
    type: 'Community Support Group',
    country: 'Bangladesh',
    city: 'Dhaka',
    founded: '2018',
    memberCount: 312,
    activeCount: 287,
    description: 'Serving the Dhaka metropolitan community with zakat collection, medical emergency funds, and flood relief support. Transparent, trustworthy, and accountable.',
    logo: '🤝',
    status: 'active',
    verified: true,
    admin: 'Farzana Islam',
    treasurer: 'Sadia Karim',
    totalCollected: 320500,
    totalDisbursed: 275000,
    activeCauses: 6,
    pendingRequests: 12,
    createdAt: '2018-07-20',
  },
  {
    id: 'org-003',
    name: 'UK-BD Mosque Fund',
    slug: 'uk-bd-mosque-fund',
    type: 'Religious & Charitable Trust',
    country: 'United Kingdom',
    city: 'London',
    founded: '2010',
    memberCount: 560,
    activeCount: 523,
    description: 'Fundraising and managing donations for mosque renovation projects, education programs, and social welfare initiatives for the British-Bangladeshi Muslim community.',
    logo: '🕋',
    status: 'active',
    verified: true,
    admin: 'Mohammad Al-Amin',
    treasurer: 'Nadia Begum',
    totalCollected: 1250000,
    totalDisbursed: 980000,
    activeCauses: 8,
    pendingRequests: 3,
    createdAt: '2010-01-05',
  }
];

/* ---- MEMBERS ---- */
const MEMBERS = [
  {
    id: 'mem-001', orgId: 'org-001',
    name: 'Rahim Ahmed', email: 'rahim.ahmed@example.com', phone: '+44 7700 900123',
    role: 'admin', status: 'active', verified: true,
    nid: 'NID-8801234567890', nidType: 'NID', passportNo: 'BD-P234567',
    address: '42 Ladywood Road, Birmingham, B16 8SZ',
    joinedAt: '2014-03-15', dob: '1978-04-12',
    nomineeCount: 2, contributionCount: 34, totalContributed: 15800,
    avatar: 'RA', profession: 'Accountant',
  },
  {
    id: 'mem-002', orgId: 'org-001',
    name: 'Sadia Karim', email: 'sadia.karim@example.com', phone: '+44 7700 900456',
    role: 'member', status: 'active', verified: true,
    nid: 'NID-8809876543210', nidType: 'NID',
    address: '18 Handsworth Wood Road, Birmingham, B20 2DS',
    joinedAt: '2015-06-22', dob: '1985-11-30',
    nomineeCount: 3, contributionCount: 22, totalContributed: 8400,
    avatar: 'SK', profession: 'NHS Nurse',
  },
  {
    id: 'mem-003', orgId: 'org-001',
    name: 'Farzana Islam', email: 'farzana.islam@example.com', phone: '+44 7700 900789',
    role: 'treasurer', status: 'active', verified: true,
    nid: 'NID-8801122334455', nidType: 'Passport', passportNo: 'BD-P889922',
    address: '7 Soho Hill, Handsworth, Birmingham, B21 9SP',
    joinedAt: '2016-01-10', dob: '1980-07-05',
    nomineeCount: 1, contributionCount: 45, totalContributed: 22000,
    avatar: 'FI', profession: 'Accountant',
  },
  {
    id: 'mem-004', orgId: 'org-001',
    name: 'Imran Hossain', email: 'imran.hossain@example.com', phone: '+44 7700 900321',
    role: 'member', status: 'active', verified: true,
    nid: 'NID-8806677889900', nidType: 'NID',
    address: '55 Rookery Road, Handsworth, Birmingham, B21 9QP',
    joinedAt: '2017-09-05', dob: '1972-02-18',
    nomineeCount: 4, contributionCount: 18, totalContributed: 6200,
    avatar: 'IH', profession: 'Restaurant Owner',
  },
  {
    id: 'mem-005', orgId: 'org-001',
    name: 'Abdul Karim Choudhury', email: 'akc@example.com', phone: '+44 7700 900654',
    role: 'member', status: 'pending', verified: false,
    nid: null, nidType: null,
    address: '101 Birchfield Road, Perry Barr, Birmingham, B42 2AE',
    joinedAt: '2024-12-10', dob: '1990-08-15',
    nomineeCount: 0, contributionCount: 0, totalContributed: 0,
    avatar: 'AK', profession: 'IT Engineer',
  },
  {
    id: 'mem-006', orgId: 'org-001',
    name: 'Nasreen Begum', email: 'nasreen.begum@example.com', phone: '+44 7700 900987',
    role: 'member', status: 'under_review', verified: false,
    nid: 'NID-8804433221100', nidType: 'NID',
    address: '22 Oscott Road, Perry Barr, Birmingham, B42 1UJ',
    joinedAt: '2025-02-14', dob: '1965-03-22',
    nomineeCount: 2, contributionCount: 3, totalContributed: 900,
    avatar: 'NB', profession: 'Teacher',
  },
  {
    id: 'mem-007', orgId: 'org-001',
    name: 'Jamal Uddin', email: 'jamal.uddin@example.com', phone: '+44 7700 901122',
    role: 'auditor', status: 'active', verified: true,
    nid: 'NID-8802255668800', nidType: 'Passport', passportNo: 'BD-P112233',
    address: '88 Erdington Road, Birmingham, B24 9SE',
    joinedAt: '2019-04-01', dob: '1975-12-01',
    nomineeCount: 2, contributionCount: 28, totalContributed: 12400,
    avatar: 'JU', profession: 'Financial Analyst',
  },
  {
    id: 'mem-008', orgId: 'org-001',
    name: 'Ruhul Amin Sheikh', email: 'ruhul.sheikh@example.com', phone: '+44 7700 901344',
    role: 'member', status: 'suspended', verified: true,
    nid: 'NID-8807788990011', nidType: 'NID',
    address: '15 Nechells Parkway, Birmingham, B7 5PD',
    joinedAt: '2020-11-20', dob: '1983-06-14',
    nomineeCount: 1, contributionCount: 12, totalContributed: 3800,
    avatar: 'RS', profession: 'Driver',
  },
];

/* ---- MEMBERSHIP REQUESTS ---- */
const MEMBERSHIP_REQUESTS = [
  {
    id: 'req-001', orgId: 'org-001',
    name: 'Tarek Miah', email: 'tarek.miah@example.com', phone: '+44 7800 100200',
    requestedAt: '2026-03-27', status: 'pending',
    message: 'I am a long-time resident of the Birmingham Bangladeshi community and would like to join to support the welfare activities.',
    avatar: 'TM',
  },
  {
    id: 'req-002', orgId: 'org-001',
    name: 'Marium Khatun', email: 'marium.k@example.com', phone: '+44 7800 100300',
    requestedAt: '2026-03-26', status: 'pending',
    message: 'My late husband was a member. I would like to continue the family connection and contribute.',
    avatar: 'MK',
  },
  {
    id: 'req-003', orgId: 'org-001',
    name: 'Shafiq Rahman', email: 'shafiq.rahman@example.com', phone: '+44 7800 100400',
    requestedAt: '2026-03-24', status: 'pending',
    message: 'Referred by brother Rahim Ahmed. Keen to contribute to the death support fund.',
    avatar: 'SR',
  },
  {
    id: 'req-004', orgId: 'org-001',
    name: 'Dilnoza Khanom', email: 'dilnoza.k@example.com', phone: '+44 7800 100500',
    requestedAt: '2026-03-20', status: 'approved',
    message: 'New to Birmingham, looking to connect with the community.',
    avatar: 'DK',
  },
  {
    id: 'req-005', orgId: 'org-001',
    name: 'Kabir Chowdhury', email: 'kabir.c@example.com', phone: '+44 7800 100600',
    requestedAt: '2026-03-18', status: 'rejected',
    message: '',
    avatar: 'KC',
  },
];

/* ---- NOMINEES ---- */
const NOMINEES = [
  {
    id: 'nom-001', memberId: 'mem-001',
    name: 'Sumaiya Ahmed', relation: 'Spouse', dob: '1981-09-15',
    nid: 'NID-8807766554433', phone: '+44 7700 902001',
    status: 'verified', verifiedAt: '2024-06-01',
    share: 60, address: '42 Ladywood Road, Birmingham, B16 8SZ',
    avatar: 'SA',
  },
  {
    id: 'nom-002', memberId: 'mem-001',
    name: 'Yusuf Ahmed', relation: 'Son', dob: '2005-02-20',
    nid: null, phone: null,
    status: 'verified', verifiedAt: '2024-06-01',
    share: 40, address: '42 Ladywood Road, Birmingham, B16 8SZ',
    avatar: 'YA',
  },
  {
    id: 'nom-003', memberId: 'mem-002',
    name: 'Karim Hossain', relation: 'Spouse', dob: '1982-07-10',
    nid: 'NID-8809988776655', phone: '+44 7700 902002',
    status: 'pending', verifiedAt: null,
    share: 50, address: '18 Handsworth Wood Road, Birmingham, B20 2DS',
    avatar: 'KH',
  },
  {
    id: 'nom-004', memberId: 'mem-002',
    name: 'Amina Karim', relation: 'Daughter', dob: '2010-11-11',
    nid: null, phone: null,
    status: 'pending', verifiedAt: null,
    share: 30, address: '18 Handsworth Wood Road, Birmingham, B20 2DS',
    avatar: 'AK',
  },
  {
    id: 'nom-005', memberId: 'mem-002',
    name: 'Fatima Begum', relation: 'Mother', dob: '1955-03-25',
    nid: 'NID-8801122887766', phone: '+880 1700 123456',
    status: 'under_review', verifiedAt: null,
    share: 20, address: 'Sylhet, Bangladesh',
    avatar: 'FB',
  },
  {
    id: 'nom-006', memberId: 'mem-004',
    name: 'Rokeya Hossain', relation: 'Spouse', dob: '1975-06-08',
    nid: 'NID-8800011223344', phone: '+44 7700 902006',
    status: 'verified', verifiedAt: '2023-08-14',
    share: 40, address: '55 Rookery Road, Handsworth, Birmingham, B21 9QP',
    avatar: 'RH',
  },
];

/* ---- CAUSES ---- */
const CAUSES = [
  {
    id: 'cause-001', orgId: 'org-001',
    title: 'Death Support Fund — Brother Nurul Islam',
    category: 'Death Support',
    categoryIcon: '🕊️',
    description: 'Brother Nurul Islam, a long-standing member of our trust, passed away on 14 March 2026. His family requires immediate financial support for funeral costs, repatriation to Bangladesh, and family relief. This is a critical support cause.',
    targetAmount: 15000,
    collectedAmount: 12400,
    beneficiary: 'Nurul Islam Family',
    status: 'published',
    priority: 'urgent',
    createdBy: 'Rahim Ahmed',
    createdAt: '2026-03-15',
    publishedAt: '2026-03-16',
    closesAt: '2026-04-15',
    contributorCount: 48,
    updates: [
      { date: '2026-03-28', title: 'Funeral costs disbursed', body: 'BDT 85,000 disbursed to family for funeral arrangements. Bank transfer completed.', author: 'Farzana Islam' },
      { date: '2026-03-22', title: 'Repatriation arranged', body: 'Coordination with Bangladesh consulate complete. Flight booked for 25 March.', author: 'Rahim Ahmed' },
      { date: '2026-03-16', title: 'Cause published', body: 'Fund approved by committee and published for contributions.', author: 'Rahim Ahmed' },
    ],
  },
  {
    id: 'cause-002', orgId: 'org-001',
    title: 'Emergency Medical Support — Sister Nasreen Begum',
    category: 'Medical Emergency',
    categoryIcon: '🏥',
    description: 'Sister Nasreen requires urgent kidney dialysis treatment not covered by NHS referral. The family is requesting £4,200 to cover a private clinic assessment and initial 3-month treatment.',
    targetAmount: 4200,
    collectedAmount: 3750,
    beneficiary: 'Nasreen Begum',
    status: 'published',
    priority: 'urgent',
    createdBy: 'Sadia Karim',
    createdAt: '2026-03-10',
    publishedAt: '2026-03-11',
    closesAt: '2026-04-10',
    contributorCount: 23,
    updates: [
      { date: '2026-03-25', title: 'Treatment started', body: 'First dialysis session completed successfully at Spire Hospital. Family sends thanks.', author: 'Sadia Karim' },
      { date: '2026-03-11', title: 'Cause approved', body: 'Medical documents verified. Cause approved by admin.', author: 'Rahim Ahmed' },
    ],
  },
  {
    id: 'cause-003', orgId: 'org-001',
    title: 'Ramadan Zakat Collection 2026',
    category: 'Zakat Fund',
    categoryIcon: '🌙',
    description: 'Annual Ramadan Zakat collection for distribution to eligible recipients within our community and in Bangladesh. Follows strict Islamic calculation. All distributions are documented and auditable.',
    targetAmount: 50000,
    collectedAmount: 38200,
    beneficiary: 'Multiple Recipients',
    status: 'published',
    priority: 'normal',
    createdBy: 'Rahim Ahmed',
    createdAt: '2026-02-28',
    publishedAt: '2026-03-01',
    closesAt: '2026-04-09',
    contributorCount: 142,
    updates: [
      { date: '2026-03-20', title: 'Midway update', body: 'We have reached 76% of our Zakat target with 3 weeks remaining. Distributions will begin in final week of Ramadan.', author: 'Farzana Islam' },
      { date: '2026-03-01', title: 'Collection opened', body: 'Zakat collection is now live. Pay your Zakat through bank transfer, cash, or mobile banking.', author: 'Rahim Ahmed' },
    ],
  },
  {
    id: 'cause-004', orgId: 'org-001',
    title: 'Green Street Mosque Renovation',
    category: 'Mosque Renovation',
    categoryIcon: '🕌',
    description: 'Our community mosque on Green Street requires roof repair and HVAC system upgrade. The renovation will benefit over 800 regular worshippers. This is a long-term infrastructure project.',
    targetAmount: 120000,
    collectedAmount: 67000,
    beneficiary: 'Green Street Mosque Trust',
    status: 'published',
    priority: 'normal',
    createdBy: 'Rahim Ahmed',
    createdAt: '2025-11-01',
    publishedAt: '2025-11-15',
    closesAt: '2026-06-30',
    contributorCount: 88,
    updates: [
      { date: '2026-03-10', title: 'Contractor selected', body: 'After 3 quotes, Al-Noor Construction Ltd has been selected. Work begins April 2026.', author: 'Rahim Ahmed' },
      { date: '2026-01-15', title: '50% target reached', body: 'We have crossed £60,000 — halfway to our goal. Fundraising continues.', author: 'Farzana Islam' },
    ],
  },
  {
    id: 'cause-005', orgId: 'org-001',
    title: 'Flood Relief — Sylhet District 2025',
    category: 'Flood Relief',
    categoryIcon: '🌊',
    description: 'Following severe flooding in Sylhet, Bangladesh this August, we are collecting emergency relief funds to distribute food packages, medicines, and temporary shelter support.',
    targetAmount: 25000,
    collectedAmount: 25000,
    beneficiary: 'Sylhet Flood Victims',
    status: 'closed',
    priority: 'normal',
    createdBy: 'Rahim Ahmed',
    createdAt: '2025-08-10',
    publishedAt: '2025-08-11',
    closesAt: '2025-09-30',
    closedAt: '2025-09-30',
    contributorCount: 167,
    updates: [
      { date: '2025-09-30', title: 'Cause closed — fully funded', body: 'All funds disbursed. Relief delivered to 340 families across Sylhet. Final report attached.', author: 'Farzana Islam' },
      { date: '2025-08-20', title: 'Target reached', body: '£25,000 raised in 9 days! Thank you to all 167 contributors.', author: 'Rahim Ahmed' },
    ],
  },
  {
    id: 'cause-006', orgId: 'org-001',
    title: 'Widow Support — Mrs. Hasna Khanom',
    category: 'Widow Support',
    categoryIcon: '💚',
    description: 'Following the passing of brother Jalal Miah last month, his widow Mrs. Hasna Khanom is seeking ongoing monthly support of £300 for 12 months to cover rent and household expenses.',
    targetAmount: 3600,
    collectedAmount: 1200,
    beneficiary: 'Hasna Khanom',
    status: 'draft',
    priority: 'normal',
    createdBy: 'Sadia Karim',
    createdAt: '2026-03-28',
    publishedAt: null,
    closesAt: null,
    contributorCount: 0,
    updates: [],
  },
];

/* ---- CONTRIBUTIONS ---- */
const CONTRIBUTIONS = [
  {
    id: 'con-001', causeId: 'cause-001', memberId: 'mem-001',
    memberName: 'Rahim Ahmed', amount: 500, currency: 'GBP',
    paymentMethod: 'Bank Transfer', reference: 'RHM-2603-001',
    status: 'approved', receiptId: 'rec-001',
    submittedAt: '2026-03-18', reviewedAt: '2026-03-19',
    note: 'Monthly contribution plus extra for Nurul family',
    reviewedBy: 'Farzana Islam',
  },
  {
    id: 'con-002', causeId: 'cause-001', memberId: 'mem-002',
    memberName: 'Sadia Karim', amount: 200, currency: 'GBP',
    paymentMethod: 'Cash', reference: 'SKM-2603-002',
    status: 'approved', receiptId: 'rec-002',
    submittedAt: '2026-03-19', reviewedAt: '2026-03-20',
    note: '', reviewedBy: 'Farzana Islam',
  },
  {
    id: 'con-003', causeId: 'cause-003', memberId: 'mem-003',
    memberName: 'Farzana Islam', amount: 1800, currency: 'GBP',
    paymentMethod: 'Bank Transfer', reference: 'FIM-2603-003',
    status: 'approved', receiptId: 'rec-003',
    submittedAt: '2026-03-05', reviewedAt: '2026-03-06',
    note: 'Annual Zakat payment', reviewedBy: 'Rahim Ahmed',
  },
  {
    id: 'con-004', causeId: 'cause-002', memberId: 'mem-004',
    memberName: 'Imran Hossain', amount: 300, currency: 'GBP',
    paymentMethod: 'Mobile Banking (bKash)', reference: 'IMH-2603-004',
    status: 'pending', receiptId: 'rec-004',
    submittedAt: '2026-03-27', reviewedAt: null,
    note: 'Paid via bKash to Farzana apu', reviewedBy: null,
  },
  {
    id: 'con-005', causeId: 'cause-003', memberId: 'mem-002',
    memberName: 'Sadia Karim', amount: 400, currency: 'GBP',
    paymentMethod: 'Bank Transfer', reference: 'SKM-2603-005',
    status: 'under_review', receiptId: 'rec-005',
    submittedAt: '2026-03-22', reviewedAt: null,
    note: 'Zakat for this year', reviewedBy: null,
  },
  {
    id: 'con-006', causeId: 'cause-001', memberId: 'mem-006',
    memberName: 'Nasreen Begum', amount: 100, currency: 'GBP',
    paymentMethod: 'Cash', reference: 'NBG-2603-006',
    status: 'rejected', receiptId: null,
    submittedAt: '2026-03-20', reviewedAt: '2026-03-21',
    note: 'Cash handed to secretary', reviewedBy: 'Farzana Islam',
    rejectReason: 'No receipt submitted. Please upload proof of payment.',
  },
  {
    id: 'con-007', causeId: 'cause-004', memberId: 'mem-001',
    memberName: 'Rahim Ahmed', amount: 1000, currency: 'GBP',
    paymentMethod: 'Bank Transfer', reference: 'RHM-2603-007',
    status: 'approved', receiptId: 'rec-007',
    submittedAt: '2026-02-10', reviewedAt: '2026-02-11',
    note: 'Mosque renovation pledge — instalment 2', reviewedBy: 'Farzana Islam',
  },
];

/* ---- RECEIPTS ---- */
const RECEIPTS = [
  {
    id: 'rec-001', contributionId: 'con-001',
    memberName: 'Rahim Ahmed', amount: 500, currency: 'GBP',
    bank: 'Lloyds Bank', accountLast4: '4521',
    uploadedAt: '2026-03-18', verifiedAt: '2026-03-19',
    status: 'verified', verifiedBy: 'Farzana Islam',
    fileType: 'PDF', fileName: 'lloyds-transfer-18mar.pdf',
  },
  {
    id: 'rec-002', contributionId: 'con-002',
    memberName: 'Sadia Karim', amount: 200, currency: 'GBP',
    bank: 'Cash', accountLast4: null,
    uploadedAt: '2026-03-19', verifiedAt: '2026-03-20',
    status: 'verified', verifiedBy: 'Farzana Islam',
    fileType: 'JPG', fileName: 'cash-receipt-19mar.jpg',
  },
  {
    id: 'rec-003', contributionId: 'con-003',
    memberName: 'Farzana Islam', amount: 1800, currency: 'GBP',
    bank: 'Barclays Bank', accountLast4: '7832',
    uploadedAt: '2026-03-05', verifiedAt: '2026-03-06',
    status: 'verified', verifiedBy: 'Rahim Ahmed',
    fileType: 'PDF', fileName: 'barclays-zakat-05mar.pdf',
  },
  {
    id: 'rec-004', contributionId: 'con-004',
    memberName: 'Imran Hossain', amount: 300, currency: 'GBP',
    bank: 'bKash', accountLast4: '9901',
    uploadedAt: '2026-03-27', verifiedAt: null,
    status: 'pending', verifiedBy: null,
    fileType: 'JPG', fileName: 'bkash-screenshot-27mar.jpg',
  },
  {
    id: 'rec-005', contributionId: 'con-005',
    memberName: 'Sadia Karim', amount: 400, currency: 'GBP',
    bank: 'NatWest', accountLast4: '2210',
    uploadedAt: '2026-03-22', verifiedAt: null,
    status: 'under_review', verifiedBy: null,
    fileType: 'PDF', fileName: 'natwest-zakat-22mar.pdf',
  },
  {
    id: 'rec-007', contributionId: 'con-007',
    memberName: 'Rahim Ahmed', amount: 1000, currency: 'GBP',
    bank: 'Lloyds Bank', accountLast4: '4521',
    uploadedAt: '2026-02-10', verifiedAt: '2026-02-11',
    status: 'verified', verifiedBy: 'Farzana Islam',
    fileType: 'PDF', fileName: 'lloyds-mosque-10feb.pdf',
  },
];

/* ---- DISBURSEMENTS ---- */
const DISBURSEMENTS = [
  {
    id: 'dis-001', causeId: 'cause-001',
    title: 'Nurul Islam Funeral Costs',
    recipient: 'Sumaiya Islam (Widow)',
    recipientBank: 'Sonali Bank BD',
    recipientAccount: '****4578',
    amount: 85000, currency: 'BDT', amountGBP: 620,
    paymentMethod: 'Bank Transfer (International)',
    requestedBy: 'Farzana Islam',
    approvedBy: 'Rahim Ahmed',
    status: 'paid',
    requestedAt: '2026-03-20',
    approvedAt: '2026-03-21',
    paidAt: '2026-03-28',
    note: 'Covers funeral, burial and 3-day meal costs for the family.',
  },
  {
    id: 'dis-002', causeId: 'cause-002',
    title: 'Nasreen Medical — Spire Hospital Invoice',
    recipient: 'Spire Hospital Birmingham',
    recipientBank: 'Barclays Business',
    recipientAccount: '****9012',
    amount: 2800, currency: 'GBP', amountGBP: 2800,
    paymentMethod: 'Bank Transfer',
    requestedBy: 'Farzana Islam',
    approvedBy: 'Rahim Ahmed',
    status: 'approved',
    requestedAt: '2026-03-22',
    approvedAt: '2026-03-24',
    paidAt: null,
    note: 'First payment for Nasreen\'s dialysis treatment. Invoice #SP-2026-0382.',
  },
  {
    id: 'dis-003', causeId: 'cause-004',
    title: 'Mosque Roof Repair — Phase 1 Advance',
    recipient: 'Al-Noor Construction Ltd',
    recipientBank: 'HSBC Business',
    recipientAccount: '****7234',
    amount: 15000, currency: 'GBP', amountGBP: 15000,
    paymentMethod: 'Bank Transfer',
    requestedBy: 'Farzana Islam',
    approvedBy: null,
    status: 'pending',
    requestedAt: '2026-03-26',
    approvedAt: null,
    paidAt: null,
    note: 'Phase 1 contractor advance payment as per signed contract.',
  },
  {
    id: 'dis-004', causeId: 'cause-003',
    title: 'Zakat Distribution — Batch 1',
    recipient: 'Multiple Recipients (14)',
    recipientBank: 'Various',
    recipientAccount: 'Multiple',
    amount: 12000, currency: 'GBP', amountGBP: 12000,
    paymentMethod: 'Multiple (Cash + Transfer)',
    requestedBy: 'Farzana Islam',
    approvedBy: null,
    status: 'pending',
    requestedAt: '2026-03-28',
    approvedAt: null,
    paidAt: null,
    note: 'First batch of Zakat distribution to 14 verified recipients. List attached.',
  },
  {
    id: 'dis-005', causeId: 'cause-005',
    title: 'Flood Relief — NGO Partner Transfer',
    recipient: 'BRAC Bangladesh',
    recipientBank: 'Dutch-Bangla Bank',
    recipientAccount: '****3388',
    amount: 3200000, currency: 'BDT', amountGBP: 22500,
    paymentMethod: 'International Wire Transfer',
    requestedBy: 'Farzana Islam',
    approvedBy: 'Rahim Ahmed',
    status: 'paid',
    requestedAt: '2025-09-10',
    approvedAt: '2025-09-12',
    paidAt: '2025-09-15',
    note: 'Full relief fund transferred to BRAC for Sylhet flood distribution.',
  },
];

/* ---- NOTIFICATIONS ---- */
const NOTIFICATIONS = [
  {
    id: 'notif-001', type: 'membership_request',
    title: 'New Membership Request',
    message: 'Tarek Miah has requested to join Sylhet Welfare Trust.',
    time: '2 hours ago', read: false,
    link: 'app/organization/membership-requests.html',
    icon: '👤', iconBg: '#EBF5FB',
  },
  {
    id: 'notif-002', type: 'contribution',
    title: 'Contribution Under Review',
    message: 'Imran Hossain\'s £300 contribution is awaiting receipt verification.',
    time: '5 hours ago', read: false,
    link: 'app/contributions/review.html',
    icon: '💰', iconBg: '#EAFAF1',
  },
  {
    id: 'notif-003', type: 'disbursement',
    title: 'Disbursement Request Pending',
    message: 'Mosque Roof Repair Phase 1 advance of £15,000 needs approval.',
    time: '1 day ago', read: false,
    link: 'app/disbursements/approve.html',
    icon: '📤', iconBg: '#FEF9E7',
  },
  {
    id: 'notif-004', type: 'verification',
    title: 'Nominee Verification Needed',
    message: 'Fatima Begum (nominee for Sadia Karim) documents are ready for review.',
    time: '1 day ago', read: true,
    link: 'app/nominees/review.html',
    icon: '✅', iconBg: '#E8F8F5',
  },
  {
    id: 'notif-005', type: 'cause',
    title: 'Cause Nearing Target',
    message: 'Emergency Medical Support cause is 89% funded. £450 remaining.',
    time: '2 days ago', read: true,
    link: 'app/causes/detail.html',
    icon: '📊', iconBg: '#EBF5FB',
  },
  {
    id: 'notif-006', type: 'announcement',
    title: 'Annual General Meeting',
    message: 'AGM scheduled for Saturday 12 April 2026 at Green Street Community Hall.',
    time: '3 days ago', read: true,
    link: 'app/notifications/announcement-detail.html',
    icon: '📢', iconBg: '#FDEBD0',
  },
  {
    id: 'notif-007', type: 'payment',
    title: 'Disbursement Paid',
    message: 'BDT 85,000 successfully sent to Nurul Islam family for funeral costs.',
    time: '1 week ago', read: true,
    link: 'app/disbursements/paid.html',
    icon: '✅', iconBg: '#EAFAF1',
  },
];

/* ---- ANNOUNCEMENTS ---- */
const ANNOUNCEMENTS = [
  {
    id: 'ann-001', orgId: 'org-001',
    title: 'Annual General Meeting — April 2026',
    body: `Dear Members,\n\nYou are cordially invited to attend our Annual General Meeting (AGM) for Sylhet Welfare Trust.\n\n📅 Date: Saturday, 12 April 2026\n🕑 Time: 2:00 PM – 5:00 PM\n📍 Venue: Green Street Community Hall, Birmingham B9 4AU\n\nAgenda includes:\n- Treasurer's report for FY 2025-26\n- Election of 3 committee positions\n- Review of cause performance\n- Proposal for new membership tiers\n\nPlease confirm attendance by 8 April. Light refreshments will be served.\n\nJazakAllah Khair,\nThe Committee`,
    author: 'Rahim Ahmed',
    postedAt: '2026-03-25',
    category: 'Event',
    pinned: true,
    readCount: 142,
  },
  {
    id: 'ann-002', orgId: 'org-001',
    title: 'Ramadan Zakat Deadline Reminder',
    body: `Assalamu Alaikum,\n\nThis is a reminder that our Ramadan Zakat collection deadline is 9 April 2026 (27th Ramadan).\n\nIf you have not yet paid your Zakat through the platform, please do so before the deadline so that distribution can be made before Eid.\n\nBank details and payment instructions are available on the Causes page.\n\nMay Allah accept your Zakat and bless your families.`,
    author: 'Farzana Islam',
    postedAt: '2026-03-22',
    category: 'Reminder',
    pinned: false,
    readCount: 198,
  },
  {
    id: 'ann-003', orgId: 'org-001',
    title: 'New Document Verification Policy',
    body: `Dear Members,\n\nEffective 1 April 2026, all new member and nominee verifications will require a clear scan/photo of either:\n\n1. National Identity Card (NID) — Bangladesh\n2. Valid Passport (any nationality)\n3. British Driving Licence + Utility Bill\n\nDocuments must be less than 3 months old for utility bills. Old submissions without supporting documents will be asked to re-submit.\n\nFor questions, contact the secretary at secretary@sylhetwelfare.org.uk`,
    author: 'Rahim Ahmed',
    postedAt: '2026-03-18',
    category: 'Policy',
    pinned: false,
    readCount: 167,
  },
];

/* ---- AUDIT LOG ---- */
const AUDIT_LOG = [
  {
    id: 'audit-001', actor: 'Farzana Islam', actorRole: 'Treasurer',
    action: 'DISBURSEMENT_MARKED_PAID', target: 'Disbursement dis-001',
    details: 'Marked BDT 85,000 funeral disbursement as paid.',
    ip: '192.168.1.44', timestamp: '2026-03-28 14:32:11',
  },
  {
    id: 'audit-002', actor: 'Rahim Ahmed', actorRole: 'Admin',
    action: 'DISBURSEMENT_APPROVED', target: 'Disbursement dis-002',
    details: 'Approved £2,800 disbursement to Spire Hospital.',
    ip: '192.168.1.22', timestamp: '2026-03-24 11:05:44',
  },
  {
    id: 'audit-003', actor: 'Farzana Islam', actorRole: 'Treasurer',
    action: 'CONTRIBUTION_APPROVED', target: 'Contribution con-003',
    details: 'Approved Zakat contribution of £1,800 from Farzana Islam.',
    ip: '192.168.1.44', timestamp: '2026-03-06 09:21:08',
  },
  {
    id: 'audit-004', actor: 'Rahim Ahmed', actorRole: 'Admin',
    action: 'CAUSE_PUBLISHED', target: 'Cause cause-001',
    details: 'Published cause: Death Support Fund — Nurul Islam.',
    ip: '192.168.1.22', timestamp: '2026-03-16 08:44:30',
  },
  {
    id: 'audit-005', actor: 'Rahim Ahmed', actorRole: 'Admin',
    action: 'MEMBER_APPROVED', target: 'Member Dilnoza Khanom',
    details: 'Approved membership request from Dilnoza Khanom.',
    ip: '192.168.1.22', timestamp: '2026-03-20 16:10:00',
  },
  {
    id: 'audit-006', actor: 'Farzana Islam', actorRole: 'Treasurer',
    action: 'RECEIPT_VERIFIED', target: 'Receipt rec-001',
    details: 'Verified Lloyds Bank receipt for Rahim Ahmed — £500.',
    ip: '192.168.1.44', timestamp: '2026-03-19 10:05:22',
  },
  {
    id: 'audit-007', actor: 'Rahim Ahmed', actorRole: 'Admin',
    action: 'MEMBER_SUSPENDED', target: 'Member Ruhul Amin Sheikh',
    details: 'Member suspended pending disciplinary review.',
    ip: '192.168.1.22', timestamp: '2026-03-12 13:50:00',
  },
  {
    id: 'audit-008', actor: 'Rahim Ahmed', actorRole: 'Admin',
    action: 'NOMINEE_VERIFIED', target: 'Nominee Sumaiya Ahmed',
    details: 'Verified nominee documents for Sumaiya Ahmed (spouse of Rahim Ahmed).',
    ip: '192.168.1.22', timestamp: '2024-06-01 10:00:00',
  },
];

/* ---- ACTIVITY LOG ---- */
const ACTIVITY_LOG = [
  { id: 'act-001', actor: 'Imran Hossain', action: 'Submitted contribution', detail: '£300 for Emergency Medical Support', time: '2026-03-27 18:42', icon: '💰' },
  { id: 'act-002', actor: 'Tarek Miah',    action: 'Requested membership', detail: 'Sylhet Welfare Trust', time: '2026-03-27 12:11', icon: '👤' },
  { id: 'act-003', actor: 'Marium Khatun', action: 'Requested membership', detail: 'Sylhet Welfare Trust', time: '2026-03-26 09:05', icon: '👤' },
  { id: 'act-004', actor: 'Farzana Islam', action: 'Marked disbursement paid', detail: 'BDT 85,000 — Nurul Islam Family', time: '2026-03-28 14:32', icon: '✅' },
  { id: 'act-005', actor: 'Sadia Karim',   action: 'Uploaded receipt', detail: 'NatWest receipt — £400 Zakat', time: '2026-03-22 17:30', icon: '📎' },
  { id: 'act-006', actor: 'Rahim Ahmed',   action: 'Created cause draft', detail: 'Widow Support — Hasna Khanom', time: '2026-03-28 10:00', icon: '📋' },
  { id: 'act-007', actor: 'Rahim Ahmed',   action: 'Approved disbursement', detail: '£2,800 — Spire Hospital', time: '2026-03-24 11:05', icon: '✅' },
  { id: 'act-008', actor: 'Nasreen Begum', action: 'Added nominee', detail: 'Nominee: Fatima Begum (Mother)', time: '2026-03-23 16:20', icon: '👨‍👩‍👧' },
  { id: 'act-009', actor: 'Rahim Ahmed',   action: 'Approved member', detail: 'Dilnoza Khanom joined as member', time: '2026-03-20 16:10', icon: '✅' },
  { id: 'act-010', actor: 'Farzana Islam', action: 'Posted announcement', detail: 'Ramadan Zakat deadline reminder', time: '2026-03-22 10:30', icon: '📢' },
];

/* ---- REPORTS DATA ---- */
const REPORTS = {
  collections: {
    totalThisYear: 132400,
    totalLastYear: 98200,
    byMonth: [
      { month: 'Oct 25', amount: 8200 },
      { month: 'Nov 25', amount: 11400 },
      { month: 'Dec 25', amount: 14200 },
      { month: 'Jan 26', amount: 9800 },
      { month: 'Feb 26', amount: 22400 },
      { month: 'Mar 26', amount: 38200 },
    ],
    byMethod: [
      { method: 'Bank Transfer', amount: 96200, pct: 72 },
      { method: 'Cash', amount: 18400, pct: 14 },
      { method: 'Mobile Banking', amount: 12200, pct: 9 },
      { method: 'Card Payment', amount: 5600, pct: 5 },
    ],
    byCause: [
      { cause: 'Death Support', amount: 12400, contributors: 48 },
      { cause: 'Medical Emergency', amount: 3750, contributors: 23 },
      { cause: 'Zakat Fund', amount: 38200, contributors: 142 },
      { cause: 'Mosque Renovation', amount: 67000, contributors: 88 },
      { cause: 'Flood Relief', amount: 11050, contributors: 167 },
    ],
  },
  disbursements: {
    totalThisYear: 31320,
    totalLastYear: 44100,
    byStatus: [
      { status: 'Paid', amount: 23120, count: 8 },
      { status: 'Approved (Pending)', amount: 2800, count: 1 },
      { status: 'Pending Approval', amount: 27000, count: 2 },
    ],
    recent: [
      { ref: 'dis-001', description: 'Nurul Islam Funeral', amount: 620, currency: 'GBP (BDT 85k)', date: '2026-03-28', status: 'paid' },
      { ref: 'dis-002', description: 'Spire Hospital Invoice', amount: 2800, currency: 'GBP', date: '2026-03-24', status: 'approved' },
      { ref: 'dis-005', description: 'BRAC Flood Relief', amount: 22500, currency: 'GBP', date: '2025-09-15', status: 'paid' },
    ],
  },
  members: {
    total: 214, active: 198, pending: 5, suspended: 4, underReview: 7,
    byJoinYear: [
      { year: '2014-2016', count: 42 },
      { year: '2017-2019', count: 68 },
      { year: '2020-2022', count: 54 },
      { year: '2023-2024', count: 38 },
      { year: '2025-2026', count: 12 },
    ],
  },
};

/* ---- ROLES ---- */
const ROLES = [
  { id: 'admin',     label: 'Admin',     desc: 'Full access. Manage members, causes, verify documents, approve actions.',   color: '#1B4F72', permissions: ['all'] },
  { id: 'treasurer', label: 'Treasurer', desc: 'Manage contributions, verify receipts, process disbursements, export reports.', color: '#2E86AB', permissions: ['contributions', 'receipts', 'disbursements', 'reports'] },
  { id: 'auditor',   label: 'Auditor',   desc: 'Read-only access to all financial data, audit logs, and reports.',            color: '#148F77', permissions: ['view_all', 'audit', 'reports'] },
  { id: 'member',    label: 'Member',    desc: 'Contribute to causes, manage nominees, view own profile and contribution status.', color: '#7F8C8D', permissions: ['contribute', 'nominees', 'own_profile'] },
];

/* ---- CURRENT USER (simulated logged-in user) ---- */
let CURRENT_USER = {
  id: 'mem-001',
  name: 'Rahim Ahmed',
  email: 'rahim.ahmed@example.com',
  role: 'admin',
  orgId: 'org-001',
  orgName: 'Sylhet Welfare Trust',
  avatar: 'RA',
  notifCount: 3,
};

/* ---- HELPER: format currency ---- */
function formatCurrency(amount, currency = 'GBP') {
  if (currency === 'GBP') return '£' + amount.toLocaleString();
  if (currency === 'BDT') return '৳' + amount.toLocaleString();
  return amount.toLocaleString() + ' ' + currency;
}

/* ---- HELPER: format date ---- */
function formatDate(dateStr) {
  if (!dateStr) return '—';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

/* ---- HELPER: get status badge HTML ---- */
function statusBadge(status, label) {
  const map = {
    pending:      'badge-pending',
    under_review: 'badge-review',
    approved:     'badge-approved',
    rejected:     'badge-rejected',
    verified:     'badge-verified',
    active:       'badge-active',
    suspended:    'badge-suspended',
    closed:       'badge-closed',
    draft:        'badge-draft',
    published:    'badge-published',
    paid:         'badge-paid',
  };
  const cls = map[status] || 'badge-draft';
  const text = label || status.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
  return `<span class="badge badge-dot ${cls}">${text}</span>`;
}

/* ---- HELPER: get initials ---- */
function getInitials(name) {
  return name.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
}

/* ---- HELPER: time ago ---- */
function timeAgo(dateStr) {
  const now = new Date('2026-03-29');
  const d = new Date(dateStr);
  const diff = Math.floor((now - d) / 86400000);
  if (diff === 0) return 'Today';
  if (diff === 1) return 'Yesterday';
  if (diff < 7) return diff + ' days ago';
  if (diff < 30) return Math.floor(diff / 7) + ' weeks ago';
  return formatDate(dateStr);
}
