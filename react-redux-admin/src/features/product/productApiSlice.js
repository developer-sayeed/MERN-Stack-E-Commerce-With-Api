import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/**
 * @DESC Get AllPermission
 * @ROUTE /api/v1/Permission
 * @method GET
 * @access private
 */
export const getPermission = createAsyncThunk(
  "user/getPermission",
  async () => {
    try {
      const response = await axios.get(
        `http://localhost:5050/api/v1/permission`,

        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

/**
 * @DESC Create AllPermission
 * @ROUTE /api/v1/Permission
 * @method POST
 * @access private
 */
