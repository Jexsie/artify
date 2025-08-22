import { Search, Bell, Moon } from "lucide-react"

export function Navbar() {
  return (
    <div className="w-full bg-white shadow-md top-0 fixed z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-0"><g clip-path="url(#clip0_30_1519)"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.33333 1.33333H5.7778V5.7778H10.2222V10.2222H14.6667V14.6667H1.33333V1.33333Z" fill="#0D0F1C"/></g><defs><clipPath id="clip0_30_1519"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
            <div className="text-xl font-bold text-gray-900">Artify</div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Explore</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Create</a>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative item-center">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search size={20} className="text-blue-400" />
                </div>
              <input
                type="text"
                placeholder="Search"
                className="w-40 md:w-56 pl-10 pr-4 py-2 rounded-full border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" />
            </div>
            <button className="bg-blue-400 text-white px-4 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors">
              Connect Wallet
            </button>
            <div className="flex items-center justify-center border border-gray-300 rounded-full p-2 bg-gray-100">
              <Bell className="text-gray-600" size={20} />
              </div>
            <div className="flex items-center justify-center border border-gray-300 rounded-full p-2 bg-gray-100 fontweight-medium">
            <Moon />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
