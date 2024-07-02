import React from 'react';

const About = () => {
    return (
        <div className='AboutContainer'>
            <div className="main-content">
                <div className="dashboard">
                    <h2>About Us</h2>
                    <p style={{color: '#404346'}}>Welcome to Todo List (Task Manager), your ultimate productivity companion designed to help you organize your tasks and projects with ease. Our mission is to provide a simple, intuitive, and efficient tool that empowers you to manage your time effectively and achieve your goals.</p>
                    <h3 style={{color: '#3d3d3d'}}>Our Vision</h3>
                    <p style={{color: '#404346'}}>We believe that everyone deserves to have a stress-free and organized life. With the Todo List (Task Manager) app, we aim to eliminate the chaos and confusion that often comes with managing multiple tasks and projects. Our vision is to create a seamless experience that allows you to focus on what truly matters.</p>
                    <h3 style={{color: '#3d3d3d'}}>Our Features</h3>
                    <p style={{color: '#404346'}}>
                        <ol>
                            <li>Task Management: Easily add, edit, and delete tasks to keep track of your to-dos. Mark tasks as completed and view your progress.</li>
                            <li>Project Organization: Categorize your tasks into projects for better organization. Whether it's work, personal, school, or any other area, manage all your tasks under one roof.</li>
                            <li>User-Friendly Interface: Our app features a clean, intuitive design that makes task management straightforward and enjoyable. Spend less time navigating and more time completing your tasks.</li>
                            <li>Real-Time Updates: Experience instant updates and changes to your tasks and projects, ensuring you always have the most current information at your fingertips.</li>
                            <li>Customization: Tailor the app to fit your unique workflow with customizable categories and priorities.</li>

                        </ol>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;