import { useColor } from "@/context/ColorContext";
import { useTab } from "@/context/TabContext";
import { useHeaderState } from "@/hooks/header/useHeaderState";
import { listClassMap } from "@/themes/classMap";
import Link from "next/link";
import React from "react";

interface NavListProps {
  title: string;
}

const NavList = ({ title }: NavListProps) => {
  const navLists = useHeaderState(title);
  const [tab] = useTab()!;
  const [colorVariations] = useColor()!;

  return (
    <ul className="flex justify-end ml-auto">
      {navLists.map((navList) => {
        return (
          <li key={navList.name}>
            <Link
              href={{
                pathname: navList.link,
                query: { tab, color: colorVariations },
              }}
              className="flex items-center gap-1"
            >
              {!navList.isSelected && (
                <>
                  <navList.icon
                    className={listClassMap(
                      navList.name,
                      navList.isSelected,
                      navList.color
                    )}
                  />
                  <div className="hidden sm:block">{navList.name}</div>
                </>
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavList;
