import userStore from "@/app/_stores/UserStore";
export async function handelFollowingUser(follower: number) {
  const TIMEPERSECOUNDS = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
  const handlFollow = userStore.getState().setFollowing;
  const isFollow = userStore.getState().isFollwing;
  const isPending = userStore.getState().isPending;
  const follwersNumber = userStore.getState().followersNumber;
  const handelPending = userStore.getState().setIsPending;
  handelPending(true);
  await new Promise((res) => {
    setTimeout(() => {
      handlFollow();
      res("success");
    }, TIMEPERSECOUNDS * 1000);
  });
  handelPending(null);
  return follwersNumber;
}
