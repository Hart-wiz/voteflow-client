"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

export interface CustomSelectOption {
  value: string;
  label: string;
}

interface CustomSelectProps {
  id?: string;
  value: string;
  options: CustomSelectOption[];
  onValueChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  "aria-label"?: string;
  "aria-invalid"?: boolean;
}

export function CustomSelect({
  id,
  value,
  options,
  onValueChange,
  placeholder = "Choose an option",
  className,
  disabled = false,
  "aria-label": ariaLabel,
  "aria-invalid": ariaInvalid,
}: CustomSelectProps) {
  const generatedId = useId();
  const selectId = id ?? `custom-select-${generatedId}`;
  const listboxId = `${selectId}-options`;
  const rootRef = useRef<HTMLDivElement>(null);
  const typeaheadRef = useRef("");
  const typeaheadTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [open, setOpen] = useState(false);
  const selectedIndex = options.findIndex((option) => option.value === value);
  const [activeIndex, setActiveIndex] = useState(Math.max(selectedIndex, 0));
  const selectedOption = options[selectedIndex];

  useEffect(() => {
    if (!open) return;

    const closeOnOutsidePointer = (event: PointerEvent) => {
      if (event.target instanceof Node && !rootRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", closeOnOutsidePointer);
    return () => document.removeEventListener("pointerdown", closeOnOutsidePointer);
  }, [open]);

  useEffect(() => () => {
    if (typeaheadTimeoutRef.current) clearTimeout(typeaheadTimeoutRef.current);
  }, []);

  const openAt = (index: number) => {
    setActiveIndex(Math.min(Math.max(index, 0), Math.max(options.length - 1, 0)));
    setOpen(true);
  };

  const choose = (option: CustomSelectOption) => {
    onValueChange(option.value);
    setActiveIndex(options.findIndex((item) => item.value === option.value));
    setOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (disabled) return;

    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const direction = event.key === "ArrowDown" ? 1 : -1;
      if (!open) {
        openAt(selectedIndex >= 0 ? selectedIndex : direction > 0 ? 0 : options.length - 1);
      } else if (options.length) {
        setActiveIndex((current) => (current + direction + options.length) % options.length);
      }
      return;
    }

    if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      if (!open) setOpen(true);
      setActiveIndex(event.key === "Home" ? 0 : Math.max(options.length - 1, 0));
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (!open) {
        openAt(selectedIndex >= 0 ? selectedIndex : 0);
      } else if (options[activeIndex]) {
        choose(options[activeIndex]);
      }
      return;
    }

    if (event.key === "Escape" && open) {
      event.preventDefault();
      setOpen(false);
      return;
    }

    if (event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey) {
      typeaheadRef.current += event.key.toLocaleLowerCase();
      const matchIndex = options.findIndex((option) =>
        option.label.toLocaleLowerCase().startsWith(typeaheadRef.current),
      );
      if (matchIndex >= 0) {
        setActiveIndex(matchIndex);
        if (!open) setOpen(true);
      }
      if (typeaheadTimeoutRef.current) clearTimeout(typeaheadTimeoutRef.current);
      typeaheadTimeoutRef.current = setTimeout(() => {
        typeaheadRef.current = "";
      }, 500);
    }
  };

  return (
    <div className="relative w-full" ref={rootRef}>
      <button
        id={selectId}
        type="button"
        role="combobox"
        aria-label={ariaLabel}
        aria-expanded={open}
        aria-controls={listboxId}
        aria-haspopup="listbox"
        aria-activedescendant={open && options[activeIndex] ? `${listboxId}-${activeIndex}` : undefined}
        aria-invalid={ariaInvalid}
        disabled={disabled}
        onClick={() => (open ? setOpen(false) : openAt(selectedIndex >= 0 ? selectedIndex : 0))}
        onKeyDown={handleKeyDown}
        className={className ?? "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"}
      >
        <span className={selectedOption ? "truncate" : "truncate text-muted-foreground"}>
          {selectedOption?.label ?? placeholder}
        </span>
        <ChevronDown aria-hidden="true" className={`h-4 w-4 shrink-0 opacity-60 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <ul
          id={listboxId}
          role="listbox"
          aria-labelledby={ariaLabel ? undefined : selectId}
          className="absolute left-0 top-[calc(100%+0.35rem)] z-[100] max-h-64 w-full min-w-max overflow-auto rounded-lg border border-[#c3c6d7] bg-white p-1.5 text-[#0b1c30] shadow-xl shadow-slate-900/10"
        >
          {options.map((option, index) => {
            const isSelected = option.value === value;
            const isActive = index === activeIndex;
            return (
              <li
                id={`${listboxId}-${index}`}
                key={option.value}
                role="option"
                aria-selected={isSelected}
                onMouseEnter={() => setActiveIndex(index)}
                onPointerDown={(event) => event.preventDefault()}
                onClick={() => choose(option)}
                className={`flex min-h-9 cursor-pointer items-center justify-between gap-4 rounded-md px-3 py-2 text-left text-sm ${
                  isActive ? "bg-[#eff4ff] text-[#004ac6]" : "hover:bg-[#f8f9ff]"
                }`}
              >
                <span>{option.label}</span>
                {isSelected && <Check aria-hidden="true" className="h-4 w-4 shrink-0 text-[#004ac6]" />}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
