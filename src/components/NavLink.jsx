export const NavLink = ({ text }) => {
  return (
    <a href="#" className="relative py-8 group">
        <span className="group-hover:text-OrangePrimary">{text}</span>
        <span className="absolute bottom-0 left-0 block h-2 w-full scale-x-0 transition-all duration-700 group-hover:scale-x-100 group-hover:bg-OrangePrimary"></span>
    </a>
  )
}