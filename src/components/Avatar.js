import React from 'react'

const Avatar = () => {
  return (
    <div className="row-span-3 h-fit w-full flex items-center justify-center">
      <img
        src="avatar4.png"
        // className="w-full rounded-full h-auto  absolute top-0 left-0 object-cover"
        className="w-full bg-white/20 shadow-xl rounded-full  md:shadow-none
        md:bg-transparent
        h-auto max-h-[260px] max-w-[260px] md:max-w-[660px] md:max-h-[660px] object-contain"
      ></img>
    </div>
  );
}

export default Avatar
