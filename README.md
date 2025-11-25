# Scalable REST API

A full-stack application demonstrating secure authentication, role-based access control, and RESTful API design following industry best practices.
## 📋 Features Implemented

### ✅ Backend (Primary Focus)

- **User Authentication APIs**
  - Registration and login with secure password hashing
  - JWT token-based authentication
  - Session management with automatic token refresh
  - Email validation and secure password requirements

- **Role-Based Access Control (RBAC)**
  - User and Admin roles
  - Security definer functions to prevent RLS recursion
  - Granular permissions system
  - Protected routes and API endpoints

- **CRUD Operations**
  - Complete task management system
  - Create, Read, Update, Delete operations
  - Input validation with Zod schemas
  - Error handling and user feedback

- **Database Schema**
  - PostgreSQL database with normalized structure
  - User profiles with auto-creation on signup
  - User roles table with proper foreign keys
  - Tasks table with status tracking and priorities
  - Row-Level Security (RLS) policies for data protection

- **Security & Validation**
  - Input sanitization and validation
  - SQL injection prevention via parameterized queries
  - JWT token secure handling
  - Password hashing with bcrypt
  - CORS configuration
  - Protected API endpoints

### ✅ Frontend (Supportive)

- **Authentication UI**
  - Modern login/signup pages with form validation
  - Real-time error messages
  - Automatic redirects for authenticated users
  - Secure token storage

- **Dashboard**
  - Task management interface
  - Status tracking (Pending, In Progress, Completed)
  - Priority levels (Low, Medium, High)
  - Due date management
  - Real-time updates

- **Admin Panel**
  - User management interface
  - Role assignment capabilities
  - User statistics dashboard
  - Protected admin-only routes

- **Professional Design**
  - Modern, responsive UI with Tailwind CSS
  - Consistent design system with semantic tokens
  - Smooth animations and transitions
  - Mobile-friendly layouts

## 🏗️ Architecture & Scalability

### Database Design
- **Normalized Schema**: Separate tables for profiles, roles, and tasks to prevent data redundancy
- **Foreign Key Constraints**: Proper relationships with cascading deletes
- **Indexes**: Optimized queries with appropriate indexing
- **Triggers**: Automatic timestamp updates and profile creation

### Security Architecture
- **Row-Level Security (RLS)**: Database-level access control
- **Security Definer Functions**: Safe role checking without recursion
- **Input Validation**: Client and server-side validation with Zod
- **JWT Authentication**: Stateless authentication with secure token handling

### Scalability Features
- **Modular Code Structure**: Separated concerns with reusable components
- **API Versioning Ready**: Structured for easy version management
- **Environment Variables**: Configuration through environment files
- **Database Connection Pooling**: Supabase handles connection management
- **Stateless Authentication**: JWT allows horizontal scaling

### Future Scalability Paths
- **Microservices Architecture**: Modular design ready for service extraction
- **Caching Layer**: Redis integration for frequently accessed data
- **Load Balancing**: Stateless design supports multiple instances
- **Database Replication**: Read replicas for scaling reads
- **API Rate Limiting**: Protect against abuse
- **Logging & Monitoring**: Structured logging for observability

## 🛠️ Technology Stack

### Backend
- **Database**: PostgreSQL (via Supabase)
- **Authentication**: Supabase Auth with JWT
- **Validation**: Zod schemas
- **API Pattern**: RESTful design

### Frontend
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn/ui
- **Form Handling**: React Hook Form
- **Routing**: React Router v6
- **State Management**: React Query

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Shadcn UI components
│   ├── TaskList.tsx     # Task display and management
│   └── TaskForm.tsx     # Task creation/editing form
├── pages/               # Route pages
│   ├── Index.tsx        # Landing page
│   ├── Auth.tsx         # Login/Signup page
│   ├── Dashboard.tsx    # Main dashboard
│   └── Admin.tsx        # Admin panel
├── lib/                 # Utilities and helpers
│   ├── auth.ts          # Authentication functions
│   └── utils.ts         # Common utilities
├── integrations/        # External integrations
│   └── supabase/        # Supabase client
└── hooks/               # Custom React hooks

