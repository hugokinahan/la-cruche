import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { GiphyFetch } from '@giphy/js-fetch-api'
import { Gif } from '@giphy/react-components'

const giphyFetch = new GiphyFetch('KxoIICdK3D188v7YEaw3EgBClRH8Tc3g')
const gifsArray = [
  'WndRjqGHeKSYg',
  '9AXYRTDOfyncSAUmYK',
  'SXrYidLW3p7TlbhINM',
  'bgxQDCg1hdvJm',
  'jJ4KxpyOZ9fmE',
  'KbTgJ1x8Z1ATktPlut',
  'VGhTNEEfuXfNSr1J6I',
  'MCQVon5pIc9hDj7tnW',
  'F0HQQ0p3Mp8QM',
  '2t8jyWKydrHcQ',
  '7EqSP8bbgxYvS',
  '146YfoNq3cuM7u',
  'HqZSbR8DPGIo0',
  '4Mhlci7WdQVCU',
  'l41m3ITmmdytnnc76'
]
const randomizedGifs = gifsArray[Math.floor(Math.random() * gifsArray.length)]

function NotFound() {

  const [gif, setGif] = React.useState(null)
  React.useEffect(() => {
    const getGif = async () => {
      const { data } = await giphyFetch.gif(randomizedGifs)
      setGif(data)
    }
    getGif()
  }, [])

  console.log(gif)
  return (
    <section>
      <Nav />
      <div className='notfound-content'>
      <h1 className='about-header'>Fore! The requested URL was not found!</h1>{' '}
              <div className="gif">{gif && <Gif gif={gif}  />}</div>
      </div>
      <Footer />
    </section>

  )
}

export default NotFound