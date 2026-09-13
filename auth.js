/**
 * ==========================================================================
 * Scheme Sathi - Citizen Authentication Engine (auth.js)
 * Pure Client-Side Local Storage Auth System for Indian Citizens
 * ==========================================================================
 */

// 1. Pre-seeded Authentic Demo Citizen Accounts (Fallback for localStorage)
const DEFAULT_AUTH_USERS = {
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

// 2. Comprehensive List of 36 Indian States & Union Territories
const INDIAN_STATES_LIST = [
    'Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam',
    'Bihar', 'Chandigarh', 'Chhattisgarh', 'Dadra and Nagar Haveli and Daman and Diu',
    'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir',
    'Jharkhand', 'Karnataka', 'Kerala', 'Ladakh', 'Lakshadweep', 'Madhya Pradesh',
    'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha',
    'Puducherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana',
    'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
];

/**
 * Get all registered citizens from localStorage
 */
function getLocalUsersDb() {
    try {
        const stored = localStorage.getItem('scheme_sathi_users_db');
        if (stored) {
            const parsed = JSON.parse(stored);
            return Object.assign({}, DEFAULT_AUTH_USERS, parsed);
        }
    } catch (e) {
        console.error('Error loading users database:', e);
    }
    saveLocalUsersDb(DEFAULT_AUTH_USERS);
    return Object.assign({}, DEFAULT_AUTH_USERS);
}

/**
 * Save registered citizens to localStorage
 */
function saveLocalUsersDb(usersDb) {
    try {
        localStorage.setItem('scheme_sathi_users_db', JSON.stringify(usersDb));
    } catch (e) {
        console.error('Error saving users database:', e);
    }
}

/**
 * Get current logged in citizen session
 */
function getActiveCitizen() {
    try {
        const user = localStorage.getItem('scheme_sathi_current_user');
        return user ? JSON.parse(user) : null;
    } catch (e) {
        return null;
    }
}

/**
 * Save active citizen session to localStorage
 */
function setActiveCitizen(user) {
    if (user) {
        localStorage.setItem('scheme_sathi_current_user', JSON.stringify(user));
        if (user.profile) {
            localStorage.setItem('scheme_sathi_profile', JSON.stringify(user.profile));
        }
        if (user.savedSchemeIds) {
            localStorage.setItem('scheme_sathi_saved', JSON.stringify(user.savedSchemeIds));
        }
    } else {
        localStorage.removeItem('scheme_sathi_current_user');
    }
}

/**
 * Sign Out active citizen
 */
function signOutCitizen() {
    localStorage.removeItem('scheme_sathi_current_user');
    window.location.reload();
}

/**
 * Toggle Password field visibility (show / hide text)
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
 * Initialize Dark / Light Theme on Auth Page
 */
function initAuthTheme() {
    const savedTheme = localStorage.getItem('scheme_sathi_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    const themeIcon = document.getElementById('authThemeIcon');
    if (themeIcon) {
        themeIcon.className = savedTheme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
}

/**
 * Toggle Dark / Light Theme
 */
function toggleAuthTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('scheme_sathi_theme', newTheme);
    const themeIcon = document.getElementById('authThemeIcon');
    if (themeIcon) {
        themeIcon.className = newTheme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
}

/**
 * Calculate Password Strength (0 to 100)
 */
function calculatePasswordStrength(pass) {
    if (!pass) return { score: 0, text: '', color: '' };
    let score = 0;
    if (pass.length >= 6) score += 25;
    if (pass.length >= 10) score += 20;
    if (/[A-Z]/.test(pass)) score += 20;
    if (/[0-9]/.test(pass)) score += 20;
    if (/[^A-Za-z0-9]/.test(pass)) score += 15;

    if (score < 40) return { score: Math.max(score, 20), text: 'Weak', color: '#ef4444' };
    if (score < 75) return { score: score, text: 'Medium', color: '#f59e0b' };
    return { score: 100, text: 'Strong', color: '#10b981' };
}

/**
 * Extract 2-letter Initials from full name
 */
function getCitizenInitials(name) {
    if (!name) return 'U';
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/**
 * Sanitize text against XSS
 */
function escapeAuthHtml(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}
