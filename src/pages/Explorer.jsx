import React from "react";
import { images } from "../../lib/post";

function Explorer() {
  return (
    <div className="flex flex-wrap justify-center gap-2 py-10">
      {images.map((image) => {
        return (
          <div
            key={image.id}
            className="min-w-[310px] max-w-[400px] min-h-[300px] max-h-[400px]"
          >
            <img src={image.url} alt="" className="w-full h-full" />
          </div>
        );
      })}
    </div>
  );
}

export default Explorer;
