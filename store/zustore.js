import { create } from "zustand";
import { persist } from "zustand/middleware";

export const tokenStore = create(
  persist(
    (set) => ({
      token: "",
      userid: "",
      data: "",
      Action: (val) => set((state) => ({ token: val })),
      UserAction: (val) => set((state) => ({ userid: val })),
      UserData: (val) => set((state) => ({ data: val })),
    }),
    { name: "userinfo" }
  )
);

const AdminStore = (set, get) => ({
  AdminState: false,
  adminAction: (email, password) => {
    if (email === "admin@gmail.com" && password === "admin@") {
      set((state) => ({ AdminState: !state.AdminState }));
      window.location.href = "/admin/Blogs";
    }
  },
});

export const useAdminStore = create(persist(AdminStore, { name: "Admin" }));

// login: async (event) => {
//   event.preventDefault();
//   if (validateEmail() && validatePassword())
//     try {
//       const response = await axios.post("/api/auth/login", {
//         email,
//         password,
//       });
//       console.log(response.data.data);
//     } catch (error) {
//       console.error(error);
//     }
// },
