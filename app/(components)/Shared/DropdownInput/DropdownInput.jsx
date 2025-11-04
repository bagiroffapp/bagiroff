// DropdownInput.js

import { useEffect, useRef, useState } from "react";

const DropdownInput = ({
  categoriesData,
  placeholder,
  select_services,
  defaultServiceId,
  name,
  // Bu prop artıq birbaşa istifadə olunmur, ancaq gələcək üçün qala bilər
  onCategorySelect,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const dropdownListRef = useRef(null);

  // --- START: DƏYİŞİKLİK BURADADIR ---
  // İlkin dəyəri propdan alırıq
  const [selectedCategoryId, setSelectedCategoryId] = useState(
    defaultServiceId || null
  );

  useEffect(() => {
    // Əgər defaultServiceId xaricdən dəyişərsə, daxili state-i də yeniləyirik
    if (defaultServiceId) {
      setSelectedCategoryId(defaultServiceId);
    }
  }, [defaultServiceId]);

  useEffect(() => {
    if (dropdownOpen && dropdownListRef.current) {
      setContentHeight(dropdownListRef.current.scrollHeight);
    } else {
      setContentHeight(0);
    }
  }, [dropdownOpen, categoriesData]);

  const handleSelectInternal = (category) => {
    setSelectedCategoryId(category?.id);
    // Əgər onCategorySelect propu ötürülübsə, onu çağırırıq
    if (onCategorySelect) {
      onCategorySelect(category?.id);
    }
    setDropdownOpen(false); // Dropdown-u bağlayırıq
  };

  const currentSelection = categoriesData?.find(
    (cur) => cur?.id === selectedCategoryId
  );

  const displayText = currentSelection
    ? currentSelection.title
    : placeholder || select_services;

  return (
    <div className="relative w-full">
      {/* Server Action üçün gizli input. Dəyəri seçilmiş ID-dən alır. */}
      <input type="hidden" name={name} value={selectedCategoryId || ""} />

      {/* Dropdown-u açmaq/bağlamaq üçün olan hissə */}
      <div
        className="w-full cursor-pointer  flex justify-between items-center mt-[16px] placeholder:text-[--blue] text-[--blue] border border-[#bfc8ca]"
        onClick={() => setDropdownOpen(!dropdownOpen)} // Məntiq düzgündür
        aria-expanded={dropdownOpen}
      >
        <h2 className="text-[16px] px-[20px] py-[14px]">{displayText}</h2>
        <span className="pointer-events-none pr-4">
          <img
            src="/down.svg"
            alt="dropdown arrow"
            className={`transition-transform duration-300 ease-in-out ${
              dropdownOpen ? "rotate-180" : ""
            }`}
          />
        </span>
      </div>

      {/* Açılan siyahı (ul) */}
      <ul
        ref={dropdownListRef}
        style={{ maxHeight: dropdownOpen ? `${contentHeight}px` : "0px" }}
        className={`absolute top-[calc(100%_+_3px)] left-0 right-0 w-full 
                 bg-[#f4f6f6] border z-[400] rounded-lg shadow-lg
                 overflow-hidden transition-all duration-300 ease-in-out
                 ${
                   dropdownOpen
                     ? "opacity-100"
                     : "opacity-0 pointer-events-none" // Gizli olduqda kliklənməsin
                 }`}
      >
        {categoriesData &&
          categoriesData?.map((cur) => (
            <li
              key={cur?.id}
              className={`px-4 py-4 transition-colors duration-150 text-[18px] ease-in-out hover:bg-[--blue2] hover:text-white cursor-pointer
                        ${
                          selectedCategoryId === cur?.id
                            ? "bg-[--blue2] font-bold text-[#fff]"
                            : ""
                        }`}
              onClick={() => handleSelectInternal(cur)}
              role="option"
              aria-selected={selectedCategoryId === cur.id}
            >
              {cur?.title}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default DropdownInput;
