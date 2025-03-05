const Button = ({title, id, leftIcon, rightIcon, containerClass}) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 text-black ${containerClass}`}
    >
      <span className="relative incline-flex overflow-hidden font-general text-xs uppercase">
        <div className="relative overflow-hidden font-bold">
          <p className="flex justify-between items-center gap-3 group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
            {leftIcon}
            {title}
            {rightIcon}
          </p>
          <p className="flex justify-between absolute gap-3 top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
            {leftIcon}
            {title}
            {rightIcon}
          </p>
        </div>
      </span>
    </button>
  );
}

export default Button