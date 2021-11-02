import User from "./styles";

import { User as IUser } from "@styled-icons/boxicons-regular/User";
import { CoinPound } from "@styled-icons/icomoon/CoinPound";
import { Settings } from "@styled-icons/material-sharp/Settings";
import { BookLetter } from "@styled-icons/fluentui-system-regular/BookLetter";
import { HelpCircle } from "@styled-icons/ionicons-outline/HelpCircle";
import { Keyboard } from "@styled-icons/bootstrap/Keyboard";
import { Logout } from "@styled-icons/material-rounded/Logout";


export default function Profile() {

  return (
    <User>
      <User.Button type="button"> 
        <img src="https://www.github.com/joaomorais1f.png" alt="profile" />
      </User.Button>
      <User.Tooltip className="dropdown">
        <ul>
          <li>
            <IUser />
            <a href="/" target="_blank"> Visualizar perfil </a>
          </li>
          <li>
            <CoinPound />
            <a href="/"> Obter moedas </a>
          </li>
          <li>
            <Settings />
            <a href="/"> Configurações </a>
          </li>
          <li>
            <BookLetter />
            <a href="/"> Português </a>
          </li>
          <li>
            <HelpCircle />
            <a href="/"> Feedback e ajuda </a>
          </li>
          <li>
            <Keyboard />
            <a href="/"> Atalhos de teclado </a>
          </li>
        </ul>
        <ul>
          <li id="logout">
            <Logout />
            <a href="/"> Logout </a>
          </li>
        </ul>
      </User.Tooltip>
    </User>
  )
}