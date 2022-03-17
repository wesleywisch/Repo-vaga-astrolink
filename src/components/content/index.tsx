import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';

import { Card } from '../Card';
import { LoadingScreen } from '../LoadingScreen';

import './styles.scss';

type PropsApi = {
  overallValue: string // aqui vem o preço
  periodicity: string // vezes na semana

  bidder: [{
    name: string, // nome da fruta

    products: [{
      especs: string, // vai no toolpip
      quantity: number, // quantidade da fruta
      name: string, // nome da fruta
      price: string, // valor da fruta

      productId: {
        files3D: {
          webp: string // imagem
        };
      },
    }];
  }]

  recipient: {
    city: string // cidade
    name: string // escola
  }
}

export function Content() {
  const [loading, setLoading] = useState(false);
  const [dataApi, setDataApi] = useState<PropsApi[]>([]);

  function handleSearchGeolocation() {
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

  useEffect(() => {
    async function getApi() {
      try {
        setLoading(true);
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL as string}/auctions/getPublished`)
          .then(response => response.json())

        setDataApi(response);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    getApi();
  }, []);

  return (
    <main>
      <section className='agro'>
        <h2>@Agronegócio, venda hoje mesmo!  </h2>

        <p>
          Habilite sua localização para melhores oportunidade:
          <Icon
            icon="ic:outline-pin-drop"
            onClick={handleSearchGeolocation}
          />
        </p>
      </section>

      <section className='cards'>
        <h4>Últimas licitações registradas:</h4>

        {loading ? (<LoadingScreen />) : (
          <div className='divCards'>
            {dataApi.map((item, key) => (
              item.bidder.map((bidder) => {
                const products = bidder.products;

                return (
                  <Card
                    key={key}
                    products={products}
                    overallValue={item.overallValue}
                    periodicity={item.periodicity}
                    recipient={item.recipient}
                  />
                )
              }))
            )}
          </div>
        )}
      </section>
    </main>
  )
}