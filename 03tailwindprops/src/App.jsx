import "./App.css";
import Card from './components/Card'
function App() {
  let myObj={
    username:"Omkar",
    age:22
  }
  let newArr=[1,2,3]
  return (
    <>
      <h1
        className="bg-green-500 text-black p-4
      rounded-xl mb-5"
      >
        Tailwind Test
      </h1>
      <Card username="chaiaurcode" someObj={myObj} someArr={newArr} btn="Click Me"/>
      <Card username="Omkar" btn="Visit Me"/>
      <Card/>
    </>
  ); 
}
export default App;