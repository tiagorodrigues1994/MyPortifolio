import { AppBar, Box, Button, Divider, Drawer, Stack, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import SchoolIcon from '@mui/icons-material/School';
import SendIcon from '@mui/icons-material/Send';
export default function Header() {
      
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

    const toggleDrawer = (): void => {
        setDrawerOpen(!drawerOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250, height: '100%', background: 'rgb(13, 17, 43)',flexDirection: 'row',
        justifyContent: 'flex-start',}} role="presentation" onClick={toggleDrawer} >
            <Typography
                color={'Black'}
                variant='h6'
                component='div'
                sx={{ flexGrow: '1', textAlign: 'center', my: '50px', fontSize: '30px', fontWeight: 'bold', color: '#fff' }}>
                My Portfolio
            </Typography>
            <Divider sx={{ background: '#fff' }} />
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '500px', justifyContent: 'space-around', alignItems:'center' }}>
            <Button
                    startIcon={<HomeIcon />}
                    sx={{
                        width:'180px', textTransform: 'none', fontSize: '18px', fontWeight: 'bold', color: '#fff', mx: '18px', '&:hover': { backgroundColor: '#C0C0C0' },
                    '&.selected': { backgroundColor: 'orange' }}}>
                    Início
                </Button>
                <Button 
                startIcon={<PersonIcon />}
                sx={{
                    width:'180px',textTransform: 'none', fontSize: '18px', fontWeight: 'bold', color: '#fff', mx: '18px', '&:hover': { backgroundColor: '#C0C0C0' },
                    '&.selected': { backgroundColor: '#C0C0C0' }
                }} >Sobre</Button>
                <Button
                startIcon={<PlaylistAddIcon />}
                sx={{
                    width:'180px',textTransform: 'none', fontSize: '18px', fontWeight: 'bold', color: '#fff', mx: '18px', '&:hover': { backgroundColor: '#C0C0C0' },
                    '&.selected': { backgroundColor: '#C0C0C0' }
                }} >Habilidades</Button>
                <Button
                startIcon={<ImageSearchIcon />}
                sx={{
                    width:'180px',textTransform: 'none', fontSize: '16px', fontWeight: 'bold', color: '#fff', mx: '18px', '&:hover': { backgroundColor: '#C0C0C0' },
                    '&.selected': { backgroundColor: '#C0C0C0' }
                }} >Projetos</Button>
                <Button
                startIcon={<SchoolIcon />}
                 sx={{
                    width:'180px',textTransform: 'none', fontSize: '18px', fontWeight: 'bold', color: '#fff', mx: '18px', '&:hover': { backgroundColor: '#C0C0C0' },
                    '&.selected': { backgroundColor: '#C0C0C0' }
                }} >Qualificações</Button>
                <Button
                startIcon={<SendIcon />}
                sx={{
                    width:'180px',textTransform: 'none', fontSize: '18px', fontWeight: 'bold', color: '#fff', mx: '18px', '&:hover': { backgroundColor: '#C0C0C0' },
                    '&.selected': { backgroundColor: '#C0C0C0' }
                }} >Contato</Button>
            </Box>
        </Box>
    );

    return (
        <Stack sx={{ display: 'flex', alignItems: 'center', width: '100%', background: 'rgb(13, 17, 43)' }}>
            <AppBar position="static" sx={{ maxWidth: '968px', color: '#fff', background: 'rgb(13, 17, 43)' }}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Stack direction="row" spacing={2} alignItems="center">

                        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                            My Portfolio
                        </Typography>
                    </Stack>

                    <Stack sx={{ display: { xs: 'none', md: 'flex' } }} direction="row" spacing={1} alignItems="center">
                        <Button  sx={{
                            textTransform: 'none', '&:hover': { backgroundColor: '#C0C0C0' },
                            '&.selected': { backgroundColor: '#C0C0C0' }
                        }} color="inherit">Início</Button>
                        <Button sx={{
                            textTransform: 'none', '&:hover': { backgroundColor: '#C0C0C0' },
                            '&.selected': { backgroundColor: '#C0C0C0' }
                        }} color="inherit">Sobre</Button>
                        <Button sx={{
                            textTransform: 'none', '&:hover': { backgroundColor: '#C0C0C0' },
                            '&.selected': { backgroundColor: '#C0C0C0' }
                        }} color="inherit">Habilidades</Button>
                        <Button sx={{
                            textTransform: 'none', '&:hover': { backgroundColor: '#C0C0C0' },
                            '&.selected': { backgroundColor: '#C0C0C0' }
                        }} color="inherit">Projetos</Button>
                        <Button sx={{
                            textTransform: 'none', '&:hover': { backgroundColor: '#C0C0C0' },
                            '&.selected': { backgroundColor: '#C0C0C0' }
                        }} color="inherit">Qualificações</Button>
                        <Button sx={{
                            textTransform: 'none', '&:hover': { backgroundColor: '#C0C0C0' },
                            '&.selected': { backgroundColor: '#C0C0C0' }
                        }} color="inherit">Contato</Button>
                    </Stack>

                    <Stack sx={{ display: { md: 'none', xs: 'flex' } }}>
                        <Button onClick={toggleDrawer}>
                            <MenuIcon sx={{ color: '#fff' }} />
                        </Button>
                        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
                            {DrawerList}
                        </Drawer>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Stack>
    );
}
