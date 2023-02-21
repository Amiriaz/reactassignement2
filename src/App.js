import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [Question , setQuestion] = useState([
    {
      Question: "MS word is software of __",
      CorrectAns: "Microsoft",
      Options: ["Apple", "Android", "Google", "Microsoft"],
    },
    {
      Question: "Which is the word processing software?",
      CorrectAns: "MS word 2007",
      Options: ["Avast", "MS word 2007", "Google Chrome ", "Mozilla Firefox"],
    },
    {
      Question: "MS Word is __ software.    ",
      CorrectAns: "Word processing",
      Options: [
        "Web browser",
        "Word processing",
        "Operating system",
        "Antivirus",
      ],
    },
    {
      Question: "The valid format of MS Word is __",
      CorrectAns: ".doc",
      Options: [".exe", ".doc", ".png", " .jpeg"],
    },
    {
      Question: "What program is used in MS-Word to check the spelling?",
      CorrectAns: "Spelling & Grammar",
      Options: ["Research", "Word Count", "Set language", "Spelling & Grammar"],
    },
    {
      Question: "A word gets selected by clicking it",
      CorrectAns: "Twice",
      Options: [" Once", "Twice", "Three times", "Four times"],
    },
    {
      Question: "The center the selected text, the shortcut key is",
      CorrectAns: "Ctrl + E",
      Options: ["Ctrl + C", "Ctrl + E", " Ctrl + U", "Ctrl + O"],
    },
    {
      Question: "Which option is not available in Microsoft office button?",
      CorrectAns: "Bold",
      Options: ["Bold", "New", "Save", "Open"],
    },
    {
      Question:
        "___ is the change the way text warps around the selected object.",
      CorrectAns: "Text wrapping",
      Options: ["Text wrapping", "Indent", "Clipart", " Line spacing"],
    },
    {
      Question: "A major step before taking print of the document is",
      CorrectAns: "Both b and c",
      Options: [
        "To save the document",
        "To set paper setting",
        "To see print preview of the document",
        "Both b and c",
      ],
    },
  ]);
  const [indexNumber, setIndexNumber] = useState(0)
  const [marks, setMark] = useState(0)
  const [result, setResult] = useState(false)
  const checkAns = (userSelected, CorrectAns) => {
    if(userSelected === CorrectAns){
      setMark( marks +1);
    }
    
    if(indexNumber  +1 === Question.length){
      setResult(true);
    }
    setIndexNumber(indexNumber + 1)
  }
 let perc = (marks / Question.length) * 100;
  let fixedPerc = perc.toFixed(2);
  return(
    
   <>
    {result ? 
    <div className="App-header">
    <h1 className='text-center m-2'>Your Result</h1>
    <h3> Your Mark is {marks}</h3>
    <h3>Your Percentage is {fixedPerc} %</h3> 
    </div>
    : 
   <div>
    <div className="App-header">
    <div className=' bg-warning rounded px-2'>
    <h1 className='text-center text-dark'>Quiz App</h1>
            <p className="bg-primary text-center fs-5">Question Number   <span className="fs-1">{indexNumber + 1}</span> /{" "}{Question.length}</p>
              <h1 className='py-5 text-dark'> {Question[indexNumber].Question}</h1>
            <div>
              {Question[indexNumber].Options.map((e, i) => {
                return(
                  <button className='btn btn-info m-2 px-5 rounded-pill' key={i}
                  onClick= {()=> checkAns (e, Question[indexNumber].CorrectAns)}
                  >{e}</button>
                  )
                })}
            </div>
            <div className='text-end py-2'>
            <button onClick={checkAns}className="btn btn-danger px-5 rounded-pill">Next</button>
            </div>
            </div>
          </div>

  </div>
  }  

  </>
  )
}

export default App;
