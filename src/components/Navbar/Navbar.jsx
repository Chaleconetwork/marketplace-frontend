import { AppBar, Toolbar, Link, Button, Typography } from '@mui/material'
import { Container } from '@mui/system'
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import styles from '@/styles/Navbar.module.css'

export default function Navbar() {
    return (
        <div>
            <AppBar className={styles.appBar} position="static">
                <Container>
                    <Toolbar className={styles.dividir}>
                        <div>
                            <Link className={styles.linkLogo} color="inherit" underline="none">
                                <StorefrontIcon className={styles.logoStore} fontSize='large' />
                                <Typography variant='h5'>CHALECO SHOP</Typography>
                            </Link>
                        </div>
                        <div>
                            <Button color='inherit'>
                                <Link className={styles.linkLogo} color='inherit' underline='none'>
                                    <PersonIcon className={styles.logoStore} />
                                    LOGIN
                                </Link>
                            </Button>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}
