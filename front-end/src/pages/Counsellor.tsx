import React from 'react'
import "../styles/counsellor.css"

function Counsellor() {
    return (
        <main>
            <header>
                <h2 className="single-counsellor-name">John Doe</h2>
                <img className="single-counsellor-image" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                alt="photo of counsellor"/>
                <nav>
                    <ul>
                        <li>About me</li>
                        <li>Specialties</li>
                        <li>Licensing</li>
                        <li>Reviews</li>
                    </ul>
                </nav>
                </header>
                <section className="single-counsellor-about-me">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, ipsam! Officia rerum, odit minima adipisci aliquid, inventore dolore numquam earum eveniet, ratione corrupti hic alias nisi debitis ipsa autem quam!</p>
                </section>
                <button>Work with me</button>
        </main>
        
    )
}

export default Counsellor