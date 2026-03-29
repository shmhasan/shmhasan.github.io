/* ============================================================
   UMMAH PLATFORM — App JS
   app.js — Shared helpers, UI behaviors, interactions
   ============================================================ */

/* ============================================================
   1. SIDEBAR TOGGLE
   ============================================================ */
function initSidebar() {
  const sidebar    = document.getElementById('sidebar');
  const content    = document.getElementById('appContent');
  const toggleBtn  = document.getElementById('sidebarToggle');
  const overlay    = document.getElementById('sidebarOverlay');
  if (!sidebar) return;

  const isMobile = () => window.innerWidth < 768;

  function openSidebar() {
    if (isMobile()) {
      sidebar.classList.add('mobile-open');
      overlay && overlay.classList.add('active');
    } else {
      sidebar.classList.remove('collapsed');
      content && content.classList.remove('sidebar-collapsed');
    }
  }

  function closeSidebar() {
    if (isMobile()) {
      sidebar.classList.remove('mobile-open');
      overlay && overlay.classList.remove('active');
    } else {
      sidebar.classList.add('collapsed');
      content && content.classList.add('sidebar-collapsed');
    }
  }

  function toggleSidebar() {
    if (isMobile()) {
      sidebar.classList.contains('mobile-open') ? closeSidebar() : openSidebar();
    } else {
      sidebar.classList.contains('collapsed') ? openSidebar() : closeSidebar();
    }
  }

  toggleBtn && toggleBtn.addEventListener('click', toggleSidebar);
  overlay   && overlay.addEventListener('click', closeSidebar);

  // Auto-collapse on mobile on load
  if (isMobile()) {
    sidebar.classList.remove('mobile-open');
  }

  // Restore on resize
  window.addEventListener('resize', () => {
    if (!isMobile()) {
      sidebar.classList.remove('mobile-open');
      overlay && overlay.classList.remove('active');
    }
  });
}

/* ============================================================
   2. ACTIVE NAV HIGHLIGHTING
   ============================================================ */
function initActiveNav() {
  const links = document.querySelectorAll('.sidebar-link');
  const current = window.location.pathname.split('/').pop() || 'index.html';

  links.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const hrefFile = href.split('/').pop().split('?')[0];
    if (hrefFile === current || href.includes(current)) {
      link.classList.add('active');
      // Expand parent if needed
      const section = link.closest('.sidebar-section');
      if (section) section.style.display = 'block';
    }
  });
}

/* ============================================================
   3. ROLE SWITCHER
   ============================================================ */
const ROLE_CONFIGS = {
  admin: {
    name: 'Rahim Ahmed',
    role: 'Admin',
    avatar: 'RA',
    color: '#1B4F72',
    dashboard: 'app/dashboard-admin.html',
    notifCount: 3,
  },
  treasurer: {
    name: 'Farzana Islam',
    role: 'Treasurer',
    avatar: 'FI',
    color: '#2E86AB',
    dashboard: 'app/dashboard-treasurer.html',
    notifCount: 2,
  },
  auditor: {
    name: 'Jamal Uddin',
    role: 'Auditor',
    avatar: 'JU',
    color: '#148F77',
    dashboard: 'app/dashboard-auditor.html',
    notifCount: 0,
  },
  member: {
    name: 'Sadia Karim',
    role: 'Member',
    avatar: 'SK',
    color: '#7F8C8D',
    dashboard: 'app/dashboard-member.html',
    notifCount: 1,
  },
};

function getCurrentRole() {
  return sessionStorage.getItem('demoRole') || 'admin';
}

function updateRoleSections() {
  document.querySelectorAll('.sidebar-section').forEach(section => {
    const visibleLinks = Array.from(section.querySelectorAll('.sidebar-link'))
      .filter(link => link.style.display !== 'none');
    section.style.display = visibleLinks.length ? '' : 'none';
  });
}

function initRoleSwitcher() {
  const switcher = document.getElementById('roleSwitcher');
  if (!switcher) return;

  const savedRole = getCurrentRole();
  switcher.value = savedRole;
  applyRole(savedRole);

  switcher.addEventListener('change', (e) => {
    const role = e.target.value;
    sessionStorage.setItem('demoRole', role);
    applyRole(role);
    showToast(`Switched to ${ROLE_CONFIGS[role].role} view`, 'info');
  });
}

