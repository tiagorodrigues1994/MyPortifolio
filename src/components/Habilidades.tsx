
import { Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; 

export default function Habilidades() {
  return (
    
    <Box sx={{display:'flex', justifyContent:'center', width:'100%'}}>
   
    <Box sx={{width:'968px', display: 'flex', justifyContent:'space-around'}}>
      <Box sx={{ width: '40%' }}>
        <Typography variant="h6" sx={{textAlign:'center'}}>Box 1:</Typography>
        <Grid container>
          <Grid item xs={6}>
            <List>
              <ListItem>
                <ListItemIcon><WhatsAppIcon /></ListItemIcon>
                <ListItemText primary="HTML" />
              </ListItem>
              <ListItem>
                <ListItemIcon><WhatsAppIcon /></ListItemIcon>
                <ListItemText primary="CSS" />
              </ListItem>
              <ListItem>
                <ListItemIcon><WhatsAppIcon /></ListItemIcon>
                <ListItemText primary="CSS" />
              </ListItem>
              <ListItem>
                <ListItemIcon><WhatsAppIcon /></ListItemIcon>
                <ListItemText primary="CSS" />
              </ListItem>
              <ListItem>
                <ListItemIcon><WhatsAppIcon /></ListItemIcon>
                <ListItemText primary="CSS" />
              </ListItem>
              
            </List>
          </Grid>
          <Grid item xs={6}>
            <List>
              <ListItem>
                <ListItemIcon><WhatsAppIcon /></ListItemIcon>
                <ListItemText primary="JavaScript" />
              </ListItem>
              <ListItem>
                <ListItemIcon><WhatsAppIcon /></ListItemIcon>
                <ListItemText primary="CSS" />
              </ListItem>
              <ListItem>
                <ListItemIcon><WhatsAppIcon /></ListItemIcon>
                <ListItemText primary="CSS" />
              </ListItem>
              <ListItem>
                <ListItemIcon><WhatsAppIcon /></ListItemIcon>
                <ListItemText primary="CSS" />
              </ListItem> <ListItem>
                <ListItemIcon><WhatsAppIcon /></ListItemIcon>
                <ListItemText primary="CSS" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ width: '40%', }}>
        <Typography variant="h6"  sx={{textAlign:'center'}}>Box 2:</Typography>
        <Grid container>
          <Grid item xs={6} >
            <List>
              <ListItem>
                <ListItemIcon><WhatsAppIcon /></ListItemIcon>
                <ListItemText primary="HTML" />
              </ListItem>
              <ListItem>
                <ListItemIcon><WhatsAppIcon /></ListItemIcon>
                <ListItemText primary="CSS" />
              </ListItem>
              <ListItem>
                <ListItemIcon><WhatsAppIcon /></ListItemIcon>
                <ListItemText primary="CSS" />
              </ListItem>
              <ListItem>
                <ListItemIcon><WhatsAppIcon /></ListItemIcon>
                <ListItemText primary="CSS" />
              </ListItem>
              <ListItem>
                <ListItemIcon><WhatsAppIcon /></ListItemIcon>
                <ListItemText primary="CSS" />
              </ListItem>
              
             
            </List>
          </Grid>
          <Grid item xs={6}>
            <List>
              <ListItem>
                <ListItemIcon><WhatsAppIcon /></ListItemIcon>
                <ListItemText primary="JavaScript" />
              </ListItem>
              <ListItem>
                <ListItemIcon><WhatsAppIcon /></ListItemIcon>
                <ListItemText primary="CSS" />
              </ListItem>
              <ListItem>
                <ListItemIcon><WhatsAppIcon /></ListItemIcon>
                <ListItemText primary="CSS" />
              </ListItem>
              <ListItem>
                <ListItemIcon><WhatsAppIcon /></ListItemIcon>
                <ListItemText primary="CSS" />
              </ListItem>
              <ListItem>
                <ListItemIcon><WhatsAppIcon /></ListItemIcon>
                <ListItemText primary="CSS" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>
    </Box>
    </Box>
  );
}
