import { configureStore } from "@reduxjs/toolkit";
import sliceProducts from "./ReduxProduct/Redux"
export default configureStore({
    reducer: {
        productStore: sliceProducts
    }
})