function applyRole(role) {
  const cfg = ROLE_CONFIGS[role];
  if (!cfg) return;

  // Update topbar
  const profileName = document.getElementById('profileName');
  const profileRole = document.getElementById('profileRole');
  const profileAvatar = document.getElementById('profileAvatar');
  const notifBadge = document.getElementById('notifBadge');

  if (profileName) profileName.textContent = cfg.name;
  if (profileRole) profileRole.textContent = cfg.role;
  if (profileAvatar) {
    profileAvatar.textContent = cfg.avatar;
    profileAvatar.style.background = cfg.color;
  }
  if (notifBadge) {
    notifBadge.textContent = cfg.notifCount;
    notifBadge.style.display = cfg.notifCount > 0 ? 'flex' : 'none';
  }

  // Update sidebar user info
  const sidebarName   = document.getElementById('sidebarUserName');
  const sidebarRole   = document.getElementById('sidebarUserRole');
  const sidebarAvatar = document.getElementById('sidebarAvatar');

  if (sidebarName)   sidebarName.textContent   = cfg.name;
  if (sidebarRole)   sidebarRole.textContent   = cfg.role;
  if (sidebarAvatar) {
    sidebarAvatar.textContent  = cfg.avatar;
    sidebarAvatar.style.background = cfg.color;
  }

  // Role-specific visibility: show/hide admin-only elements
  document.querySelectorAll('[data-role]').forEach(el => {
    const allowed = el.getAttribute('data-role').split(',').map(r => r.trim());
    el.style.display = allowed.includes(role) ? '' : 'none';
  });

  // Update dashboard links after role switch
  document.querySelectorAll('[data-dashboard-link]').forEach(link => {
    const base = link.getAttribute('data-dashboard-base') || '';
    link.setAttribute('href', `${base}${cfg.dashboard}`);
  });

  updateRoleSections();
}

/* ============================================================
   4. MODALS
   ============================================================ */
function openModal(id) {
  const overlay = document.getElementById(id);
  if (overlay) {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(id) {
  const overlay = id ? document.getElementById(id) : null;
  if (overlay) {
    overlay.classList.remove('open');
  } else {
    // Close all
    document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open'));
  }
  // Only restore scroll if no modals open
  if (!document.querySelector('.modal-overlay.open')) {
    document.body.style.overflow = '';
  }
}

function initModals() {
  // Clicks on [data-modal-open]
  document.querySelectorAll('[data-modal-open]').forEach(btn => {
    btn.addEventListener('click', () => {
      openModal(btn.getAttribute('data-modal-open'));
    });
  });

  // Clicks on .modal-close or [data-modal-close]
  document.querySelectorAll('.modal-close, [data-modal-close]').forEach(btn => {
    btn.addEventListener('click', () => {
      const overlay = btn.closest('.modal-overlay');
      if (overlay) closeModal(overlay.id);
    });
  });

  // Click outside modal to close
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal(overlay.id);
    });
  });

  // Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

/* ============================================================
   5. TOAST NOTIFICATIONS
   ============================================================ */
let toastContainer = null;

function getToastContainer() {
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }
  return toastContainer;
}

