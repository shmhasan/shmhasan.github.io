You are a senior product designer, UX architect, and senior frontend engineer.

Your task is to generate a complete multi-page static HTML prototype for a product called:

Community Support & Fund Management Platform

This is not a real application. It is a clickable static demo/prototype for product walkthrough, internal planning, and client presentation.

The output must be suitable for GitHub Pages hosting.

==================================================
1. PRIMARY GOAL
==================================================

Build a fully navigable, polished, frontend-only static website that simulates the complete product experience without any backend.

The prototype must allow someone to click through:
- public website
- onboarding
- logged-in dashboards
- organization management
- member management
- nominee management
- KYC/verification
- causes/campaigns
- contributions
- receipt review
- disbursement flows
- reports
- notifications
- audit views
- settings

Even if data is fake, the UX must feel complete and believable.

Every major button, CTA, row action, tab, and quick action should lead somewhere meaningful.

==================================================
2. TECHNICAL CONSTRAINTS
==================================================

Use:
- static HTML
- CSS
- vanilla JavaScript only

Do not use:
- React
- Vue
- Angular
- Tailwind CDN
- Bootstrap JS
- package managers
- Node
- build tools
- server-side code
- external APIs

The project must work by opening index.html directly in a browser and also be deployable to GitHub Pages.

Use:
- relative links only
- reusable CSS classes
- reusable JS helpers
- local mock data in JS objects/arrays
- shared header/sidebar patterns where possible
- clean file organization

==================================================
3. DESIGN EXPECTATIONS
==================================================

Design a clean, modern SaaS experience with:

- premium but simple look
- responsive layout
- left sidebar for app area
- topbar with search, notifications, and profile
- card-based dashboards
- clean tables
- strong visual status system
- polished forms
- timeline UI for cause updates and activity
- realistic modals
- empty states
- confirmation states
- warning banners
- success notices
- breadcrumbs

Visual direction:
- trustworthy
- community-oriented
- financial transparency
- admin-friendly
- suitable for diaspora/community organizations

Use a restrained and professional palette.

==================================================
4. PRODUCT CONTEXT
==================================================

This platform is for community organizations, especially Bangladeshi communities inside and outside Bangladesh.

Organizations can:
- create their organization
- add/administer members
- approve membership requests
- verify users with NID/passport
- allow members to add nominees
- verify and approve nominees
- create support causes/campaigns
- collect contributions manually first
- upload and review receipts
- approve contributions
- track collections and disbursements
- publish updates
- maintain trust and transparency

Member examples:
- mosque committee member
- welfare association member
- expatriate community member
- charitable trust participant
- local support group member

Cause examples:
- death support
- emergency medical support
- zakat fund
- mosque renovation
- flood relief
- education support
- widow support
- food distribution

==================================================
5. USER ROLES TO SIMULATE
==================================================

Create experiences for these roles:

1. Public visitor
2. New user
3. Member
4. Organization Admin
5. Treasurer
6. Auditor

If helpful, add a role switcher in the prototype to simulate these views.

==================================================
6. REQUIRED OUTPUT STRUCTURE
==================================================

I want you to output the project in this order:

A. Proposed file tree
B. Page inventory grouped by module
C. Navigation map / user journey overview
D. Design system summary
E. Then generate the actual code files one by one

When generating files:
- clearly label each file with its path
- wrap each file in its own code block
- include complete content
- do not skip files
- keep filenames explicit and organized

==================================================
7. REQUIRED FILE/FOLDER STRUCTURE
==================================================

Use a structure close to this (you may improve it slightly if needed, but keep it simple and GitHub Pages friendly):

/
  index.html
  about.html
  features.html
  pricing.html
  contact.html
  login.html
  register.html
  forgot-password.html
  reset-password.html

  /app/
    dashboard-member.html
    dashboard-admin.html
    dashboard-treasurer.html
    dashboard-auditor.html

    /organization/
      overview.html
      profile.html
      settings.html
      invite-member.html
      membership-requests.html
      roles.html

    /members/
      list.html
      detail.html
      profile.html
      verification-status.html

    /nominees/
      list.html
      add.html
      detail.html
      documents.html
      review.html

    /verification/
      queue.html
      member-review.html
      nominee-review.html
      upload.html
      status.html

    /causes/
      list.html
      detail.html
      create.html
      edit.html
      publish-review.html
      updates.html
      close.html

    /contributions/
      contribute.html
      list.html
      detail.html
      review.html
      success.html

    /receipts/
      list.html
      detail.html
      verify.html

    /disbursements/
      list.html
      create.html
      detail.html
      approve.html
      paid.html

    /reports/
      overview.html
      collections.html
      disbursements.html
      causes.html
      members.html
      exports.html

    /notifications/
      center.html
      announcements.html
      announcement-detail.html

    /audit/
      activity-log.html
      audit-log.html

    /settings/
      profile.html
      security.html
      preferences.html

  /assets/
    /css/
      styles.css
    /js/
      app.js
      mock-data.js
    /img/
      (use placeholders if needed)

You may add a README.md as well.

==================================================
8. MANDATORY USER JOURNEYS
==================================================

The prototype must include these journeys end-to-end:

