function MainHeader() {
    return (
        <div className="relative md:h-screen md:max-h-[500px] max-h-full max-w-screen bg-[url('/images/bg.jpg')] z-10 bg-no-repeat bg-cover bg-center">

            <div className="absolute inset-0 md:bg-transparent bg-white opacity-50" style={{ zIndex: "-1" }}></div>
            <div className="flex justify-between items-center gap-5 m-auto max-w-[1400px] px-5 md:px-10 h-full">
                <div className="max-w-[600px] flex flex-col md:gap-7 gap-4 md:p-10 px-5 py-8">
                    <h1 className="md:text-2xl text-2lg font-bold text-blue-950">Welcome To Magadh Oro Dental - Implant & Orthodontic Clinic</h1>
                    <h2 className="md:text-5xl text-lg font-extrabold text-slate-900">Best Dental Clinic in Patna</h2>
                    <p className="text-slate-950 md:text-lg text-sm">We Offer A Wide Range Of Dental Health Services & Cosmetic Dental Treatment, Maintaining The Highest Standard Of Hygiene & Sterilization. We Are Equipped With Modern Instruments & Lates Technology.</p>
                    <div className="flex gap-5">
                        <a href="/#about" className="border-2 border-blue-600 text-blue-600 px-7 py-2  uppercase hover:text-white hover:bg-blue-600">About Us</a>
                        <a href="/#services" className="border-2 border-blue-600 text-blue-600 px-7 py-2  uppercase hover:text-white hover:bg-blue-600">Services</a>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default MainHeader