import React, { useState, useEffect } from 'react';
import { 
  ThemeProvider, 
  CssBaseline, 
  Container, 
  Box, 
  Typography, 
  Button, 
  AppBar, 
  Toolbar,
  Fab,
  Zoom,
  useScrollTrigger,
  LinearProgress 
} from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';
import { motion } from 'framer-motion';
import theme from './theme';

// Section Imports
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import SkillsCloud from './SkillsCloud'; // Integrated the new Skills Cloud
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import SocialSidebar from './SocialSidebar';

/**
 * Loading Screen Component
 * Pulsing logo and progress bar to match the cinematic theme.
 */
const LoadingScreen = () => {
  return (
    <Box sx={{
      height: '100vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      bgcolor: '#050505',
      zIndex: 9999,
      position: 'fixed'
    }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" color="primary" sx={{ fontWeight: 900, mb: 2, letterSpacing: 4 }}>
          Initializing Jaydeep Portfolio
        </Typography>
      </motion.div>
      
      <Box sx={{ width: '200px', mt: 2 }}>
        <LinearProgress color="primary" sx={{ height: 2, borderRadius: 5 }} />
        <Typography variant="caption" color="grey.700" sx={{ display: 'block', mt: 1, textAlign: 'center', letterSpacing: 2 }}>
          INITIALIZING...
        </Typography>
      </Box>
    </Box>
  );
};

/**
 * ScrollTop Component
 * Floating button to return to the top of the page.
 */
function ScrollTop() {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 100 });
  
  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <Zoom in={trigger}>
      <Fab onClick={handleClick} color="primary" size="small" sx={{ position: 'fixed', bottom: 32, right: 32 }}>
        <KeyboardArrowUp />
      </Fab>
    </Zoom>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // PRE-LOAD VOICES: Wakes up the browser's speech engine for your Ghibli character intro
    window.speechSynthesis.getVoices();

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LoadingScreen />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      {/* Floating Elements */}
      <SocialSidebar />
      <ScrollTop />

      {/* Navigation Bar */}
      <AppBar position="fixed" sx={{ bgcolor: 'rgba(5,5,5,0.8)', backdropFilter: 'blur(10px)', boxShadow: 'none' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography 
            variant="h6" 
            color="primary" 
            sx={{ fontWeight: 'bold', cursor: 'pointer' }} 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            JN
          </Typography>
          
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            <Button color="inherit" onClick={() => scrollTo('about')}>About</Button>
            <Button color="inherit" onClick={() => scrollTo('skills')}>Skills</Button>
            <Button color="inherit" onClick={() => scrollTo('experience')}>Experience</Button> 
            <Button color="inherit" onClick={() => scrollTo('education')}>Education</Button>
            <Button color="inherit" onClick={() => scrollTo('projects')}>Projects</Button>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={() => scrollTo('contact')} 
              sx={{ ml: 1, borderRadius: 5 }}
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg">
        {/* HERO SECTION */}
        <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <Typography variant="h1" sx={{ background: 'linear-gradient(45deg, #7b1fa2 30%, #00e5ff 90%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 900, fontSize: { xs: '3.5rem', md: '6rem' } }}>
                Backend Engineer
              </Typography>
              <Typography variant="h5" color="grey.500">
                Java Developer | Spring Boot Developer | Enthusiastic Learner
              </Typography>
              <Box sx={{ mt: 4 }}>
                  <Button size="large" variant="contained" color="secondary" onClick={() => scrollTo('projects')} sx={{ borderRadius: 8, px: 4 }}>
                    See Projects
                  </Button>
              </Box>
            </motion.div>
        </Box>

        {/* Content Sections */}
        <AboutSection />
        
        {/* SKILLS AREA: Combined Interactive Cloud and Detailed Meters */}
        <Box id="skills" sx={{ pt: 10 }}>
          <SkillsCloud />
          <SkillsSection />
        </Box>

        <ExperienceSection />
        
        <EducationSection />
        
        <ProjectsSection />
        
        <ContactSection />
      </Container>
      
      {/* Footer */}
      <Box sx={{ py: 5, textAlign: 'center', borderTop: '1px solid #222', mt: 10 }}>
        <Typography color="grey.700">© 2026 JP Cinematography | Building for the future.</Typography>
      </Box>
    </ThemeProvider>
  );
}

export default App;