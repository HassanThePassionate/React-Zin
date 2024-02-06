import React from 'react'

const Bookmark = () => {
    return (
        <>
            <section className="bookmarks">
                <div className="container">
                    <h1 className="lg">Your Bookmarks</h1>
                    <div className="cards">
                        <div className="card">
                            <img src="https://images.hipdf.com/images2022/icons/editPDF.svg" alt="img" />
                            <h3>Edit PDF</h3>
                            <p>Use the best online tool to edit PDFs in your brower.</p>
                        </div>
                        <div className="card">
                            <img src="https://images.hipdf.com/images2022/icons/Crop-PDF.svg" alt="img" />
                            <h3>Crop PDF</h3>
                            <p>Crop PDF online to Selected area, adjust margin size... </p>
                        </div>
                        <div className="card">
                            <img src="https://images.hipdf.com/images2022/icons/replace-text-pdf.svg" alt="img" />
                            <h3>Replace Text</h3>
                            <p>The easiest way to replace text online.</p>
                        </div>
                        <div className="card">
                            <img src="https://images.hipdf.com/images2022/icons/Rotate-PDF.svg" alt="img" />
                            <h3>Rotate PDF</h3>
                            <p>Rotate and Save your PDF page online for file.</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Bookmark
