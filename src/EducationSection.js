import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { School } from '@mui/icons-material';

const educationData = [
  {
    degree: "Bachelor of Engineering (CS)", // 
    institution: "Avasari College of Engineering (Pune University)", // 
    year: "2019 - 2023", // 
    score: "CGPA: 8.6", // 
  },
  {
    degree: "Higher Secondary (HSC)", // 
    institution: "Vyanktrao High School & Jr. College", // 
    year: "2018 - 2019", // 
    score: "72.15%", // 
  },
  {
    degree: "Secondary School (SSC)", // 
    institution: "Shri Mouni Maharaj High School", // 
    year: "2017", // 
    score: "95.80%", // 
  }
];

export default function EducationSection() {
  return (
    <Box id="education" sx={{ py: 10 }}>
      <Typography variant="h2" color="primary" sx={{ mb: 6, textAlign: 'center', fontWeight: 900 }}>
        Education
      </Typography>
      <Grid container spacing={4}>
        {educationData.map((edu, index) => (
          <Grid item xs={12} md={4} key={index}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }}>
              <Paper sx={{ 
                p: 4, textAlign: 'center', height: '100%', borderRadius: 6, 
                bgcolor: 'background.paper', border: '1px solid #222' 
              }}>
                <School color="primary" sx={{ fontSize: 50, mb: 2 }} />
                <Typography variant="h6" fontWeight="bold">{edu.degree}</Typography>
                <Typography variant="body1" color="grey.400">{edu.institution}</Typography>
                <Typography variant="h5" color="secondary" sx={{ my: 2, fontWeight: 900 }}>{edu.score}</Typography>
                <Typography variant="caption" color="grey.600">{edu.year}</Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}