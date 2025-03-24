import { create } from "zustand";
import { user } from "../_constants/user";
type PendingFollow = boolean | null;
interface UserStore {
  isFollwing: boolean;
  setFollowing: () => void;
  setIsPending: (val: PendingFollow) => void;
  followersNumber?: number;
  isPending: PendingFollow;
}
export const userStore = create<UserStore>((set, get) => ({
  isFollwing: false,
  followersNumber: user.followers,
  setFollowing() {
    user.followers++;
    set((s) => ({
      isFollwing: !s.isFollwing,
      followersNumber: s.followersNumber!++,
    }));
  },
  setIsPending(val) {
    set((s) => {
      return { isPending: val };
    });
  },

  isPending: null,
}));

export default userStore;