supabase/
└── migrations/          # Database migrations
```

## 🔐 Security Best Practices

1. **Authentication**
   - Passwords hashed with bcrypt
   - JWT tokens with expiration
   - Secure token storage
   - Auto-confirm emails enabled for testing (disable in production)

2. **Authorization**
   - Row-Level Security policies
   - Role-based access control
   - Security definer functions for safe queries

3. **Input Validation**
   - Client-side validation with Zod
   - Server-side validation in database
   - SQL injection prevention via parameterized queries
   - XSS protection with proper encoding

4. **API Security**
   - CORS configuration
   - Protected endpoints
   - Error messages don't leak sensitive data

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Local Development

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:8080`

### Environment Variables

The project uses Lovable Cloud which automatically manages environment variables:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- `VITE_SUPABASE_PROJECT_ID`

## 📊 API Endpoints

### Authentication
- `POST /auth/signup` - Register new user
- `POST /auth/signin` - Login user
- `POST /auth/signout` - Logout user
- `GET /auth/session` - Get current session

### Tasks (Protected)
- `GET /tasks` - Get user's tasks
- `POST /tasks` - Create new task
- `PUT /tasks/:id` - Update task
- `DELETE /tasks/:id` - Delete task

### Admin (Admin Only)
- `GET /profiles` - Get all users
- `GET /user_roles` - Get all user roles
- `PUT /user_roles/:id` - Update user role

## 🧪 Testing

### Test Accounts

You can create test accounts through the signup page. The first user to register can be manually promoted to admin in the backend panel.

### Admin Access

To test admin features:
1. Sign up for an account
2. Access Lovable Cloud backend
3. Navigate to Database → user_roles
4. Update your role to 'admin'

## 📝 API Documentation

### Request Examples

#### Create Task
```json
POST /tasks
{
  "title": "Complete assignment",
  "description": "Finish backend developer assignment",
  "status": "pending",
  "priority": "high",
  "due_date": "2024-12-31T23:59:59Z"
}
```

#### Update Task
```json
PUT /tasks/:id
{
  "status": "completed"
}
```

### Response Format

#### Success Response
```json
{
  "data": { ... },
  "error": null
}
```

#### Error Response
```json
{
  "data": null,
  "error": {
    "message": "Error description",
    "code": "ERROR_CODE"
  }
}
```

## 🔄 Database Schema

### Tables

#### profiles
- `id` (UUID, Primary Key, References auth.users)
- `email` (TEXT, NOT NULL)
- `full_name` (TEXT)
- `created_at` (TIMESTAMPTZ)
- `updated_at` (TIMESTAMPTZ)

#### user_roles
- `id` (UUID, Primary Key)
- `user_id` (UUID, Foreign Key → profiles)
- `role` (ENUM: 'user', 'admin')
- `created_at` (TIMESTAMPTZ)

#### tasks
- `id` (UUID, Primary Key)
- `user_id` (UUID, Foreign Key → profiles)
- `title` (TEXT, NOT NULL)
- `description` (TEXT)
- `status` (ENUM: 'pending', 'in_progress', 'completed')
- `priority` (ENUM: 'low', 'medium', 'high')
- `due_date` (TIMESTAMPTZ)
- `created_at` (TIMESTAMPTZ)
- `updated_at` (TIMESTAMPTZ)

## 📦 Deployment

### Deploy to Production

1. Click "Publish" in Lovable editor
2. Configure custom domain (optional)
3. Update authentication settings for production:
   - Disable auto-confirm emails
   - Configure email templates
   - Set up proper redirect URLs

## 🎯 Assignment Deliverables

✅ **Backend Project** - Hosted on Lovable Cloud
✅ **Working APIs** - All CRUD operations functional
✅ **Frontend UI** - React application with full integration
✅ **API Documentation** - This README serves as documentation
✅ **Scalability Notes** - See Architecture & Scalability section
---

**Built with**: React, TypeScript, Tailwind CSS, PostgreSQL.
