import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import SendIcon from '@mui/icons-material/Send';
import desenvolvedor from '../imagens/desenvolvedor.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useState } from 'react';



export default function Inicio() {


    const phoneNumber = '+5535998300340';
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: '250px' }}>
            <Box sx={{ width: '968px' }}>
                <Grid container direction={{ xs: 'column-reverse', md: 'row' }}>
                    <Grid item xs={12} md={6} sx={{ p: '100px  50px', textAlign: { xs: 'center', md: 'start' } }}>
                        <Typography variant='h6' component='div' sx={{ fontSize: '30px', fontWeight: 'bold', letterSpacing: '-2px', pb: '10px' }}>
                            Olá, eu sou
                        </Typography>
                        <Typography variant='h1' component='div' sx={{ fontSize: '48px', fontWeight: 'bold', pb: '10px' }}>
                            Tiago Rodrigues
                        </Typography>
                        <Typography component='p' sx={{ fontSize: '26px', fontWeight: 'bold', pb: '10px' }}>
                            Desenvolvedor Front-end!
                        </Typography>
                        <Box sx={{ py: '30px', px: '10px', display: 'flex', justifyContent: 'center', gap: '5px' }}>

                            <Button
                                sx={{
                                    textTransform: 'none',
                                    color: '#fff',
                                    background: 'rgb(13, 17, 43)',
                                    '&:hover': {
                                        backgroundColor: '#C0C0C0',
                                    },
                                    '&:active': {
                                        backgroundColor: '#C0C0C0',
                                        boxShadow: 'none',
                                        transform: 'scale(0.9)',
                                    },
                                    transition: 'background-color 0.3s, box-shadow 0.3s, transform 0.3s',
                                }
                                }
                                endIcon={<DownloadIcon />}
                            >
                                Download cv
                            </Button>
                            <Button
                                sx={{
                                    textTransform: 'none',
                                    color: '#fff',
                                    background: 'rgb(13, 17, 43)',
                                    '&:hover': {
                                        backgroundColor: '#C0C0C0',
                                    },
                                    '&:active': {
                                        backgroundColor: '#C0C0C0',
                                        boxShadow: 'none',
                                        transform: 'scale(0.9)',
                                    },
                                    transition: 'background-color 0.3s, box-shadow 0.3s, transform 0.3s',
                                }
                                }
                                endIcon={<SendIcon />}
                            >
                                Fale comigo
                            </Button>

                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ p: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img
                            style={{
                                borderRadius: '50%',
                                transition: 'transform 0.3s ease-in-out',
                                transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                                width: '100%',
                                height: 'auto',
                                maxWidth: '400px',
                            }}
                            src={desenvolvedor}
                            alt=""
                            onMouseOver={() => setIsHovered(true)}
                            onMouseOut={() => setIsHovered(false)}
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', margin: '10px', height: '200px' }}>
                            <IconButton component="a" href="https://github.com/tiagorodrigues1994" target="_blank" color="primary" rel="noopener noreferrer" sx={{
                                color: 'black',
                                "&:hover": {
                                    transform: "rotate(360deg) scale(1.3)",
                                    color: 'rgba(0, 42, 84, 0.8)'
                                },
                                transition: "transform 0.5s ease, color 0.9s ease"
                            }}>
                                <GitHubIcon sx={{ fontSize: "35px" }} />
                            </IconButton>
                            <IconButton component="a" href="https://www.linkedin.com/in/tiago-rodrigues-251415239/" target="_blank" color="primary" rel="noopener noreferrer" sx={{
                                color: 'black',
                                "&:hover": {
                                    transform: "rotate(360deg) scale(1.3)",
                                    color: 'rgba(0, 42, 84, 0.8)'
                                },
                                transition: "transform 0.5s ease, color 0.9s ease"
                            }}>
                                <LinkedInIcon sx={{ fontSize: "35px" }} />
                            </IconButton>

                            <IconButton component="a" href={whatsappUrl} target="_blank" rel="noopener noreferrer" sx={{
                                color: 'black',
                                "&:hover": {
                                    transform: "rotate(360deg) scale(1.3)",
                                    color: 'rgba(0, 42, 84, 0.8)'
                                },
                                transition: "transform 0.5s ease, color 0.9s ease"
                            }}>
                                <WhatsAppIcon sx={{ fontSize: "35px" }} />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

        </Box>
    )
}
