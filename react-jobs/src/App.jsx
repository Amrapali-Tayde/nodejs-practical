const name = 'Hermosa';
const a=150;
const b= 10;
const logstatus = false;
const mystyle = {
  color:red,
  fontSize:'55px',
};
const siblings = ['Vaishali','Amrapali', 'Ujwala', 'Nilesh', 'Nikita']

const App = () => {
  return (
    <>
      <div className="text-3xl">Hey {name}!</div>
      <h1 style={mystyle}>Welcom to Amrapali's work space</h1>
      <h2>division of {a} & {b} is : {a /b} </h2>
      
      <ul>
      {
        siblings.map((e1, id)=>(
          <li key={id}>{e1}</li>
        ))
      }

      </ul>
      {logstatus && 'Hi'}
    </>
  )
};

export default App

