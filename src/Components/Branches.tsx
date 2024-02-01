function Branches() {
    return (
        <div className="m-auto max-w-[1400px] px-5 md:px-10 md:pt-28 mt-10">
            <div className="flex justify-center  items-center gap-5 m-auto flex-col  h-full">
                <h1 className="md:text-5xl text-3xl font-extrabold text-slate-900">Our Branches</h1>
                <p className="text-center m-3">Explore our network of branches, each designed to provide convenient access and exceptional service to our valued customers. Find a location near you and experience excellence in every branch.</p>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-10 w-full" >
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14393.696407637584!2d85.159947!3d25.59082!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed596061ef8629%3A0x481f8bc3cf2c55ad!2sMagadh%20Oro%20Dental!5e0!3m2!1sen!2sin!4v1706698871096!5m2!1sen!2sin" className="w-full h-80 border-2 outline-none" loading="lazy" ></iframe>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14394.781218487386!2d85.155773!3d25.581802!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59f68075f749%3A0x91bdc66bcd24bc31!2sMagadh%20Oro%20Dental!5e0!3m2!1sen!2sin!4v1706699006368!5m2!1sen!2sin" className="w-full h-80 border-2 outline-none" loading="lazy" ></iframe>
                </div>
            </div>
        </div>

    )
}
export default Branches;


