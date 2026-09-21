// Kensultagribase JavaScript Logic

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Update Year in Footer
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIconOpen = document.getElementById('menu-icon-open');
  const menuIconClose = document.getElementById('menu-icon-close');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = !mobileMenu.classList.contains('hidden');
      if (isExpanded) {
        mobileMenu.classList.add('hidden');
        menuIconOpen.classList.remove('hidden');
        menuIconClose.classList.add('hidden');
      } else {
        mobileMenu.classList.remove('hidden');
        menuIconOpen.classList.add('hidden');
        menuIconClose.classList.remove('hidden');
      }
    });

    // Close menu when clicking any nav link
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIconOpen.classList.remove('hidden');
        menuIconClose.classList.add('hidden');
      });
    });
  }

  // Sticky Navbar Box-Shadow on Scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Main Inquiry Form Submission
  const inquiryForm = document.getElementById('inquiry-form');
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = document.getElementById('submit-btn');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Sending...</span>`;

      const fullName = document.getElementById('fullName').value;
      const service = document.getElementById('serviceInterest').value;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        if (window.lucide) window.lucide.createIcons();

        showToast(`Thank you, ${fullName}! Your inquiry for ${service || 'our services'} has been received.`);
        inquiryForm.reset();
      }, 1000);
    });
  }

  // Service Modal Form Submission
  const modalForm = document.getElementById('modal-form');
  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const serviceName = document.getElementById('modalServiceInput').value;
      const modalName = document.getElementById('modalName').value;

      closeInquiryModal();
      showToast(`Thank you, ${modalName}! We will reach out regarding ${serviceName}.`);
      modalForm.reset();
    });
  }

  // Close modal when clicking outside
  const modalOverlay = document.getElementById('serviceModal');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeInquiryModal();
      }
    });
  }
});

// Open Service Inquiry Modal
function openInquiryModal(serviceName) {
  const modal = document.getElementById('serviceModal');
  const serviceNameDisplay = document.getElementById('modalServiceName');
  const serviceInput = document.getElementById('modalServiceInput');

  if (modal && serviceNameDisplay && serviceInput) {
    serviceNameDisplay.textContent = serviceName;
    serviceInput.value = serviceName;
    modal.classList.remove('hidden');
    if (window.lucide) window.lucide.createIcons();
  }
}

// Close Service Inquiry Modal
function closeInquiryModal() {
  const modal = document.getElementById('serviceModal');
  if (modal) {
    modal.classList.add('hidden');
  }
}

// Send via WhatsApp from modal
function sendModalWhatsApp() {
  const serviceName = document.getElementById('modalServiceInput').value || 'Agribusiness Services';
  const name = document.getElementById('modalName').value || 'Client';
  const phone = document.getElementById('modalPhone').value || '';
  const notes = document.getElementById('modalNotes').value || '';

  const message = `Hello Kensultagribase! My name is ${name}. I am inquiring about *${serviceName}*.%0A` +
    (phone ? `Phone: ${phone}%0A` : '') +
    (notes ? `Details: ${notes}%0A` : '');

  const whatsappUrl = `https://wa.me/233549499099?text=${message}`;
  window.open(whatsappUrl, '_blank');
  closeInquiryModal();
}

// Toast Notification
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');

  if (toast && toastMessage) {
    toastMessage.textContent = message;
    toast.classList.add('show');
    if (window.lucide) window.lucide.createIcons();

    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }
}
