import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];


// root component
export default function App() {
  return (
    <div>
      <Steps />
      <Steps />

    </div>
  );
}
function Steps() {
  // useState is a hooks . all hooks start with 'use'
  // dont set state manually

  const [step, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true)
  // const [test, setTest] = useState({ name: "Ritesh " })

  function handlePrevious() {

    // Update and save the data for future 
    if (step > 1) setStep((s) => s - 1);
  }


  function handleNext() {
    if (step < 3) {
      // Update and save the data for future 
      setStep((s) => s + 1)

    };

    // BAD PRACTICCE
    // test.name = "Tiwari";
    // correct way 
    // setTest({ name: "Tiwari" })
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>&times;</button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ""}>1</div>
            <div className={step >= 2 ? 'active' : ""}>2</div>
            <div className={step >= 3 ? 'active' : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button style={{ backgroundColor: '#7950f2', color: ' #fff ' }}
              onClick={handlePrevious}
            >Previous</button>

            <button style={{ backgroundColor: '#7950f2', color: ' #fff ' }}
              onClick={handleNext}
            >Next</button>
          </div>

        </div>)
      }
    </div>
  );
}
