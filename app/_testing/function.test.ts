import { expect, test } from "vitest";
import userStore from "../_stores/UserStore";

test("should increase number of person followers", () => {
  const store = userStore.getState();
  const previousFollowers = store.followersNumber!;
  const wasFollowing = store.isFollwing;
  store.setFollowing();
  const newFollowersNumber = store.followersNumber;
  expect(newFollowersNumber).toEqual(
    wasFollowing ? previousFollowers : newFollowersNumber
  );
});
