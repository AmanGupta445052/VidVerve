#VidVerve


📖 Overview
VidVerve is a personalized YouTube video feed platform that brings the latest and most relevant videos to your fingertips. Discover featured content, explore videos by tags, and get a customized feed based on your interests. With an intuitive search bar and easy navigation, VidVerve enhances your video-watching experience.

🚀 Features
Featured Videos: View a curated list of the latest and trending videos from various categories.
Search Functionality: Quickly search for videos across YouTube using the powerful search bar.
Tag-Based Filtering: Click on tags to explore videos related to specific topics or interests.
Personalized Feed: Save and manage your favorite video tags to receive personalized recommendations each time you log in.
Responsive Design: Optimized for various devices and screen sizes, providing a seamless user experience.
🛠️ Installation & Setup
Prerequisites
Node.js (for running the development server and building the project)
npm or yarn (for managing dependencies)
A YouTube API Key (for fetching videos)
Getting Started
Clone the Repository

bash
Copy code
git clone https://github.com/AmanGupta445052/VidVerve.git
Navigate to the Project Directory

bash
Copy code
cd VidVerve
Install Dependencies

For the client-side:

bash
Copy code
cd client
npm install
For the server-side:

bash
Copy code
cd ../server
npm install
Configure Environment Variables

Create a .env file in the server directory and add your YouTube API key:

makefile
Copy code
YOUTUBE_API_KEY=your_youtube_api_key
Run the Development Servers

For the client-side:

bash
Copy code
cd ../client
npm start
For the server-side:

bash
Copy code
cd ../server
npm start
Visit the Application

Open your browser and go to http://localhost:3000 to see VidVerve in action.

📜 API Endpoints
Fetch Featured Videos: POST /api/video/featured
Fetch Videos by Tag: GET /api/video/tags/:tags
Search for Videos: GET /api/video/search?q=query

⚙️ Configuration
To customize the port or other settings, modify the PORT environment variable in the .env file in the client directory and server directory.

🤝 Contributing
Contributions are welcome! If you have suggestions or improvements, please fork the repository and submit a pull request.


📬 Contact
For questions or feedback, please reach out to your-amanraj11188@gmail.com.
