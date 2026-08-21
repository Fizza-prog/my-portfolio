# React Portfolio — AI-Assisted Development Assignment

## Project Overview

This project is a professional personal portfolio website built independently using React, with AI used as a development assistant throughout the implementation.

The portfolio is designed to showcase my development work, technical skills, and selected projects, with my Learning Management System (LMS) presented as the primary case study.

---

# Assignment Deliverables

## 1. Completed Application

The completed application is a React-based personal portfolio website.

### Main Pages

- Home
- Work / Projects
- LMS Case Study
- About
- Contact
- 404 / Not Found

### Main Features

- Responsive React interface
- React Router navigation
- Reusable components
- Data-driven project information
- Data-driven skills section
- Shared Header and Footer
- Individual page titles
- GitHub and LinkedIn links
- Email contact
- LMS project case study
- Responsive layouts for different screen sizes

### Technology Used

- React
- Vite
- JavaScript
- React Router
- HTML
- CSS
- Git
- GitHub

---

# 2. Prompts Used During Development

AI was used throughout the development process for planning, implementation, styling, debugging, and review.

## Portfolio Architecture

> Propose a React architecture for a professional portfolio that can be built and deployed quickly. Keep the architecture maintainable and avoid unnecessary complexity.

## Home Page

> Build the Home page using the existing portfolio data. Include a hero section, introduction, featured projects, skills, about preview, and CTA.

## Project Data

> Create a data-driven project structure for a React portfolio so that project cards and project pages can reuse the same project information.

## Reusable Project Card

> Create a reusable React ProjectCard component that accepts project data and displays the project image, description, technologies, and available links.

## Work Page

> Build a Work page that displays projects from the existing project data and highlights the LMS case study.

## LMS Case Study

> Create a professional LMS case study page covering the project overview, problem, solution, features, technical stack, architecture, technical decisions, challenges, screenshots, and outcome.

## About Page

> Create an About page for a software engineering student and full-stack developer. Focus on what I build, technical skills, and development approach instead of making it a traditional CV page.

## Contact Page

> Create a simple professional Contact page using email, GitHub, and LinkedIn links without requiring a backend.

## Styling

> Style the portfolio using Inter, #171717, #F8FAFC, #2563EB, and #14B8A6. Keep the design clean, technical, calm, and focused on the projects.

## Responsive Design

> Make the portfolio responsive using a mobile-first approach. Ensure navigation, project cards, grids, typography, and case-study sections work properly across mobile, tablet, and desktop screen sizes.

---

# 3. How AI Assisted Throughout Implementation

AI was used as a development assistant rather than as an autonomous developer.

AI assisted with:

- Understanding and breaking down the assignment requirements
- Planning the application architecture
- Planning the page structure
- Suggesting reusable React components
- Creating initial component implementations
- Structuring project and skills data
- Creating initial CSS
- Structuring the LMS case study
- Suggesting responsive design approaches
- Reviewing implementation decisions
- Assisting with debugging
- Assisting with Git and GitHub workflow
- Reviewing code organization

The generated code was reviewed and tested manually before being incorporated into the project.

---

# 4. Manual Improvements, Corrections, and Refactoring

AI-generated code was not accepted blindly.

The implementation was manually reviewed and modified to match the actual project requirements and existing codebase.

Examples of manual improvements include:

### Project Structure

The suggested architecture was reviewed and simplified where necessary to avoid unnecessary complexity for a portfolio application.

### Data-Driven Content

Project, skills, navigation, and site information were separated into data files so that content could be updated without duplicating it across multiple components.

### Component Reuse

Reusable components such as the Header, Footer, Container, and project-related components were used instead of duplicating the same JSX across pages.

### Placeholder Content

AI-generated placeholder content was reviewed and replaced with actual project information.

Fake GitHub repositories, live demos, screenshots, or performance metrics were not intentionally presented as real.

### Routing

Routes were manually tested to verify that the application correctly navigates between:

```text
/
 /work
 /work/lms
 /about
 /contact