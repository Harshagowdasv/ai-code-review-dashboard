# ai-code-review-dashboard

# Directory-Structure

code-review-dashboard/
├── client/                          # React frontend
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/              # Reusable UI components
│   │   │   ├── common/              # Buttons, Cards, Modals, etc.
│   │   │   ├── layout/              # Navbar, Sidebar, Footer
│   │   │   ├── dashboard/           # Dashboard-specific components
│   │   │   └── reviews/             # Review-related components
│   │   ├── pages/                   # Page-level components
│   │   │   ├── Dashboard.jsx
│   │   │   ├── ReviewDetail.jsx
│   │   │   ├── NewReview.jsx
│   │   │   └── Analytics.jsx
│   │   ├── services/                # API call functions
│   │   │   ├── api.js               # Axios instance & interceptors
│   │   │   ├── reviewService.js
│   │   │   └── analyticsService.js
│   │   ├── hooks/                   # Custom React hooks
│   │   │   ├── useReviews.js
│   │   │   └── useAnalytics.js
│   │   ├── context/                 # React Context (auth, theme)
│   │   │   └── AuthContext.jsx
│   │   ├── utils/                   # Helper functions
│   │   │   ├── formatters.js
│   │   │   └── validators.js
│   │   ├── styles/                  # CSS modules or styled-components
│   │   │   ├── variables.css
│   │   │   └── global.css
│   │   ├── App.jsx
│   │   └── index.js
│   └── package.json
│
├── server/                          # Node.js backend
│   ├── src/
│   │   ├── config/                  # Configuration files
│   │   │   ├── database.js
│   │   │   ├── openai.js
│   │   │   └── env.js
│   │   ├── models/                  # MongoDB schemas
│   │   │   ├── Review.js
│   │   │   ├── User.js
│   │   │   └── Analytic.js
│   │   ├── controllers/             # Request handlers
│   │   │   ├── reviewController.js
│   │   │   ├── userController.js
│   │   │   └── analyticsController.js
│   │   ├── routes/                  # API routes
│   │   │   ├── index.js             # Route aggregator
│   │   │   ├── reviews.js
│   │   │   ├── users.js
│   │   │   └── analytics.js
│   │   ├── middleware/              # Express middleware
│   │   │   ├── auth.js
│   │   │   ├── errorHandler.js
│   │   │   └── validation.js
│   │   ├── services/                # Business logic
│   │   │   ├── aiService.js         # OpenAI integration
│   │   │   ├── reviewService.js
│   │   │   └── cacheService.js      # Optional: Redis
│   │   ├── utils/                   # Helper functions
│   │   │   ├── logger.js
│   │   │   └── responseFormatter.js
│   │   └── app.js                   # Express app setup
│   ├── server.js                    # Entry point
│   └── package.json
│
└── README.md 

