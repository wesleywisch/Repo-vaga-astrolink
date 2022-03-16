import Logo from '../../images/logo.svg';

import './styles.scss';

export function Header () {
  return (
    <header className='header'>
      <img src={Logo} alt="Astrolinks" />
    </header>
  )
}