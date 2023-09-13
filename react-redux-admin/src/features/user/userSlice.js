import { createSlice } from "@reduxjs/toolkit";
import {
  DdeletePermission,
  DdeleteRole,
  createPermission,
  createRole,
  getPermission,
  getRole,
  updatePermission,
  updatePermissionStatus,
  updateRole,
  updateRoleStatus,
} from "./userApiSlice";

// Create a user Slice

const userSlice = createSlice({
  name: "user",
  initialState: {
    permission: null,
    role: null,
    user: null,
    error: null,
    message: null,
  },
  reducers: {
    setMessageEmpty: (state, action) => {
      (state.message = null), (state.error = null);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPermission.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getPermission.fulfilled, (state, action) => {
        state.permission = action.payload;
      })
      .addCase(createPermission.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(createPermission.fulfilled, (state, action) => {
        state.permission = state.permission ?? [];
        state.permission.push(action.payload.permission);
        state.message = action.payload.message;
      })
      .addCase(DdeletePermission.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(DdeletePermission.fulfilled, (state, action) => {
        state.permission = state.permission.filter(
          (data) => data._id !== action.payload.permission._id
        );
        state.message = action.payload.message;
      })
      .addCase(updatePermissionStatus.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updatePermissionStatus.fulfilled, (state, action) => {
        state.permission[
          state.permission.findIndex(
            (data) => data._id == action.payload.permission._id
          )
        ] = action.payload.permission;
        state.message = action.payload.message;
      })
      .addCase(updatePermission.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updatePermission.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.permission[
          state.permission.findIndex(
            (data) => data._id == action.payload.permission._id
          )
        ] = action.payload.permission;
      })
      // Role Section
      .addCase(getRole.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getRole.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.role = action.payload;
      })
      .addCase(createRole.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(createRole.fulfilled, (state, action) => {
        state.role = state.role ?? [];
        state.role.push(action.payload.role);
        state.message = action.payload.message;
      })
      .addCase(DdeleteRole.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(DdeleteRole.fulfilled, (state, action) => {
        state.role = state.role.filter(
          (data) => data._id !== action.payload.role._id
        );
        state.message = action.payload.message;
      })
      .addCase(updateRoleStatus.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updateRoleStatus.fulfilled, (state, action) => {
        state.role[
          state.role.findIndex((data) => data._id == action.payload.role._id)
        ] = action.payload.role;
        state.message = action.payload.message;
      })
      .addCase(updateRole.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updateRole.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.role[
          state.role.findIndex((data) => data._id == action.payload.role._id)
        ] = action.payload.role;
      });
  },
});

// Selectors

export const getAllpermissionData = (state) => state.user;

// Actions
export const { setMessageEmpty } = userSlice.actions;

// Export

export default userSlice.reducer;
