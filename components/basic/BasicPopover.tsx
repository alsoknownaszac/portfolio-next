// import { Popover, Transition } from "@headlessui/react";
// import { Fragment } from "react";

export default function BasicPopover(props: any) {
  return (
    <div className={`w-full px-4 ${props.className}`}>
      {/* <Popover className={` ${props.popoverStyles} relative`}>
        {({ open }: any) => (
          <div>
            <Popover.Button
              className={` ${props.btnStyles}
                ${open ? "" : "text-opacity-90"}
                 group py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              {props.btn}
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                className={`w-full z-10 absolute px-4 transform translate-x-[0] sm:px-0 p-4 overflow-hidden rounded-xl shadow-lg ring-1 ring-black ring-opacity-5  ${props.contentStyles} `}
              >
                {props.children}
              </Popover.Panel>
            </Transition>
          </div>
        )}
      </Popover> */}
    </div>
  );
}