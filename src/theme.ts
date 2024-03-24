import {background, extendTheme, StyleConfig, ThemeConfig} from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'

// const styles = {
//     global: (props: StyleFunctionProps) => ({
//         body: {
//             color: mode('#1E0F2B', '#FFEADF')(props),
//             bg: mode('#FFEADF', '#1E0F2B')(props),
//             transition: "color 0.3s ease-in"
//         },
//     }),
// };
//
// const components: Record<string, StyleConfig> = {
//     Button: {
//         baseStyle: ({ colorMode }) => ({
//             color: colorMode === "dark" ? "#FFEADF" : '#a01a7d',
//             bg: colorMode === "dark" ? "#a01a7d" : "#FFEADF",
//             textTransform: "uppercase",
//             fontWeight: "semibold",
//             letterSpacing: "0.02em",
//             padding: "4px",
//             borderRadius: "2px",
//             fontSize: "12px"
//         }),
//         variants: {
//             solid: ({ colorMode }) => ({
//                 bg: colorMode === "dark" ? "#a01a7d" : "#FFEADF",
//                 color: colorMode === "dark" ? "#FFEADF" : '#a01a7d',
//                 _hover: colorMode === "dark" ? { bg: "#F6406B", color: "#FFEADF" } : { bg: "#F6406B", color: "#FFEADF" },
//             })
//         }
//     }
// }

const config = {
    initialColorMode: "dark",
    useSystemColorMode: false,
};

const theme = extendTheme({ config });

export default theme;