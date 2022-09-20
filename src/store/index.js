import { createStore } from "vuex";
import Swal from 'sweetalert2'

const store = createStore({
    state(){
        return {
            username: '',
            projectsDb: [],
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
            ],
            error: [],
            responseCreateUser: {}
        }
    },
    mutations: {
        //los commit sirven para llamar a las mutaciones y la mutaciones modifican el estado
        setState(state, payload){
            state.projectsDb = payload;
            console.log(state.projectsDb);
        },
        setStateErrors(state, payload){
            state.error = payload;
        },
        setStateUser(state, payload){
            state.responseCreateUser = payload;
            console.log(state.responseCreateUser);
        }
    },
    actions: {
        async obtenerUsername({ commit }) {
            const res = await fetch(`http://localhost:4001/api/projects`);
            const data = await res.json();
            console.log(data);
            commit("updateUsername", data);
        },
        async getProjects({commit}){
            try {
                const projects = await fetch(`http://localhost:4001/api/projects`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                }
            });
                const res = await projects.json();
                commit('setState', res);
            } catch (error) {
                console.log('error :>> ', error);
            }
            
        },
        async createUser({commit}, username){
            const newUser = await fetch(`http://localhost:4001/api/users`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(username)
            });
            const res = await newUser.json();
            console.log('res :>> ', res);
            if(res.statusCode !== 200){
                let errorDescription = res.message.split(' ')[2];
                let response = changeName(errorDescription);
                await validateParameters(errorDescription, response);
            }
            if(res.status === 200){
            commit('setStateUser', res);
                return Swal.fire({
                    icon: 'success',
                    title: `Gracias por comunicarse conmigo ${username.name}, Me comunicare apenas lea el mensaje. Saludos`,
                    showConfirmButton: false,
                    timer: 2500
                    })
            }
        }
    },
});

function validateParameters(name, response){
    const fields = {
        name: 'name',
        lastname: 'lastname',
        description: 'description',
        email: 'email'
    }
    if(response === 'descripcion'){
        return Swal.fire({
            title: 'Error!',
            text: `La ${response} ingresada no es valida`,
            icon: 'error',
            confirmButtonText: 'Volver'
        })
    }
    if(fields[name]){
        return Swal.fire({
            title: 'Error!',
            text: `El ${response} ingresado no es valido`,
            icon: 'error',
            confirmButtonText: 'Volver'
        });
    }
    return false
}

function changeName(name){
    const fields = {
        name: 'Nombre',
        lastname: 'Apellido',
        description: 'descripcion',
        email: 'correo electronico'
    }
    let response = '';

    if(fields[name]){
        response = fields[name];
    }
    return response;
}

export default store;