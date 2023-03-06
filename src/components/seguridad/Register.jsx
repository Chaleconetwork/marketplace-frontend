import { Container, Avatar, Card, Grid, Typography, TextField, Button } from '@mui/material'
import styles from '@/styles/Register.module.css'
import Link from 'next/link'
import { useState } from 'react';

export default function Register() {

    const clearUsuario = {nombre: '', apellido: '', email: '', password: ''} //clean form fields

    const [usuario, setUsuario] = useState({nombre: '', apellido: '', email: '', password: ''});
    function handleChange(e) {setUsuario({...usuario, [e.target.name]: e.target.value})}

    function guardarUsuario() {
        console.log('Mi usuario es: ' + usuario)
        setUsuario(clearUsuario)
    }

    return (
        <Container className={styles.containermt}>
            <Grid container justifyContent="center">
                <Grid item lg={6} md={8}>
                    <Card className={styles.card} align="center">
                        <Avatar className={styles.avatar}>
                            {/* <Icon></Icon> */}
                        </Avatar>
                        <Typography variant="h5" color="primary">
                            Registro de Usuario
                        </Typography>
                        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                            <Grid container spacing={2}>
                                <Grid className={styles.grid} item md={6} xd={12}>
                                    <TextField
                                        label="Nombre"
                                        variant="outlined"
                                        fullWidth
                                        type="text"
                                        name='nombre'
                                        value={usuario.nombre}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid className={styles.grid} item md={6} xd={12}>
                                    <TextField
                                        label="Apellido"
                                        variant="outlined"
                                        fullWidth
                                        type="text"
                                        name='apellido'
                                        value={usuario.apellido}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid className={styles.grid} item md={6} xd={12}>
                                    <TextField
                                        label="Correo electrónico"
                                        variant="outlined"
                                        fullWidth
                                        type="email"
                                        name='email'
                                        value={usuario.email}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid className={styles.grid} item md={6} xd={12}>
                                    <TextField
                                        label="Contraseña"
                                        variant="outlined"
                                        fullWidth
                                        type="password"
                                        name='password'
                                        value={usuario.password}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid className={styles.grid} item xs={12}>
                                    <Button
                                        onClick={guardarUsuario}
                                        variant="contained"
                                        fullWidth
                                        color="primary"
                                        type='submit'>
                                        Registrar
                                    </Button>
                                </Grid>
                            </Grid>
                            <Link
                                className={styles.link}
                                href="/login"
                                variant="body1">
                                ¿Ya tienes una cuenta?, Logueate aquí
                            </Link>
                        </form>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}
