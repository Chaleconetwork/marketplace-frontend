import { Avatar, Card, Container, Grid, Typography, TextField, Button } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import styles from '@/styles/Login.module.css'
import Link from "next/link";

export default function Login() {

    return (
        <Container className={styles.containermt}>
            <Grid container justifyContent="center">
                <Grid item lg={5} md={6}>
                    <Card className={styles.card} align="center">
                        <Avatar className={styles.avatar}>
                            <PersonIcon className={styles.icon} />
                        </Avatar>
                        <Typography variant="h5" color="primary">
                            Ingrese su Usuario
                        </Typography>
                        <form className={styles.form}>
                            <Grid container spacing={2}>
                                <Grid className={styles.grid} item xs={12}>
                                    <TextField
                                        label="Email"
                                        variant="outlined"
                                        fullWidth
                                        type="email"
                                    />
                                </Grid>
                                <Grid className={styles.grid} item xs={12}>
                                    <TextField
                                        label="Password"
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
                                        Ingresar
                                    </Button>
                                </Grid>
                            </Grid>
                            <Link
                                className={styles.link}
                                href="/register"
                                variant="body1">
                                ¿No tienes cuenta?, Registrate aquí
                            </Link>
                        </form>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}
