import React from 'react';
import "./GymProject.css";

const GymProject = () => {

    return (
        <div className="">
            <h2> Gym Management App </h2>
            <p> This is the first full-stack application I made as part of the Professional Software Development course at CodeClan. </p>
            <p> I like to look back at this project to see how far I've come in just a few weeks, and think of all the things I could change or add with the knowledge I have now. </p>
            <p> This was a solo project and the brief was as follows:</p>
            <p> A local gym has asked you to build a piece of software to help manage menberships and register members for classes. MVP: </p>
            <p> The app must allow the user to: </p>
            <ul>
                <li> Create, view, edit and delete Members </li>
                <li> Create, view, edit and delete Classes </li>
                <li> Book Members into specific Classes </li>
                <li> View a list of all upcoming Classes </li>
                <li> View all Members booked into a particular Class </li>
            </ul>

            <p> The following extensions were given if the MVP was completed in time: </p>
            <ul>
                <li> Classes have a maximum capacity - Members can only be added if there is space </li>
                <li> Members and Classes can be marked as active/inactive - inactive Members and Classes will not appear when creating bookings </li>
            </ul>

            <p> I was given five days to work on this project. I spent roughly half a day on planning, from front-end user experience to back-end data structures, all using drawings,
                diagrams and what became a very busy Trello board. </p>
            <p> It then took me two days to build and test the app, and another day to sort out styling. I then spent the remaining time completing the project extensions and carrying
                out final tests to ensure the full app worked cohesively. </p>
            
            <h4> APP DEMO </h4>
            {/* slideshow or video presentation here */}
            
            <p> The following technologies were used to build the application: </p>
            <ul>
                <li>Python</li>
                <li>Flask</li>
                <li>HTML5</li>
                <li>CSS</li>
                <li>SQLite3</li>
            </ul>

            <p> The following software design principles and methodologies were enlisted during the project: </p>
            <ul>
                <li> RESTful routes </li>
                <li> Agile project planning - use of Kanban board </li>
                <li> Test-Driven Development </li>
                <li> Object-Oriented Programming </li>
                <li> UX Design </li>
            </ul>

            <p> Key learnings from the project: </p>
            <p> The importance of planning </p> 
            {/* POP-UP - after doing some pretty in-depth planning, I flew through the MVP part of the project. As this was my first priority and I really wasn't sure if I'd get it build in time to
            do the extensions, I didn't initially plan how to incorporate the extensions into the app's structure. So it was way more of a struggle to add in the additional functionality later on, and
            this really highlighted the importance of planning a project properly. */}
            <p> Take regular breaks </p>
            {/* I got really stuck a few times with trying to get a particular bit of functionality to work. Each time I got stuck, I took a break, either overnight or just for 10 minutes, and each time
            after returning from said break, I fixed the problem. */}
            <p> Keep on top of your project admin </p>
            {/* Two points here - first, organise your project well. As a former Planning Manager I didn't have a problem with this but the more folders, files and code I created, the more grateful I was that I had
            managed the structure well, and that I'd decided to comment some of my code to help keep track of where certain functions were. I can't imagine how much time I would have wasted trying to find 
            things if I hadn't!
            Second point - document any bugs you fix! Whenever I solved a problem on the project, I was absolutely elated, however I didn't take time to properly document what had gone wrong and how I fixed 
            it. At the end of the project we were asked to show the rest of the class a few pieces of code we were proud of. The bits I was most proud of were the problems I'd solved, however I'd completely
            forgotten what the code looked like before I fixed it. I did manage to find the old code through my Github commits, but even there the notes I'd submitted with each commit were extremly 
            unhelpful - "fixed bug" - great, what flipping bug and how did you fix it past Shuna?! So, keep on top of your admin and document things so you can look back when you come across the same
            bug later, or if you need to talk about the bugs you came across with other people. */}

            <h4> What did I get out of this project? </h4>
            <p> In my old career I was often told to take joy from any small thing I could find reward in, because it was a pretty unrewarding job. I mean, after all the hard work I put in planning an opera,
                at the end of the project someone else would get up on stage and take all the plaudits from the audience. Nobody ever cheers for the Planning Manager. So I've learned to "find joy"
                wherever I can in my work, and you know what? It really works. This app doesn't do much, but it does everything I intended it to do, and I built it with only a few weeks of coding training
                behind me. </p>
            
            <p> Things I was most proud of: </p>
            <ul>
                <li> I made a fully functioning app that behaves the way it's supposed to, persists data and looks slightly better than a simple HTML file </li>
                <li> I built it in 5 days </li>
                <li> I created functionality I hadn't been taught in class, and did so without any guidance from instructors </li>
                <li> I centered a div </li>
            </ul>
            
            <p> So I guess I got a lot of this first project huh? </p>

        </div>
    )
}

export default GymProject;