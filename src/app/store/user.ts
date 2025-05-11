import { create } from 'zustand';

const hardcodedUserid = 'user1';


interface UserStore {
  userCollection: userCollection;
  userState: {
    accessToken?: string;
    refreshToken?: string;
  };

  fetchDataBase: (userId: string) => void
  saveDataBase: (state: UserStore) => void;

  fetchLocalStorage: (userId: string) => void;
  saveLocalStorage: (state: UserStore) => void;
};

interface userCollection {
  userId: string;
  promotionEnd: number; // Timestamp in milliseconds
}

const useUserStore = create<UserStore>((set) => ({
  userCollection: {
    userId: hardcodedUserid,
    promotionEnd: parseInt(window.localStorage.getItem('promotionEnd') || '') || new Date().getTime() + 30 * 24 * 60 * 60 * 1000 , // Default to 30 days from now
  },

  userState: {
    accessToken: undefined,
    refreshToken: undefined,
  },

  // save to database, we use localStorage due to not db implememted
  fetchDataBase: (userId:string) => {
    const userCollection = window.localStorage.getItem('userCollection');
    if (userCollection) {
      const parsedData = JSON.parse(userCollection);
      set(() => ({userCollection: parsedData}));
    }
  },
  saveDataBase: (state: UserStore) => {
    window.localStorage.setItem('userCollection', JSON.stringify(state.userCollection)); // Save to localStorage
  },

  saveLocalStorage: (state: UserStore) => {
    window.localStorage.setItem('userState', JSON.stringify(state.userState)); // Save to localStorage
  },
  fetchLocalStorage: () => {
    const userState = window.localStorage.getItem('userState');
    if (userState) {
      const parsedData = JSON.parse(userState);
      set(() => ({userState: parsedData}));
    }
  },

}));

export default useUserStore;