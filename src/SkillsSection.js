import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
// Icons focused on your professional technical stack
import { 
  Code, 
  Storage, 
  Layers, 
  BugReport, 
  Terminal, 
  Construction 
} from '@mui/icons-material';

const skills = [
  { name: 'Java 8/11 & Spring Boot', icon: <Code color="primary" /> },
  { name: 'Microservices & Redis', icon: <Layers color="secondary" /> },
  { name: 'JUnit & Mockito Testing', icon: <BugReport color="primary" /> },
  { name: 'MySQL & MongoDB', icon: <Storage color="secondary" /> },
  { name: 'React.js & Web Tech', icon: <Terminal color="primary" /> },
  { name: 'Git, Maven & Splunk', icon: <Construction color="secondary" /> },
];

const SkillCard = ({ skill, index }) => (
  <Grid item xs={12} sm={6} md={4}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
    >
      <Paper 
        sx={{ 
          p: 4, 
          bgcolor: 'rgba(255, 255, 255, 0.02)', 
          borderRadius: 4, 
          border: '1px solid #333',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          height: '100%',
          transition: '0.3s',
          '&:hover': {
            borderColor: 'primary.main',
            bgcolor: 'rgba(123, 31, 162, 0.05)',
            boxShadow: '0 10px 30px rgba(123, 31, 162, 0.1)'
          }
        }}
      >
        <Box sx={{ 
          mb: 2, 
          p: 2, 
          borderRadius: '50%', 
          bgcolor: 'rgba(255, 255, 255, 0.05)',
          display: 'flex',
          fontSize: '2.5rem' 
        }}>
          {skill.icon}
        </Box>
        <Typography variant="h6" fontWeight="bold" sx={{ letterSpacing: 1 }}>
          {skill.name}
        </Typography>
      </Paper>
    </motion.div>
  </Grid>
);

export default function SkillsSection() {
  return (
    <Box sx={{ py: 10 }}>
      <Typography 
        variant="h2" 
        color="primary" 
        sx={{ 
          mb: 8, 
          textAlign: 'center', 
          fontWeight: 900,
          textTransform: 'uppercase',
          letterSpacing: 4,
          fontSize: { xs: '2.5rem', md: '4rem' }
        }}
      >
        Technical Expertise
      </Typography>
      <Grid container spacing={4}>
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} index={index} />
        ))}
      </Grid>
    </Box>
  );
}