export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'blog' | 'project';
  tags: string[];
  publishedAt: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

export const posts: Post[] = [
  {
    id: '1',
    title: 'Building Modern Web Applications with React and TypeScript',
    excerpt: 'A comprehensive guide to creating scalable, type-safe web applications using the latest React patterns and TypeScript best practices.',
    content: `# Building Modern Web Applications with React and TypeScript

React and TypeScript have become the gold standard for building modern web applications. In this comprehensive guide, we'll explore the latest patterns and best practices for creating scalable, maintainable applications.

## Why TypeScript?

TypeScript brings static typing to JavaScript, providing:

- **Type Safety**: Catch errors at compile time rather than runtime
- **Better Developer Experience**: Enhanced IDE support with autocomplete and refactoring
- **Documentation**: Types serve as inline documentation for your code
- **Refactoring Confidence**: Large-scale refactoring becomes safer and easier

## Modern React Patterns

### Functional Components with Hooks

The shift from class components to functional components has simplified React development significantly. Hooks provide a clean way to manage state and side effects.

### Custom Hooks for Reusability

Custom hooks allow you to extract component logic into reusable functions, promoting code reuse and separation of concerns.

## Conclusion

The combination of React and TypeScript creates a powerful development environment that scales well with your application's growth.`,
    category: 'blog',
    tags: ['React', 'TypeScript', 'Web Development', 'Frontend'],
    publishedAt: '2024-03-15',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
    featured: true
  },
  {
    id: '2',
    title: 'TaskFlow - Project Management Dashboard',
    excerpt: 'A full-stack project management application built with React, Node.js, and PostgreSQL, featuring real-time collaboration and advanced analytics.',
    content: `# TaskFlow - Project Management Dashboard

TaskFlow is a comprehensive project management solution designed to streamline team collaboration and boost productivity.

## Features

- **Real-time Collaboration**: Live updates across all team members
- **Advanced Analytics**: Detailed insights into project progress and team performance
- **Customizable Workflows**: Adapt the system to your team's unique processes
- **Time Tracking**: Built-in time tracking with detailed reporting

## Tech Stack

### Frontend
- React 18 with TypeScript
- Tailwind CSS for styling
- Zustand for state management
- React Query for data fetching

### Backend
- Node.js with Express
- PostgreSQL database
- Socket.io for real-time features
- JWT authentication

## Key Challenges

Building a real-time collaborative application presented several interesting challenges:

1. **State Synchronization**: Ensuring all clients stay in sync
2. **Conflict Resolution**: Handling simultaneous edits gracefully
3. **Performance**: Optimizing for large datasets and many concurrent users

## Lessons Learned

This project taught me the importance of thoughtful architecture when building real-time applications. The investment in proper data structures and conflict resolution pays off significantly as the application scales.`,
    category: 'project',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Real-time', 'Full-stack'],
    publishedAt: '2024-03-10',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop'
  },
  {
    id: '3',
    title: 'The Future of CSS: Modern Layout Techniques',
    excerpt: 'Exploring CSS Grid, Flexbox, and Container Queries to create responsive, maintainable layouts that work across all devices and screen sizes.',
    content: `# The Future of CSS: Modern Layout Techniques

CSS has evolved dramatically in recent years, giving us powerful new tools for creating responsive, flexible layouts.

## CSS Grid: The Layout Revolution

CSS Grid has fundamentally changed how we approach web layouts. Unlike Flexbox, which is one-dimensional, Grid allows us to work in two dimensions simultaneously.

### Key Benefits

- **True Two-Dimensional Layouts**: Control both rows and columns
- **Implicit Grid Creation**: Automatic grid expansion
- **Flexible Sizing**: Mix fixed, flexible, and content-based sizing

## Container Queries: Context-Aware Styling

Container queries represent the next evolution in responsive design, allowing components to respond to their container's size rather than the viewport.

## Conclusion

These modern CSS features enable us to create more robust, maintainable layouts with less code and greater flexibility.`,
    category: 'blog',
    tags: ['CSS', 'Web Design', 'Responsive Design', 'Layout'],
    publishedAt: '2024-03-08',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop'
  },
  {
    id: '4',
    title: 'EcoTracker - Sustainability Mobile App',
    excerpt: 'A React Native application helping users track their environmental impact with gamification, social features, and personalized recommendations.',
    content: `# EcoTracker - Sustainability Mobile App

EcoTracker empowers users to make environmentally conscious decisions by tracking their carbon footprint and providing actionable insights.

## Project Overview

The app combines environmental data with behavioral psychology to encourage sustainable habits through gamification and social features.

## Features

### Carbon Footprint Tracking
- Transportation monitoring
- Energy usage calculations
- Food and consumption tracking
- Automated activity detection

### Gamification
- Achievement system
- Weekly challenges
- Leaderboards with friends
- Streak tracking for consistent habits

### Social Features
- Share progress with friends
- Join community challenges
- Environmental news feed
- Local green events

## Technical Implementation

### React Native with Expo
- Cross-platform development
- Native performance
- Over-the-air updates
- Push notifications

### Backend Services
- Firebase for real-time data
- Node.js API for complex calculations
- Third-party APIs for environmental data

## Impact

Since launch, EcoTracker has helped users collectively reduce their carbon footprint by over 10,000 kg CO2 equivalent.`,
    category: 'project',
    tags: ['React Native', 'Mobile App', 'Sustainability', 'Firebase', 'Gamification'],
    publishedAt: '2024-03-05',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=400&fit=crop',
    featured: true
  },
  {
    id: '5',
    title: 'Optimizing React Performance: A Deep Dive',
    excerpt: 'Understanding React\'s rendering behavior and implementing performance optimizations including memoization, code splitting, and virtual scrolling.',
    content: `# Optimizing React Performance: A Deep Dive

React applications can slow down as they grow in complexity. Understanding performance bottlenecks and optimization techniques is crucial for maintaining a smooth user experience.

## Understanding React's Rendering

React's reconciliation algorithm is efficient, but unnecessary re-renders can still impact performance.

### Common Performance Issues

1. **Unnecessary Re-renders**: Components updating when their props haven't changed
2. **Heavy Computations**: Complex calculations running on every render
3. **Large Lists**: Rendering hundreds or thousands of items
4. **Bundle Size**: Loading too much JavaScript upfront

## Optimization Techniques

### React.memo and useMemo

Use these tools judiciously to prevent unnecessary work:

- **React.memo**: Prevents component re-renders when props haven't changed
- **useMemo**: Memoizes expensive calculations
- **useCallback**: Stabilizes function references

### Code Splitting

Break your application into smaller chunks that load on demand.

### Virtual Scrolling

For large lists, only render items currently visible in the viewport.

## Measuring Performance

Always measure before optimizing:

- React DevTools Profiler
- Lighthouse audits
- Core Web Vitals

## Conclusion

Performance optimization is about finding the right balance. Premature optimization can make code more complex without meaningful benefits.`,
    category: 'blog',
    tags: ['React', 'Performance', 'Optimization', 'JavaScript'],
    publishedAt: '2024-03-01',
    readTime: '11 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop'
  },
  {
    id: '6',
    title: 'FinanceAI - Personal Finance Assistant',
    excerpt: 'An AI-powered personal finance application that analyzes spending patterns, provides budget recommendations, and predicts future expenses.',
    content: `# FinanceAI - Personal Finance Assistant

FinanceAI leverages machine learning to provide personalized financial insights and recommendations, helping users make better financial decisions.

## Project Goals

Create an intelligent financial assistant that:
- Analyzes spending patterns automatically
- Provides actionable budget recommendations
- Predicts future expenses and income
- Identifies potential savings opportunities

## Technical Architecture

### Frontend
- Next.js with TypeScript
- Chart.js for data visualization
- Tailwind CSS for responsive design
- React Hook Form for complex forms

### Backend & AI
- Python Flask API
- TensorFlow for ML models
- PostgreSQL for data storage
- Plaid API for bank integrations

### Machine Learning Models

1. **Spending Categorization**: Automatically categorizes transactions
2. **Anomaly Detection**: Identifies unusual spending patterns
3. **Expense Prediction**: Forecasts future expenses based on historical data
4. **Budget Optimization**: Suggests optimal budget allocations

## Key Features

### Intelligent Categorization
Automatically categorizes transactions using natural language processing and transaction metadata.

### Predictive Analytics
Uses time series analysis to predict future expenses and identify trends.

### Personalized Insights
Provides customized financial advice based on individual spending patterns and goals.

## Results

Users report an average 23% improvement in budget adherence and 15% increase in monthly savings after using FinanceAI for three months.`,
    category: 'project',
    tags: ['AI/ML', 'Next.js', 'Python', 'Finance', 'Data Science'],
    publishedAt: '2024-02-28',
    readTime: '14 min read',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=400&fit=crop'
  }
];

export const getPostById = (id: string): Post | undefined => {
  return posts.find(post => post.id === id);
};

export const getPostsByCategory = (category: 'blog' | 'project' | 'all'): Post[] => {
  if (category === 'all') return posts;
  return posts.filter(post => post.category === category);
};

export const getFeaturedPosts = (): Post[] => {
  return posts.filter(post => post.featured);
};

export const getPostsByTag = (tag: string): Post[] => {
  return posts.filter(post => 
    post.tags.some(postTag => postTag.toLowerCase().includes(tag.toLowerCase()))
  );
};