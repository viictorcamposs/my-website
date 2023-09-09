import Title from '~/app/components/Title'
import Main from '~/app/components/Main'
import HeaderSecondary from '~/app/components/HeaderSecondary'

export default function Page() {
  return (
    <>
      <HeaderSecondary />

      <Main>
        <Title>Reminder</Title>

        <div className="mt-10 space-y-4">
          <p className="italic text-sm/6 md:text-base/7 text-secondary">
            You are who you are because of everything that has brought you here. Fate has fashioned
            you into the person you are, and Nature intends that you are right here, right now. You
            have everything within you that you need to face this moment, and it can be no other
            way.
          </p>

          <p className="italic text-sm/6 md:text-base/7 text-secondary">
            Have gratitude for everything that has happened, for it has taught you who you are.
          </p>
        </div>
      </Main>
    </>
  )
}
