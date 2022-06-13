import React from 'react'
import { Box, Text, } from '@chakra-ui/react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div>
        <Box bg='#283c55' w='100%' p={4} color='white' className='navbar'>
            <Text className="styleNav">
              <div className="Logo">
              Salón de lectura
              </div>
              <div className="itemsNav">
                <div>
                  <a href="#">Inicio</a>
                </div>
                <div>
                  <a href="#">Productos</a>
                </div>
                <div>
                  <a href="#">Consultas</a>
                </div>
              </div>
            </Text>
        </Box>
    </div>
  )
}

export default NavBar