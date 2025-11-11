// Custom JavaScript for front page
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the front page
    if (window.location.pathname === '/' || window.location.pathname === '/blog/') {
        console.log('Front page loaded - custom JS running');
        
        // Add your front page specific JavaScript here
        // Example: Add a dynamic greeting
        const greeting = document.createElement('div');
        greeting.innerHTML = '<p>Welcome to my blog! This message was added by custom JavaScript.</p>';
        greeting.style.textAlign = 'center';
        greeting.style.padding = '10px';
        greeting.style.backgroundColor = '#f0f0f0';
        greeting.style.borderRadius = '5px';
        greeting.style.margin = '20px 0';
        
        // Insert the greeting after the header
        const content = document.querySelector('.content');
        if (content) {
            content.insertBefore(greeting, content.firstChild);
        }
    }
});