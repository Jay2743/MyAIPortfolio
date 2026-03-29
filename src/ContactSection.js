import React from 'react';
import { Box, Typography, Grid, Button,  Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { 
  LinkedIn, 
  Phone, 
  Email, 
  ArrowForwardIos 
} from '@mui/icons-material';

// Replace with your actual LinkedIn URL and Phone Number
const CONTACT_DATA = {
  email: "jaydeep.nalawade18@gmail.com",
  phone: "+919657317032", 
  linkedin: "https://www.linkedin.com/in/jaydeep-nalawade/" 
};

const ContactLink = ({ icon, label, value, href, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <Button
      fullWidth
      href={href}
      target={href.startsWith('http') ? "_blank" : "_self"}
      sx={{
        justifyContent: 'flex-start',
        p: 3,
        mb: 2,
        borderRadius: 4,
        bgcolor: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(156, 39, 176, 0.2)',
        backdropFilter: 'blur(10px)',
        color: 'white',
        transition: '0.3s',
        '&:hover': {
          bgcolor: 'rgba(156, 39, 176, 0.1)',
          borderColor: 'primary.main',
          transform: 'translateX(10px)',
        }
      }}
    >
      <Box sx={{ 
        mr: 3, 
        bgcolor: 'primary.main', 
        p: 1.5, 
        borderRadius: '12px', 
        display: 'flex',
        boxShadow: '0 0 15px rgba(123, 31, 162, 0.5)'
      }}>
        {icon}
      </Box>
      <Box sx={{ textAlign: 'left', flexGrow: 1 }}>
        <Typography variant="caption" sx={{ color: 'grey.500', textTransform: 'uppercase', letterSpacing: 1 }}>
          {label}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          {value}
        </Typography>
      </Box>
      <ArrowForwardIos sx={{ fontSize: 16, color: 'grey.700' }} />
    </Button>
  </motion.div>
);

export default function ContactSection() {
  return (
    <Box id="contact" sx={{ py: 15 }}>
      <Grid container spacing={8} alignItems="center">
        
        {/* LEFT SIDE: CONTACT OPTIONS */}
        <Grid item xs={12} md={6}>
          <Typography variant="h2" sx={{ fontWeight: 900, mb: 1, color: 'primary.main' }}>
            Let's Talk.
          </Typography>
          <Typography variant="h5" sx={{ color: 'grey.500', mb: 5 }}>
            Ready to discuss about opening in your organization?
          </Typography>

          <Stack>
            <ContactLink 
              icon={<LinkedIn />} 
              label="Professional" 
              value="LinkedIn Profile" 
              href={CONTACT_DATA.linkedin}
              delay={0.1}
            />
            <ContactLink 
              icon={<Phone />} 
              label="Call / WhatsApp" 
              value={CONTACT_DATA.phone} 
              href={`tel:${CONTACT_DATA.phone}`}
              delay={0.2}
            />
            <ContactLink 
              icon={<Email />} 
              label="Email Me" 
              value="Jaydeep Nalawade" 
              href={`mailto:${CONTACT_DATA.email}`}
              delay={0.3}
            />
          </Stack>
        </Grid>

        {/* RIGHT SIDE: STYLISH VERTICAL IMAGE */}
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative' }}
          >
            {/* Background Decorative Glow */}
            <Box sx={{
              position: 'absolute',
              top: '10%',
              left: '10%',
              width: '100%',
              height: '100%',
              bgcolor: 'primary.main',
              filter: 'blur(80px)',
              opacity: 0.2,
              zIndex: 0
            }} />

            {/* The Image Container */}
            <Box
              sx={{
                width: { xs: '280px', md: '350px' },
                height: { xs: '450px', md: '550px' },
                borderRadius: '40px', // Circular corners
                overflow: 'hidden',
                border: '2px solid rgba(255,255,255,0.1)',
                position: 'relative',
                zIndex: 1,
                boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
                '&:after': {
                    content: '""',
                    position: 'absolute',
                    top: 0, left: 0, width: '100%', height: '100%',
                    background: 'linear-gradient(to top, #050505 5%, transparent 40%)'
                }
              }}
            >
              <Box
                component="img"
                src="./Project_Images/My_Image.jpeg" // REPLACE WITH YOUR IMAGE
                alt="Jaydeep Nalawade"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: '0.5s',
                  '&:hover': { transform: 'scale(1.05)' }
                }}
              />
              
              {/* Floating Name Label */}
              <Box sx={{ position: 'absolute', bottom: 30, left: 30, zIndex: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'white' }}>
                    Jaydeep Nalawade
                </Typography>
                <Typography variant="body2" sx={{ color: 'primary.light', fontWeight: 'bold', letterSpacing: 2 }}>
                    JAVA DEVELOPER
                </Typography>
              </Box>
            </Box>
          </motion.div>
        </Grid>

      </Grid>
    </Box>
  );
}