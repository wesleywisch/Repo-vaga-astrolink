import { useState } from 'react';

import { Icon } from '@iconify/react';

import './styles.scss';

type CardProps = {
  overallValue: string // aqui vem o preço
  periodicity: string // vezes na semana
  
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

  recipient: {
    city: string // cidade
    name: string // escola
  }
}

export function Card({ overallValue, periodicity, recipient, products }: CardProps) {
  const [ball, setBall] = useState('ballOne');
  const [showContainer, setShowContainer] = useState('ballOne');

  function handleOpenContainer(container: string) {
    if (container) {
      setBall(container);
      setShowContainer(container)
    }
  }

  return (
    <div className='container'>
      {showContainer === 'ballOne' && (
        <div className='card1'>
          <div className='title'>
            <h3>{recipient.city}</h3>
            <p>{recipient.name}</p>
          </div>

          <div className='images'>
            {products.slice(0, 4).map((item, key) => (
              <img key={key} src={`${item.productId.files3D.webp}`} alt={item.name} />
            ))}
          </div>

          <div className='descriptions'>
            <p>{overallValue}</p>
            <p>{periodicity}</p>
          </div>
        </div>
      )}

      {showContainer === 'ballTwo' && (
        <div className='card2'>
          <div className="titleCard">
            <h3>Quantidades</h3>
          </div>

          <div className="descriptionCard">
            <div className="scroll">
              {products.map((item, key) => (
                <div key={key}>
                  <p>{item.name}</p>
                  <p>{item.quantity}Kg</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {showContainer === 'ballThree' && (
        <div className="card3">
          <div className="titleCard">
            <h3>Valores</h3>
          </div>

          <div className="descriptionCard">
            <div className="scroll">
              {products.map((item, key) => (
                <div key={key}>
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {showContainer === 'ballFour' && (
        <div className="card4">
          <div className="titleCard4">
            <h3>Descrições</h3>
            <p>Passe o mouse sobre o produto</p>
          </div>

          <div className="descriptionCard4">
            <div className="scroll">
              {products.map((item, key) => (
                <p key={key} className="tooltip">
                  {item.name}
                  <span className="tooltipText">{item.especs}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className='balls'>
        <div className={`ballOne ${ball === 'ballOne' ? 'active' : ''}`} onClick={() => handleOpenContainer('ballOne')}></div>
        <div className={`ballTwo ${ball === 'ballTwo' ? 'active' : ''}`} onClick={() => handleOpenContainer('ballTwo')}></div>
        <div className={`ballThree ${ball === 'ballThree' ? 'active' : ''}`} onClick={() => handleOpenContainer('ballThree')}></div>
        <div className={`ballFour ${ball === 'ballFour' ? 'active' : ''}`} onClick={() => handleOpenContainer('ballFour')}></div>
      </div>

      <div className='arrowRight'>
        <Icon icon="ic:round-arrow-forward-ios" />
      </div>
    </div>
  )
} 