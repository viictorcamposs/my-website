import PageTitle from '~/app/components/PageTitle'
import PageSubtitle from '~/app/components/PageSubtitle'
import PageParagraph from '~/app/components/PageParagraph'
import Main from '~/app/components/Main'
import EmailForm from '~/app/components/EmailForm'

export default function Page() {
  return (
    <Main addClassName="lg:grid lg:grid-cols-2 lg:gap-10">
      <div>
        <PageTitle>
          Let's talk. <span className="block sm:inline">Contact me.</span>
        </PageTitle>

        <PageParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis ullamcorper risus
          mattis iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis
          ullamcorper risus mattis iaculis.
        </PageParagraph>
      </div>

      <div>
        <PageSubtitle addClassName="lg:mt-0">Send an email</PageSubtitle>

        <EmailForm />
      </div>
    </Main>
  )
}
