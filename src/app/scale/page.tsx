import Hero from "@/components/hero";
import scaleImg from "public/scale.jpg";

const ScalePage = () => {
  return (
    <Hero
      imgData={scaleImg}
      imgAlt="steel factory background image"
      title="Scale your app to infinit"
    />
  );
};

export default ScalePage;
