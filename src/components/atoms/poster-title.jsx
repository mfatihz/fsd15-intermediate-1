import clsx from "clsx"

const PosterTitle = ({children, className=''}) => {
    const baseStyle = "text-[0.65rem] sm:text-sm font-normal"

    return (
        <div className={clsx(baseStyle, className)}>
            {children}
        </div>
    );
};

export default PosterTitle