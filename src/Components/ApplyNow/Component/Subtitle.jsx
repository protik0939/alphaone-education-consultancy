const Subtitle = ({ values }) => {
    return (
        <div className="w-full flex items-center justify-center mt-11">
            <div className="flex flex-col justify-center items-center border-y-2 border-[#f9971d]">
                <h1 className="text-2xl font-bold text-[#f9971d]">{values?.heading}</h1>
                <h1 className="">{values?.title}</h1>
            </div>
        </div>
    );
};

export default Subtitle;