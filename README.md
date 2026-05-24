# Cadence – Habit & Task Tracker

Cadence is a cross-platform mobile app for habit tracking, task management, goal organization, and weekly progress monitoring. The app is designed for users who currently rely on multiple tools such as reminders, notes, planners, and habit apps, but want one simple and customizable productivity system.

## Overview

Many habit and productivity apps lock important features behind paid plans or separate habits, tasks, and goals into different tools. Cadence solves this by combining daily habit check-ins, task tracking, goal planning, and weekly progress summaries into one mobile-first application.

## Features

### Current MVP Features
- User authentication
- Create, view, update, and delete habits
- Daily habit checkboxes
- Create, complete, and delete tasks
- Weekly habit progress summary
- Mobile-first tab navigation
- Clean productivity-focused UI

### Planned Features
- Goal tracking
- Offline-first local caching
- Deferred sync with Supabase
- Push notifications
- Calendar view
- App Store and Google Play release

## Tech Stack

| Area | Technology |
|---|---|
| Mobile Framework | React Native |
| Development Platform | Expo |
| Language | TypeScript |
| Backend | Supabase |
| Database | PostgreSQL |
| Authentication | Supabase Auth |
| Local Storage | AsyncStorage |
| Navigation | Expo Router |
| Version Control | Git & GitHub |

## App Screens

| Screen | Description |
|---|---|
| Today | View daily habits and tasks |
| Habits | Add and manage habits |
| Tasks | Add and manage to-do items |
| Progress | View weekly completion progress |
| Profile | Manage account and logout |

## Project Structure

```txt
cadence/
├── app/
│   ├── (auth)/
│   ├── (tabs)/
│   └── _layout.tsx
├── src/
│   ├── components/
│   ├── constants/
│   ├── lib/
│   ├── services/
│   ├── types/
│   └── utils/
├── assets/
├── docs/
└── README.md
