import React from 'react';
import { Box, Stack, IconButton, Tooltip } from '@mui/material';
import { LinkedIn, GitHub, Email, Terminal } from '@mui/icons-material';
import { motion } from 'framer-motion';

const socials = [
  { 
    name: 'LinkedIn',
    icon: <LinkedIn />, 
    color: '#0077b5', 
    link: 'https://www.linkedin.com/in/jaydeep-nalawade/' // [cite: 2]
  }, 
  { 
    name: 'GitHub',
    icon: <GitHub />, 
    color: '#f0f0f0', 
    link: 'https://github.com/JaydeepNalawade' // [cite: 1]
  }, 
  { 
    name: 'LeetCode',
    icon: <Terminal />, // Using Terminal as a clean substitute for LeetCode
    color: '#FFA116', // Official LeetCode Orange
    link: 'https://leetcode.com/u/JaydeepNalawade/' 
  },
  { 
    name: 'Email',
    icon: <Email />, 
    color: '#7b1fa2', 
    link: 'mailto:jaydeep.nalawade18@gmail.com' // [cite: 5]
  } 
];

export default function SocialSidebar() {
  return (
    <Box sx={{ 
      position: 'fixed', 
      right: 20, 
      top: '50%', 
      transform: 'translateY(-50%)', 
      zIndex: 1000, 
      display: { xs: 'none', lg: 'block' } 
    }}>
      <Stack spacing={2}>
        {socials.map((social, index) => (
          <motion.div 
            key={index} 
            whileHover={{ x: -10 }} 
          >
            <Tooltip 
              title={social.name} 
              placement="left"
            >
              <IconButton 
                href={social.link} 
                target="_blank"
                sx={{ 
                  bgcolor: 'rgba(20, 20, 25, 0.8)', 
                  color: 'white', 
                  p: 1.5,
                  border: `1px solid rgba(156, 39, 176, 0.3)`,
                  backdropFilter: 'blur(10px)',
                  transition: '0.3s',
                  '&:hover': { 
                    bgcolor: social.color, 
                    color: social.name === 'GitHub' ? 'black' : 'white',
                    boxShadow: `0 0 20px ${social.color}`,
                    borderColor: social.color
                  }
                }}
              >
                {social.icon}
              </IconButton>
            </Tooltip>
          </motion.div>
        ))}
      </Stack>
    </Box>
  );
}