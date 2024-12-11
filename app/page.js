import LandingPage from "./components/home"
export default function Home() {
  return (
    <> 
    <main className="bg-[url('../public/swoosh.svg')] bg-center bg-contain bg-no-repeat flex min-h-screen flex-col items-center justify-between">
      <LandingPage/>
    </main>
    </>
  )
}
