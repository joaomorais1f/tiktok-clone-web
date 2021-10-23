import Input from './styles';

export default function Search() {
  return (
    <Input>
      <Input.Form>
        <Input.Text type="text" name="search" />
        <Input.Bar></Input.Bar>
        <Input.Submit>
          Submit
        </Input.Submit>
      </Input.Form>
    </Input>
  )
}