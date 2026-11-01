
// Course data
// Course data
const courses = [
        {
            "title": "Assembly 101",
            "image": "Images/Assembly_101.png",
            "link": "https://LexCode30.github.io/Assembly_101/",
            "category": "systems"
        },
        {
            "title": "C sharp 101 for Hackers",
            "image": "Images/C_sharp_101_for_Hackers.png",
            "link": "https://LexCode30.github.io/C_sharp_101_for_Hackers/",
            "category": "programming"
        },
        {
            "title": "Detection Engineering for Beginners",
            "image": "Images/Detection_Engineering_for_Beginners.png",
            "link": "https://LexCode30.github.io/Detection_Engineering_for_Beginners/",
            "category": "cybersecurity"
        },
        {
            "title": "Linux 101",
            "image": "Images/Linux_101.png",
            "link": "https://LexCode30.github.io/Linux_101/",
            "category": "systems"
        },
        {
            "title": "Linux Privilege Escalation for Beginners",
            "image": "Images/Linux_Privilege_Escalation_for_Beginners.png",
            "link": "https://LexCode30.github.io/Linux_Privilege_Escalation_for_Beginners/",
            "category": "systems"
        },
        {
            "title": "Mobile Application Penetration Testing",
            "image": "Images/Mobile_Application_Penetration_Testing.png",
            "link": "https://LexCode30.github.io/Mobile_Application_Penetration_Testing/",
            "category": "cybersecurity"
        },
        {
            "title": "Movement Pivoting and Persistence",
            "image": "Images/Movement_Pivoting_and_Persistence.png",
            "link": "https://LexCode30.github.io/Movement_Pivoting_and_Persistence/",
            "category": "cybersecurity"
        },
        {
            "title": "Open-Source Intelligence (OSINT) Fundamentals",
            "image": "Images/Open-Source_Intelligence_-OSINT-_Fundamentals.png",
            "link": "https://LexCode30.github.io/Open-Source_Intelligence_-OSINT-_Fundamentals/",
            "category": "programming"
        },
        {
            "title": "Practical API Hacking",
            "image": "Images/Practical_API_Hacking.png",
            "link": "https://LexCode30.github.io/Practical_API_Hacking/",
            "category": "cybersecurity"
        },
        {
            "title": "Practical Bug Bounty",
            "image": "Images/Practical_Bug_Bounty.png",
            "link": "https://LexCode30.github.io/Practical_Bug_Bounty/",
            "category": "cybersecurity"
        },
        {
            "title": "Practical Ethical Hacking",
            "image": "Images/Practical_Ethical_Hacking.png",
            "link": "https://LexCode30.github.io/Practical_Ethical_Hacking/",
            "category": "cybersecurity"
        },
        {
            "title": "Practical Malware Analysis and Triage",
            "image": "Images/Practical_Malware_Analysis_and_Triage.png",
            "link": "https://LexCode30.github.io/Practical_Malware_Analysis_and_Triage/",
            "category": "cybersecurity"
        },
        {
            "title": "Practical Phishing Campaigns",
            "image": "Images/Practical_Phishing_Campaigns.png",
            "link": "https://LexCode30.github.io/Practical_Phishing_Campaigns/",
            "category": "cybersecurity"
        },
        {
            "title": "Practical Web Hacking",
            "image": "Images/Practical_Web_Hacking.png",
            "link": "https://LexCode30.github.io/Practical_Web_Hacking/",
            "category": "cybersecurity"
        },
        {
            "title": "Python 101 for Hackers",
            "image": "Images/Python_101_for_Hackers.png",
            "link": "https://LexCode30.github.io/Python_101_for_Hackers/",
            "category": "programming"
        }
    ];

// App state
const state = {
    searchTerm: '',
    activeCategory: 'all',
    filteredCourses: [...courses]
};

// DOM elements
const elements = {
    container: null,
    searchInput: null,
    clearBtn: null,
    filterBtns: null,
    noResults: null,
    resultsInfo: null,
    resetBtn: null
};

// Initialize DOM elements
function initElements() {
    elements.container = document.getElementById('courses-container');
    elements.searchInput = document.getElementById('search');
    elements.clearBtn = document.getElementById('clear-search');
    elements.filterBtns = document.querySelectorAll('.filter-btn');
    elements.noResults = document.getElementById('no-results');
    elements.resultsInfo = document.getElementById('results-info');
    elements.resetBtn = document.getElementById('reset-search');
}

