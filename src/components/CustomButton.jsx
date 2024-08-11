
const CustomButton = ({title, ContainerStyles, iconRight, type, onClick})=> {
    return (
        <button
        onClick={onClick}
        type={type || "button"}
        className={`flex justify-center self-center items-center text-base ${ContainerStyles}`}
        >
        {title}

        {iconRight && <div className='ml-2'>{iconRight}</div>}
    </button>
    );
};

export default CustomButton;