# React Native Basics Assignment

This project is a functional application built to demonstrate core React Native concepts, including functional components, navigation, form handling, and interactive elements.

## 🛠 Project Overview
This application fulfills the requirements for the React Native Basics assignment, focusing on the following core areas:
- **Component Architecture:** Utilizing functional components and proper file structure.
- **Navigation:** Seamless transition between Home and Orders screens.
- **Form & Input Handling:** Managing user input with `TextInput` and `KeyboardAvoidingView`.
- **Interactivity:** Implementing `Modal` popups and `Alert` notifications.
- **Data Lists:** Rendering dynamic data using a list component.

## 📂 Folder Structure
The project follows the required architectural structure:
app/
├── _layout.tsx
├── index.tsx         # Home Screen
└── orders.tsx        # Orders Screen
components/
└── SearchBar.tsx     # Reusable Search component


## 🚀 How to Run
1. **Clone the repository:**
   `https://github.com/reezicyb/react-native-functional-basics.git`
2. **Install dependencies:**
   `npm install`
3. **Start the development server:**
   `npx expo start`

## 📝 Implementation Notes
* **List Component:** Used [FlatList/SectionList] to render [Number] items.
* **Forms:** Implemented `KeyboardAvoidingView` to ensure form visibility during interaction.
* **Modals:** Used React `useState` to manage the visibility of the interactive modal.