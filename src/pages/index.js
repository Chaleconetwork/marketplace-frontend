import Login from '@/components/seguridad/Login'
import Register from '@/components/seguridad/Register'
import styles from '@/styles/Home.module.css'

export default function Home() {

    // navigator.geolocation.getCurrentPosition(
    //     (posicion)=> console.log(posicion), err => console.log(err)
    // );

    return (
        <>
           {/* <h1>Componente App</h1> */}
           {/* <Login /> */}
           <Register />
        </>
    )
}