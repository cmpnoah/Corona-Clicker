import React, {useState, useEffect} from 'react'
import {useToggle} from 'react-use'
import {Modal} from './modal'
import {Header} from './header'
import {Imprint} from './imprint'

import drk from './svgs/drk.svg'
import betterplace from './svgs/betterplace.svg'
import wirvsvirus from './svgs/wirvsvirus.svg'


export const Home = (props) => {
  const [imprintModal, toggleImprintModal] = useToggle(false)

  return <div className='mt-4'>
    <Header {...props} />

    <Modal>
      <div className='text-teal-800 text-center p-4'>
        <div className=" font-bold">Willkommen bei Corona-Clicker!</div>
        <br/>
        Durch Tippen auf den Virus verminderst du die Zahl der Infizierten. Klicke auf Boost, um den Virus schneller zu bekämpfen. Alle Spenden kommen dem Deutschen Roten Kreuz für den Kampf gegen das Coronavirus zugute.
        <br/>
        (Für mehr Infos klicke auf den Button unten rechts.)
        <br/>
        <br/>
        Dieses Projekt befindet sich weiterhin in Entwicklung und wird in den nächsten Tagen noch einige Verbesserung erhalten! #staytuned
        <br/>
        <br/>
        Tipp: Falls noch Performanceprobleme auf mobilen Geräten auftreten sollten, unsere <span className="font-bold">Desktopversion</span> funktioniert bereits einwandfrei! 😉
        <br/>
        <br/>
        <span className=" text-sm text-red-600">Falls noch Probleme mit den Spendenbelohnungen auftreten sollten, tut uns das Leid! Wir arbeiten daran und können bereits versichern, die Spende kommt auf jeden Fall an! Vielen Dank für Eure Unterstützung und Verständnis!</span>
        <a href='/games/new' className='btn block mb-6 mt-4'>PLAY</a>

        <span onClick={toggleImprintModal} className='anchor text-lg'>Impressum</span>
        <div className='text-gray-400'>#WirVsVirus #Gamification</div>

        <div className='flex justify-between items-center mt-6 mb-2'>
          <img src={wirvsvirus} className='h-12' />
          <img src={betterplace} className='h-6' />
          <img src={drk} className='h-10' />
        </div>

      </div>
    </Modal>

    {imprintModal && <Modal onClose={toggleImprintModal}><Imprint /></Modal>}
  </div>
}
