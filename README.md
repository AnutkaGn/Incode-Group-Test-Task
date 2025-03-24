# React Native Expense Tracker

A mobile application for tracking personal expenses, built with React Native (CLI setup) and Firebase.

For this project, I chose Firebase because it offers an easy-to-use NoSQL database (Firestore) with real-time data synchronization, as well as built-in user authentication. Firebase's full integration with React Native and its scalability are the main advantages.

## Setup
1. Clone the repository:
```
git clone https://github.com/your-username/your-repo.git
```
2. Install dependencies:
```
npm install
# or
yarn install
```
3. Set Up Firebase
Go to Firebase Console.

	1. Create a new project.

	2. Add an Android app and register the package name.

	3. Download the google-services.json file and place it inside android/app/.

	4. Enable Firebase Authentication (Email/Password).

	5. Set up Firestore Database in test mode.

	6. Add Firebase Firestore rules to secure your data.
	```
	rules_version = '2';
	service cloud.firestore {
	match /databases/{database}/documents {
		match /expenses/{userId}/{expenseId} {
		allow read, write: if request.auth != null && request.auth.uid == userId;
		}
	}
	}
	```
4. Configure Environment Variables

Create a .env file in the root of the project and add:
```
API_KEY=your_firebase_api_key
AUTH_DOMAIN=your_firebase_auth_domain
PROJECT_ID=your_firebase_project_id
STORAGE_BUCKET=your_firebase_storage_bucket
MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
APP_ID=your_firebase_app_id
MEASUREMENT_ID=your-measurement-id
```
5. Run the Application

Android
```
npx react-native run-android
```

## Project Structure
```
├── src/
|   ├── assets/          # Icons and fonts
│   ├── components/      # Reusable UI components
│   ├── screens/         # Application screens
│   ├── services/        # Firebase service interactions
│   ├── store/           # Zustand state management
│   ├── utils/           # Helper functions
│   ├── types/           # TypeScript type definitions
|   ├── constants/       # Static values used across the app
|   ├── enums/           # TypeScript enums for managing app states and options
|   ├── navigation/      # Navigation stack and tab configurations
|   ├── validations/     # Input validation schemas
├── android/             # Android-specific files
├── ios/                 # iOS-specific files
├── .env                 # Environment variables
├── App.tsx              # Entry point
```

## Aditional Features
1. Toggle theme (dark/light mode)
2. Statistic screen with visual charts and spending insights