import {Heading, Highlight, VStack} from "@chakra-ui/react";
import {isRouteErrorResponse, useRouteError} from "react-router-dom";
import NavBar from "../components/NavBar";

function ErrorPage() {
    const error = useRouteError();

    return (
        <>
            <NavBar />
            <VStack justifyContent="center" spacing="16px" fontWeight="bold" fontSize='2em' py="3em">
                <Heading size="3xl" lineHeight='tall'>Oops..</Heading>
                <Highlight
                    query={['error', 'exist']}
                    styles={{ px: '6', py: '2', rounded: 'full', bg: 'purple.700', color: "white" }}
                >
                    {isRouteErrorResponse(error) ? 'Sorry, unexpected error occured.' : 'This page does not exist.'}
                </Highlight>
            </VStack>
        </>

    );
}

export default ErrorPage;