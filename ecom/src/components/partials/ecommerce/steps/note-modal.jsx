import React, { useState } from "react";
import Modal from "../../../ui/Modal";
import Select from "../../../ui/Select";
import Textarea from "../../../ui/Textarea";
import Textinput from "../../../ui/Textinput";


const NoteModal = ({ activeModal, onclose }) => {
  const options = [
    {
      value: "option1",
      label: "Option 1",
    },
    {
      value: "option2",
      label: "Option 2",
    },
    {
      value: "option3",
      label: "Option 3",
    },
  ];

  const [value, setValue] = useState("A");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Modal
      activeModal={activeModal}
      onClose={onclose}
      title="New Address"
      labelClass="btn-outline-dark"
      themeClass="bg-slate-900 dark:bg-slate-800 dark:border-b dark:border-slate-700"
      centered
    >
      <form className="space-y-4">
        <Textarea
          label="Address"
          id="pn4"
          placeholder="Your Address"
          horizontal
        />
        <Textinput
          label="Country"
          id="Country"
          type="text"
          horizontal
          placeholder="Select Your Counrty"
        />
        <Textinput
          label="State"
          id="State"
          type="text"
          horizontal
          placeholder="Select Your State"
        />
        <Textinput
          label="City"
          id="City"
          type="text"
          horizontal
          placeholder="Select Your City"
        />
        <Textinput
          label="Product Name"
          id="h_Fullname"
          type="text"
          placeholder="Your Postal Code"
          horizontal
        />
        <Textinput
          label="Phone No"
          id="phone No"
          type="text"
          placeholder="+00 0123456789"
          horizontal
        />
        <div className="col-span-12 flex justify-end">
          <button
            type="submit"
            className="btn btn-dark h-min w-max text-sm font-normal "
          >
            Save Address
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default NoteModal;
