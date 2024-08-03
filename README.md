Prerequisites

Docker should be installed on your machine. Download and install Docker from Docker's official website.

Steps to Run the Project

Navigate to the Project Directory:

Open a terminal and navigate to the project directory where the Dockerfile is located.

bash
Copy code
cd <project-directory>
Build the Docker Image:

Run the following command to build the Docker image:

Copy code
docker build -t nextjs-app .
Run the Docker Container:

Run the following command to start the Docker container:

arduino
Copy code
docker run -p 3000:3000 nextjs-app
Accessing the Application

Once the container is running, you can access the Next.js application by navigating to http://localhost:3000 in your web browser.