function showToast(message, type = 'info', duration = 3500) {
  const container = getToastContainer();
  const icons = { success: '✅', error: '❌', warning: '⚠️', info: 'ℹ️' };
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span class="toast-icon">${icons[type] || 'ℹ️'}</span><span>${message}</span>`;
  container.appendChild(toast);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => toast.classList.add('show'));
  });

  const remove = () => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  };

  setTimeout(remove, duration);
  toast.addEventListener('click', remove);
}

/* ============================================================
   6. TAB SWITCHING
   ============================================================ */
function initTabs() {
  document.querySelectorAll('[data-tab-target]').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab-target');
      const tabGroup = btn.closest('[data-tab-group]') || btn.closest('.tabs');

      // Deactivate all in group
      const allBtns = tabGroup
        ? tabGroup.querySelectorAll('[data-tab-target]')
        : document.querySelectorAll('[data-tab-target]');

      allBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Hide/show panels
      const panelGroup = document.getElementById(target)?.closest('[data-tab-panels]');
      if (panelGroup) {
        panelGroup.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      } else {
        document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      }

      const panel = document.getElementById(target);
      if (panel) panel.classList.add('active');
    });
  });

  // Activate first tab automatically if none active
  document.querySelectorAll('.tabs').forEach(tabBar => {
    const firstBtn = tabBar.querySelector('[data-tab-target]');
    if (firstBtn && !tabBar.querySelector('.active')) {
      firstBtn.classList.add('active');
      const panel = document.getElementById(firstBtn.getAttribute('data-tab-target'));
      if (panel) panel.classList.add('active');
    }
  });
}

/* ============================================================
   7. SEARCH & FILTER SIMULATION
   ============================================================ */
function initSearch() {
  document.querySelectorAll('[data-search-table]').forEach(input => {
    const tableId = input.getAttribute('data-search-table');
    const table = document.getElementById(tableId);
    if (!table) return;

    input.addEventListener('input', () => {
      const q = input.value.toLowerCase();
      table.querySelectorAll('tbody tr').forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(q) ? '' : 'none';
      });
    });
  });

  // Filter dropdowns
  document.querySelectorAll('[data-filter-table]').forEach(select => {
    const tableId = select.getAttribute('data-filter-table');
    const col     = parseInt(select.getAttribute('data-filter-col') || '0');
    const table   = document.getElementById(tableId);
    if (!table) return;

    select.addEventListener('change', () => {
      const val = select.value.toLowerCase();
      table.querySelectorAll('tbody tr').forEach(row => {
        if (!val) { row.style.display = ''; return; }
        const cell = row.cells[col];
        const text = cell ? cell.textContent.toLowerCase() : '';
        row.style.display = text.includes(val) ? '' : 'none';
      });
    });
  });
}

/* ============================================================
   8. FORM STEPPER
   ============================================================ */
let currentStep = 1;

function initStepper() {
  const steps    = document.querySelectorAll('.step');
  const panels   = document.querySelectorAll('.stepper-panel');
  const nextBtns = document.querySelectorAll('[data-step-next]');
  const prevBtns = document.querySelectorAll('[data-step-prev]');

  if (!steps.length) return;

  function goToStep(n) {
    currentStep = n;
    steps.forEach((step, i) => {
      step.classList.remove('active', 'completed');
      if (i + 1 < n)  step.classList.add('completed');
      if (i + 1 === n) step.classList.add('active');
    });
    panels.forEach((panel, i) => {
      panel.style.display = (i + 1 === n) ? '' : 'none';
    });
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  nextBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentStep < steps.length) goToStep(currentStep + 1);
    });
  });

  prevBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentStep > 1) goToStep(currentStep - 1);
    });
  });

  goToStep(1);
}

/* ============================================================
   9. ALERT DISMISS
   ============================================================ */
function initAlerts() {
  document.querySelectorAll('.alert-dismiss').forEach(btn => {
    btn.addEventListener('click', () => {
      const alert = btn.closest('.alert, .warning-banner');
      if (alert) {
        alert.style.opacity = '0';
        alert.style.transition = 'opacity 0.3s';
        setTimeout(() => alert.remove(), 300);
      }
    });
  });
}

/* ============================================================
   10. DROPDOWN MENUS
   ============================================================ */
function initDropdowns() {
  document.querySelectorAll('[data-dropdown]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const dropdown = trigger.closest('.dropdown');
      if (!dropdown) return;

      // Close all other dropdowns
      document.querySelectorAll('.dropdown.open').forEach(d => {
        if (d !== dropdown) d.classList.remove('open');
      });

      dropdown.classList.toggle('open');
    });
  });

  // Close on outside click
  document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown.open').forEach(d => d.classList.remove('open'));
  });
}

/* ============================================================
   11. CONFIRMATION DIALOGS (inline, using modals)
   ============================================================ */
function confirmAction(message, onConfirm, type = 'danger') {
  // Create a quick modal on the fly
  const id = 'confirm-modal-' + Date.now();
  const btnClass = type === 'danger' ? 'btn-danger' : 'btn-primary';

  const html = `
    <div class="modal-overlay" id="${id}">
      <div class="modal modal-sm">
        <div class="modal-header">
          <h3 class="modal-title">Confirm Action</h3>
          <button class="modal-close" data-modal-close>✕</button>
        </div>
        <div class="modal-body">
          <p style="font-size:var(--font-size-sm);color:var(--color-text-muted)">${message}</p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-outline-muted" onclick="closeModal('${id}')">Cancel</button>
          <button class="btn ${btnClass}" id="${id}-confirm">Confirm</button>
        </div>
      </div>
    </div>`;

  document.body.insertAdjacentHTML('beforeend', html);
  openModal(id);

  document.getElementById(id + '-confirm').addEventListener('click', () => {
    closeModal(id);
    setTimeout(() => { document.getElementById(id)?.remove(); }, 400);
    onConfirm();
  });

  document.getElementById(id).querySelector('.modal-close').addEventListener('click', () => {
    closeModal(id);
    setTimeout(() => { document.getElementById(id)?.remove(); }, 400);
  });
}

/* ============================================================
   12. APPROVAL ACTIONS (approve/reject buttons)
   ============================================================ */
function initApprovalActions() {
  document.querySelectorAll('[data-action="approve"]').forEach(btn => {
    btn.addEventListener('click', () => {
      const label = btn.getAttribute('data-label') || 'this item';
      confirmAction(`Approve ${label}? This action will notify the member.`, () => {
        btn.textContent = '✓ Approved';
        btn.className = 'btn btn-sm btn-success';
        btn.disabled = true;
        const rejectBtn = btn.closest('[data-action-group]')?.querySelector('[data-action="reject"]');
        if (rejectBtn) rejectBtn.disabled = true;
        showToast('Approved successfully!', 'success');
      }, 'success');
    });
  });

  document.querySelectorAll('[data-action="reject"]').forEach(btn => {
    btn.addEventListener('click', () => {
      const label = btn.getAttribute('data-label') || 'this item';
      confirmAction(`Reject ${label}? A notification will be sent.`, () => {
        btn.textContent = '✕ Rejected';
        btn.className = 'btn btn-sm btn-danger';
        btn.disabled = true;
        const approveBtn = btn.closest('[data-action-group]')?.querySelector('[data-action="approve"]');
        if (approveBtn) approveBtn.disabled = true;
        showToast('Rejected and notified.', 'error');
      }, 'danger');
    });
  });
}

/* ============================================================
   13. PSEUDO CHART BARS (auto-render)
   ============================================================ */
function renderChartBars() {
  document.querySelectorAll('[data-chart-bar]').forEach(container => {
    const vals = container.getAttribute('data-chart-bar').split(',').map(Number);
    const max  = Math.max(...vals);
    container.classList.add('chart-placeholder');
    container.innerHTML = vals.map((v, i) => {
      const h = max > 0 ? Math.round((v / max) * 100) : 0;
      const highlight = i === vals.length - 1 ? ' highlight' : '';
      return `<div class="chart-bar${highlight}" style="height:${h}%" title="${v}"></div>`;
    }).join('');
  });
}

/* ============================================================
   14. PROGRESS BAR AUTO-ANIMATE
   ============================================================ */
function animateProgressBars() {
  document.querySelectorAll('[data-progress]').forEach(bar => {
    const pct = parseInt(bar.getAttribute('data-progress'));
    bar.style.width = '0%';
    setTimeout(() => {
      bar.style.width = Math.min(pct, 100) + '%';
    }, 200);
  });
}

/* ============================================================
   15. NOTIFICATION COUNT
   ============================================================ */
function updateNotifCount() {
  const role = getCurrentRole();
  const cfg  = ROLE_CONFIGS?.[role];
  const badge = document.getElementById('notifBadge');
  if (badge && cfg) {
    badge.textContent = cfg.notifCount;
    badge.style.display = cfg.notifCount > 0 ? 'flex' : 'none';
  }
}

/* ============================================================
   16. FORM INTERACTIONS (realistic)
   ============================================================ */
function initForms() {
  // Character counter for textareas
  document.querySelectorAll('textarea[data-maxlength]').forEach(ta => {
    const max = parseInt(ta.getAttribute('data-maxlength'));
    const counter = document.createElement('div');
    counter.className = 'form-hint text-right';
    counter.textContent = `0/${max}`;
    ta.parentNode.insertBefore(counter, ta.nextSibling);
    ta.addEventListener('input', () => {
      counter.textContent = `${ta.value.length}/${max}`;
      if (ta.value.length > max * 0.9) counter.style.color = 'var(--color-warning)';
      else counter.style.color = '';
    });
  });

  // OTP inputs — auto advance
  const otpInputs = document.querySelectorAll('.otp-input');
  otpInputs.forEach((input, i) => {
    input.addEventListener('input', () => {
      if (input.value.length >= 1 && i < otpInputs.length - 1) {
        otpInputs[i + 1].focus();
      }
    });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !input.value && i > 0) {
        otpInputs[i - 1].focus();
      }
    });
  });

  // Simulate form submission
  document.querySelectorAll('form[data-simulate]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const target = form.getAttribute('data-simulate');
      const btn = form.querySelector('[type=submit]');
      if (btn) {
        btn.disabled = true;
        btn.textContent = 'Saving...';
      }
      setTimeout(() => {
        showToast('Saved successfully!', 'success');
        if (target) window.location.href = target;
        else if (btn) {
          btn.disabled = false;
          btn.textContent = 'Save';
        }
      }, 1000);
    });
  });
}

/* ============================================================
   17. TOPBAR SEARCH DEMO
   ============================================================ */
function initTopbarSearch() {
  const input = document.querySelector('.topbar-search input');
  if (!input) return;

  const suggestions = [
    'Rahim Ahmed', 'Death Support Fund', 'Zakat 2026',
    'Nasreen Begum', 'Mosque Renovation', 'Disbursements',
    'Membership Requests', 'Audit Log',
  ];

  input.addEventListener('focus', () => {
    input.placeholder = 'Search members, causes, contributions...';
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && input.value.trim()) {
      showToast(`Searching for "${input.value}"...`, 'info', 2000);
    }
  });
}

/* ============================================================
   18. INIT — Run everything on DOMContentLoaded
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initSidebar();
  initActiveNav();
  initRoleSwitcher();
  initModals();
  initTabs();
  initSearch();
  initAlerts();
  initDropdowns();
  initApprovalActions();
  renderChartBars();
  animateProgressBars();
  updateNotifCount();
  initForms();
  initTopbarSearch();
  initStepper();
});

/* ============================================================
   19. SHARED SIDEBAR HTML (injected by pages that call it)
   ============================================================ */
function renderSidebar(activePage, baseUrl = '') {
  const role = getCurrentRole();
  const dashboardHref = `${baseUrl}${ROLE_CONFIGS?.[role]?.dashboard || 'app/dashboard-admin.html'}`;
  const nav = [
    {
      section: 'Overview',
      items: [
        { href: dashboardHref, icon: '📊', label: 'Dashboard', id: 'dashboard', roles: ['admin','treasurer','auditor','member'], dashboard: true },
        { href: `${baseUrl}app/notifications/center.html`, icon: '🔔', label: 'Notifications', id: 'notifications', badge: 3, roles: ['admin','treasurer','auditor','member'] },
      ]
    },
    {
      section: 'Organisation',
      items: [
        { href: `${baseUrl}app/organization/overview.html`,           icon: '🏢', label: 'Overview',        id: 'org-overview', roles: ['admin','treasurer','auditor'] },
        { href: `${baseUrl}app/organization/membership-requests.html`, icon: '📥', label: 'Requests',        id: 'membership', badge: 3, roles: ['admin'] },
        { href: `${baseUrl}app/members/list.html`,                    icon: '👥', label: 'Members',          id: 'members', roles: ['admin','auditor'] },
        { href: `${baseUrl}app/organization/roles.html`,              icon: '🔑', label: 'Roles',            id: 'roles', roles: ['admin'] },
      ]
    },
    {
      section: 'Support',
      items: [
        { href: `${baseUrl}app/causes/list.html`,         icon: '💚', label: 'Causes',        id: 'causes', roles: ['admin','treasurer','auditor','member'] },
        { href: `${baseUrl}app/contributions/list.html`,  icon: '💰', label: 'Contributions', id: 'contributions', roles: ['admin','treasurer','auditor','member'] },
        { href: `${baseUrl}app/receipts/list.html`,       icon: '🧾', label: 'Receipts',       id: 'receipts', roles: ['admin','treasurer'] },
        { href: `${baseUrl}app/disbursements/list.html`,  icon: '📤', label: 'Disbursements', id: 'disbursements', roles: ['admin','treasurer','auditor'] },
      ]
    },
    {
      section: 'Verification',
      items: [
        { href: `${baseUrl}app/nominees/list.html`,       icon: '👨‍👩‍👧', label: 'Nominees',      id: 'nominees', roles: ['admin','member'] },
        { href: `${baseUrl}app/verification/queue.html`,  icon: '✅', label: 'Verify Queue',  id: 'verification', roles: ['admin','auditor'] },
      ]
    },
    {
      section: 'Reports & Audit',
      items: [
        { href: `${baseUrl}app/reports/overview.html`,    icon: '📈', label: 'Reports',        id: 'reports', roles: ['admin','treasurer','auditor'] },
        { href: `${baseUrl}app/audit/audit-log.html`,     icon: '🔍', label: 'Audit Log',      id: 'audit', roles: ['admin','auditor'] },
        { href: `${baseUrl}app/audit/activity-log.html`,  icon: '📋', label: 'Activity Log',   id: 'activity', roles: ['admin','auditor'] },
      ]
    },
    {
      section: 'Settings',
      items: [
        { href: `${baseUrl}app/settings/profile.html`,    icon: '⚙️', label: 'Settings',       id: 'settings', roles: ['admin','treasurer','auditor','member'] },
        { href: `${baseUrl}app/notifications/announcements.html`, icon: '📢', label: 'Announcements', id: 'announcements', roles: ['admin','treasurer','auditor','member'] },
      ]
    },
  ];

  let html = '';
  nav.forEach(group => {
    html += `<div class="sidebar-section">
      <div class="sidebar-section-label">${group.section}</div>`;
    group.items.forEach(item => {
      const active = item.id === activePage ? ' active' : '';
      const badge  = item.badge ? `<span class="nav-badge">${item.badge}</span>` : '';
      const rolesAttr = item.roles ? ` data-role="${item.roles.join(',')}"` : '';
      const dashAttr = item.dashboard ? ` data-dashboard-link data-dashboard-base="${baseUrl}"` : '';
      html += `<a href="${item.href}" class="sidebar-link${active}"${rolesAttr}${dashAttr}>
        <span class="nav-icon">${item.icon}</span>
        <span class="nav-label">${item.label}</span>
        ${badge}
      </a>`;
    });
    html += '</div>';
  });

  const el = document.getElementById('sidebarNav');
  if (el) {
    el.innerHTML = html;
    applyRole(role);
  }
}

/* ============================================================
   20. SHARED TOPBAR (role switcher + notifications + profile)
   ============================================================ */
function renderTopbar(pageTitle, baseUrl = '') {
  const el = document.getElementById('appTopbar');
  if (!el) return;

  el.innerHTML = `
    <button class="topbar-toggle" id="sidebarToggle" title="Toggle sidebar">☰</button>
    <div class="topbar-search">
      <span class="search-icon">🔍</span>
      <input type="text" placeholder="Search..." />
    </div>
    <div class="topbar-right">
      <div class="role-switcher">
        <span>Demo:</span>
        <select id="roleSwitcher">
          <option value="admin">Admin</option>
          <option value="treasurer">Treasurer</option>
          <option value="auditor">Auditor</option>
          <option value="member">Member</option>
        </select>
      </div>
      <a href="${baseUrl}app/notifications/center.html" class="topbar-action" title="Notifications">
        🔔
        <span class="topbar-notif-badge" id="notifBadge">3</span>
      </a>
      <a href="${baseUrl}app/settings/profile.html" class="topbar-profile">
        <div class="topbar-avatar" id="profileAvatar">RA</div>
        <div class="topbar-profile-info">
          <span class="topbar-profile-name" id="profileName">Rahim Ahmed</span>
          <span class="topbar-profile-role" id="profileRole">Admin</span>
        </div>
      </a>
    </div>`;

  // Re-init role switcher after inject
  initRoleSwitcher();
  initTopbarSearch();
  initSidebar();
}
