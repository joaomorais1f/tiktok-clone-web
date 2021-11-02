import ActionBtn from "./styles";

export default function ActionButton({ ActionTooltipName, notifications, children }) {
  return (
    <ActionBtn.Container>
      <ActionBtn type="button" notifications={notifications} className={`${notifications > 0 ? 'notifications' : ''}`}>
        { children }
      </ActionBtn>
      <div className="tooltip">
        <span> { ActionTooltipName } </span>
      </div>
    </ActionBtn.Container>
  )
}