import { forwardRef } from "react";

function Contact(_: any, ref: any) {
  return (
    <div ref={ref} className="h-screen bg-[#495c78] p-5" id="contact">
      <h1 className="font-bold text-5xl">CONTACT</h1>
    </div>
  );
}
export default forwardRef(Contact);
