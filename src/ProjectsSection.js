import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, Chip, Stack, Container } from '@mui/material';
import { motion } from 'framer-motion';
import {  Launch } from '@mui/icons-material';

const projects = [
  {
    title: 'Interactive AI-Driven Portfolio',
    company: 'Personal Project',
    description: 'A high-performance, cinematic personal portfolio designed to showcase the intersection of backend engineering and visual storytelling. The application features a custom-built, interactive "About" section where a 2D Ghibli-style character utilizes the Web Speech API to provide an AI-powered audio introduction. The project focuses on smooth user experience with staggered animations, a professional loading screen, and a fully responsive grid-based design. It demonstrates advanced React concepts including hooks, custom themes, and integration with third-party animation libraries',
    tech: ['React.js', 'MUI', 'Framer Motion', 'AI Voice','Chatgpt','Gemini'],
    image: './Project_Images/Portfolio_Web.png',
    link: 'https://github.com/Jay2743/MyAIPortfolio'
  },
  {
    title: 'McDiffyStore Springboot Application', 
    company: 'Personal Project',
    description: 'McDiffyStore is a scalable backend e-commerce system built using Spring Boot. The application follows a clean layered architecture with Controller, Service, and Repository layers to ensure maintainability and separation of concerns. It exposes RESTful APIs for managing users, products, and business logic. The project uses Spring Data JPA with an H2 in-memory database for development and is designed to be easily extendable to MySQL for production environments. It demonstrates strong backend fundamentals including API design, data persistence, and modular architecture',
    tech: ['Java 11', 'Spring Boot', 'REST APIs', 'H2 Database'], 
    image: './Project_Images/McDiffyStore.png',
    link: 'https://github.com/Jay2743/McDiffyStore'
  },
  {
    title: 'Weather App',
    company: 'Personal Project', 
    description: 'Weather App is a web-based application built using Node.js and Express.js that provides real-time weather information for different cities. The application uses Handlebars (HBS) as the templating engine to render dynamic views and follows a structured MVC-like approach with reusable partials. It features multiple routes such as Home, About, and Weather, along with a custom 404 error page for better user experience. The frontend is designed using HTML, CSS, and Bootstrap, ensuring a responsive and user-friendly interface. This project demonstrates skills in server-side rendering, routing, and dynamic content handling in a Node.js environment.',
    tech: ['Node Js' ,'Express Js'], 
    image: './Project_Images/Weather.png',
    link: 'https://github.com/Jay2743/Weather_App'
  },
  {
    title: 'Buyhive E-commerce Platform',
    company: 'Personal Project',
    description: 'BuyHive is a full-stack e-commerce web application designed to provide a seamless online shopping experience. It features secure user authentication using JWT, where login sessions persist via token-based authorization. Users can search for products, view details, and add items to their cart for purchase. The application includes a robust backend built with Node.js and Express.js, handling APIs, authentication, and business logic efficiently. It also supports file uploads, making it extensible for product image management. The frontend is designed to be intuitive and responsive, ensuring smooth navigation and usability. This project demonstrates strong skills in REST API development, authentication, state management, and full-stack integration.', 
    tech: ['React Js', 'Express Js', 'JWT Authentication' , 'Node Js'], 
    image: './Project_Images/BuyHive.png',
    link: 'https://github.com/Jay2743/BuyHive'
  }

];

export default function ProjectsSection() {
  return (
    <Container maxWidth="lg" id="projects" sx={{ py: 10 }}>
      <Typography 
        variant="h3" 
        sx={{ 
          mb: 6, 
          textAlign: 'center', 
          fontWeight: 900,
          background: 'linear-gradient(90deg, #7b1fa2, #00e5ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        Featured Projects
      </Typography>
      
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} key={index}> 
            <motion.div
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card sx={{ 
                bgcolor: 'rgba(20, 20, 25, 0.9)', 
                borderRadius: '24px', 
                border: '1px solid rgba(156, 39, 176, 0.3)',
                backdropFilter: 'blur(10px)',
                overflow: 'hidden',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                  borderColor: 'secondary.main',
                  boxShadow: '0 0 25px rgba(0, 229, 255, 0.15)'
                }
              }}>
                <CardMedia
                  component="img"
                  height="220" 
                  image={project.image}
                  alt={project.title}
                  sx={{ 
                    // KEY FIXES HERE:
                    objectFit: 'cover', // Or 'contain' if you want the full image with borders
                    objectPosition: 'top', // Focuses on the top part of the image
                    transition: '0.5s', 
                    width: '100%',
                    '&:hover': { filter: 'brightness(1.1)' } 
                  }}
                />
                
                <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1.5 }}>
                    <Typography variant="h6" sx={{ fontWeight: 800, pr: 1 }}>
                      {project.title}
                    </Typography>
                    <Chip 
                      label={project.company} 
                      size="small" 
                      sx={{ bgcolor: 'primary.main', color: 'white', fontSize: '10px', flexShrink: 0 }} 
                    />
                  </Box>

                  <Typography 
                    variant="body2" 
                    color="grey.500" 
                    sx={{ 
                      mb: 2.5, 
                      // This ensures descriptions don't make the card too long
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      lineHeight: 1.6
                    }}
                  >
                    {project.description}
                  </Typography>

                  <Box sx={{ mt: 'auto' }}> {/* Pushes tech stack and button to the bottom */}
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 3 }}>
                      {project.tech.map((t) => (
                        <Typography key={t} variant="caption" sx={{ color: 'secondary.main', fontWeight: 700 }}>
                          #{t}
                        </Typography>
                      ))}
                    </Stack>

                    <Button 
                      href={project.link}
                      target="_blank"
                      variant="contained" 
                      fullWidth
                      startIcon={<Launch />}
                      sx={{ 
                        borderRadius: '12px', 
                        bgcolor: 'rgba(156, 39, 176, 0.1)',
                        color: 'primary.light',
                        textTransform: 'none',
                        fontWeight: 'bold',
                        border: '1px solid rgba(156, 39, 176, 0.5)',
                        '&:hover': { bgcolor: 'primary.main', color: 'white' }
                      }}
                    >
                      View Codebase
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}