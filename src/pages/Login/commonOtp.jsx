import React,{ useState } from "react";
import DiscMsg from "../../common/components/DisclaimerMsg";

const CommonOTP = (props) => {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const onChangeOtp = (e) => {
        const nOtp = otp;
        nOtp[e.target.name] = e.target.value
        if(e.target.value !== "")
          e.target.form[Number(e.target.name) + 1].focus()
        else
        e.target.form[Number(e.target.name) - 1].focus()
        setOtp(nOtp);
        
      }
    
    return (
        <div className="flex flex-col bg-white">
        <form onSubmit={(e)=>props.handleOtpSubmit(e,otp.join(''))}>
          <div className="md:px-28 lg:px-28 xl:px-28 md:py-16 lg:py-16 xl:py-16 flex flex-col bg-white">
                <div className="w-9/12 t414 text-[#1C1C1C] mt-16 grid grid-cols-4" >
                  
                  { otp && otp.length > 0 && otp.map((x, i) => {
                    return (
                      <div className="col-span-1 " key={i}>
                        <input
                          autoComplete='false'
                          name={i}
                          defaultValue={x}
                          onChange={onChangeOtp}
                          maxLength="1"
                          minLength="1"
                          type="number"
                          className="w-12 h-12 pl-4 text-sm font-semibold border rounded-md outline-none opacity-90 "
                        />
                      </div>
                    )
                  })
                  }
            </div>
            <div>
              {props.err.show ? (
                <div className="bg-red-600 shadow-lg w-60 rounded-2xl max-w-full text-xs mt-3">
                  <div className="px-3 py-1 bg-red-600 rounded-2xl break-words text-white">
                    {props.err.error}
                  </div>
                </div>
              ) : (
                ''
              )}
            </div>
            <div className="">
              <button
                type="submit"
                className={`${
                  props.validateDisabled ? 'opacity-75' : ''
                } bg-[#1C5BD9] py-3 rounded-3xl w-8/12 mt-16 text-white t714`}
                disabled={props.validateDisabled}
              >
                {props.loginText}
              </button>
            </div>
          </div>
        </form>
        <DiscMsg />
      </div>
    )
}

export default CommonOTP;