//@ts-check
import React from 'react'
import { Box, Text, } from '@chakra-ui/react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
        <Box bg='#8b939e' w='100%' color='white' className='navbar'>
            <Text className="styleNav">
              <div className="Logo">
                Salon de lectura
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
              <div>
                <CartWidget cant="6" />
              </div>
            </Text>
        </Box>
  )
}

export default NavBar