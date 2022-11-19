import Contacts from "./components/contacts/Contacts";
import FormComponent from "./components/form/FormComponent";
import { useState } from "react";
import { addUser } from "./components/utils/functions";

function App() {
  const initialState = {
    name: "",
    phone: "",
    gender: "",
  };
  const [info, setInfo] = useState(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(info);
    setInfo(initialState);
  };

  return (
    <div className="App">
      <FormComponent
        info={info}
        setInfo={setInfo}
        handleSubmit={handleSubmit}
      />
      <Contacts />
    </div>
  );
}

export default App;
