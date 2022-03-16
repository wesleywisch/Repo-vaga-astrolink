import { useState } from 'react';

import { Icon } from '@iconify/react';

import './styles.scss';

export function Card() {
  const [state, setState] = useState('ballOne');
  const [state1, setState1] = useState('ballOne');

  function handleOpenContainer(container: string) {
    if (container) {
      setState(container);
      setState1(container)
    }
  }

  return (
    <div className='container'>
      {state1 === 'ballOne' && (
        <div className='card1'>
          <div className='title'>
            <h3>Viçosa-MG</h3>
            <p>Escola Gil. Mestrinho</p>
          </div>

          <div className='images'>
            <img src="https://hiperideal.vteximg.com.br/arquivos/ids/171306-1000-1000/12696.jpg?v=636626179776100000" alt="Banana" />
            <img src="https://cdn.awsli.com.br/600x700/305/305913/produto/10293544/cebola-1d05720a.jpg" alt="Cebola" />
          </div>

          <div className='descriptions'>
            <p>R$ 1.250.00,00</p>
            <p>2x semana</p>
          </div>

          <div className='balls'>
            <div className={`ballOne ${state === 'ballOne' ? 'active' : ''}`} onClick={() => handleOpenContainer('ballOne')}></div>
            <div className={`ballTwo ${state === 'ballTwo' ? 'active' : ''}`} onClick={() => handleOpenContainer('ballTwo')}></div>
            <div className={`ballThree ${state === 'ballThree' ? 'active' : ''}`} onClick={() => handleOpenContainer('ballThree')}></div>
            <div className={`ballFour ${state === 'ballFour' ? 'active' : ''}`} onClick={() => handleOpenContainer('ballFour')}></div>
          </div>

          <div className='arrowRight'>
            <Icon icon="ic:round-arrow-forward-ios" />
          </div>
        </div>
      )}

      {state1 === 'ballTwo' && (
        <div className='card2'>
          <div className="titleCard2">
            <h3>Quantidades</h3>
          </div>

          <div className="descriptionCard2">
            <div className="scroll">
              <div>
                <p>Banana prata</p>
                <p>100kg</p>
              </div>

              <div>
                <p>Laranja pocã</p>
                <p>75kg</p>
              </div>

              <div>
                <p>Pitaia</p>
                <p>125kg</p>
              </div>

              <div>
                <p>Banana prata</p>
                <p>100kg</p>
              </div>

              <div>
                <p>Laranja pocã</p>
                <p>75kg</p>
              </div>

              <div>
                <p>Pitaia</p>
                <p>125kg</p>
              </div>
            </div>
          </div>

          <div className='balls'>
            <div className={`ballOne ${state === 'ballOne' ? 'active' : ''}`} onClick={() => handleOpenContainer('ballOne')}></div>
            <div className={`ballTwo ${state === 'ballTwo' ? 'active' : ''}`} onClick={() => handleOpenContainer('ballTwo')}></div>
            <div className={`ballThree ${state === 'ballThree' ? 'active' : ''}`} onClick={() => handleOpenContainer('ballThree')}></div>
            <div className={`ballFour ${state === 'ballFour' ? 'active' : ''}`} onClick={() => handleOpenContainer('ballFour')}></div>
          </div>

          <div className='arrowRight'>
            <Icon icon="ic:round-arrow-forward-ios" />
          </div>
        </div>
      )}

      {state1 === 'ballThree' && (
        <div className="card3">
          <div className="titleCard3">
            <h3>Valores</h3>
          </div>

          <div className="descriptionCard3">
            <div className="scroll">
              <div>
                <p>Banana prata</p>
                <p>R$ 1000,00</p>
              </div>

              <div>
                <p>Laranja pocã</p>
                <p>R$ 850,00</p>
              </div>

              <div>
                <p>Pitaia</p>
                <p>R$ 2000,00</p>
              </div>

              <div>
                <p>Banana prata</p>
                <p>R$ 1000,00</p>
              </div>

              <div>
                <p>Laranja pocã</p>
                <p>R$ 850,00</p>
              </div>

              <div>
                <p>Pitaia</p>
                <p>R$ 2000,00</p>
              </div>
            </div>
          </div>

          <div className='balls'>
            <div className={`ballOne ${state === 'ballOne' ? 'active' : ''}`} onClick={() => handleOpenContainer('ballOne')}></div>
            <div className={`ballTwo ${state === 'ballTwo' ? 'active' : ''}`} onClick={() => handleOpenContainer('ballTwo')}></div>
            <div className={`ballThree ${state === 'ballThree' ? 'active' : ''}`} onClick={() => handleOpenContainer('ballThree')}></div>
            <div className={`ballFour ${state === 'ballFour' ? 'active' : ''}`} onClick={() => handleOpenContainer('ballFour')}></div>
          </div>

          <div className='arrowRight'>
            <Icon icon="ic:round-arrow-forward-ios" />
          </div>
        </div>
      )}

      {state1 === 'ballFour' && (
        <div className="card4">
          <div className="titleCard4">
            <h3>Descrições</h3>
            <p>Passe o mouse sobre o produto</p>
          </div>

          <div className="descriptionCard4">
            <div className="scroll">
              <p>Pitaia</p>
              <p>Banana prata</p>
              <p>Laranja pocã</p>
              <p>Pitaia</p>
            </div>
          </div>

          <div className='balls'>
            <div className={`ballOne ${state === 'ballOne' ? 'active' : ''}`} onClick={() => handleOpenContainer('ballOne')}></div>
            <div className={`ballTwo ${state === 'ballTwo' ? 'active' : ''}`} onClick={() => handleOpenContainer('ballTwo')}></div>
            <div className={`ballThree ${state === 'ballThree' ? 'active' : ''}`} onClick={() => handleOpenContainer('ballThree')}></div>
            <div className={`ballFour ${state === 'ballFour' ? 'active' : ''}`} onClick={() => handleOpenContainer('ballFour')}></div>
          </div>

          <div className='arrowRight'>
            <Icon icon="ic:round-arrow-forward-ios" />
          </div>
        </div>
      )}
    </div>
  )
} 