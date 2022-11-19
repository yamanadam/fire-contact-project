import Contacts from "./components/contacts/Contacts";
import FormComponent from "./components/form/FormComponent";
import { useState } from "react";
import { addUser, upDataUser } from "./components/utils/functions";
import { ToastContainer } from "react-toastify";

function App() {
  const initialState = {
    name: "",
    phone: "",
    gender: "",
  };
  const [info, setInfo] = useState(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (info.id) {
      upDataUser(info);
    } else {
      addUser(info);
    }
    setInfo(initialState);
  };

  const showInfo = (id, name, phone, gender) => {
    setInfo({ id, name, phone, gender });
  };

  return (
    <div className="App">
      <FormComponent
        info={info}
        setInfo={setInfo}
        handleSubmit={handleSubmit}
      />
      <Contacts showInfo={showInfo} />
      <ToastContainer />
    </div>
  );
}

export default App;
