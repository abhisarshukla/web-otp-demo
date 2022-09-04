import { useState } from "react";
import "./otp.css";
export const OTP = () => {
  const [otpInputs, setOtpInputs] = useState({
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
    otp5: "",
    otp6: "",
  });

  console.log(otpInputs);

  const handleOnKeyUp = (e) => {
    const ele = e.target;
    if (e.key === "Backspace") {
      const next = -ele.tabIndex - 2;
      if (next >= 0) {
        ele.form.elements[next].focus();
        ele.form.elements[next].select();
      }
    } else if (/[0-9]/.test(e.key)) {
      const next = -ele.tabIndex;
      if (next < 6) {
        ele.form.elements[next].focus();
      }
    }
  };

  const handleOnChange = (e) => {
    const index = `otp${-e.target.tabIndex}`;
    if (/[0-9]/.test(e.target.value))
      setOtpInputs((prev) => ({ ...prev, [index]: e.target.vale }));
  };

  const handleOnPaste = (e) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData("text");
    if (pastedText.length === 6 && /[0-9]{6}/.test(pastedText)) {
      const otpPins = pastedText.split("");
      setOtpInputs({
        otp1: otpPins[0],
        otp2: otpPins[1],
        otp3: otpPins[2],
        otp4: otpPins[3],
        otp5: otpPins[4],
        otp6: otpPins[5],
      });
    }
  };

  const tryAutoFillOTP = () => {
    if ("OTPCredential" in window) {
      navigator.credentials
        .get({
          otp: { transport: ["sms"] },
          signal: ac.signal,
        })
        .then((otp) => {
          const otpPins = otp.split("");
          setOtpInputs({
            otp1: otpPins[0],
            otp2: otpPins[1],
            otp3: otpPins[2],
            otp4: otpPins[3],
            otp5: otpPins[4],
            otp6: otpPins[5],
          });
        });
    }
  };

  tryAutoFillOTP();

  return (
    <>
      <form className="otp" onPaste={handleOnPaste}>
        <input
          type="tel"
          value={otpInputs.otp1}
          maxLength={1}
          onKeyUp={handleOnKeyUp}
          onChange={handleOnChange}
          tabIndex={-1}
          name="otp-1"
          id="otp-1"
          autoComplete="one-time-code"
        />
        <input
          type="tel"
          value={otpInputs.otp2}
          maxLength={1}
          onKeyUp={handleOnKeyUp}
          onChange={handleOnChange}
          tabIndex={-2}
          name="otp-2"
          id="otp-2"
        />
        <input
          type="tel"
          value={otpInputs.otp3}
          maxLength={1}
          onKeyUp={handleOnKeyUp}
          onChange={handleOnChange}
          tabIndex={-3}
          name="otp-3"
          id="otp-3"
        />
        <input
          type="tel"
          value={otpInputs.otp4}
          maxLength={1}
          onKeyUp={handleOnKeyUp}
          onChange={handleOnChange}
          tabIndex={-4}
          name="otp-4"
          id="otp-4"
        />
        <input
          type="tel"
          value={otpInputs.otp5}
          maxLength={1}
          onKeyUp={handleOnKeyUp}
          onChange={handleOnChange}
          tabIndex={-5}
          name="otp-5"
          id="otp-5"
        />
        <input
          type="tel"
          value={otpInputs.otp6}
          maxLength={1}
          onKeyUp={handleOnKeyUp}
          onChange={handleOnChange}
          tabIndex={-6}
          name="otp-6"
          id="otp-6"
        />
      </form>
    </>
  );
};
