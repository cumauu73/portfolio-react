import resume from '../assets/Cuma_UGURWI.pdf'

const Resume = () => {
    return (
        <>
            <div className="container my-5 resume">
                <h1>Resume</h1>
                <a href={resume} target="_blank">Click here to view resume</a>

            
                <h1>Skills</h1>
                <div className="skills my-5">
                    
                    <div className="type">
                        <h2>Front-End</h2>
        
                            <p>-HTML</p>
                            <p>-CSS</p>
                            <p>-JavaScript</p>
                            <p>-APIs</p>
                            <p>-Git</p>
       
                    </div>
                    <div className="type">
                        <h2>Back-End</h2>
                       
                            <p>-Node.js</p>
                            <p>-Express.js</p>
                            <p>-MySQL</p>
                            <p>-Sequepze</p>
                            <p>-Jest</p>
                            <p>-Model-View-Controller (MVC)</p>
                            <p>-Object-Relational-Mapping (ORM)</p>
               
                    </div>
                    <div className="type">
                        <h2>Platforms</h2>
                            <p>-NoSQL</p>
                            <p>-Progressive Web Apppcations (PWA)</p>
                            <p>-MongoDB</p>
                            <p>-Mongoose</p>
                            <p>-React</p>
                            <p>-MERN</p>
                            <p>-State</p>
                   
                    </div>
                </div>

            </div>
        </>
    )
}

export default Resume