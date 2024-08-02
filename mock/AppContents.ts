import { IP } from "@/constants/Networks";
import {
  AppContentListType,
  AppContentType,
} from "@/interfaces/ApplicationContents";
import { MockMovieListInterface } from "@/interfaces/MockMoviContent";

function getRandomImage() {
  return `http://${IP}/mock/apkIcon.png`;
}

function getRandomPackageName(index: number): string {
  return `com.package.random-${index}`;
}

function getRandomVersionName() {
  const LIST_VERSION_NAME = ["1.0.0", "1.0.1", "1.0.2", "2.0", "2.0.1", "2.2"];
  const RANDOM_INDEX = Math.floor(Math.random() * LIST_VERSION_NAME.length);
  let versionName = LIST_VERSION_NAME[RANDOM_INDEX];
  return versionName.trim();
}

const DATA = Array.from({ length: 4 }, (_, index) => ({
  id: `item-${index + 1}`,
  name: `Application ${index + 1}`,
  icon: getRandomImage(),
  packageName: getRandomPackageName(index + 1),
  versionName: getRandomVersionName(),
}));

export default DATA;
