🤖 Introduction
A full-stack Next.js application combining frontend and backend components.
⚙️ Tech Stack
Next.js
MongoDB
NextAuth
TailwindCSS

🤸 Quick Start
Follow these steps to set up the project locally on your machine.

Prerequisites

Make sure you have the following installed on your machine:

Git
Node.js
npm (Node Package Manager)
Cloning the Repository

git clone https://github.com/adrianhajdin/project_next_13_ai_prompt_sharing.git
cd project_next_13_ai_prompt_sharing
Installation

Install the project dependencies using npm:

npm install
Set Up Environment Variables

Create a new file named .env in the root of your project and add the following content:

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
NEXTAUTH_SECRET=
GOOGLE_ID=
GOOGLE_CLIENT_SECRET=
MONGODB_URI=
Replace the placeholder values with your actual credentials. You can obtain these credentials by signing up on these corresponding websites from Google Cloud Console, Cryptpool (for random Auth Secret), and MongoDB.

Running the Project

npm run dev
Open http://localhost:3000 in your browser to view the project.

