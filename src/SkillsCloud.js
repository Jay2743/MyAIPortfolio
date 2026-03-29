import React from 'react';
import { Box, Typography, Paper, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    category: "Backend & Core",
    skills: ["Java 8/11", "Spring Boot", "Microservices", "REST APIs", "Redis", "Hibernate (JPA)"],
    color: "#7b1fa2" // Violet
  },
  {
    category: "DevOps & Tools",
    skills: ["Git", "Maven", "Splunk", "Postman", "JUnit", "Mockito", "Amazon Q"],
    color: "#00e5ff" // Cyan
  },
  {
    category: "Creative & Data",
    skills: ["React.js", "MySQL", "Artificial Intelligence", "Swing Trading", "Book Reading"],
    color: "#FFA116" // LeetCode Orange
  }
];

export default function SkillsCloud() {
  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 900, textAlign: 'center' }}>
        Technical Ecosystem
      </Typography>
      
      <Stack spacing={4}>
        {skillGroups.map((group, i) => (
          <Box key={i}>
            <Typography variant="subtitle2" sx={{ color: 'grey.600', mb: 2, textTransform: 'uppercase', letterSpacing: 2 }}>
              {group.category}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              {group.skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Paper
                    sx={{
                      px: 3,
                      py: 1,
                      borderRadius: 10,
                      bgcolor: 'rgba(255,255,255,0.03)',
                      border: `1px solid ${group.color}44`,
                      color: group.color,
                      fontWeight: 'bold',
                      cursor: 'default',
                      transition: '0.3s',
                      '&:hover': {
                        bgcolor: group.color,
                        color: '#000',
                        boxShadow: `0 0 20px ${group.color}66`
                      }
                    }}
                  >
                    {skill}
                  </Paper>
                </motion.div>
              ))}
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}