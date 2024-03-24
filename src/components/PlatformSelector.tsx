import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../Hooks/usePlatforms";
import usePlatform from "../Hooks/usePlatform";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
  const { data } = usePlatforms();

  const setSelectedPlatformId = useGameQueryStore(store => store.setPlatformId);
  const selectedPlatformId = useGameQueryStore(store => store.gameQuery.platformId);

  const selectedPlatform = usePlatform(selectedPlatformId)

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => setSelectedPlatformId(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;