import Search from './Search';
import Navbar from './styles';

import TiktokIcon from '../../assets/images/logo-tiktok.svg';

export default function Header() {
  return (
    <Navbar>
      <Navbar.Container>
        <img src={TiktokIcon} alt="Logo do Tiktok" />
        <Search />
      </Navbar.Container>
    </Navbar>
  )
}