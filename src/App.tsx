import "./App.css";

function App() {
  return (
    <>
      <div className="w-full h-screen flex items-start">
        <div className=" relative w-1/2 h-full flex flex-col">
          <div className=" absolute top-[25%] left-[10%] flex flex-col">
            <h1 className="text-2xl text-white  font-bold my-4 ">
              Turn Your Ideas into reality
            </h1>
            <p className=" text-xl text-white font-normal ">
              Start for free and get attractive offers from the community
            </p>
          </div>
          <img
            src="https://images.pexels.com/photos/1563650/pexels-photo-1563650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 h-full bg-[#E0E0E0]  flex flex-col p-14 justify-between ">
          <h1 className=" text-xl text-[#606060] font-semibold ">
            Interactive Brand
          </h1>

          <div className="w-full flex flex-col max-w-[500px]">
            <div className="w-full flex flex-col mb-2">
              <h3 className="text-3xl font-semibold mb-2">Login</h3>
              <p className=" text-base mb-2">
                Welcome Back ! Please enter your details.
              </p>
            </div>

            <div className="w-full flex flex-col">
              <input
                type="text"
                placeholder="Email"
                name=""
                id=""
                className="w-full text-black py-2 my-2  bg-transparent border-b border-black outline-none  focus:outline-none"
              />

              <input
                type="password"
                placeholder="Password"
                name=""
                id=""
                className="w-full text-black py-2 my-2  bg-transparent border-b border-black outline-none  focus:outline-none"
              />
            </div>

            <div className="w-full flex items-center justify-between">
              <div className="w-full  flex items-center">
                <input type="checkbox" className="w-4 h-4 mr-2" id="" />
                <p className="text-sm"> Remember Me for 30 days</p>
              </div>
              <p className="text-sm font-medium whitespace-nowrap underline underline-offset-2 cursor-pointer">
                Forgot password ?
              </p>
            </div>
            <div className="w-full flex  flex-col my-4">
              <button className="w-full text-white bg-[#060606] font-semibold my-2  rounded-md p-4 text-center flex item-center justify-center">
                {" "}
                Log in{" "}
              </button>
              <button className="w-full text-[#060606] bg-white font-semibold  border border-black my-2  rounded-md p-4 text-center flex item-center justify-center">
                Register
              </button>
            </div>
            <div className="w-full flex items-center justify-center relative py-2">
              <div className="w-full h-[1px] bg-black"> </div>
              <p className=" text-lg absolute text-black/80 bg-[#f5f5f5]">or</p>
            </div>
            <div className="w-full text-[#060606] bg-white font-semibold  border border-black my-2  rounded-md p-4 text-center flex item-center justify-center">
              <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" className="h-6 mr-2" alt="" />
              Sign In With Google
            </div>
          </div>

         
        </div>
      </div>
    </>
  );
}

export default App;
