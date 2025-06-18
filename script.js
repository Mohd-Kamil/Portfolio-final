// ===== PORTFOLIO WEBSITE JAVASCRIPT =====

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== NAVIGATION FUNCTIONALITY =====
    
    // Navbar background change on scroll with enhanced effects
    const navbar = document.getElementById('navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
            navbar.style.background = 'rgba(15, 23, 42, 0.98)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.15)';
            navbar.style.backdropFilter = 'blur(25px)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            navbar.style.boxShadow = 'none';
            navbar.style.backdropFilter = 'blur(20px)';
        }
        
        // Hide/show navbar on scroll
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Smooth scrolling for navigation links with enhanced easing
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Add click effect
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
            }
        });
    });

    // Active navigation link highlighting with enhanced detection
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.navbar-nav .nav-link[href="#${sectionId}"]`);

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    link.style.transform = 'translateY(0)';
                });
                if (navLink) {
                    navLink.classList.add('active');
                    navLink.style.transform = 'translateY(-2px)';
                }
            }
        });
    });

    // ===== PARALLAX EFFECTS =====
    
    // Parallax background effect
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-background, .hero-section::before, .hero-section::after');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });

    // ===== ADVANCED ANIMATIONS =====
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Add staggered animation for child elements
                const children = entry.target.querySelectorAll('.animate-child');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('animate-in');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.skill-item, .project-card, .tech-item, .stat-item').forEach(el => {
        observer.observe(el);
    });

    // ===== TYPING ANIMATION ENHANCEMENT =====
    
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        const roles = ['Web Developer', 'BCA Graduate', 'Problem Solver', 'Creative Thinker'];
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;

        function typeWriter() {
            const currentRole = roles[roleIndex];
            
            if (isDeleting) {
                typingText.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                typingText.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100;
            }

            if (!isDeleting && charIndex === currentRole.length) {
                typingSpeed = 2000; // Pause at end
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                typingSpeed = 500; // Pause before next word
            }

            setTimeout(typeWriter, typingSpeed);
        }

        // Start typing animation after initial delay
        setTimeout(typeWriter, 2000);
    }

    // ===== SKILL PROGRESS ANIMATION =====
    
    function animateSkills() {
        const skillBars = document.querySelectorAll('.progress-bar');
        skillBars.forEach(bar => {
            const targetWidth = bar.getAttribute('aria-valuenow') + '%';
            // Reset to 0% first
            bar.style.width = '0%';
            // Animate to target width after a small delay
            setTimeout(() => {
                bar.style.width = targetWidth;
            }, 100);
        });
    }

    // Trigger skill animation when skills section is visible
    const skillsSection = document.querySelector('#skills');
    if (skillsSection) {
        const skillsObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkills();
                    skillsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        skillsObserver.observe(skillsSection);
    }

    // ===== ENHANCED HOVER EFFECTS =====
    
    // Removed magnetic effect to buttons

    // ===== PLACEHOLDER FUNCTIONALITY =====
    
    // Global placeholder function (disabled for real links)
    window.showPlaceholder = function(type) {
        return;
    };

    // Enhanced resume download function
    window.downloadResume = function(event) {
        event.preventDefault();
        
        const button = event.target;
        const originalText = button.innerHTML;
        
        // Show loading state with enhanced animation
        button.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Downloading...';
        button.disabled = true;
        button.style.transform = 'scale(0.95)';
        
        // Simple and direct approach that works in most scenarios
        try {
            // Method 1: Direct link with download attribute
            const link = document.createElement('a');
            link.href = 'resume.pdf';
            link.download = 'MohdKamil_Resume.pdf';
            link.style.display = 'none';
            
            // Add to DOM, click, and remove
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Show success message
            setTimeout(() => {
                const toast = document.createElement('div');
                toast.className = 'placeholder-toast';
                toast.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                toast.innerHTML = `
                    <div class="toast-header">
                        <strong><i class="fas fa-check-circle me-2"></i>Success!</strong>
                        <button class="toast-close" onclick="this.parentElement.parentElement.remove()">&times;</button>
                    </div>
                    <div>Resume download initiated!</div>
                `;
                
                document.body.appendChild(toast);
                
                setTimeout(() => {
                    toast.classList.add('show');
                }, 100);
                
                // Auto remove success message after 3 seconds
                setTimeout(() => {
                    if (toast.parentElement) {
                        toast.classList.remove('show');
                        setTimeout(() => {
                            if (toast.parentElement) {
                                toast.remove();
                            }
                        }, 300);
                    }
                }, 3000);
            }, 500);
            
        } catch (error) {
            console.error('Download failed:', error);
            
            // Fallback: Open in new tab with instructions
            const toast = document.createElement('div');
            toast.className = 'placeholder-toast';
            toast.style.background = 'linear-gradient(135deg, #f59e0b, #d97706)';
            toast.innerHTML = `
                <div class="toast-header">
                    <strong><i class="fas fa-info-circle me-2"></i>Info</strong>
                    <button class="toast-close" onclick="this.parentElement.parentElement.remove()">&times;</button>
                </div>
                <div>PDF opened in new tab. Right-click and "Save as" to download.</div>
            `;
            
            document.body.appendChild(toast);
            
            setTimeout(() => {
                toast.classList.add('show');
            }, 100);
            
            setTimeout(() => {
                if (toast.parentElement) {
                    toast.classList.remove('show');
                    setTimeout(() => {
                        if (toast.parentElement) {
                            toast.remove();
                        }
                    }, 300);
                }
            }, 5000);
            
            // Open PDF in new tab as fallback
            window.open('resume.pdf', '_blank');
        }
        
        // Reset button with smooth animation
        setTimeout(() => {
            button.innerHTML = originalText;
            button.disabled = false;
            button.style.transform = 'scale(1)';
        }, 1000);
    };

    // ===== SCROLL ANIMATIONS =====
    
    // Enhanced scroll animations with performance optimization
    let ticking = false;
    
    function updateOnScroll() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        // Parallax effect for background elements
        const parallaxElements = document.querySelectorAll('.hero-background');
        parallaxElements.forEach(element => {
            element.style.transform = `translateY(${rate}px)`;
        });
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);

    // ===== LOADING ANIMATION =====
    
    // Enhanced page loading animation
    const addLoadingAnimation = () => {
        const loader = document.createElement('div');
        loader.className = 'page-loader';
        loader.innerHTML = `
            <div class="loader-content">
                <div class="loader-spinner"></div>
                <div class="loader-text">Loading Portfolio...</div>
            </div>
        `;
        
        document.body.appendChild(loader);
        
        // Remove loader after page loads
        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    if (loader.parentElement) {
                        loader.remove();
                    }
                }, 500);
            }, 1000);
        });
    };
    
    addLoadingAnimation();

    // ===== PERFORMANCE OPTIMIZATION =====
    
    // Debounce function for performance optimization
    function debounce(func, wait, immediate) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                timeout = null;
                if (!immediate) func(...args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func(...args);
        };
    }

    // Throttle function for scroll events
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // Apply throttling to scroll events
    const throttledScrollHandler = throttle(function() {
        // Scroll-based animations here
    }, 16); // ~60fps

    window.addEventListener('scroll', throttledScrollHandler);

    // ===== ANALYTICS AND TRACKING =====
    
    // Enhanced event tracking
    function trackEvent(eventName, eventData) {
        // This would integrate with Google Analytics or similar
        console.log('Event tracked:', eventName, eventData);
    }

    // Track important user interactions
    document.querySelectorAll('a, button').forEach(element => {
        element.addEventListener('click', function() {
            const text = this.textContent.trim();
            const href = this.getAttribute('href');
            trackEvent('click', { element: text, href: href });
        });
    });

    // Track scroll depth
    let maxScroll = 0;
    window.addEventListener('scroll', debounce(function() {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        if (scrollPercent > maxScroll) {
            maxScroll = scrollPercent;
            if (maxScroll % 25 === 0) { // Track every 25%
                trackEvent('scroll_depth', { depth: maxScroll });
            }
        }
    }, 100));

    // ===== ACCESSIBILITY ENHANCEMENTS =====
    
    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });

    // Focus management for better accessibility
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])');
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #3b82f6';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });

    // ===== RESPONSIVE ENHANCEMENTS =====
    
    // Handle mobile-specific interactions
    if ('ontouchstart' in window) {
        // Touch-specific optimizations
        document.body.classList.add('touch-device');
        
        // Disable hover effects on touch devices
        const style = document.createElement('style');
        style.textContent = `
            .touch-device .hover-effect {
                display: none;
            }
        `;
        document.head.appendChild(style);
    }

    // ===== ERROR HANDLING =====
    
    // Global error handler
    window.addEventListener('error', function(e) {
        console.error('Portfolio error:', e.error);
        trackEvent('error', { message: e.message, filename: e.filename });
    });

    // ===== INITIALIZATION COMPLETE =====
    
    console.log('Portfolio enhanced with immersive features loaded successfully!');

    // ===== RESUME DOWNLOAD CONTEXT MENU =====
    
    // Context menu functions
    window.downloadResumeDirect = function() {
        // Simple and direct approach
        try {
            const link = document.createElement('a');
            link.href = 'resume.pdf';
            link.download = 'MohdKamil_Resume.pdf';
            link.style.display = 'none';
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            showToast('Resume download initiated!', 'success');
        } catch (error) {
            console.error('Download failed:', error);
            showToast('Download failed. Opening in new tab.', 'warning');
            window.open('resume.pdf', '_blank');
        }
    };
    
    window.openResumeInNewTab = function() {
        window.open('resume.pdf', '_blank');
        showToast('Resume opened in new tab!', 'info');
    };
    
    window.copyResumeLink = function() {
        const url = window.location.origin + window.location.pathname.replace('index.html', '') + 'resume.pdf';
        navigator.clipboard.writeText(url).then(() => {
            showToast('Resume link copied to clipboard!', 'success');
        }).catch(() => {
            showToast('Failed to copy link', 'error');
        });
    };
    
    // Show toast message
    function showToast(message, type = 'info') {
        const colors = {
            success: 'linear-gradient(135deg, #10b981, #059669)',
            error: 'linear-gradient(135deg, #ef4444, #dc2626)',
            info: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
            warning: 'linear-gradient(135deg, #f59e0b, #d97706)'
        };
        
        const icons = {
            success: 'fas fa-check-circle',
            error: 'fas fa-exclamation-circle',
            info: 'fas fa-info-circle',
            warning: 'fas fa-exclamation-triangle'
        };
        
        const toast = document.createElement('div');
        toast.className = 'placeholder-toast';
        toast.style.background = colors[type];
        toast.innerHTML = `
            <div class="toast-header">
                <strong><i class="${icons[type]} me-2"></i>${type.charAt(0).toUpperCase() + type.slice(1)}</strong>
                <button class="toast-close" onclick="this.parentElement.parentElement.remove()">&times;</button>
            </div>
            <div>${message}</div>
        `;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            if (toast.parentElement) {
                toast.classList.remove('show');
                setTimeout(() => {
                    if (toast.parentElement) {
                        toast.remove();
                    }
                }, 300);
            }
        }, 3000);
    }
    
    // Right-click context menu for resume download
    const resumeBtn = document.querySelector('.resume-download-btn');
    const contextMenu = document.getElementById('resumeContextMenu');
    
    if (resumeBtn && contextMenu) {
        resumeBtn.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            
            // Position the context menu
            contextMenu.style.left = e.pageX + 'px';
            contextMenu.style.top = e.pageY + 'px';
            contextMenu.classList.add('show');
            
            // Hide context menu when clicking elsewhere
            const hideContextMenu = function() {
                contextMenu.classList.remove('show');
                document.removeEventListener('click', hideContextMenu);
            };
            
            setTimeout(() => {
                document.addEventListener('click', hideContextMenu);
            }, 100);
        });
    }
});

// ===== UTILITY FUNCTIONS =====

// Debounce function for performance optimization
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Enhanced event tracking function
function trackEvent(eventName, eventData) {
    // This would integrate with Google Analytics or similar
    console.log('Event tracked:', eventName, eventData);
    
    // Example: Send to analytics service
    // gtag('event', eventName, eventData);
} 