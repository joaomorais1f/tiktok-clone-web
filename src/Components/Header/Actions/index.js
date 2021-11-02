import ActionButton from './ActionButton';
import Profile from './ActionButton/Profile';
import Action from './styles';

// Images
import { CloudArrowUp }  from "@styled-icons/bootstrap/CloudArrowUp";
import { PaperPlane } from "@styled-icons/ionicons-outline/PaperPlane";
import { MessageMinus } from "@styled-icons/boxicons-regular/MessageMinus";

export default function HeaderActions() {
  return (
    <Action>
      <ActionButton ActionTooltipName="Carregar Vídeos">
        <CloudArrowUp size={28} />
      </ActionButton>
      <ActionButton ActionTooltipName="Mensagem">
        <PaperPlane size={28} />
      </ActionButton>
      <ActionButton ActionTooltipName="Caixa de entrada" notifications={20}>
        <MessageMinus size={28} />
      </ActionButton>
      <Profile />
    </Action>
  )
}