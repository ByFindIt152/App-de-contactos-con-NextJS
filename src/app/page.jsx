"use client"
import { Imprima } from 'next/font/google'
import Image from 'next/image'
import styles from './page.module.css'
import { RevealList, RevealWrapper } from 'next-reveal'

// Importando Componentes

import DataProvider from '../../components/UserContext'
import Users from '../../components/Users'
import BtnAdd from '../../components/BtnAdd'
import ModalAdd from '../../components/ModalAdd'
import ModalEdit from '../../components/ModalEdit'


export default function Home() {

  return (
    <DataProvider>
      <div className="container">
      <RevealWrapper className="load-hidden" origin='right' distance='650px' scale={2} >
        <h1>Lista de Contactos</h1>
      </RevealWrapper>
        <Users />
        <RevealWrapper  className="load-hidden" origin='bottom' delay={650} duration={50} reset={false} >
          <BtnAdd />
        </RevealWrapper>
          <ModalAdd />
          <ModalEdit />
      </div>
    </DataProvider>
  )
}


