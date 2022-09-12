import { createStore } from "vuex";

const store = createStore({
    state(){
        return {
            username: 'Armando',
            projects: [
                {
                    id: 1,
                    title: "Developer",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero nobis natus ipsum repellat laborum dignissimos, recusandae laboriosam repellendus voluptas facere adipisci. Saepe, ducimus? Eligendi facere dolores sit? Similique, accusamus corporis!",
                    image: "escritorio.jpg",
                    tecnologies: "react, vue, etc"
                },
                {
                    id: 2,
                    title: "Videogames App",
                    description: `Desarrollo de una SPA(Single Page Application), la cual consume datos de una API(rawg.io), generando una nueva API-Rest-Full con nuevas y mejores funcionalidades, como lo son: filtros de busqueda de videojuegos, ordenamientos de estos, formulario para insertar un nuevo videojuego, etc.
                    Se utilizaron las siguientes tecnologias:  
                    `,
                    image: "escritorio.jpg",
                    tecnologies: "React.Js, Redux, HTML5, Css3, Node.Js, Express.Js, PostgreSQL, Sequelize"
                },
                {
                    id: 3,
                    title: "Red Social",
                    description: `Participación en un equipo de desarrollo agíl con Springs cada semana, presentando avances a un product Owner sobre la creación de una red social academica. 
                    Features: Conectar con amigos, crear contenido de aprendizaje, creación de usuarios, comunicación entre usuarios, etc.`,
                    image: "escritorio.jpg",
                    tecnologies: "React.Js, Redux, Bootstrap, Styled Components, Node.Js, Express.Js, MongoDb, Mongoose"
                },
            ]
        }
    }
});

export default store;