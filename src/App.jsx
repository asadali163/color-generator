import Form from "./components/Form";
import ColorList from "./components/ColorList";
import Values from "values.js";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
const App = () => {
  const [colors, setColors] = useState(new Values("#dfa482").all(10));
  // toast.success("Great");
  const addColor = (color, total) => {
    try {
      console.log("Total is  : ", parseInt(total));
      setColors(new Values(color).all(parseInt(total)));
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <main>
      <Form addColor={addColor}></Form>
      <ColorList colors={colors}></ColorList>
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;
