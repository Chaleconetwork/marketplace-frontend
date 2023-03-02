import { Container, Avatar, Card, Grid, Typography, TextField, Button, Link } from '@mui/material'
import styles from '@/styles/Register.module.css'

export default function Register() {
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
                        <form className={styles.form}>
                            <Grid container spacing={2}>
                                <Grid className={styles.grid} item md={6} xd={12}>
                                    <TextField
                                        label="Nombre"
                                        variant="outlined"
                                        fullWidth
                                        type="text"
                                    />
                                </Grid>
                                <Grid className={styles.grid} item md={6} xd={12}>
                                    <TextField
                                        label="Apellido"
                                        variant="outlined"
                                        fullWidth
                                        type="text"
                                    />
                                </Grid>
                                <Grid className={styles.grid} item md={6} xd={12}>
                                    <TextField
                                        label="Correo electrónico"
                                        variant="outlined"
                                        fullWidth
                                        type="email"
                                    />
                                </Grid>
                                <Grid className={styles.grid} item md={6} xd={12}>
                                    <TextField
                                        label="Contraseña"
                                        variant="outlined"
                                        fullWidth
                                        type="password"
                                    />
                                </Grid>
                                <Grid className={styles.grid} item xs={12}>
                                    <Button
                                        variant="contained"
                                        fullWidth
                                        color="primary">
                                        Registrar
                                    </Button>
                                </Grid>
                            </Grid>
                            <Link
                                href="/"
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
