import React from 'react';
import { Box, Typography, Paper, Stack, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { Work, Code, Assessment } from '@mui/icons-material';

const workHistory = [
  {
    role: "Java Backend Developer - ASE", 
    company: "Tata Consultancy Services",
    period: "Nov 2024 - Present", 
    icon: <Work />,
    points: [
      "Optimizing Spring Boot microservices for AIG and Pfizer insurance workflows.",
      "Improved app initialization by 50-60% using multithreading and asynchronous processing.",
      "Utilizing Java 8 (Streams, Collections) for backend performance enhancements. "
    ]
  },
  {
    role: "Assistant System Engineer Trainee", 
    company: "Tata Consultancy Services", 
    period: "Nov 2023 - Nov 2024",
    icon: <Assessment />,
    points: [
      "Implemented Redis caching, achieving a 40% improvement in API response times. ",
      "Developed reusable Spring Boot libraries to improve code maintainability.",
      "Achieved 80%+ test coverage using JUnit and Mockito."
    ]
  },
  {
    role: "Front End Developer Intern", 
    company: "Araha Consultancy Services", 
    period: "Sept 2022 - May 2023", 
    icon: <Code />,
    points: [
      "Built dynamic UI components for a travel site, increasing engagement by 40%.",
      "Integrated RESTful APIs for real-time data fetching using JavaScript."
    ]
  }
];

export default function ExperienceSection() {
  return (
    <Box id="experience" sx={{ py: 10 }}>
      <Typography variant="h2" color="primary" sx={{ mb: 8, textAlign: 'center', fontWeight: 900 }}>
        Work Experience
      </Typography>

      <Box sx={{ maxWidth: '900px', mx: 'auto', position: 'relative' }}>
        {/* Vertical Line */}
        <Box sx={{ 
          position: 'absolute', left: { xs: 20, md: '50%' }, top: 0, bottom: 0, 
          width: '2px', bgcolor: 'rgba(156, 39, 176, 0.3)', transform: 'translateX(-50%)' 
        }} />

        {workHistory.map((item, index) => (
          <Box key={index} sx={{ 
            display: 'flex', justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
            mb: 6, position: 'relative', width: '100%' 
          }}>
            {/* Timeline Dot */}
            <Box sx={{ 
              position: 'absolute', left: { xs: 20, md: '50%' }, top: 24, 
              width: 16, height: 16, borderRadius: '50%', bgcolor: 'secondary.main',
              transform: 'translateX(-50%)', zIndex: 2, boxShadow: '0 0 10px #00e5ff'
            }} />

            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              style={{ width: '100%', maxWidth: '420px', marginLeft: index % 2 !== 0 ? 'auto' : '0' }}
            >
              <Paper sx={{ 
                p: 3, bgcolor: 'background.paper', borderRadius: 4, border: '1px solid #333',
                ml: { xs: 6, md: 0 } 
              }}>
                <Typography variant="caption" color="secondary" sx={{ fontWeight: 'bold' }}>
                  {item.period}
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 1 }}>{item.role}</Typography>
                <Typography variant="subtitle1" color="primary.light" gutterBottom>{item.company}</Typography>
                <Divider sx={{ my: 2, bgcolor: '#333' }} />
                <Stack spacing={1}>
                  {item.points.map((p, i) => (
                    <Typography key={i} variant="body2" color="grey.500">• {p}</Typography>
                  ))}
                </Stack>
              </Paper>
            </motion.div>
          </Box>
        ))}
      </Box>
    </Box>
  );
}