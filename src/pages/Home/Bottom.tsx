import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

const Bottom = () => {
  const {width,height}=useWindowSize();

  return <div className="Bottom">
        <div className="Additional_info1">Contact: <br/>
        phone: (+1) 1234567890<br/>
        email: 1234567890@example.com
        </div>
        <div className="Additional_info2" style={{right: width<height ? "0px":undefined,
                                                left: width<height ? "10vw":undefined,
                                                top: width<height ? "17vh":undefined}}>
        Address: <br/>
        Main: 123 AVE example, province, A1A B2B<br/>
        Branch: 123 AVE example, province, A1A B2B
        </div>
       </div>;
};



export default Bottom;