A. Public visitor journey
- landing page
- learn about product
- explore features
- request demo/contact
- login/register

B. New user onboarding journey
- register
- verify email/phone mock step
- create organization
- join organization
- onboarding wizard
- onboarding complete

C. Member journey
- login
- member dashboard
- browse causes
- contribute manually
- upload receipt
- see pending approval
- view notifications
- manage own profile
- add nominee
- view nominee status

D. Admin journey
- org dashboard
- review membership requests
- approve members
- review member verification
- review nominee verification
- create and publish cause
- monitor contributions
- review receipts
- approve/reject actions
- review reports

E. Treasurer journey
- finance dashboard
- pending contributions
- receipt verification
- disbursement request review
- mark as paid
- export reports

F. Auditor journey
- read-only dashboard
- audit logs
- collection/disbursement reports
- activity history

==================================================
9. MUST-HAVE PAGES AND CONTENT
==================================================

Create realistic, filled pages for all of these:

PUBLIC
- Landing page
- About
- Features
- Pricing or Request Demo
- Contact
- Login
- Register
- Forgot password
- Reset password

ONBOARDING
- Account creation
- Mock OTP/verification
- Create organization
- Join existing organization
- Setup wizard
- Welcome complete page

ORGANIZATION
- Organization overview
- Organization profile
- Organization settings
- Invite member
- Membership requests
- Role assignment

MEMBERS
- Members list
- Member detail
- Member profile
- Member verification status

NOMINEES
- Nominee list
- Add nominee
- Nominee detail
- Upload/view documents
- Review nominee

VERIFICATION
- Verification queue
- Member review
- Nominee review
- Document upload page
- Verification status page

CAUSES
- Cause list
- Cause detail
- Create cause
- Edit cause
- Publish/review
- Updates timeline
- Closure page

CONTRIBUTIONS
- Contribute page
- Contribution list
- Contribution detail
- Contribution review
- Submission success/pending page

RECEIPTS
- Receipt list
- Receipt detail
- Receipt verification page

DISBURSEMENTS
- Disbursement list
- Create request
- Detail
- Approve page
- Mark paid page

DASHBOARDS
- Member dashboard
- Admin dashboard
- Treasurer dashboard
- Auditor dashboard

NOTIFICATIONS / AUDIT
- Notification center
- Announcements list
- Announcement detail
- Activity log
- Audit log

REPORTS
- Reports overview
- Collections report
- Disbursement report
- Cause-wise report
- Member-wise report
- Export history

SETTINGS
- Profile settings
- Security settings
- Preferences

SYSTEM STATES
- FAQ/help page
- Empty states
- 403 page
- 404 page
- access denied page

==================================================
10. DATA REALISM
==================================================

Use realistic placeholder data and names inspired by Bangladeshi community contexts.

Examples:
- Organizations: Sylhet Welfare Trust, Dhaka Community Support Circle, UK-BD Mosque Fund
- Member names: Rahim Ahmed, Sadia Karim, Farzana Islam, Imran Hossain
- Nominee relationships: spouse, son, daughter, mother, father
- Cause categories: medical emergency, death support, zakat, mosque renovation, flood relief
- Payment methods: bank transfer, cash, mobile banking
- Statuses: pending, under review, approved, rejected, verified, active, suspended, published, closed, paid

Include timestamps, amounts, progress bars, and believable metrics.

==================================================
11. UI COMPONENTS TO INCLUDE
==================================================

Create reusable styles/components for:
- sidebar
- topbar
- page header
- breadcrumbs
- stat cards
- info cards
- progress bars
- tables
- status badges
- tabs
- form groups
- modals
- alerts
- empty states
- timeline list
- activity feed
- pseudo chart cards using CSS or inline SVG
- notification list items
- approval action bars

==================================================
12. JS REQUIREMENTS
==================================================

Use JavaScript for:
- sidebar toggle on mobile
- active nav highlighting
- role switcher demo
- fake notifications count
- simple modal open/close
- toast/alert demo
- rendering mock tables/cards where useful
- search/filter UI simulation
- tab switching
- form stepper simulation in onboarding

Keep JS simple and readable.

==================================================
13. QUALITY BAR
==================================================

This should feel like a complete clickable product demo suitable for:
- client presentation
- product planning
- UX review
- handing over to developers

Do not give me only a few sample pages.
Do not simplify the scope.
Do not leave obvious gaps in navigation.
Do not use lorem ipsum everywhere.
Use meaningful placeholder copy.

==================================================
14. IMPORTANT IMPLEMENTATION RULES
==================================================

- Every page must have working navigation links
- Use consistent relative paths
- Use semantic HTML
- Avoid duplicated CSS where possible
- Add comments for maintainability
- Keep the content polished
- Make the app area feel like one coherent product
- Make public and app sections visually related but distinct
- Show role-specific quick actions and alerts

==================================================
15. FINAL DELIVERY STYLE
==================================================

Deliver the response in this exact pattern:

1. File Tree
2. Page Inventory
3. Navigation / Journey Summary
4. Design Summary
5. Then each file:
   FILE: path/to/file
   ```html / ```css / ```js / ```md
   full content
