import { Button, Card, Container, Dialog, DialogContent, DialogTitle, Grid, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import { useState } from 'react';
import styles from '@/styles/Libros.module.css'

export default function Libros() {

    const [libro, setLibro] = useState({ categoria: '', titulo: '', autor: '' });
    function handleChange(e) { setLibro({ ...libro, [e.target.name]: e.target.value }) }

    const clearLibro = { categoria: '', titulo: '', autor: '' } //clean form fields
    function guardarData() {
        console.log('Mis datos son: ' + libro)
        setLibro(clearLibro)
    }

    function editarData() {
        alert('Boton editar')
    }

    function eliminarData() {
        alert('Boton eliminar')
    }

    return (
        <Container className={styles.container}>
            <Grid container justifyContent='center'>
                <Grid item lg={7} md={8}>
                    <Card className={styles.card} align='center'>
                        <Typography variant='h4'>
                            Libros
                        </Typography>
                        <form className={styles.form} onSubmit={(e => e.preventDefault())}>
                            <Grid container spacing={2}>
                                <Grid className={styles.grid} item md={12} xs={12}>
                                    <TextField
                                        select
                                        label='Categoria'
                                        variant='outlined'
                                        fullWidth
                                        align='left'
                                        name='categoria'
                                        value={libro.categoria}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value='Programacion'>Programación</MenuItem>
                                        <MenuItem value='Historia'>Historia</MenuItem>
                                        <MenuItem value='Matematicas'>Matemáticas</MenuItem>
                                    </TextField>
                                </Grid>
                                <Grid className={styles.grid} item md={6} xs={12}>
                                    <TextField
                                        label='Titulo'
                                        variant='outlined'
                                        fullWidth
                                        name='titulo'
                                        value={libro.titulo}
                                        onChange={handleChange} />
                                </Grid>
                                <Grid className={styles.grid} item md={6} xs={12}>
                                    <TextField
                                        label='Autor'
                                        variant='outlined'
                                        fullWidth
                                        name='autor'
                                        value={libro.autor}
                                        onChange={handleChange} />
                                </Grid>
                                <Grid className={styles.grid} item md={12} xs={12}>
                                    <Button
                                        variant='contained'
                                        fullWidth
                                        color='primary'
                                        type='submit'
                                        onClick={guardarData}>
                                        Guardar
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Card>
                </Grid>
            </Grid>
            <TableContainer className={styles.container} component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Categoria</TableCell>
                            <TableCell>Titutlo</TableCell>
                            <TableCell>Autor</TableCell>
                            <TableCell align='center' colSpan={2}>Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Programación</TableCell>
                            <TableCell>React Avanzado</TableCell>
                            <TableCell>Chaleco</TableCell>
                            <TableCell align='center'>
                                <Button className='mr' variant='contained' color='primary' onClick={editarData}>Editar</Button>
                                <Button variant='contained' color='secondary' onClick={eliminarData}>Eliminar</Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Dialog open={open} onClose={() => false} maxWidth='xs' fullWidth align='center'>
                <DialogTitle>Editar Libro</DialogTitle>
                <DialogContent>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <TextField
                            select
                            label='Categoria'
                            variant='outlined'
                            fullWidth
                            align='left'
                            name='categoria'
                            value={libro.categoria}
                            onChange={handleChange}
                        >
                            <MenuItem value='Programacion'>Programación</MenuItem>
                            <MenuItem value='Historia'>Historia</MenuItem>
                            <MenuItem value='Matematicas'>Matemáticas</MenuItem>
                        </TextField>
                        <TextField
                            label='Titulo'
                            variant='outlined'
                            fullWidth
                            name='titulo'
                            value={libro.titulo}
                            onChange={handleChange} />
                        <TextField
                            label='Autor'
                            variant='outlined'
                            fullWidth
                            name='autor'
                            value={libro.autor}
                            onChange={handleChange} />
                        <Button
                            variant='contained'
                            fullWidth
                            color='primary'
                            type='submit'
                            onClick={editarData}>
                            Guardar
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>
        </Container>
    )
}
