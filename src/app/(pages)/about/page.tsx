import PageTitle from '~/app/components/PageTitle'
import Main from '~/app/components/Main'

export default function About() {
  return (
    <Main>
      <PageTitle>Hi, I'm Victor Campos.</PageTitle>

      <div className="w-full max-w-[300px] h-[300px] bg-slate-400 rounded-lg" />

      <p className="mt-8 font-body font-normal text-base text-[#464444]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis ullamcorper risus
        mattis iaculis. Sed ut congue urna. Donec ut ipsum eros. Curabitur in erat feugiat, egestas
        orci in, feugiat velit. Pellentesque diam libero, scelerisque ultrices odio quis, mollis
        pharetra urna. Proin lobortis bibendum urna, nec rutrum urna malesuada et.{' '}
      </p>
    </Main>
  )
}
