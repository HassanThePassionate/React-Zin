import React from 'react'


const Slider = () => {
    return (
        <>

            <section className="converter">
                <div className="container">

                    <div className="top-text flex-2">
                        <h1 className="lg">Convert form PDF</h1>
                        <div className="left-text">

                            <span>ALL</span>
                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" focusable="false"
                                viewBox="0 0 24 24" aria-hidden="true" data-testid="ChevronRightIcon">
                                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                            </svg>

                        </div>
                    </div>


                    <div className="cards">
                        <div className="card">
                            <img src="https://images.hipdf.com/images2022/icons/pdf-word.svg" alt="img" />
                            <h3>PDF to Word</h3>
                            <p>Easily Convert PDF to Word document</p>
                        </div>

                        <div className="card">
                            <img src="https://images.hipdf.com/images2022/icons/PDF-PPT.svg" alt="img" />
                            <h3>PDF to PPT</h3>
                            <p>Convert PDF to Powerpoint online </p>
                        </div>
                        <div className="card">
                            <img src="https://images.hipdf.com/images2022/icons/pdf-excel.svg" alt="img" />
                            <h3>PDF to Excel</h3>
                            <p>Convert PDF to Excel for Free</p>
                        </div>

                        <div className="card">
                            <img src="https://images.hipdf.com/images2022/icons/PDF-JPG.svg" alt="img" />
                            <h3>PDF to JPG</h3>
                            <p>Convert PDF files top a set of optimized JPG,PNG,BPM, G...</p>
                        </div>


                        <div className="card">
                            <img src="https://images.hipdf.com/images2022/icons/PDF-TXT.svg" alt="img" />
                            <h3>PDF to TXT </h3>
                            <p>Convert your PDF to TXT, and extract text from your PDF.</p>
                        </div>



                    </div>
                </div>
            </section >


        </>
    )
}

export default Slider
