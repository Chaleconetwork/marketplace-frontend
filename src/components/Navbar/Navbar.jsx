import { AppBar, Toolbar, Link, Button, Typography, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { Container } from '@mui/system'
import { useState } from 'react';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import styles from '@/styles/Navbar.module.css'
import Router from 'next/router';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <AppBar className={styles.appBar} position='static'>
                <Container>
                    <Toolbar className={styles.dividir}>
                        <div>
                            <Link className={styles.linkLogo} color='inherit' underline='none'>
                                <div className={styles.sectionMobile}>
                                    <IconButton color='inherit' onClick={() => setOpen(!open)}>
                                        <MenuIcon fontSize='large' />
                                    </IconButton>
                                </div>
                                <Drawer open={open} onClose={() => setOpen(false)}>
                                    <div className={styles.list}>
                                        <List>
                                            <ListItem onClick={() => setOpen(false)} className={styles.listItem} button>
                                                <Link href='/login' className={styles.linkNavbarMobile} color='inherit' underline='none'>
                                                    <ListItemIcon className={styles.listItemIcon}>
                                                        <PersonIcon className={styles.logoStore} />
                                                    </ListItemIcon>
                                                    <ListItemText>
                                                        Login
                                                    </ListItemText>
                                                </Link>
                                            </ListItem>
                                        </List>
                                    </div>
                                </Drawer>
                                <div onClick={() => Router.push('/')} className={styles.grow}>
                                    <StorefrontIcon className={styles.logoNavbar} fontSize='large' />
                                    <Typography variant='h5'>CHALECO SHOP</Typography>
                                </div>
                            </Link>
                        </div>
                        <div className={styles.sectionDesktop}>
                            <Button color='inherit'>
                                <Link href='/login' className={styles.linkLogo} color='inherit' underline='none'>
                                    <PersonIcon className={styles.logoNavbar} />
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
