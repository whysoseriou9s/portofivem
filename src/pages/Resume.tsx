import React from "react";
import { ClipboardListIcon } from "@heroicons/react/solid";

const Resume = () => {
  return (
    <div
      id="Resume"
      className="lg:w-1/2 mt-64 mb-4 text-justify mx-12 lg:mr-60 lg:ml-auto"
    >
      <div>
        <div className="table">
          <ClipboardListIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            WHAT I OFFER
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5">
        <div className="flex flex-row">
          <div className="w-1/4">
            <code className="text-yellow_vs">FRAMEWORK</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">• ESX</code>
            <br />
            <code className="text-blue_vs">• QB</code>
            <br />
            <code className="text-blue_vs">• QBOX</code>
            <br />
          </div>
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs">SCRIPTS</code>
          </div>
          <div className="w-3/4">
          <code className="text-blue_vs">• OPTIMIZE</code>
            <br />
            <code className="text-blue_vs">• PACK</code>
            <br />
            <code className="text-blue_vs">• CUSTOM / CUSTOM UI</code>
            <br />
            <code className="text-blue_vs">• SECURE</code>
            <br />
            <code className="text-blue_vs">• FIX</code>
          </div>
        </div>
        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs">OTHER</code>
          </div>
          <div className="w-3/4">
          <code className="text-blue_vs">• JAM KERJA FLEKSIBEL</code>
          <br />
          <code className="text-blue_vs">• BISA MENYESUAIKAN SERVER YANG SUDAH JADI</code>
          <br />
          <code className="text-blue_vs">• BISA MEMBUAT SERVER DARI AWAL SESUAI REQUEST</code>
          <br />
          <code className="text-blue_vs">• RUTIN UPDATE FITUR</code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
