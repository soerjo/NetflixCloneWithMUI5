import {
  ImageComp01,
  ImageComp02,
  ImageComp03,
  ImageComp04,
} from "../FeatureComp/CompPendukung";

export interface Ifeature {
  title: string;
  desc: string;
  imageSrc?: string;
}

export interface IfeatureList extends Ifeature {
  CompPendukung?: React.ReactNode;
}

export const features: IfeatureList[] = [
  {
    title: "Enjoy on your TV.",
    desc: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    CompPendukung: <ImageComp01 />,
  },
  {
    title: "Download your shows to watch offline.",
    desc: "Save your favorites easily and always have something to watch.",
    CompPendukung: <ImageComp02 />,
  },
  {
    title: "Watch everywhere.",
    desc: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    CompPendukung: <ImageComp03 />,
  },
  {
    title: "Create profiles for kids.",
    desc: "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
    CompPendukung: <ImageComp04 />,
  },
];
