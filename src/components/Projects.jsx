import Card from './Card'
import culinary from '../assets/images/gradient.png'

const projects = [
    {
        name: 'Culinary Climate',
        description: "this is the food finder appbased on the weather datai used weather API,tasty API and bulma",
        img: culinary,
        deployed: 'https://cumauu73.github.io/culinary-climate-uofw/',
        
    }
   
]

const Projects = () => {
    

    return (
        <>
            <div className="container my-5 projects">
                <h1>My Projects</h1>
                <div className="projects">

                 
                    {projects.map(project => {
                        return (
                            <Card 
                                name={project.name}
                                description={project.description}
                                img={project.img}
                                deployed={project.deployed}
                            />
                        )
                    })}
                    
                </div>
            </div>

        </>

    )
}

export default Projects