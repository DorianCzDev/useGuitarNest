import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import FilterHeader from "./FilterHeader";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FaRegMinusSquare } from "react-icons/fa";
import FilterList from "./FilterList";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoMdCheckbox } from "react-icons/io";
import FilterElement from "./FilterElement";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function AmplifierFillters() {
  const [searchParams, setSearchParams] = useSearchParams();
  let params = [];

  for (let entry of searchParams.entries()) {
    if (entry[0].includes("-")) {
      params.push(entry[0].split("-")[1]);
    } else {
      params.push(entry[0]);
    }
  }

  const [isOpen, setIsOpen] = useState(params || []);

  function handleFilter(name, value) {
    if (searchParams.get(name) === value || !value) {
      searchParams.delete(name);
    } else {
      searchParams.set(name, value);
    }
    setSearchParams(searchParams);
  }
  return (
    <>
      <FilterHeader
        openIcon={<FaRegSquarePlus />}
        closeIcon={<FaRegMinusSquare />}
        isOpenName={"subcategory"}
        setIsOpen={setIsOpen}
        isOpen={isOpen.includes("subcategory")}
      >
        category
      </FilterHeader>
      <FilterList isOpen={isOpen.includes("subcategory")} listLength="short">
        <FilterElement
          elementType="list"
          selectedIcon={<IoMdCheckbox />}
          unselectedIcon={<MdCheckBoxOutlineBlank />}
          queryName="subcategory"
          queryValue="electric guitar amp"
          onFilter={handleFilter}
        >
          electric guitars amps
        </FilterElement>
        <FilterElement
          elementType="list"
          selectedIcon={<IoMdCheckbox />}
          unselectedIcon={<MdCheckBoxOutlineBlank />}
          queryName="subcategory"
          queryValue="bass guitar amp"
          onFilter={handleFilter}
        >
          bass guitars amps
        </FilterElement>
        <FilterElement
          elementType="list"
          selectedIcon={<IoMdCheckbox />}
          unselectedIcon={<MdCheckBoxOutlineBlank />}
          queryName="subcategory"
          queryValue="acoustic guitar amp"
          onFilter={handleFilter}
        >
          ACOUSTIC guitars amps
        </FilterElement>
      </FilterList>
      <FilterHeader
        openIcon={<FaRegSquarePlus />}
        closeIcon={<FaRegMinusSquare />}
        isOpenName={"price"}
        setIsOpen={setIsOpen}
        isOpen={isOpen.includes("price")}
      >
        price
      </FilterHeader>
      <FilterList isOpen={isOpen.includes("price")} listLength="short">
        <FilterElement
          elementType="input"
          inputIcon={<HiOutlineArrowNarrowRight />}
          queryName="price"
          onFilter={handleFilter}
        />
      </FilterList>
      <FilterHeader
        openIcon={<FaRegSquarePlus />}
        closeIcon={<FaRegMinusSquare />}
        isOpenName={"power"}
        setIsOpen={setIsOpen}
        isOpen={isOpen.includes("power")}
      >
        power
      </FilterHeader>
      <FilterList isOpen={isOpen.includes("power")} listLength="short">
        <FilterElement
          elementType="input"
          inputIcon={<HiOutlineArrowNarrowRight />}
          queryName="power"
          onFilter={handleFilter}
        />
      </FilterList>
      <FilterHeader
        openIcon={<FaRegSquarePlus />}
        closeIcon={<FaRegMinusSquare />}
        isOpenName={"channels"}
        setIsOpen={setIsOpen}
        isOpen={isOpen.includes("channels")}
      >
        channels
      </FilterHeader>
      <FilterList isOpen={isOpen.includes("channels")} listLength="short">
        <FilterElement
          elementType="input"
          inputIcon={<HiOutlineArrowNarrowRight />}
          queryName="channels"
          onFilter={handleFilter}
        />
      </FilterList>
      <FilterHeader
        openIcon={<FaRegSquarePlus />}
        closeIcon={<FaRegMinusSquare />}
        isOpenName={"memory_slots"}
        setIsOpen={setIsOpen}
        isOpen={isOpen.includes("memory_slots")}
      >
        memory slots
      </FilterHeader>
      <FilterList isOpen={isOpen.includes("memory_slots")} listLength="short">
        <FilterElement
          elementType="input"
          inputIcon={<HiOutlineArrowNarrowRight />}
          queryName="memory_slots"
          onFilter={handleFilter}
        />
      </FilterList>
      <FilterHeader
        openIcon={<FaRegSquarePlus />}
        closeIcon={<FaRegMinusSquare />}
        isOpenName={"foot_switch_connection"}
        setIsOpen={setIsOpen}
        isOpen={isOpen.includes("foot_switch_connection")}
      >
        foot switch connect
      </FilterHeader>
      <FilterList
        isOpen={isOpen.includes("foot_switch_connection")}
        listLength="short"
      >
        <FilterElement
          elementType="boolean"
          selectedIcon={<IoMdCheckbox />}
          unselectedIcon={<MdCheckBoxOutlineBlank />}
          queryName="foot_switch_connection"
          queryValue="true"
          onFilter={handleFilter}
        >
          yes
        </FilterElement>
        <FilterElement
          elementType="boolean"
          selectedIcon={<IoMdCheckbox />}
          unselectedIcon={<MdCheckBoxOutlineBlank />}
          queryName="foot_switch_connection"
          queryValue="false"
          onFilter={handleFilter}
        >
          no
        </FilterElement>
      </FilterList>
      <FilterHeader
        openIcon={<FaRegSquarePlus />}
        closeIcon={<FaRegMinusSquare />}
        isOpenName={"headphone_output"}
        setIsOpen={setIsOpen}
        isOpen={isOpen.includes("headphone_output")}
      >
        headphone output
      </FilterHeader>
      <FilterList
        isOpen={isOpen.includes("headphone_output")}
        listLength="short"
      >
        <FilterElement
          elementType="boolean"
          selectedIcon={<IoMdCheckbox />}
          unselectedIcon={<MdCheckBoxOutlineBlank />}
          queryName="headphone_output"
          queryValue="true"
          onFilter={handleFilter}
        >
          yes
        </FilterElement>
        <FilterElement
          elementType="boolean"
          selectedIcon={<IoMdCheckbox />}
          unselectedIcon={<MdCheckBoxOutlineBlank />}
          queryName="headphone_output"
          queryValue="false"
          onFilter={handleFilter}
        >
          no
        </FilterElement>
      </FilterList>
      <FilterHeader
        openIcon={<FaRegSquarePlus />}
        closeIcon={<FaRegMinusSquare />}
        isOpenName={"effects_processor"}
        setIsOpen={setIsOpen}
        isOpen={isOpen.includes("effects_processor")}
      >
        effect&apos;s processor
      </FilterHeader>
      <FilterList
        isOpen={isOpen.includes("effects_processor")}
        listLength="short"
      >
        <FilterElement
          elementType="boolean"
          selectedIcon={<IoMdCheckbox />}
          unselectedIcon={<MdCheckBoxOutlineBlank />}
          queryName="effects_processor"
          queryValue="true"
          onFilter={handleFilter}
        >
          yes
        </FilterElement>
        <FilterElement
          elementType="boolean"
          selectedIcon={<IoMdCheckbox />}
          unselectedIcon={<MdCheckBoxOutlineBlank />}
          queryName="effects_processor"
          queryValue="false"
          onFilter={handleFilter}
        >
          no
        </FilterElement>
      </FilterList>
      <FilterHeader
        openIcon={<FaRegSquarePlus />}
        closeIcon={<FaRegMinusSquare />}
        isOpenName={"recording_output"}
        setIsOpen={setIsOpen}
        isOpen={isOpen.includes("recording_output")}
      >
        recording output
      </FilterHeader>
      <FilterList
        isOpen={isOpen.includes("recording_output")}
        listLength="short"
      >
        <FilterElement
          elementType="boolean"
          selectedIcon={<IoMdCheckbox />}
          unselectedIcon={<MdCheckBoxOutlineBlank />}
          queryName="recording_output"
          queryValue="true"
          onFilter={handleFilter}
        >
          yes
        </FilterElement>
        <FilterElement
          elementType="boolean"
          selectedIcon={<IoMdCheckbox />}
          unselectedIcon={<MdCheckBoxOutlineBlank />}
          queryName="recording_output"
          queryValue="false"
          onFilter={handleFilter}
        >
          no
        </FilterElement>
      </FilterList>
      <FilterHeader
        openIcon={<FaRegSquarePlus />}
        closeIcon={<FaRegMinusSquare />}
        isOpenName={"reverb"}
        setIsOpen={setIsOpen}
        isOpen={isOpen.includes("reverb")}
      >
        reverb
      </FilterHeader>
      <FilterList isOpen={isOpen.includes("reverb")} listLength="short">
        <FilterElement
          elementType="boolean"
          selectedIcon={<IoMdCheckbox />}
          unselectedIcon={<MdCheckBoxOutlineBlank />}
          queryName="reverb"
          queryValue="true"
          onFilter={handleFilter}
        >
          yes
        </FilterElement>
        <FilterElement
          elementType="boolean"
          selectedIcon={<IoMdCheckbox />}
          unselectedIcon={<MdCheckBoxOutlineBlank />}
          queryName="reverb"
          queryValue="false"
          onFilter={handleFilter}
        >
          no
        </FilterElement>
      </FilterList>
      <FilterHeader
        openIcon={<FaRegSquarePlus />}
        closeIcon={<FaRegMinusSquare />}
        isOpenName={"line_input"}
        setIsOpen={setIsOpen}
        isOpen={isOpen.includes("line_input")}
      >
        line input
      </FilterHeader>
      <FilterList isOpen={isOpen.includes("line_input")} listLength="short">
        <FilterElement
          elementType="input"
          inputIcon={<HiOutlineArrowNarrowRight />}
          queryName="line_input"
          onFilter={handleFilter}
        />
      </FilterList>
      <FilterHeader
        openIcon={<FaRegSquarePlus />}
        closeIcon={<FaRegMinusSquare />}
        isOpenName={"weight"}
        setIsOpen={setIsOpen}
        isOpen={isOpen.includes("weight")}
      >
        weight
      </FilterHeader>
      <FilterList isOpen={isOpen.includes("weight")} listLength="short">
        <FilterElement
          elementType="input"
          inputIcon={<HiOutlineArrowNarrowRight />}
          queryName="weight"
          onFilter={handleFilter}
        />
      </FilterList>
    </>
  );
}

export default AmplifierFillters;
