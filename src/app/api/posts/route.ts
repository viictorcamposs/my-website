import { NextResponse } from 'next/server'

export interface IPost {
  paramId: string
  title: string
  description: string
  releaseDate: string
  imageUrl: string
}

export async function GET() {
  const posts = await new Promise((resolve, _) => {
    const data: IPost[] = [
      {
        paramId: 'como-foi-a-experiencia-de-criar-meu-site-e-blog-pessoal',
        title: 'Como foi a experiência de criar meu site e blog pessoal',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis iaculis...',
        releaseDate: 'Apr 17, 2023',
        imageUrl:
          'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
      },
      {
        paramId: 'como-foi-minha-experiencia-no-primeiro-emprego-e-os-aprendizados-que-tive',
        title: 'Como foi minha experiência no primeiro emprego e os aprendizados que tive',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis ullamcorper risus mattis iaculis...',
        releaseDate: 'Apr 17, 2023',
        imageUrl:
          'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
      },
      {
        paramId:
          'como-estou-utilizando-a-inteligencia-artificial-do-taskade-para-aumentar-minha-produtividade',
        title:
          'Como estou utilizando a inteligência artificial do Taskade para aumentar minha produtividade',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis ullamcorper risus mattis iaculis...',
        releaseDate: 'Apr 17, 2023',
        imageUrl:
          'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
      },
      {
        paramId: 'como-usei-worker-api-para-melhorar-a-experiencia-do-usuario-no-meu-site',
        title: 'Como usei a Worker API para melhorar a experiência do usuário no meu site',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis ullamcorper risus mattis iaculis...',
        releaseDate: 'Apr 17, 2023',
        imageUrl:
          'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
      }
    ]

    resolve(data)
  })

  return NextResponse.json(posts)
}
