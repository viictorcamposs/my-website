import PageTitle from '~/app/components/PageTitle'
import PageSubtitle from '~/app/components/PageSubtitle'
import PageParagraph from '~/app/components/PageParagraph'
import Main from '~/app/components/Main'
import EmailForm from '~/app/components/EmailForm'

export default function Email() {
  return (
    <Main>
      <PageTitle>
        Let's talk. <span className="block">Contact me.</span>
      </PageTitle>

      <PageParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis ullamcorper risus
        mattis iaculis.
      </PageParagraph>

      <PageSubtitle>Send an email</PageSubtitle>

      <EmailForm />
    </Main>
  )
}
