import usePlatforms from "./usePlatform";

const usePlatforme = (id?: number) => {
  const { data: platforms } = usePlatforms();
  return platforms?.results.find((p) => p.id === id);
};

export default usePlatforme;
