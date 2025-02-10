import React from "react"
function NavLink({ href, children }) {
    return (
      <a href={href} className="text-gray-300 hover:text-white transition-colors relative group">
        {children}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
      </a>
    )
  }
  
  export default NavLink
  
  