import { FaAngleDown, FaBars, FaShoppingCart } from "react-icons/fa";
import "./navbar.css";
import Button from "../buttons-component/solidbutton";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cartContext";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { formatCompactNumber } from "../../constants/formatNumber";
import { scrollToTop } from "../../constants/scrollToTop";
import { useAuth } from "../../context/authContext";

const NavBar = ({ navBar2, showCase1Page }) => {
  const [totalQty, setTotalQty] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [check, setCheck] = useState(false);
  const { cartItems, setCartItems, addToCart, modal, setModal } =
    useContext(CartContext);
  const [whenScroll, setWhenScroll] = useState("bg-transparent");
  const [logo, setlogo] = useState("/MahaVastu-logo-dark.svg");
  const [textColor, setTextColor] = useState("text-white");
  const [viewSideNav, setViewSideNav] = useState(false);
  const [checkOut, setCheckOut] = useState(false);
  const { currentUser, logout } = useAuth();

  const hideNav = () => {
    setViewSideNav(false);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setWhenScroll("bg-white");
        setlogo("/MahaVastu-logo.svg");
        setTextColor("text-black");
      } else {
        setWhenScroll("transparent");
        setTextColor("text-white");
        setlogo("/MahaVastu-logo-dark.svg");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  useEffect(() => {
    let totalQuantity = cartItems.reduce(
      (acc, product) => acc + product.quantity,
      0
    );
    setTotalQty(totalQuantity);
    let total = cartItems.map((e, i) => {
      return e.quantity * e.price;
    });
    let totalPrice = total.reduce((acc, product) => acc + product, 0);
    setSubTotal(totalPrice);
    setCheckOut(false);
  }, [cartItems]);
  useEffect(() => {
    const body = document.getElementsByTagName("body").item(0);
    if (modal) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "auto";
    }
  }, [modal]);
  return (
    <>
      {modal ? (
        <div
          style={{ zIndex: 101 }}
          className="modal   fixed top-0 overflow-y-auto  flex flex-col  items-center left-0 bottom-0 right-0 bg-black/70 max-sm:bg-white"
        >
          <div className="w-[500px]  max-sm:w-full    max-sm:my-0  bg-white">
            <div
              style={{ borderBottomWidth: 1 }}
              className="modal-header text-2xl font-semibold px-6 py-4 border-gray-400/90 flex justify-between items-center"
            >
              <h1 className="title">Your Cart</h1>

              <div
                onClick={() => {
                  setModal(false);
                }}
                className="cancel cursor-pointer w-7 h-7"
                id="close-modal"
              >
                <div style={{ width: 3 }} className="relative mx-auto h-full">
                  <div
                    style={{ width: 2 }}
                    className="absolute h-full bg-gray-800 transition-all hover:bg-gray-600 max-sm:hover:bg-gray-800 rotate-45"
                  ></div>
                  <div
                    style={{ width: 2 }}
                    className="absolute h-full bg-gray-800 transition-all hover:bg-gray-600 max-sm:hover:bg-gray-800 -rotate-45"
                  ></div>
                </div>
              </div>
            </div>
            {totalQty > 0 ? (
              <div>
                <div
                  className={`p-6 ${
                    checkOut ? "max-sm:pb-48" : "max-sm:pb-36"
                  } flex flex-col gap-5`}
                >
                  {cartItems.map((e, i) => {
                    if (e.quantity > 0) {
                      return (
                        <div key={i}>
                          <div className="flex flex-col gap-4">
                            <div className="flex justify-between">
                              <div className="flex gap-4">
                                <Link
                                  onClick={() => {
                                    setModal(false);
                                    scrollToTop();
                                  }}
                                  to={`/products/${e.id}`}
                                  className="flex gap-4"
                                >
                                  <img
                                    className="min-w-[65px] w-20 h-full max-sm:h-[85px] object-cover"
                                    src={e.image}
                                    alt={e.image}
                                  />
                                </Link>
                                <div>
                                  <Link
                                    onClick={() => {
                                      setModal(false);
                                      scrollToTop();
                                    }}
                                    to={`/products/${e.id}`}
                                  >
                                    <h2 className="title-font text-xl">
                                      House in {e.name}
                                    </h2>
                                  </Link>
                                  <h3>
                                    PKR {formatCompactNumber(e.price)}/Month
                                  </h3>
                                  <p
                                    onClick={(event) => {
                                      let arr = cartItems;
                                      arr.splice(i, 1);
                                      setCartItems([...arr]);
                                    }}
                                    className="text-lg w-fit hover:text-black transition-all duration-300 cursor-pointer text-red-500 hover mt-3"
                                  >
                                    remove
                                  </p>
                                </div>
                              </div>
                              <div>
                                <NumberInput
                                  value={e.quantity}
                                  min={1}
                                  className="w-20"
                                  size={"md"}
                                  onChange={(event) => {
                                    if (Number(event) > 0) {
                                      let arr = cartItems;
                                      arr[i].quantity = Number(event);
                                      setCartItems([...arr]);
                                    }
                                  }}
                                >
                                  <NumberInputField readOnly={true} />
                                  <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                  </NumberInputStepper>
                                </NumberInput>
                              </div>
                            </div>
                            <div className="flex justify-between">
                              <h2>Total</h2>
                              <p>
                                PKR {formatCompactNumber(e.quantity * e.price)}
                              </p>
                            </div>
                          </div>
                          <hr />
                        </div>
                      );
                    }
                  })}
                </div>
                <div className="p-6 pt-0 bg-white max-sm:pt-6 flex max-sm:fixed bottom-0 left-0 right-0 flex-col gap-5">
                  <div className="flex justify-between items-center">
                    <h2>Subtotal</h2>
                    <p className="total text-red-500">
                      PKR {formatCompactNumber(subTotal)}
                    </p>
                  </div>
                  <Button
                    onClick={() => {
                      setCheckOut(true);
                    }}
                    content={"Continue to Checkout"}
                    padding={"py-2"}
                  />
                  {checkOut ? (
                    <p className="text-red-500">
                      Checkout is disabled on this site.
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ) : (
              <div className="p-20 flex justify-center items-center">
                <p className="text-xl">No items found.</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        ""
      )}

      <div
        style={{ zIndex: 98 }}
        className={
          showCase1Page
            ? " top-0 left-0 right-0 absolute"
            : `${navBar2 ? "bg-white shadow-xl" : whenScroll} ${
                whenScroll === "bg-white" ? "shadow-xl" : ""
              } transition-all fixed top-0 left-0 right-0 `
        }
      >
        <nav
          style={{ maxWidth: 1200 }}
          className="flex justify-between mx-auto items-center gap-4 py-7 max-md:py-5 px-10 max-sm:px-5 font-medium"
        >
          <Link onClick={scrollToTop} to="/">
            <img
              src={navBar2 ? "/MahaVastu-logo.svg" : logo}
              className="w-44 max-lg:w-36"
              alt="MahaVastu-logo"
            />
          </Link>
          <ul
            className={
              showCase1Page
                ? "text-xl flex max-lg:hidden justify-center items-center gap-8 text-white"
                : `${
                    navBar2
                      ? "text-xl flex max-lg:hidden justify-center items-center gap-8 text-black"
                      : `text-xl flex max-lg:hidden justify-center items-center gap-8 ${textColor}`
                  }`
            }
          >
            <li>
              <Link onClick={scrollToTop} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/featured">
                Featured
              </Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/popular">
                Popular
              </Link>
            </li>
            {currentUser && (currentUser.role === 'seller' || currentUser.role === 'broker') && (
              <li>
                <Link onClick={scrollToTop} to="/add-property">
                  Add Property
                </Link>
              </li>
            )}
            <li>
              <Link onClick={scrollToTop} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/contact">
                Contact
              </Link>
            </li>
            {!currentUser ? (
              <>
                <li>
                  <Link onClick={scrollToTop} to="/login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link onClick={scrollToTop} to="/register">
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <li className="relative group">
                <div className="cursor-pointer flex items-center gap-2">
                  <span>{currentUser.name}</span>
                  <FaAngleDown />
                </div>
                <div className="absolute hidden group-hover:block right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <div className="px-4 py-2 text-sm text-gray-700">
                    Role: {currentUser.role}
                  </div>
                  <hr />
                  <button
                    onClick={() => {
                      logout();
                      scrollToTop();
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
                  >
                    Logout
                  </button>
                </div>
              </li>
            )}
          </ul>
          <ul
            className={`${
              navBar2 ? "text-black" : textColor
            } text-xl hidden max-lg:flex justify-center items-center gap-8`}
          >
            <div
              className="relative"
              onClick={() => {
                setModal(true);
              }}
            >
              {totalQty > 0 ? (
                <p
                  className={`absolute bg-red-500 pt-[1.5px] text-white rounded-full h-[18px] px-1   min-w-[18px] ${
                    totalQty >= 100 ? "-right-[15px]" : "-right-[10px]"
                  }  text-xs font-medium text-center -top-[10px]`}
                >
                  {totalQty}
                </p>
              ) : (
                ""
              )}
              <FaShoppingCart />
            </div>

            <FaBars
              onClick={() => {
                setViewSideNav(!viewSideNav);
              }}
              className="cursor-pointer"
            />
          </ul>
        </nav>
      </div>

      {/* side nav bar for mobile view */}
      <div
        onClick={() => {
          setViewSideNav(!viewSideNav);
        }}
        style={{ zIndex: 99 }}
        className={`fixed ${
          viewSideNav ? "translate-x-0" : "-translate-x-full"
        } top-0 left-0 bottom-0 right-0  bg-black/40`}
      ></div>
      <div
        className={`${
          viewSideNav ? "right-0" : "-right-full"
        } transition-all duration-300 fixed top-0 bottom-0 w-80 max-sm:w-full bg-white z-50`}
      >
        <div className="p-5 flex justify-between items-center">
          <Link onClick={hideNav} to="/">
            <img
              src="/MahaVastu-logo.svg"
              className="w-44 max-lg:w-36"
              alt="MahaVastu-logo"
            />
          </Link>
          <div
            onClick={hideNav}
            className="cancel cursor-pointer w-7 h-7"
            id="close-modal"
          >
            <div style={{ width: 3 }} className="relative mx-auto h-full">
              <div
                style={{ width: 2 }}
                className="absolute h-full bg-gray-800 transition-all hover:bg-gray-600 max-sm:hover:bg-gray-800 rotate-45"
              ></div>
              <div
                style={{ width: 2 }}
                className="absolute h-full bg-gray-800 transition-all hover:bg-gray-600 max-sm:hover:bg-gray-800 -rotate-45"
              ></div>
            </div>
          </div>
        </div>
        <ul className="flex flex-col gap-5 p-5 text-xl">
          <li>
            <Link onClick={hideNav} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={hideNav} to="/featured">
              Featured
            </Link>
          </li>
          <li>
            <Link onClick={hideNav} to="/popular">
              Popular
            </Link>
          </li>
          <li>
            <Link onClick={hideNav} to="/add-property">
              Add Property
            </Link>
          </li>
          <li>
            <Link onClick={hideNav} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link onClick={hideNav} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
