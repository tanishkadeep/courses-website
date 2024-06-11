# Course Website

## Introduction

This project is a course listing and management website built with Tailwind CSS, TypeScript, and React. It provides a platform for users to browse through various courses, view detailed information, and manage their enrolled courses. 

## Features

- **Course Listing Page**: Displays a scrollable list of courses fetched from a dummy API.
  - Search functionality based on course name or instructor.
  - Clickable courses to view detailed information.
- **Course Details Screen**: Provides detailed information about the selected course, including:
  - Course name
  - Instructor's name
  - Description
  - Enrollment status
  - Course duration
  - Schedule
  - Location
  - Pre-requisites
  - Expandable syllabus section
- **Student Dashboard**: Displays the courses that a student is enrolled in with a user-friendly interface.
  - Course name, instructor name, thumbnail, due date, and a progress bar.
  - Feature to mark courses as completed.
- **Advanced State Management**: Utilizes Redux for effective state management across the application.

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **State Management**: Redux
- **Backend**: Dummy API (for sample data)
- **Build Tool**: Vite

## Setup Instructions

1. Clone the repository

   ```bash
   git clone https://github.com/tanishkadeep/courses-website 
   cd course-website 
   ```

2. Install dependencies
    ```bash
    npm install
    ```

3. Run the application
    ```bash
   npm run dev
    ```

4. Build for production
    ```bash
   npm run build
    ```

## Demo Video

[Watch the demo video here](https://drive.google.com/file/d/1nnrQkuc5UVTnCMb-5a0d24Ly_gBq1mQU/view?usp=sharing)

