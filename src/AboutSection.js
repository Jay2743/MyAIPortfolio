import React, { useEffect } from 'react';
import { Box, Typography, Container, Stack } from '@mui/material';
import { motion } from 'framer-motion';

export default function AboutSection() {

  // Pre-load voices so they are ready when you hover
  useEffect(() => {
    window.speechSynthesis.getVoices();
  }, []);

  const handleMouseEnter = () => {
    window.speechSynthesis.cancel();

    const script = `Namaste, I'm Jaydeep Nalawade. I am from the Kolhapur District of Maharashtra. 
    I completed my Bachelor of Engineering in 2023. Currently, I am a Java Backend Developer 
    at Tata Consultancy Services with 2.4 years of experience. 
    I specialize in optimizing backend services using Java 8 and Spring Boot. 
    I have delivered high-impact work for AIG and Pfizer, 
    implementing Redis caching and unit testing using Junit and Mockito.`;

    const utterance = new SpeechSynthesisUtterance(script);
    utterance.lang = 'en-IN'; 

    const voices = window.speechSynthesis.getVoices();
    
    /**
     * ADVANCED VOICE SEARCH
     * We look for specific high-quality Indian Male voices:
     * 1. Microsoft Ravi (Windows)
     * 2. Rishi (Mac/iOS)
     * 3. Google India Male (Chrome)
     */
    const maleVoice = voices.find(v => 
      (v.name.includes('Ravi') || v.name.includes('Rishi') || v.name.includes('Male')) 
      && (v.lang.includes('en-IN') || v.lang.includes('en-GB'))
    );

    if (maleVoice) {
      utterance.voice = maleVoice;
    }

    // Tuning for a young man's voice
    utterance.pitch = 0.95; // Dropped from 1.1 to 0.95 to make it sound deeper and more masculine
    utterance.rate = 0.9;   // Keep it steady and professional
    utterance.volume = 1;

    window.speechSynthesis.speak(utterance);
  };

  const handleMouseLeave = () => {
    window.speechSynthesis.cancel();
  };

  return (
    <Container id="about" sx={{ py: 12 }}>
      <Stack spacing={6} alignItems="center" textAlign="center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: 'pointer' }}
        >
          <Box
            component="img"
            src="./jaydeepCharacter.png" 
            alt="Jaydeep Character"
            sx={{
              width: '100%',
              maxWidth: '380px',
              borderRadius: '40px',
              boxShadow: '0 20px 60px rgba(123, 31, 162, 0.4)',
              border: '3px solid rgba(123, 31, 162, 0.3)',
              transition: '0.3s',
              '&:hover': { borderColor: '#00e5ff' }
            }}
          />
          <Typography variant="caption" sx={{ display: 'block', mt: 2, color: 'grey.600' }}>
            (Hover to hear my AI intro)
          </Typography>
        </motion.div>

        <Box sx={{ maxWidth: '800px' }}>
          <Typography variant="h3" color="primary" sx={{ fontWeight: 900, mb: 3 }}>
            The Mind Behind the Code
          </Typography>
          <Typography variant="h6" sx={{ color: 'grey.400', lineHeight: 1.8, mb: 3 }}>
             I Love to code also resolving the bugs provides greatest happiness to me . This thing helping to enhance my problem solving skills. 
             
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
}
