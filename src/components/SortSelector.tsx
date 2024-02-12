import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSort: (sort: Sort) => void;
  selectedSort: Sort | null;
}

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Ordered by: Relevance
      </MenuButton>
      <MenuList>
        {/* {data.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))} */}
        <MenuItem>Bla</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
