import './App.css'
import PersonalCard from './components/PersonalCard'


function App() {
  const peoples = [
    {
      fullName: "Miguel Mozo",
      age: 22,
      hobby: "Coding"
    },
    {
      fullName: "Abe Allen",
      age: 43,
      hobby: "Surfing"
    },
    {
      fullName: "Jasmine Uguey",
      age: 30,
      hobby: "Writing"
    },
    {
      fullName: "Amy Van Gauff",
      age: 28,
      hobby: "Reading"
    }
  ]

  const [one, two, three, four] = peoples

return (
  <>
    <div>
      <PersonalCard person={one} />
      <PersonalCard person={two} />
      <PersonalCard person={three} />
      <PersonalCard person={four} />
    </div>
  </>
)
}

export default App
