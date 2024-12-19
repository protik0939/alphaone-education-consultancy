const Heading = ({ values }) => {
    return (
        <div className="w-full flex flex-col items-center justify-center mt-6 mb-3 p-4 my-4">
            <div className="p-4 rounded-2xl" style={{ border: 'solid #f9971d', borderWidth: '0px 0px 1px 0px' }}>
                <div className="text-2xl text-center font-bold text-[#F9971d]">{values.heading}</div>
                <div className="text-[10px] text-center">
                    {values.title}
                </div>
            </div>
        </div>
    );
};

export default Heading;