import Input from './styles';

export default function Search() {
  return (
    <Input>
      <Input.Form>
        <Input.Text type="search" name="search" placeholder="Pesquisar contas e vídeos" />
        <Input.Split />
        <Input.Submit>
          <Input.SubmitIcon size={24} color="#16182357" />
        </Input.Submit>
        <Input.Border className="border" />
      </Input.Form>
    </Input>
  )
}