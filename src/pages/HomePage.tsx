import {Flex, Grid, GridItem, Show} from "@chakra-ui/react";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import GameHeading from "../components/GameHeading";
import GameGrid from "../components/GameGrid";

function HomePage() {
    return (
        <>
            <Grid
                templateAreas={{
                    base: `"main"`,
                    lg: `"aside main"`,
                }}
                templateColumns={{
                    base: "1fr",
                    lg: "200px 1fr",
                }}
            >
                <Show above="lg">
                    <GridItem area="aside" paddingX={5}>
                        <GenreList />
                    </GridItem>
                </Show>
                <GridItem area="main">
                    <Flex gap={2} paddingLeft={2} marginBottom={2}>
                        <PlatformSelector />
                        <SortSelector />
                    </Flex>
                    <GameHeading />
                    <GameGrid />
                </GridItem>
            </Grid>
        </>

    );
}

export default HomePage;