import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import FilterHeader from "./FilterHeader";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FaRegMinusSquare } from "react-icons/fa";
import FilterList from "./FilterList";
import FilterElement from "./FilterElement";
import { IoMdCheckbox } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function GuitarFilters({ productsBody, productsNeck }) {
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
    <div>
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
            queryValue="electric guitar"
            onFilter={handleFilter}
          >
            electric guitars
          </FilterElement>
          <FilterElement
            elementType="list"
            selectedIcon={<IoMdCheckbox />}
            unselectedIcon={<MdCheckBoxOutlineBlank />}
            queryName="subcategory"
            queryValue="bass guitar"
            onFilter={handleFilter}
          >
            bass guitars
          </FilterElement>
          <FilterElement
            elementType="list"
            selectedIcon={<IoMdCheckbox />}
            unselectedIcon={<MdCheckBoxOutlineBlank />}
            queryName="subcategory"
            queryValue="acoustic guitar"
            onFilter={handleFilter}
          >
            ACOUSTIC guitars
          </FilterElement>
          <FilterElement
            elementType="list"
            selectedIcon={<IoMdCheckbox />}
            unselectedIcon={<MdCheckBoxOutlineBlank />}
            queryName="subcategory"
            queryValue="classical guitar"
            onFilter={handleFilter}
          >
            classical guitars
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
          isOpenName={"body"}
          setIsOpen={setIsOpen}
          isOpen={isOpen.includes("body")}
        >
          body
        </FilterHeader>
        <FilterList isOpen={isOpen.includes("body")} listLength="long">
          {Array.isArray(productsBody) &&
            productsBody.map((body) => (
              <FilterElement
                key={body[0]}
                elementType="list"
                selectedIcon={<IoMdCheckbox />}
                unselectedIcon={<MdCheckBoxOutlineBlank />}
                queryName="body"
                queryValue={body[0]}
                onFilter={handleFilter}
              >
                {
                  <>
                    {body[0]} <span>{`(${body[1]})`}</span>
                  </>
                }
              </FilterElement>
            ))}
        </FilterList>
        <FilterHeader
          openIcon={<FaRegSquarePlus />}
          closeIcon={<FaRegMinusSquare />}
          isOpenName={"neck"}
          setIsOpen={setIsOpen}
          isOpen={isOpen.includes("neck")}
        >
          neck
        </FilterHeader>
        <FilterList isOpen={isOpen.includes("neck")} listLength="long">
          {Array.isArray(productsNeck) &&
            productsNeck.map((neck) => (
              <FilterElement
                key={neck[0]}
                elementType="list"
                selectedIcon={<IoMdCheckbox />}
                unselectedIcon={<MdCheckBoxOutlineBlank />}
                queryName="neck"
                queryValue={neck[0]}
                onFilter={handleFilter}
              >
                {
                  <>
                    {neck[0]} <span>{`(${neck[1]})`}</span>
                  </>
                }
              </FilterElement>
            ))}
        </FilterList>
        <FilterHeader
          openIcon={<FaRegSquarePlus />}
          closeIcon={<FaRegMinusSquare />}
          isOpenName={"frets_number"}
          setIsOpen={setIsOpen}
          isOpen={isOpen.includes("frets_number")}
        >
          frets
        </FilterHeader>
        <FilterList isOpen={isOpen.includes("frets_number")} listLength="short">
          <FilterElement
            elementType="input"
            inputIcon={<HiOutlineArrowNarrowRight />}
            queryName="frets_number"
            onFilter={handleFilter}
          />
        </FilterList>
        <FilterHeader
          openIcon={<FaRegSquarePlus />}
          closeIcon={<FaRegMinusSquare />}
          isOpenName={"strings_number"}
          setIsOpen={setIsOpen}
          isOpen={isOpen.includes("strings_number")}
        >
          strings number
        </FilterHeader>
        <FilterList
          isOpen={isOpen.includes("strings_number")}
          listLength="short"
        >
          <FilterElement
            elementType="input"
            inputIcon={<HiOutlineArrowNarrowRight />}
            queryName="strings_number"
            onFilter={handleFilter}
          />
        </FilterList>
        <FilterHeader
          openIcon={<FaRegSquarePlus />}
          closeIcon={<FaRegMinusSquare />}
          isOpenName={"pickups_active"}
          setIsOpen={setIsOpen}
          isOpen={isOpen.includes("pickups_active")}
        >
          pickups active
        </FilterHeader>
        <FilterList
          isOpen={isOpen.includes("pickups_active")}
          listLength="short"
        >
          <FilterElement
            elementType="boolean"
            selectedIcon={<IoMdCheckbox />}
            unselectedIcon={<MdCheckBoxOutlineBlank />}
            queryName="pickups_active"
            queryValue="true"
            onFilter={handleFilter}
          >
            yes
          </FilterElement>
          <FilterElement
            elementType="boolean"
            selectedIcon={<IoMdCheckbox />}
            unselectedIcon={<MdCheckBoxOutlineBlank />}
            queryName="pickups_active"
            queryValue="false"
            onFilter={handleFilter}
          >
            no
          </FilterElement>
        </FilterList>
        <FilterHeader
          openIcon={<FaRegSquarePlus />}
          closeIcon={<FaRegMinusSquare />}
          isOpenName={"tremolo"}
          setIsOpen={setIsOpen}
          isOpen={isOpen.includes("tremolo")}
        >
          tremolo
        </FilterHeader>
        <FilterList isOpen={isOpen.includes("tremolo")} listLength="short">
          <FilterElement
            elementType="boolean"
            selectedIcon={<IoMdCheckbox />}
            unselectedIcon={<MdCheckBoxOutlineBlank />}
            queryName="tremolo"
            queryValue="true"
            onFilter={handleFilter}
          >
            yes
          </FilterElement>
          <FilterElement
            elementType="boolean"
            selectedIcon={<IoMdCheckbox />}
            unselectedIcon={<MdCheckBoxOutlineBlank />}
            queryName="tremolo"
            queryValue="false"
            onFilter={handleFilter}
          >
            no
          </FilterElement>
        </FilterList>
        <FilterHeader
          openIcon={<FaRegSquarePlus />}
          closeIcon={<FaRegMinusSquare />}
          isOpenName={"left_handed"}
          setIsOpen={setIsOpen}
          isOpen={isOpen.includes("left_handed")}
        >
          lefthanded
        </FilterHeader>
        <FilterList isOpen={isOpen.includes("left_handed")} listLength="short">
          <FilterElement
            elementType="boolean"
            selectedIcon={<IoMdCheckbox />}
            unselectedIcon={<MdCheckBoxOutlineBlank />}
            queryName="left_handed"
            queryValue="true"
            onFilter={handleFilter}
          >
            yes
          </FilterElement>
          <FilterElement
            elementType="boolean"
            selectedIcon={<IoMdCheckbox />}
            unselectedIcon={<MdCheckBoxOutlineBlank />}
            queryName="left_handed"
            queryValue="false"
            onFilter={handleFilter}
          >
            no
          </FilterElement>
        </FilterList>
        <FilterHeader
          openIcon={<FaRegSquarePlus />}
          closeIcon={<FaRegMinusSquare />}
          isOpenName={"pickups"}
          setIsOpen={setIsOpen}
          isOpen={isOpen.includes("pickups")}
        >
          pickups
        </FilterHeader>
        <FilterList isOpen={isOpen.includes("pickups")} listLength="long">
          <FilterElement
            elementType="list"
            selectedIcon={<IoMdCheckbox />}
            unselectedIcon={<MdCheckBoxOutlineBlank />}
            queryName="pickups"
            queryValue="H"
            onFilter={handleFilter}
          >
            H
          </FilterElement>
          <FilterElement
            elementType="list"
            selectedIcon={<IoMdCheckbox />}
            unselectedIcon={<MdCheckBoxOutlineBlank />}
            queryName="pickups"
            queryValue="HH"
            onFilter={handleFilter}
          >
            HH
          </FilterElement>
          <FilterElement
            elementType="list"
            selectedIcon={<IoMdCheckbox />}
            unselectedIcon={<MdCheckBoxOutlineBlank />}
            queryName="pickups"
            queryValue="HHH"
            onFilter={handleFilter}
          >
            HHH
          </FilterElement>
          <FilterElement
            elementType="list"
            selectedIcon={<IoMdCheckbox />}
            unselectedIcon={<MdCheckBoxOutlineBlank />}
            queryName="pickups"
            queryValue="S"
            onFilter={handleFilter}
          >
            S
          </FilterElement>
          <FilterElement
            elementType="list"
            selectedIcon={<IoMdCheckbox />}
            unselectedIcon={<MdCheckBoxOutlineBlank />}
            queryName="pickups"
            queryValue="SS"
            onFilter={handleFilter}
          >
            SS
          </FilterElement>
          <FilterElement
            elementType="list"
            selectedIcon={<IoMdCheckbox />}
            unselectedIcon={<MdCheckBoxOutlineBlank />}
            queryName="pickups"
            queryValue="SSS"
            onFilter={handleFilter}
          >
            SSS
          </FilterElement>
          <FilterElement
            elementType="list"
            selectedIcon={<IoMdCheckbox />}
            unselectedIcon={<MdCheckBoxOutlineBlank />}
            queryName="pickups"
            queryValue="HS"
            onFilter={handleFilter}
          >
            HS
          </FilterElement>
          <FilterElement
            elementType="list"
            selectedIcon={<IoMdCheckbox />}
            unselectedIcon={<MdCheckBoxOutlineBlank />}
            queryName="pickups"
            queryValue="HHS"
            onFilter={handleFilter}
          >
            HHS
          </FilterElement>
        </FilterList>
      </>
    </div>
  );
}

export default GuitarFilters;
