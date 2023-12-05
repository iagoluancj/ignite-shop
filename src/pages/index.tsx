import { styled } from '../styles'

const Button = styled('button', {
  backgroundColor: '$green500',
  borderRadius: 8,
  boreder: 0,
  padding: '4px 50px',
})

export default function Home() {
  return (
      <Button>Enviar</Button>
  )
}
