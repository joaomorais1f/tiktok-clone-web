import Navbar from './styles';
import Search from './Search';
import HeaderActions from './Actions';

import TiktokIcon from '../../assets/images/logo-tiktok.svg';

export default function Header() {
  return (
    <Navbar>
      <Navbar.Container>
        <img src={TiktokIcon} alt="Logo do Tiktok" />
        <Search />
        <HeaderActions />
      </Navbar.Container>
    </Navbar>
  )
}