import React from "react";
import Home from "../../Page/Home/Home";
import Footer from "../Footer/Footer";
import NavLinks from "../NavLinks/NavLinks";

const Navbar = () => {
  return (
    <div class="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div className="container mx-auto">
          <div class="w-full navbar bg- py-6">
            <div class="flex-1 px-2 mx-2 text-2xl font-semibold">
              <span className="text-primary">Master</span>Tools
            </div>
            <div class="flex-none hidden lg:block">
              <ul class="menu menu-horizontal">
                {/* <!-- Navbar menu content here --> */}
                <NavLinks />
              </ul>
            </div>
            <div class="flex-none lg:hidden">
              <label for="my-drawer-3" class="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
          </div>
        </div>

        {/* <!-- Page content here --> */}

        <Home />

        <Footer />
      </div>

      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
          {/* <!-- Sidebar content here --> */}
          <NavLinks />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;