import { useRef } from 'react';
import ReactToPrint from 'react-to-print';
// import

const PrintComponent = () => {
    const componentRef = useRef(null);

    return (
      <>
        <div ref={componentRef}>印刷したいDOM</div>
        <ReactToPrint
            trigger={() => (
                <button>
                    <div>ボタン要素的なもの</div>
                </button>
            )}
            pageStyle="@page { size: A4 portrait; margin: 0; }"
            content={() => componentRef.current}
          />
      </>
    );
};

export default PrintComponent;




// import React, { useRef } from 'react';
// import { useReactToPrint } from 'react-to-print';


// import { ComponentToPrint } from './ComponentToPrint';


// const Print = () => {
// const componentRef = useRef();
// const handlePrint = useReactToPrint({
// content: () => componentRef.current,
// });


// return (
// <div>
// <ComponentToPrint ref={componentRef} />
// <button onClick={handlePrint}>印刷ボタン</button>
// </div>
// );
// };


// export default Print
