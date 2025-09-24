// Authentication utilities for Digital Twin Substation
class AuthManager {
    static checkAuthentication() {
        const authToken = localStorage.getItem('authToken');
        if (!authToken) {
            window.location.href = 'login.html';
            return false;
        }
        return true;
    }

    static logout() {
        if (confirm('Are you sure you want to logout?')) {
            localStorage.removeItem('authToken');
            localStorage.removeItem('substationId');
            window.location.href = 'index.html';
        }
    }

    static isAuthenticated() {
        return localStorage.getItem('authToken') !== null;
    }

    static getSubstationId() {
        return localStorage.getItem('substationId');
    }
}

// Auto-check authentication on page load for protected pages
document.addEventListener('DOMContentLoaded', function() {
    // Only check authentication if we're not on login or index page
    const currentPage = window.location.pathname.split('/').pop();
    const publicPages = ['login.html', 'index.html', ''];
    
    if (!publicPages.includes(currentPage)) {
        AuthManager.checkAuthentication();
    }
});

// Global logout function for navbar
function logout() {
    AuthManager.logout();
}
