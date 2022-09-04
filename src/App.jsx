import OTP from "./components/OTP";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="instruction">
        Send a sms of below fomat to this device:
      </div>
      <code>Your OTP is 123456 @www.netlify.com #123456</code>
      <OTP />
    </div>
  );
}

export default App;
