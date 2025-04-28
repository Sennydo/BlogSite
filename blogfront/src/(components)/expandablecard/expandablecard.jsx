"use client"
import { useState, useRef, useEffect } from "react";
import React from "react";

const ExpandCard = ({data}) => {
    
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
                        {data[0].first_rev}
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