// Debounce function for search performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Create course card HTML
function createCourseCard(course) {
    const card = document.createElement('article');
    card.className = 'course-card';
    card.setAttribute('role', 'listitem');
    
    card.innerHTML = `
        <div class="course-image" style="background-image: url('${course.image}')" role="img" aria-label="${course.title} thumbnail">
            <!-- Title removed from here -->
        </div>
        <div class="course-info">
            <h2 class="course-title">${course.title}</h2> <!-- Title moved here -->
            <a href="${course.link}" class="course-link" target="_blank" rel="noopener noreferrer">
                Start Course
                <span class="sr-only">(opens in new tab)</span>
            </a>
            <div class="course-meta">
                <span class="category-tag">${course.category.replace('-', ' ')}</span>
            </div>
        </div>
    `;
    
    return card;
}

// Display courses with animation
function displayCourses(coursesToShow) {
    elements.container.innerHTML = '';
    elements.container.classList.add('loading');
    
    // Update results info
    updateResultsInfo(coursesToShow.length);
    
    // Show/hide no results message
    if (coursesToShow.length === 0) {
        elements.noResults.style.display = 'block';
        elements.container.style.display = 'none';
    } else {
        elements.noResults.style.display = 'none';
        elements.container.style.display = 'grid';
        
        // Create fragment for better performance
        const fragment = document.createDocumentFragment();
        coursesToShow.forEach(course => {
            fragment.appendChild(createCourseCard(course));
        });
        elements.container.appendChild(fragment);
    }
    
    // Remove loading state
    setTimeout(() => {
        elements.container.classList.remove('loading');
    }, 100);
}

// Update results info
function updateResultsInfo(count) {
    let message = '';
    if (state.searchTerm || state.activeCategory !== 'all') {
        message = `Found ${count} course${count !== 1 ? 's' : ''}`;
        if (state.searchTerm) {
            message += ` matching "${state.searchTerm}"`;
        }
        if (state.activeCategory !== 'all') {
            message += ` in ${state.activeCategory.replace('-', ' ')}`;
        }
    }
    elements.resultsInfo.textContent = message;
}

// Filter courses
function filterCourses() {
    let filtered = [...courses];
    
    // Filter by category
    if (state.activeCategory !== 'all') {
        filtered = filtered.filter(course => course.category === state.activeCategory);
    }
    
    // Filter by search term
    if (state.searchTerm) {
        const term = state.searchTerm.toLowerCase();
        filtered = filtered.filter(course => 
            course.title.toLowerCase().includes(term) ||
            course.category.toLowerCase().includes(term)
        );
    }
    
    state.filteredCourses = filtered;
    displayCourses(filtered);
}

// Handle search
const handleSearch = debounce((value) => {
    state.searchTerm = value;
    elements.clearBtn.classList.toggle('visible', value.length > 0);
    filterCourses();
}, 300);

// Handle category filter
function handleCategoryFilter(category) {
    state.activeCategory = category;
    
    // Update active button
    elements.filterBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });
    
    filterCourses();
}

// Clear search
function clearSearch() {
    elements.searchInput.value = '';
    state.searchTerm = '';
    elements.clearBtn.classList.remove('visible');
    filterCourses();
}

// Reset filters
function resetFilters() {
    clearSearch();
    handleCategoryFilter('all');
}

// Lazy load images
function lazyLoadImages() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.style.backgroundImage = img.dataset.src;
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('.course-image').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Initialize event listeners
function initEventListeners() {
    // Search input
    elements.searchInput.addEventListener('input', (e) => {
        handleSearch(e.target.value);
    });
    
    // Clear search button
    elements.clearBtn.addEventListener('click', clearSearch);
    
    // Category filters
    elements.filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            handleCategoryFilter(btn.dataset.category);
        });
    });
    
    // Reset button
    elements.resetBtn.addEventListener('click', resetFilters);
    
    // Keyboard navigation for search
    elements.searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            clearSearch();
            elements.searchInput.blur();
        }
    });
}

// Initialize app
function init() {
    initElements();
    initEventListeners();
    displayCourses(courses);
    
    // Set up lazy loading after initial render
    requestAnimationFrame(() => {
        lazyLoadImages();
    });
}

// Start app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
