import React from "react";

export const Home: React.FC = () => {
  const navButtons = [
    {
      title: 'Home',
      url: '#'
    },
    {
      title: 'A propos',
      url: '#aboutme'
    },
    {
      title: 'Parcours',
      url: '#resume'
    },
    {
      title: 'Education',
      url: '#education'
    },
    {
      title: 'Skills',
      url: '#skills'
    },
    {
      title: 'Projets',
      url: '#projects'
    },
  ]
  return (
    <>
      <div>Bienvenue sur une app React !</div>
    </>
  )
}

export default Home
