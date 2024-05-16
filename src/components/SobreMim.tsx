import { Box, Stack, Typography } from "@mui/material";

export default function SobreMim() {
    return (
        <Stack sx={{textAlign:'center',display:'flex', alignItems:"center", py:'150px'}}>
            <Typography variant="h2" sx={{fontWeight:'bold', my:'20px'}}>Sobre mim</Typography>
             <Typography variant="h5"  sx={{fontWeight:'bold',my:'10px'}}>Minha Introdução</Typography>
            <Box sx={{maxWidth: '968px'}}>
           
            <Typography variant="body1" sx={{fontSize:'22px', textAlign:'start', py:'20px', m:'20px', letterSpacing: '-0.7px', fontWeight:'600'}}>Sou um entusiasta da programação com um foco especial no desenvolvimento front-end. Durante os últimos 18 meses, mergulhei profundamente no mundo da programação, dedicando-me a aprimorar minhas habilidades nesta área dinâmica e desafiadora. Minha jornada tem sido marcada por uma incansável busca pela excelência e pelo constante desejo de aprendizado.</Typography>
            <Typography variant="body1" sx={{fontSize:'22px', textAlign:'start', py:'20px', m:'20px',letterSpacing: '-0.7px', fontWeight:'600'}}>Estou determinado a evoluir profissionalmente, buscando incessantemente oportunidades para colocar em prática meu conhecimento e habilidades. Estou ávido por uma chance de demonstrar meu trabalho e contribuir para projetos significativos. Minha paixão pela programação e minha sede por aprendizado me impulsionam a buscar constantemente novos desafios e a superar obstáculos.

                Estou confiante de que posso agregar valor a qualquer equipe, trazendo minha energia, entusiasmo e comprometimento para cada projeto que empreender. Estou pronto para abraçar novas oportunidades e mostrar ao mundo o quanto estou determinado a me tornar um profissional exemplar no campo da programação front-end.</Typography>
            </Box>
           
        </Stack>
    )
}