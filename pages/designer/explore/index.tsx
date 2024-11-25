import React, { useEffect } from "react";
import ReactOdometer from "react-odometerjs";
// import Odometer from "odometer";
// import "odometer/themes/odometer-theme-default.css";

const DesignerExploreModel = () => {
    const [value, setValue] = React.useState(1234);

    useEffect(() => {
        const timeoutId = setTimeout(() => setValue(4321), 2000);
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    // const odometerRef = useRef(null);

    // useEffect(() => {
    //     const odometer = new Odometer({
    //         el: odometerRef.current,
    //         value: 0,
    //         format: "(,ddd)", // Format with commas
    //         duration: 2000,  // Animation duration
    //     });
    //     odometer.render();

    //     // Update the value after a delay
    //     setTimeout(() => {
    //         odometer.update(4321);
    //     }, 2000);
    // }, []);


    return (
        <>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum aspernatur, enim, aliquid repellendus rerum doloremque dolores illo ipsum
                distinctio omnis reiciendis sequi nam pariatur. Accusantium facere labore animi quod perspiciatis?
            </p>
            <ReactOdometer value={value} />
            {/* <div ref={odometerRef} className="odometer">0</div> */}
        </>
    );
};

export default DesignerExploreModel;
