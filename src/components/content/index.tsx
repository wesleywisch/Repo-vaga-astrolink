import { Icon } from '@iconify/react';

import { Card } from '../Card';

import './styles.scss';

export function Content() {

  function handleGeolocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        localStorage.setItem('@Coords', JSON.stringify({ lat, lng }))
      });
    } else {
      alert('Seu navegador não suporta esse recurso!');
    }
  }

  return (
    <main>
      <section className='agro'>
        <h1>@Agronegócio, venda hoje mesmo!  </h1>

        <p>
          Habilite sua localização para melhores oportunidade:
          <Icon
            icon="ic:outline-pin-drop"
            onClick={handleGeolocation}
          />
        </p>
      </section>

      <section className='cards'>
        <h2>Últimas licitações registradas:</h2>

        <div className='divCards'>
          <Card />
        </div>
      </section>
    </main>
  )
}