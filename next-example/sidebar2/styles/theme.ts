import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      "*": {
        "font-family":
          '"Open Sans","Hiragino Sans","ヒラギノ角ゴシック","Hiragino Kaku Gothic ProN","ヒラギノ角ゴ ProN W3","Helvetica Neue",Helvetica,Arial,sans-serif',
      },
      html: {
        height: "100%",
      },
      body: {
        height: "100%",
        color: "white",
        backgroundColor: "#2f2f2f",
      },
    },
  },
});
