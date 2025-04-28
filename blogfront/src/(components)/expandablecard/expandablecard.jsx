"use client"
import { useState, useRef, useEffect } from "react";
import React from "react";

const ExpandCard = () => {
    
    const [isOpen, setOpen] = useState(false);
    const valRef = useRef(null);
    const [cardHeight, setCardHeight] = useState(0);

    useEffect(() => {
        if (valRef.current == null) {
            return;
        }
        setCardHeight(isOpen ? valRef.current.scrollHeight : 0);

    },[isOpen])

    return (
        <div className="bg-white mx-[6rem] my-[1rem] rounded-lg border-1">
            <button className="w-full p-5" onClick={() => {
                setOpen(o => !o)
            }}>
                <h1 className="text-center text-2xl">SAO First Cut Overview (Appropriate if deciding to start) *Will contain Spoilers from episode 1*</h1>
            </button>
            <div className="overflow-hidden transition-[max-height] duration-300" style={{maxHeight: cardHeight}}>
                <div ref={valRef} className="p-4">
                    <div>
                      <h1 className="text-xl mx-[2rem]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum, purus non lobortis tincidunt, enim felis sagittis enim, sit amet mattis justo tortor id diam. Donec malesuada ullamcorper massa, eget accumsan mi iaculis ut. Curabitur fringilla elit et euismod scelerisque. Aliquam augue lacus, efficitur et lorem vitae, imperdiet molestie mi. Sed tristique tortor ac eros varius, quis ornare nunc convallis. Quisque sed vehicula magna, auctor imperdiet mauris. Suspendisse odio augue, faucibus sit amet imperdiet vitae, varius in sapien. Curabitur nec ante vitae nisl pretium pharetra pretium nec nulla. Sed quis suscipit eros. Etiam ut dictum ante.

Aenean volutpat non tellus vitae rutrum. Nulla facilisi. Quisque vel blandit augue. Proin lacinia ex ut urna dictum suscipit. Morbi rhoncus sem eu nibh molestie accumsan. Nunc aliquet aliquet velit. Sed pellentesque pharetra erat in vehicula. Aliquam volutpat nulla non libero dignissim, nec accumsan sem bibendum. Donec at facilisis tortor. Etiam condimentum sapien in quam luctus vehicula. Maecenas erat urna, ullamcorper ac dapibus nec, pharetra eget mauris. In ut est non turpis tincidunt tempus. Ut elit erat, feugiat quis metus et, sagittis vehicula diam. Maecenas vitae auctor sem, cursus interdum dui. Nulla non leo lectus. Donec urna nisi, laoreet sed magna quis, maximus laoreet leo.

Vestibulum pharetra, diam at convallis elementum, erat urna dictum risus, a bibendum lacus ex condimentum mauris. Praesent nulla quam, vulputate eget scelerisque sit amet, pulvinar vel ex. Integer semper lacus sed velit molestie mollis. Sed sagittis sapien tincidunt massa dignissim molestie. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc hendrerit diam sed elementum sollicitudin. Vestibulum neque justo, ultrices a mi non, interdum commodo eros. Aenean nec metus cursus, ultrices neque nec, bibendum est. Pellentesque in nulla quis libero imperdiet sodales. Ut congue faucibus felis id venenatis. Etiam leo velit, suscipit et ex non, ornare elementum turpis. Quisque scelerisque ante id cursus maximus. Nullam sit amet nisl non lorem placerat feugiat. 
                      </h1>
                    </div>
                </div>
            </div>
        </div>
    );


}

export default ExpandCard

/*    
      const [open, setOpen] = useState(false);

      // measure the *inner* content
      const innerRef = useRef(null);
      const [bodyHeight, setBodyHeight] = useState(0);
    
      useEffect(() => {
        if (!innerRef.current) return;
        setBodyHeight(open ? innerRef.current.scrollHeight : 0);
      }, [open]);
    
      return (
        <div className="rounded-lg border shadow bg-white m-5">
          {/* Header }
          <button
            onClick={() => setOpen(!open)}
            className="flex w-full items-center justify-between p-4 text-left"
          >
            <h2 className="text-lg font-semibold text-center">TITLE HERE</h2>
            <span className={`transition-transform ${open ? "rotate-180" : ""}`}>▼</span>
          </button>
    
          {/* Collapsing body (no padding here) }
          <div
            style={{ maxHeight: bodyHeight }}
            className="overflow-hidden transition-[max-height] duration-300"
          >
            {/* Real body with padding lives in here }
            <div ref={innerRef} className="px-4 pt-2 pb-4 first:*:mt-0">
              CHILDREN WRITTEN HERE
            </div>
          </div>
        </div>
    );
    */