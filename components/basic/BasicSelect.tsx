// import { Fragment, useState } from "react";
// import { Listbox, Transition } from "@headlessui/react";
// import { BsCheckLg } from "react-icons/bs";
// import { IoIosArrowDown as Arrow } from "react-icons/io";

export default function BasicSelect(props: any) {
  // const [selected, setSelected] = useState(props.data[0]);

  return (
    <div>haha</div>
    // <Listbox value={selected} onChange={setSelected}>
    //   <div className=" relative mt-1">
    //     <Listbox.Button className="relative w-full p-4 text-left bg-[#FAFAFA] border border-[#8F8888] rounded-lg cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
    //       <span className="block truncate text-[1.4rem]">{selected.name}</span>
    //       <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
    //         <span className="w-5 h-5 text-gray-400" aria-hidden="true">
    //           <Arrow size={"1.2rem"} />
    //         </span>
    //       </span>
    //     </Listbox.Button>
    //     <Transition
    //       as={Fragment}
    //       leave="transition ease-in duration-100"
    //       leaveFrom="opacity-100"
    //       leaveTo="opacity-0"
    //     >
    //       <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
    //         {props.data.map((item, itemIdx) => (
    //           <Listbox.Option
    //             key={itemIdx}
    //             className={({ active }) =>
    //               `${active ? "text-amber-900 bg-gray-300" : "text-gray-900"}
    //                       cursor-default select-none relative py-2 pl-10 pr-4 text-[1.2rem]`
    //             }
    //             value={item}
    //             onClick={props.onClick}
    //             onChange={props.onChange}
    //           >
    //             <span
    //               className={`${
    //                 selected ? "font-medium" : "font-normal"
    //               } block truncate`}
    //             >
    //               {item.name}
    //             </span>
    //             {/* {({ selected, active }) => (
    //                 <>
    //                   <span
    //                     className={`${
    //                       selected ? "font-medium" : "font-normal"
    //                     } block truncate`}
    //                   >
    //                     {person.name}
    //                   </span>
    //                   {selected ? (
    //                     <span
    //                       className={`${
    //                         active ? "text-amber-600" : "text-amber-600"
    //                       }
    //                             absolute inset-y-0 left-0 flex items-center pl-3`}
    //                     >
    //                       <span className="w-5 h-5" aria-hidden="true">
    //                         <BsCheckLg />
    //                       </span>
    //                     </span>
    //                   ) : null}
    //                 </>
    //               )} */}
    //           </Listbox.Option>
    //         ))}
    //       </Listbox.Options>
    //     </Transition>
    //   </div>
    // </Listbox>
  );
}