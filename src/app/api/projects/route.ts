import { NextResponse } from 'next/server'

export async function GET() {
  const projects = await new Promise((resolve, _) => {
    const data = [
      {
        title: 'Nullam lobortis ullamcorper',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus mattis iaculis.',
        imageUrl:
          'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
      },
      {
        title: 'Nullam lobortis ullamcorper',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus mattis iaculis.',
        imageUrl:
          'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
      },
      {
        title: 'Nullam lobortis ullamcorper',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus mattis iaculis.',
        imageUrl:
          'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
      },
      {
        title: 'Nullam lobortis ullamcorper',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus mattis iaculis.',
        imageUrl:
          'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
      },
      {
        title: 'Nullam lobortis ullamcorper',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus mattis iaculis.',
        imageUrl:
          'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
      },
      {
        title: 'Nullam lobortis ullamcorper',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus mattis iaculis.',
        imageUrl:
          'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
      }
    ]

    resolve(data)
  })

  return NextResponse.json({ projects })
}
