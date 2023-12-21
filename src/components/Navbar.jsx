import Button from "./Button";

const Navbar = () => {
  return (
    <div className="p-3 flex justify-between items-center">
      <h4 className="text-3xl text-slate-100 font-serif">NK</h4>
        {/* <Button onClick={() => console.log("Chat")}>Let&apos;s Chat</Button> */}
        <Button className="bg-green-500" onClick={() => console.log("Resume")}>Resume</Button>
    </div>
    // <div className="relative mx-auto p-6">
    //   <div className="flex items-center gap-10 bg-slate-400">
    //     <h4 className="col-span-1">NK</h4>
    //     <div className="flex grow space-x-5 bg-slate-300">
    //       <a href="#" className="text-center hover:text-emerald-400">
    //         Home
    //       </a>
    //       <a href="#" className="text-center hover:text-emerald-400">
    //         About
    //       </a>
    //       <a href="#" className="text-center hover:text-emerald-400">
    //         Services
    //       </a>
    //       <a href="#" className="text-center hover:text-emerald-400">
    //         Contact
    //       </a>
    //     </div>
    //   </div>
    // </div>
    // <div className="grid grid-cols-4 mx-8 bg-gray-100 items-center">
    //   <h4 className="col-span-1">NK</h4>
    //   <div className="grid grid-cols-4 col-span-2">
    //     <a href="#" className="text-center py-5">Home</a>
    //     <a href="#" className="text-center py-5">About</a>
    //     <a href="#" className="text-center py-5">Services</a>
    //     <a href="#" className="text-center py-5">Contact</a>
    //   </div>
    // </div>
  );
};

export default Navbar;
