import clsx from "clsx"

function UserRating({ children, className='' }) {
    const baseStyle = "text-[0.65rem] sm:text-sm font-normal"

    return (
        <div className={clsx(baseStyle, className)}>
            { children && `★ ${children}/5`}
        </div>
    )
}

export default UserRating
