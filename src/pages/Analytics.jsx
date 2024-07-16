import { useState } from "react";

const Analytics = () => {
    const [verified, setVerified] = useState(false)
    const [code, setCode] = useState(false)



    if(verified) {
        return (
          <div className="container-fluid container-md pt-5">
            <div className="row pt-5">
              <h2 className="text-center mt-5">Analytics</h2>
              {/* Graph, Summary Table */}
            </div>
          </div>
        );
    } else {
        return (
            <div className="d-flex justify-content-center align-items-center">
              <div className="row pt-5">
                <h2 className="text-center mt-5">Enter OTP sent to your mail</h2>
                <input type="number" name="" id="1" />
                <input type="number" name="" id="2" />
                <input type="number" name="" id="3" />
                <input type="number" name="" id="4" />
                <input type="number" name="" id="5" />
                {/* Graph, Summary Table */}
              </div>
            </div>
        );
    }
  };
  
  export default Analytics;
  